import typia from "../../../../src";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_ObjectUnionImplicit = _test_validateParse(
    "ObjectUnionImplicit",
    ObjectUnionImplicit.generate,
    (input) =>
        ((
            input: string,
        ): typia.IValidation<typia.Primitive<ObjectUnionImplicit>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectUnionImplicit> => {
                const errors = [] as any[];
                const $report = (typia.validateParse as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectUnionImplicit => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.x &&
                                Number.isFinite(input.x)) ||
                                $report(_exceptionable, {
                                    path: _path + ".x",
                                    expected: "number",
                                    value: input.x,
                                }),
                            ("number" === typeof input.y &&
                                Number.isFinite(input.y)) ||
                                $report(_exceptionable, {
                                    path: _path + ".y",
                                    expected: "number",
                                    value: input.y,
                                }),
                            null === input.slope ||
                                undefined === input.slope ||
                                ("number" === typeof input.slope &&
                                    Number.isFinite(input.slope)) ||
                                $report(_exceptionable, {
                                    path: _path + ".slope",
                                    expected: "(null | number | undefined)",
                                    value: input.slope,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                                $vo0(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                                $vo0(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                }),
                            null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $report(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                }),
                            null === input.distance ||
                                undefined === input.distance ||
                                ("number" === typeof input.distance &&
                                    Number.isFinite(input.distance)) ||
                                $report(_exceptionable, {
                                    path: _path + ".distance",
                                    expected: "(null | number | undefined)",
                                    value: input.distance,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                                $vo0(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                                $vo0(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                }),
                            ((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p3,
                                })) &&
                                $vo0(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p3,
                                }),
                            null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $report(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                }),
                            null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height)) ||
                                $report(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "(null | number | undefined)",
                                    value: input.height,
                                }),
                            null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $report(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.p1 &&
                                null !== input.p1) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                })) &&
                                $vo0(
                                    input.p1,
                                    _path + ".p1",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p1",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p1,
                                }),
                            ((("object" === typeof input.p2 &&
                                null !== input.p2) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                })) &&
                                $vo0(
                                    input.p2,
                                    _path + ".p2",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p2",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p2,
                                }),
                            ((("object" === typeof input.p3 &&
                                null !== input.p3) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p3,
                                })) &&
                                $vo0(
                                    input.p3,
                                    _path + ".p3",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p3",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p3,
                                }),
                            ((("object" === typeof input.p4 &&
                                null !== input.p4) ||
                                $report(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p4,
                                })) &&
                                $vo0(
                                    input.p4,
                                    _path + ".p4",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".p4",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                    value: input.p4,
                                }),
                            null === input.width ||
                                undefined === input.width ||
                                ("number" === typeof input.width &&
                                    Number.isFinite(input.width)) ||
                                $report(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "(null | number | undefined)",
                                    value: input.width,
                                }),
                            null === input.height ||
                                undefined === input.height ||
                                ("number" === typeof input.height &&
                                    Number.isFinite(input.height)) ||
                                $report(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "(null | number | undefined)",
                                    value: input.height,
                                }),
                            null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $report(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.points) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionImplicit.IPoint>>",
                                    value: input.points,
                                })) &&
                                input.points
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionImplicit.IPoint>",
                                                    value: elem,
                                                })) &&
                                                $vo0(
                                                    elem,
                                                    _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".points[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectUnionImplicit.IPoint>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".points",
                                    expected:
                                        "Array<Resolve<ObjectUnionImplicit.IPoint>>",
                                    value: input.points,
                                }),
                            null === input.length ||
                                undefined === input.length ||
                                ("number" === typeof input.length &&
                                    Number.isFinite(input.length)) ||
                                $report(_exceptionable, {
                                    path: _path + ".length",
                                    expected: "(null | number | undefined)",
                                    value: input.length,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo5 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.outer &&
                                null !== input.outer) ||
                                $report(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPolyline>",
                                    value: input.outer,
                                })) &&
                                $vo4(
                                    input.outer,
                                    _path + ".outer",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".outer",
                                    expected:
                                        "Resolve<ObjectUnionImplicit.IPolyline>",
                                    value: input.outer,
                                }),
                            undefined === input.inner ||
                                ((Array.isArray(input.inner) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "(Array<Resolve<ObjectUnionImplicit.IPolyline>> | undefined)",
                                        value: input.inner,
                                    })) &&
                                    input.inner
                                        .map(
                                            (elem: any, _index3: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "Resolve<ObjectUnionImplicit.IPolyline>",
                                                        value: elem,
                                                    })) &&
                                                    $vo4(
                                                        elem,
                                                        _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "Resolve<ObjectUnionImplicit.IPolyline>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".inner",
                                    expected:
                                        "(Array<Resolve<ObjectUnionImplicit.IPolyline>> | undefined)",
                                    value: input.inner,
                                }),
                            null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $report(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo6 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            undefined === input.centroid ||
                                ((("object" === typeof input.centroid &&
                                    null !== input.centroid) ||
                                    $report(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "(Resolve<ObjectUnionImplicit.IPoint> | undefined)",
                                        value: input.centroid,
                                    })) &&
                                    $vo0(
                                        input.centroid,
                                        _path + ".centroid",
                                        true && _exceptionable,
                                    )) ||
                                $report(_exceptionable, {
                                    path: _path + ".centroid",
                                    expected:
                                        "(Resolve<ObjectUnionImplicit.IPoint> | undefined)",
                                    value: input.centroid,
                                }),
                            ("number" === typeof input.radius &&
                                Number.isFinite(input.radius)) ||
                                $report(_exceptionable, {
                                    path: _path + ".radius",
                                    expected: "number",
                                    value: input.radius,
                                }),
                            null === input.area ||
                                undefined === input.area ||
                                ("number" === typeof input.area &&
                                    Number.isFinite(input.area)) ||
                                $report(_exceptionable, {
                                    path: _path + ".area",
                                    expected: "(null | number | undefined)",
                                    value: input.area,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.x)
                                return $vo0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.p4)
                                return $vo3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.points)
                                return $vo4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.outer)
                                return $vo5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if (undefined !== input.radius)
                                return $vo6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return (() => {
                                if (undefined !== input.p3)
                                    return $vo2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $vo1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            })();
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)",
                                                value: elem,
                                            })) &&
                                            $vu0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<ObjectUnionImplicit.ICircle> | Resolve<ObjectUnionImplicit.ILine> | Resolve<ObjectUnionImplicit.IPoint> | Resolve<ObjectUnionImplicit.IPolygon> | Resolve<ObjectUnionImplicit.IPolyline> | Resolve<ObjectUnionImplicit.IRectangle> | Resolve<ObjectUnionImplicit.ITriangle>)>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            input = JSON.parse(input);
            const output = validate(input);
            return output;
        })(input),
    ObjectUnionImplicit.SPOILERS,
);
