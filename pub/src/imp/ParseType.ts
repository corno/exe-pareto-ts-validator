import * as pt from "pareto-core-types"


import * as ts from "api-dynamic-typescript-parser"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as x from "../interface"

export type UnexpectedTokenData<ImplementationDetails> = {
    file: {
        relativePath: string,
        absolutePath: string,
    }
    token: {
        path: string,
        kindName: string,
        details: ImplementationDetails,
    }
    expected: null | string
}

export type Parse = <ImplementationDetails>(
    $: {
        tsConfigPath: ts.Path,
    },
    $i: {
        reportUnexpectedToken: ($: UnexpectedTokenData<ImplementationDetails>) => void,
        reportMissingToken: ($: {
            parentAnnotation: ImplementationDetails,
            path: string,
            kindNameOptions: string,
        }) => void,
        onError: ($: ts.TypeScriptParserError) => void
        onFile: ($: {
            path: string,
            data: x.TRoot<ImplementationDetails>
        }) => void
        onEnd: () => void
    },
    $d: {
        parseDynamic: ts.Parse<ImplementationDetails>
        doUntil: uglyStuff.DoUntil,
        lookAhead: uglyStuff.LookAhead,
        stringsNotEqual: (a: string, b: string) => boolean
    }
) => pt.AsyncNonValue