import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ConstantEnumeration = _test_clone(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input: ConstantEnumeration): typia.Primitive<ConstantEnumeration> => {
        return Array.isArray(input)
            ? input.map((elem: any) => elem as any)
            : (input as any);
    },
);
