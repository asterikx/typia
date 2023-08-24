import ts from "typescript";

export interface ICheckEntry {
    expression: ts.Expression | null;
    tags: ICheckEntry.ITag[];
}
export namespace ICheckEntry {
    export interface ITag {
        expected: string;
        expression: ts.Expression;
    }
}
