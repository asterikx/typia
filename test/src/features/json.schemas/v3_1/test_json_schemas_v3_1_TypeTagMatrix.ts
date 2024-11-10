import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_json_schemas_v3_1_TypeTagMatrix = _test_json_schemas({
  version: "3.1",
  name: "TypeTagMatrix",
})(typia.json.schemas<[TypeTagMatrix], "3.1">());
