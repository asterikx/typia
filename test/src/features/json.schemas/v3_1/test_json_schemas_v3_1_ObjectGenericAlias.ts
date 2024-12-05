import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_schemas_v3_1_ObjectGenericAlias = _test_json_schemas({
  version: "3.1",
  name: "ObjectGenericAlias",
})(typia.json.schemas<[ObjectGenericAlias], "3.1">());