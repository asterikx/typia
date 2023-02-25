import typia from "../../../../src";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";
import { _test_is } from "../internal/_test_is";

export const test_createIs_FunctionalProperty = _test_is(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (input: any): input is FunctionalProperty => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.name &&
            "function" === typeof input.closure;
        return "object" === typeof input && null !== input && $io0(input);
    },
    FunctionalProperty.SPOILERS,
);
