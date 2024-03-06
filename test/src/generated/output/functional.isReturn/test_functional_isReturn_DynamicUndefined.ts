import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_functional_isReturn_DynamicUndefined =
  _test_functional_isReturn("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      (input: DynamicUndefined): DynamicUndefined | null => {
        const result = p(input);
        return ((input: any): input is DynamicUndefined => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return null !== value && undefined === value;
            });
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        })(result)
          ? result
          : null;
      },
  );