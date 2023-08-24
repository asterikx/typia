import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagStep } from "../../../structures/TagStep";

export const test_is_TagStep = _test_is("TagStep")<TagStep>(TagStep)(
    (input: any): input is TagStep => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "number" === typeof input.exclusiveMinimum &&
            Number.isFinite(input.exclusiveMinimum) &&
            0 === (input.exclusiveMinimum % 5) - 3 &&
            3 < input.exclusiveMinimum &&
            "number" === typeof input.minimum &&
            Number.isFinite(input.minimum) &&
            0 === (input.minimum % 5) - 3 &&
            3 <= input.minimum &&
            "number" === typeof input.range &&
            Number.isFinite(input.range) &&
            0 === (input.range % 5) - 0 &&
            0 < input.range &&
            100 > input.range &&
            "number" === typeof input.multipleOf &&
            Number.isFinite(input.multipleOf) &&
            0 === input.multipleOf % 5 &&
            3 <= input.multipleOf &&
            99 >= input.multipleOf;
        return "object" === typeof input && null !== input && $io0(input);
    },
);
