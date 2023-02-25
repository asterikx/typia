import typia from "../../../../src";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TupleRestAtomic = _test_isClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: any): typia.Primitive<TupleRestAtomic> | null => {
            const is = (input: any): input is TupleRestAtomic => {
                return (
                    Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Number.isFinite(input[1]) &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every((elem: any) => "string" === typeof elem)
                );
            };
            const clone = (
                input: TupleRestAtomic,
            ): typia.Primitive<TupleRestAtomic> => {
                return Array.isArray(input) &&
                    "boolean" === typeof input[0] &&
                    "number" === typeof input[1] &&
                    Array.isArray(input.slice(2)) &&
                    input
                        .slice(2)
                        .every((elem: any) => "string" === typeof elem)
                    ? ([
                          input[0] as any,
                          input[1] as any,
                          ...(Array.isArray(input.slice(2))
                              ? input.slice(2).map((elem: any) => elem as any)
                              : (input.slice(2) as any)),
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    TupleRestAtomic.SPOILERS,
);
