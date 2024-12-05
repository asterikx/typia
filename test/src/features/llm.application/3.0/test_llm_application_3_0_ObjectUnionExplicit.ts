import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_llm_application_3_0_ObjectUnionExplicit =
  _test_llm_application({
    model: "3.0",
    name: "ObjectUnionExplicit",
  })(typia.llm.application<ObjectUnionExplicitApplication, "3.0">());

interface ObjectUnionExplicitApplication {
  insert(p: { first: ObjectUnionExplicit }): Promise<void>;
  reduce(p: {
    first: ObjectUnionExplicit;
    second: ObjectUnionExplicit | null;
  }): Promise<ObjectUnionExplicit>;
  coalesce(p: {
    first: ObjectUnionExplicit | null;
    second: ObjectUnionExplicit | null;
    third?: ObjectUnionExplicit | null;
  }): Promise<ObjectUnionExplicit | null>;
}