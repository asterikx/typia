import { Metadata } from "../../../schemas/metadata/Metadata";
import { MetadataAlias } from "../../../schemas/metadata/MetadataAlias";

import { ArrayUtil } from "../../../utils/ArrayUtil";

import { IMetadataIteratorProps } from "./IMetadataIteratorProps";
import { explore_metadata } from "./explore_metadata";

export const emplace_metadata_alias = (
  props: IMetadataIteratorProps,
): MetadataAlias => {
  // CHECK EXISTENCE
  const [alias, newbie, closure] = props.collection.emplaceAlias(
    props.checker,
    props.type,
    props.type.aliasSymbol!,
  );
  ArrayUtil.add(alias.nullables, props.metadata.nullable);
  if (newbie === false) return alias;

  // CONSTRUCT VALUE TYPE
  const value: Metadata = explore_metadata({
    ...props,
    explore: {
      ...props.explore,
      escaped: false,
      aliased: true,
    },
  });
  closure(value);
  return alias;
};
