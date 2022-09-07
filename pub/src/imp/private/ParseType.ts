import * as pt from "pareto-core-types"


import * as ts from "api-dynamic-typescript-parser"
import * as uast from "api-untyped-ast"

import * as x from "../../interface"
import { DParse2Dependencies } from "../../interface/dependencies/x"

export type TUnexpectedTokenData = {
    readonly "file": {
        readonly "relativePath": string,
        readonly "absolutePath": string,
    }
    readonly "token": {
        readonly "path": string,
        readonly "kindName": string,
        readonly "details": uast.TDetails,
    }
    readonly "expected": null | string
}

export type XParse = (
    $: {
        tsConfigPath: ts.TPath,
    },
    $i: {
        reportUnexpectedToken: ($: TUnexpectedTokenData) => void,
        reportMissingToken: ($: {
            parentDetails: uast.TDetails,
            path: string,
            kindNameOptions: string,
        }) => void,
        onErrorX: ($: ts.TTypeScriptParserError) => void
        onFile: ($: {
            path: string,
            data: x.TRoot
        }) => void
        onEnd: () => void
    },
    $d: DParse2Dependencies
) => pt.AsyncNonValue