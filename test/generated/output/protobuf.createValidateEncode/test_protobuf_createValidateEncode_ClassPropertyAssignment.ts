import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_validateEncode_ClassPropertyAssignment =
    _test_protobuf_validateEncode<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )({
        validateEncode: (
            input: ClassPropertyAssignment,
        ): typia.IValidation<Uint8Array> => {
            const validate = (
                input: any,
            ): typia.IValidation<ClassPropertyAssignment> => {
                const errors = [] as any[];
                const __is = (input: any): input is ClassPropertyAssignment => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "assignment" === input.note &&
                        false === input.editable &&
                        "boolean" === typeof input.incremental;
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ClassPropertyAssignment => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.id &&
                                    Number.isFinite(input.id)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".id",
                                        expected: "number",
                                        value: input.id,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                                "assignment" === input.note ||
                                    $report(_exceptionable, {
                                        path: _path + ".note",
                                        expected: '"assignment"',
                                        value: input.note,
                                    }),
                                false === input.editable ||
                                    $report(_exceptionable, {
                                        path: _path + ".editable",
                                        expected: "false",
                                        value: input.editable,
                                    }),
                                "boolean" === typeof input.incremental ||
                                    $report(_exceptionable, {
                                        path: _path + ".incremental",
                                        expected: "boolean",
                                        value: input.incremental,
                                    }),
                            ].every((flag: boolean) => flag);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ClassPropertyAssignment",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ClassPropertyAssignment",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const encode = (input: ClassPropertyAssignment): Uint8Array => {
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "id";
                        writer.uint32(9);
                        writer.double(input.id);
                        // property "name";
                        writer.uint32(18);
                        writer.string(input.name);
                        // property "note";
                        writer.uint32(26);
                        writer.string(input.note);
                        // property "editable";
                        writer.uint32(32);
                        writer.bool(input.editable);
                        // property "incremental";
                        writer.uint32(40);
                        writer.bool(input.incremental);
                    };
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
        },
        message:
            'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n    required double id = 1;\n    required string name = 2;\n    required string note = 3;\n    required bool editable = 4;\n    required bool incremental = 5;\n}',
    });