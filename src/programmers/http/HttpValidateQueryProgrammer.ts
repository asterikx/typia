import ts from "typescript";

import { StatementFactory } from "../../factories/StatementFactory";
import { TypeFactory } from "../../factories/TypeFactory";

import { IProgrammerProps } from "../../transformers/IProgrammerProps";
import { ITypiaContext } from "../../transformers/ITypiaContext";

import { FeatureProgrammer } from "../FeatureProgrammer";
import { ValidateProgrammer } from "../ValidateProgrammer";
import { FunctionImporter } from "../helpers/FunctionImporter";
import { HttpQueryProgrammer } from "./HttpQueryProgrammer";

export namespace HttpValidateQueryProgrammer {
  export interface IProps extends IProgrammerProps {
    allowOptional?: boolean;
  }

  export const decompose = (props: {
    context: ITypiaContext;
    modulo: ts.LeftHandSideExpression;
    importer: FunctionImporter;
    type: ts.Type;
    name: string | undefined;
    allowOptional: boolean;
  }): FeatureProgrammer.IDecomposed => {
    const validate = ValidateProgrammer.decompose({
      ...props,
      context: {
        ...props.context,
        options: {
          ...props.context.options,
          functional: false,
          numeric: false,
        },
      },
      config: {
        equals: false,
      },
    });
    const decode = HttpQueryProgrammer.decompose(props);
    return {
      functions: {
        ...validate.functions,
        ...decode.functions,
      },
      statements: [
        ...validate.statements,
        StatementFactory.constant("__validate", validate.arrow),
        StatementFactory.constant("__decode", decode.arrow),
      ],
      arrow: ts.factory.createArrowFunction(
        undefined,
        undefined,
        decode.arrow.parameters,
        ts.factory.createTypeReferenceNode("typia.IValidation", [
          decode.arrow.type ?? TypeFactory.keyword("any"),
        ]),
        undefined,
        ts.factory.createCallExpression(
          ts.factory.createIdentifier("__validate"),
          undefined,
          [
            ts.factory.createCallExpression(
              ts.factory.createIdentifier("__decode"),
              undefined,
              [ts.factory.createIdentifier("input")],
            ),
          ],
        ),
      ),
    };
  };

  export const write = (props: IProps): ts.CallExpression => {
    const importer: FunctionImporter = new FunctionImporter(
      props.modulo.getText(),
    );
    const result: FeatureProgrammer.IDecomposed = decompose({
      ...props,
      importer,
      allowOptional: !!props.allowOptional,
    });
    return FeatureProgrammer.writeDecomposed({
      modulo: props.modulo,
      importer,
      result,
    });
  };
}
