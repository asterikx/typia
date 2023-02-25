import typia from "../../../../src";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TemplateConstant = _test_equals(
    "TemplateConstant",
    TemplateConstant.generate,
    (input: any, _exceptionable: boolean = true): input is TemplateConstant => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            ("prefix_A" === input.prefix ||
                "prefix_B" === input.prefix ||
                "prefix_C" === input.prefix) &&
            ("1_postfix" === input.postfix ||
                "3_postfix" === input.postfix ||
                "2_postfix" === input.postfix) &&
            ("the_1_value_with_label_A" === input.combined ||
                "the_1_value_with_label_B" === input.combined ||
                "the_1_value_with_label_C" === input.combined ||
                "the_3_value_with_label_A" === input.combined ||
                "the_3_value_with_label_B" === input.combined ||
                "the_3_value_with_label_C" === input.combined ||
                "the_2_value_with_label_A" === input.combined ||
                "the_2_value_with_label_B" === input.combined ||
                "the_2_value_with_label_C" === input.combined) &&
            (3 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        ["prefix", "postfix", "combined"].some(
                            (prop) => key === prop,
                        )
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    "object" === typeof elem &&
                    null !== elem &&
                    $io0(elem, true),
            )
        );
    },
);
