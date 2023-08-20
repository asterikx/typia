import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_misc_assertPrune_ArrayUnion =
    _test_misc_assertPrune<ArrayUnion>(ArrayUnion)(
        typia.misc.createAssertPrune<ArrayUnion>(),
    );