import typia from "../../../src";
import { _test_protobuf_encode } from "../../internal/_test_protobuf_encode";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_protobuf_encode_DynamicConstant =
    _test_protobuf_encode<DynamicConstant>(DynamicConstant)({
        encode: typia.protobuf.createEncode<DynamicConstant>(),
        message: typia.protobuf.message<DynamicConstant>(),
    });