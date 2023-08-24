import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagArray } from "../../../structures/TagArray";

export const test_random_TagArray = _test_random("TagArray")<TagArray>(
    TagArray,
)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<TagArray> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value: (generator?.array ?? $generator.array)(() =>
                    $ro1(_recursive, _recursive ? 1 + _depth : _depth),
                ),
            });
            const $ro1 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                items: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.([
                            {
                                name: "items",
                                value: "3",
                            },
                            {
                                name: "format",
                                value: "uuid",
                            },
                        ]) ?? (generator?.uuid ?? $generator.uuid)(),
                    3,
                ),
                minItems: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                name: "minItems",
                                value: "3",
                            },
                            {
                                name: "minimum",
                                value: "3",
                            },
                        ]) ?? (generator?.number ?? $generator.number)(3, 13),
                    (generator?.integer ?? $generator.integer)(3, 3),
                ),
                both: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.string?.([
                            {
                                name: "minItems",
                                value: "3",
                            },
                            {
                                name: "maxItems",
                                value: "7",
                            },
                            {
                                name: "format",
                                value: "uuid",
                            },
                        ]) ?? (generator?.uuid ?? $generator.uuid)(),
                    (generator?.integer ?? $generator.integer)(3, 7),
                ),
                equal: (generator?.array ?? $generator.array)(
                    () =>
                        (generator?.customs ?? $generator.customs)?.number?.([
                            {
                                name: "minItems",
                                value: "10",
                            },
                            {
                                name: "maxItems",
                                value: "10",
                            },
                            {
                                name: "minimum",
                                value: "10",
                            },
                            {
                                name: "maximum",
                                value: "10",
                            },
                        ]) ?? (generator?.number ?? $generator.number)(10, 10),
                    (generator?.integer ?? $generator.integer)(10, 10),
                ),
            });
            return $ro0();
        })(),
    assert: (input: any): TagArray => {
        const __is = (input: any): input is TagArray => {
            const $is_uuid = (typia.createAssert as any).is_uuid;
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                Array.isArray(input.items) &&
                3 === input.items.length &&
                input.items.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.minItems) &&
                3 <= input.minItems.length &&
                input.minItems.every(
                    (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        3 <= elem,
                ) &&
                Array.isArray(input.both) &&
                3 <= input.both.length &&
                7 >= input.both.length &&
                input.both.every(
                    (elem: any) => "string" === typeof elem && $is_uuid(elem),
                ) &&
                Array.isArray(input.equal) &&
                10 <= input.equal.length &&
                10 >= input.equal.length &&
                input.equal.every(
                    (elem: any) =>
                        "number" === typeof elem &&
                        Number.isFinite(elem) &&
                        10 <= elem &&
                        10 >= elem,
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is TagArray => {
                const $guard = (typia.createAssert as any).guard;
                const $is_uuid = (typia.createAssert as any).is_uuid;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ((Array.isArray(input.value) ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "Array<TagArray.Type>",
                            value: input.value,
                        })) &&
                        input.value.every(
                            (elem: any, _index1: number) =>
                                ((("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path: _path + ".value[" + _index1 + "]",
                                        expected: "TagArray.Type",
                                        value: elem,
                                    })) &&
                                    $ao1(
                                        elem,
                                        _path + ".value[" + _index1 + "]",
                                        true && _exceptionable,
                                    )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagArray.Type",
                                    value: elem,
                                }),
                        )) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagArray.Type>",
                        value: input.value,
                    });
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (((Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                        (3 === input.items.length ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array.length (@items 3)",
                                value: input.items,
                            })) &&
                        input.items.every(
                            (elem: any, _index2: number) =>
                                ("string" === typeof elem &&
                                    ($is_uuid(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".items[" +
                                                _index2 +
                                                "]",
                                            expected: "string (@format uuid)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index2 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected: "Array<string>",
                            value: input.items,
                        })) &&
                    (((Array.isArray(input.minItems) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                        (3 <= input.minItems.length ||
                            $guard(_exceptionable, {
                                path: _path + ".minItems",
                                expected: "Array.length (@minItems 3)",
                                value: input.minItems,
                            })) &&
                        input.minItems.every(
                            (elem: any, _index3: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    (3 <= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".minItems[" +
                                                _index3 +
                                                "]",
                                            expected: "number (@minimum 3)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".minItems[" + _index3 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems",
                            expected: "Array<number>",
                            value: input.minItems,
                        })) &&
                    (((Array.isArray(input.both) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                        (3 <= input.both.length ||
                            $guard(_exceptionable, {
                                path: _path + ".both",
                                expected: "Array.length (@minItems 3)",
                                value: input.both,
                            })) &&
                        (7 >= input.both.length ||
                            $guard(_exceptionable, {
                                path: _path + ".both",
                                expected: "Array.length (@maxItems 7)",
                                value: input.both,
                            })) &&
                        input.both.every(
                            (elem: any, _index4: number) =>
                                ("string" === typeof elem &&
                                    ($is_uuid(elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".both[" +
                                                _index4 +
                                                "]",
                                            expected: "string (@format uuid)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".both[" + _index4 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".both",
                            expected: "Array<string>",
                            value: input.both,
                        })) &&
                    (((Array.isArray(input.equal) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "Array<number>",
                            value: input.equal,
                        })) &&
                        (10 <= input.equal.length ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "Array.length (@minItems 10)",
                                value: input.equal,
                            })) &&
                        (10 >= input.equal.length ||
                            $guard(_exceptionable, {
                                path: _path + ".equal",
                                expected: "Array.length (@maxItems 10)",
                                value: input.equal,
                            })) &&
                        input.equal.every(
                            (elem: any, _index5: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem) &&
                                    (10 <= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".equal[" +
                                                _index5 +
                                                "]",
                                            expected: "number (@minimum 10)",
                                            value: elem,
                                        })) &&
                                    (10 >= elem ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".equal[" +
                                                _index5 +
                                                "]",
                                            expected: "number (@maximum 10)",
                                            value: elem,
                                        }))) ||
                                $guard(_exceptionable, {
                                    path: _path + ".equal[" + _index5 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".equal",
                            expected: "Array<number>",
                            value: input.equal,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "TagArray",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagArray",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
