import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_validatePrune_DynamicUnion =
    _test_misc_validatePrune<DynamicUnion>(DynamicUnion)(
        typia.misc.createValidatePrune<DynamicUnion>(),
    );