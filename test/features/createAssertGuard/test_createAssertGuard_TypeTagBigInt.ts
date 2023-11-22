import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertGuard_TypeTagBigInt = _test_assertGuard(
  "TypeTagBigInt",
)<TypeTagBigInt>(TypeTagBigInt)(typia.createAssertGuard<TypeTagBigInt>());