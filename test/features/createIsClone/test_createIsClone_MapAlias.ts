import TSON from "../../../src";
import { MapAlias } from "../../structures/MapAlias";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_MapAlias = _test_isClone(
    "MapAlias",
    MapAlias.generate,
    TSON.createIsClone<MapAlias>(),
    MapAlias.SPOILERS,
);