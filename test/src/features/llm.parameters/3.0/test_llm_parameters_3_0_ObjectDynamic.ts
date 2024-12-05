import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_llm_parameters_3_0_ObjectDynamic = _test_llm_parameters({
  model: "3.0",
  name: "ObjectDynamic",
})(typia.llm.parameters<ObjectDynamicParameters, "3.0">());

interface ObjectDynamicParameters {
  regular: ObjectDynamic;
  nullable: ObjectDynamic | null;
  optional: ObjectDynamic | undefined;
  faint: ObjectDynamic | null | undefined;
  array: Array<ObjectDynamic>;
}