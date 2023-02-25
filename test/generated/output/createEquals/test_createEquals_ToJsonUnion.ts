import typia from "../../../../src";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ToJsonUnion = _test_equals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input: any, _exceptionable: boolean = true): input is ToJsonUnion => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name &&
            (3 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["id", "mobile", "name"].some((prop) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["toJSON"].some((prop) => key === prop)) return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["toJSON"].some((prop) => key === prop)) return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
            "function" === typeof input.toJSON &&
            (1 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (["toJSON"].some((prop) => key === prop)) return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
            (() => {
                if (undefined !== input.id)
                    return $io0(input, true && _exceptionable);
                return (() => {
                    if ($io1(input, false && _exceptionable))
                        return $io1(input, true && _exceptionable);
                    if ($io2(input, false && _exceptionable))
                        return $io2(input, true && _exceptionable);
                    if ($io3(input, false && _exceptionable))
                        return $io3(input, true && _exceptionable);
                    return false;
                })();
            })();
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any, _index1: number) =>
                    null !== elem &&
                    undefined !== elem &&
                    ("string" === typeof elem ||
                        ("number" === typeof elem && Number.isFinite(elem)) ||
                        ("object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem, true))),
            )
        );
    },
);
