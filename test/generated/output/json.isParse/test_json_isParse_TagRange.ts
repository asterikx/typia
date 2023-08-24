import typia from "../../../../src";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { TagRange } from "../../../structures/TagRange";

export const test_json_isParse_TagRange = _test_json_isParse(
    "TagRange",
)<TagRange>(TagRange)((input) =>
    ((input: any): typia.Primitive<TagRange> => {
        const is = (input: any): input is TagRange => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Number.isFinite(input.greater) &&
                Math.floor(input.greater) === input.greater &&
                -2147483648 <= input.greater &&
                input.greater <= 2147483647 &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Number.isFinite(input.greater_equal) &&
                Math.floor(input.greater_equal) === input.greater_equal &&
                -2147483648 <= input.greater_equal &&
                input.greater_equal <= 2147483647 &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Number.isFinite(input.less) &&
                Math.floor(input.less) === input.less &&
                -2147483648 <= input.less &&
                input.less <= 2147483647 &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Number.isFinite(input.less_equal) &&
                Math.floor(input.less_equal) === input.less_equal &&
                -2147483648 <= input.less_equal &&
                input.less_equal <= 2147483647 &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                Number.isFinite(input.greater_less) &&
                Math.floor(input.greater_less) === input.greater_less &&
                -2147483648 <= input.greater_less &&
                input.greater_less <= 2147483647 &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                Number.isFinite(input.greater_equal_less) &&
                Math.floor(input.greater_equal_less) ===
                    input.greater_equal_less &&
                -2147483648 <= input.greater_equal_less &&
                input.greater_equal_less <= 2147483647 &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                Number.isFinite(input.greater_less_equal) &&
                Math.floor(input.greater_less_equal) ===
                    input.greater_less_equal &&
                -2147483648 <= input.greater_less_equal &&
                input.greater_less_equal <= 2147483647 &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                Number.isFinite(input.greater_equal_less_equal) &&
                Math.floor(input.greater_equal_less_equal) ===
                    input.greater_equal_less_equal &&
                -2147483648 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 2147483647 &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                Number.isFinite(input.equal) &&
                Math.floor(input.equal) === input.equal &&
                -2147483648 <= input.equal &&
                input.equal <= 2147483647 &&
                10 <= input.equal &&
                10 >= input.equal;
            return "object" === typeof input && null !== input && $io0(input);
        };
        input = JSON.parse(input);
        return is(input) ? (input as any) : null;
    })(input),
);
