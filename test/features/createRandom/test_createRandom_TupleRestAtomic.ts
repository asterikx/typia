import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_random_TupleRestAtomic = _test_random<TupleRestAtomic>(
    TupleRestAtomic,
)({
    random: typia.createRandom<TupleRestAtomic>(),
    assert: typia.createAssert<TupleRestAtomic>(),
});