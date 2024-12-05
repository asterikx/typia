import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_application_3_1_DynamicUndefined = _test_llm_application({
  model: "3.1",
  name: "DynamicUndefined",
})(typia.llm.application<DynamicUndefinedApplication, "3.1">());

interface DynamicUndefinedApplication {
  insert(p: { first: DynamicUndefined }): Promise<void>;
  reduce(p: {
    first: DynamicUndefined;
    second: DynamicUndefined | null;
  }): Promise<DynamicUndefined>;
  coalesce(p: {
    first: DynamicUndefined | null;
    second: DynamicUndefined | null;
    third?: DynamicUndefined | null;
  }): Promise<DynamicUndefined | null>;
}