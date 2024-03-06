import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuard } from "../../../internal/_test_assertGuard";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_createAssertGuardCustom_ClassClosure = _test_assertGuard(
  CustomGuardError,
)("ClassClosure")<ClassClosure>(ClassClosure)(
  (
    input: any,
    errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
      new CustomGuardError(p),
  ): asserts input is ClassClosure => {
    const __is = (input: any): input is ClassClosure => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        "something" === input.type &&
        "function" === typeof input.closure;
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
      ((
        input: any,
        _path: string,
        _exceptionable: boolean = true,
      ): input is ClassClosure => {
        const $guard = (typia.createAssertGuard as any).guard;
        const $ao0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          ("string" === typeof input.id ||
            $guard(
              _exceptionable,
              {
                path: _path + ".id",
                expected: "string",
                value: input.id,
              },
              errorFactory,
            )) &&
          ("something" === input.type ||
            $guard(
              _exceptionable,
              {
                path: _path + ".type",
                expected: '"something"',
                value: input.type,
              },
              errorFactory,
            )) &&
          ("function" === typeof input.closure ||
            $guard(
              _exceptionable,
              {
                path: _path + ".closure",
                expected: "unknown",
                value: input.closure,
              },
              errorFactory,
            ));
        return (
          ((("object" === typeof input && null !== input) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ClassClosure.Something",
                value: input,
              },
              errorFactory,
            )) &&
            $ao0(input, _path + "", true)) ||
          $guard(
            true,
            {
              path: _path + "",
              expected: "ClassClosure.Something",
              value: input,
            },
            errorFactory,
          )
        );
      })(input, "$input", true);
  },
);