import typia from "../../../../src";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_FunctionalTuple = _test_assert(
    "FunctionalTuple",
    FunctionalTuple.generate,
    (input: any): FunctionalTuple => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalTuple => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "[unknown, unknown, unknown]",
                        value: input,
                    })) &&
                (input.length === 3 ||
                    $guard(true, {
                        path: _path + "",
                        expected: "[unknown, unknown, unknown]",
                        value: input,
                    })) &&
                ("function" === typeof input[0] ||
                    $guard(true, {
                        path: _path + "[0]",
                        expected: "unknown",
                        value: input[0],
                    })) &&
                ("function" === typeof input[1] ||
                    $guard(true, {
                        path: _path + "[1]",
                        expected: "unknown",
                        value: input[1],
                    })) &&
                ("function" === typeof input[2] ||
                    $guard(true, {
                        path: _path + "[2]",
                        expected: "unknown",
                        value: input[2],
                    }))
            );
        })(input, "$input", true);
        return input;
    },
    FunctionalTuple.SPOILERS,
);
