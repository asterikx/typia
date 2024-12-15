import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_applicationOfValidate_chatgpt_TypeTagFormat =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "TypeTagFormat",
    factory: TypeTagFormat,
  })(typia.llm.applicationOfValidate<TypeTagFormatApplication, "chatgpt">());

interface TypeTagFormatApplication {
  insert(p: { first: TypeTagFormat }): Promise<void>;
  reduce(p: {
    first: TypeTagFormat;
    second: TypeTagFormat | null;
  }): Promise<TypeTagFormat>;
  coalesce(p: {
    first: TypeTagFormat | null;
    second: TypeTagFormat | null;
    third?: TypeTagFormat | null;
  }): Promise<TypeTagFormat | null>;
}