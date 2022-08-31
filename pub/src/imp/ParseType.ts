import * as pt from "pareto-core-types"


import * as ts from "api-dynamic-typescript-parser"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as x from "../interface"


export type Parse = <ImplementationDetails>(
    $: {
        tsConfigPath: ts.Path,
    },
    $i: {
        reportUnexpectedToken: ($: {
            file: string,
            path: string,
            kindName: string,
            details: ImplementationDetails,
            expected: null | string
        }) => void,
        reportMissingToken: ($: {
            parentAnnotation: ImplementationDetails,
            path: string,
            kindNameOptions: string,
        }) => void,

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
    }
) => pt.AsyncNonValue