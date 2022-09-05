import * as pt from "pareto-core-types"


import * as ts from "api-dynamic-typescript-parser"
import * as diff from "api-pareto-diff"
import * as uast from "api-untyped-ast"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as x from "../../interface"

export type DParse2Dependencies = {
    parseDynamic: ts.XParse
    doUntil: uglyStuff.XDoUntil,
    lookAhead: uglyStuff.XLookAhead,
    stringsAreEqual: diff.StringsAreEqual
}

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