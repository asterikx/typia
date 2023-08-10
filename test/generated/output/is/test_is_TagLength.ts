import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { TagLength } from "../../../structures/TagLength";

export const test_is_TagLength = _test_is<TagLength>(TagLength)((input) =>
    ((input: any): input is IPointer<Array<TagLength.Type>> => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            "string" === typeof input.fixed &&
            5 === input.fixed.length &&
            "string" === typeof input.minimum &&
            3 <= input.minimum.length &&
            "string" === typeof input.maximum &&
            7 >= input.maximum.length &&
            "string" === typeof input.minimum_and_maximum &&
            3 <= input.minimum_and_maximum.length &&
            7 >= input.minimum_and_maximum.length;
        return "object" === typeof input && null !== input && $io0(input);
    })(input),
);
