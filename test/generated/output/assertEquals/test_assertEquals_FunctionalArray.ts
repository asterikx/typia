import typia from "../../../../src";
import { FunctionalArray } from "../../../structures/FunctionalArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalArray = _test_assertEquals(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) =>
        ((input: any): FunctionalArray => {
            const $guard = (typia.assertEquals as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is FunctionalArray => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<unknown>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "function" === typeof elem ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "unknown",
                                value: elem,
                            }),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
);
