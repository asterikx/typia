import typia from "typia";

import { ObjectRecursive } from "../../../structures/pure/ObjectRecursive";
import { createAssertAjvBenchmarkProgram } from "./createAssertAjvBenchmarkProgram";

createAssertAjvBenchmarkProgram(typia.json.schemas<[ObjectRecursive], "3.0">());
