import * as pt from "pareto-core-types"


import * as ts from "api-dynamic-typescript-parser"
import * as uast from "api-untyped-ast"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as x from "../interface"

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
    $d: {
        parseDynamic: ts.XParse
        doUntil: uglyStuff.DoUntil,
        lookAhead: uglyStuff.LookAhead,
        stringsAreEqual: (a: string, b: string) => boolean
    }
) => pt.AsyncNonValue