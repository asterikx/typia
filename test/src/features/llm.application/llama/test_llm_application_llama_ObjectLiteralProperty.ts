import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_llm_application_llama_ObjectLiteralProperty =
  _test_llm_application({
    model: "llama",
    name: "ObjectLiteralProperty",
  })(typia.llm.application<ObjectLiteralPropertyApplication, "llama">());

interface ObjectLiteralPropertyApplication {
  insert(p: { first: ObjectLiteralProperty }): Promise<void>;
  reduce(p: {
    first: ObjectLiteralProperty;
    second: ObjectLiteralProperty | null;
  }): Promise<ObjectLiteralProperty>;
  coalesce(p: {
    first: ObjectLiteralProperty | null;
    second: ObjectLiteralProperty | null;
    third?: ObjectLiteralProperty | null;
  }): Promise<ObjectLiteralProperty | null>;
}