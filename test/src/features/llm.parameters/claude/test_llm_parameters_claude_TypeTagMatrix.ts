import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_parameters_claude_TypeTagMatrix = _test_llm_parameters({
  model: "claude",
  name: "TypeTagMatrix",
})(typia.llm.parameters<TypeTagMatrixParameters, "claude">());

interface TypeTagMatrixParameters {
  regular: TypeTagMatrix;
  nullable: TypeTagMatrix | null;
  optional: TypeTagMatrix | undefined;
  faint: TypeTagMatrix | null | undefined;
  array: Array<TypeTagMatrix>;
}