import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TagTuple } from "../../structures/TagTuple";

export const test_misc_assertClone_TagTuple = _test_misc_assertClone<TagTuple>(
    TagTuple,
)(typia.misc.createAssertClone<TagTuple>());