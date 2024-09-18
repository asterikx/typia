import ts from "typescript";

import { Metadata } from "../schemas/metadata/Metadata";

import { AtomicPredicator } from "../programmers/helpers/AtomicPredicator";

import { TransformerError } from "../transformers/TransformerError";

import { MetadataCollection } from "./MetadataCollection";
import { MetadataFactory } from "./MetadataFactory";

export namespace JsonMetadataFactory {
  export interface IProps {
    method: string;
    checker: ts.TypeChecker;
    transformer?: ts.TransformationContext;
    type: ts.Type;
  }

  export const analyze = (props: IProps): [MetadataCollection, Metadata] => {
    const collection = new MetadataCollection();
    const result = MetadataFactory.analyze({
      checker: props.checker,
      transformer: props.transformer,
      options: {
        escape: true,
        constant: true,
        absorb: true,
        validate,
      },
      collection,
      type: props.type,
    });
    if (result.success === false)
      throw TransformerError.from(props.method)(result.errors);
    return [collection, result.data];
  };

  export const validate = (meta: Metadata) => {
    const output: string[] = [];
    if (
      meta.atomics.some((a) => a.type === "bigint") ||
      meta.constants.some((c) => c.type === "bigint")
    )
      output.push("JSON does not support bigint type.");
    if (
      meta.tuples.some((t) =>
        t.type.elements.some((e) => e.isRequired() === false),
      ) ||
      meta.arrays.some((a) => a.type.value.isRequired() === false)
    )
      output.push("JSON does not support undefined type in array.");
    if (meta.maps.length) output.push("JSON does not support Map type.");
    if (meta.sets.length) output.push("JSON does not support Set type.");
    for (const native of meta.natives)
      if (AtomicPredicator.native(native) === false && native !== "Date")
        output.push(`JSON does not support ${native} type.`);
    return output;
  };
}
