import typia from "../../../../src";
import { AtomicSimple } from "../../../structures/AtomicSimple";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_AtomicSimple = _test_stringify(
    "AtomicSimple",
    AtomicSimple.generate,
    (input) =>
        ((input: AtomicSimple): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
        })(input),
);
