import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_protobuf_encode_ObjectHierarchical =
    _test_protobuf_encode<ObjectHierarchical>(ObjectHierarchical)({
        encode: (input) => typia.protobuf.encode<ObjectHierarchical>(input),
        message: typia.protobuf.message<ObjectHierarchical>(),
    });