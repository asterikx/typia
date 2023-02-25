import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_AtomicUnion = _test_isClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<AtomicUnion> | null => {
            const is = (input: any): input is AtomicUnion => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem,
                    )
                );
            };
            const clone = (
                input: AtomicUnion,
            ): typia.Primitive<AtomicUnion> => {
                return Array.isArray(input)
                    ? input.map((elem: any) => elem as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    AtomicUnion.SPOILERS,
);
