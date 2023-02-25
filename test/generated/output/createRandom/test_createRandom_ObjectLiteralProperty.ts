import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_ObjectLiteralProperty = _test_random(
    "ObjectLiteralProperty",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<ObjectLiteralProperty.ISomething> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            "something-interesting-do-you-want?": (
                generator.string ?? $generator.string
            )(),
            "or-something-crazy-do-you-want?": (
                generator.string ?? $generator.string
            )(),
        });
        return $ro0();
    },
    (input: any): ObjectLiteralProperty.ISomething => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectLiteralProperty.ISomething => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" ===
                    typeof input["something-interesting-do-you-want?"] ||
                    $guard(_exceptionable, {
                        path: _path + '["something-interesting-do-you-want?"]',
                        expected: "string",
                        value: input["something-interesting-do-you-want?"],
                    })) &&
                ("string" === typeof input["or-something-crazy-do-you-want?"] ||
                    $guard(_exceptionable, {
                        path: _path + '["or-something-crazy-do-you-want?"]',
                        expected: "string",
                        value: input["or-something-crazy-do-you-want?"],
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectLiteralProperty.ISomething>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
