// #!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as p2s from "pareto-core-tostring"
import * as pw from "pareto-core-raw"
import * as pr from "pareto-core-resolve"
import * as pt from "pareto-core-types"

import * as dynAPI from "api-dynamic-typescript-parser"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as pp from "api-pareto-path"

import * as ap from "lib-analyse-path"


import { parse } from "../imp/parse"
import { _typescriptProject } from "../data/typescriptProject"
import { UnexpectedTokenData } from "./ParseType"

export type ParseError<ImplementationDetails> =
    | ["dynamic parser", dynAPI.TypeScriptParserError]
    | ["unexpected token", UnexpectedTokenData<ImplementationDetails>]
    | ["missing token", {
        parentAnnotation: ImplementationDetails
        path: string
        kindNameOptions: string
    }]
    | ["file path", {
        error: ap.PathError
        path: pt.Array<string> | null
    }]
    | ["pattern", {
        "unknown pattern": pt.Array<string>
    }]

export type ParseTypescriptProjectDependencies<ImplementationDetails> = {
    startAsync: ($: pt.AsyncNonValue) => void
    parseDynamic: dynAPI.Parse<ImplementationDetails>
    doUntil: uglyStuff.DoUntil
    lookAhead: uglyStuff.LookAhead
    stringsNotEqual: (a: string, b: string) => boolean
    parseFilePath: pp.ParseFilePath
}

export function parseTypescriptProject<ImplementationDetails>(
    $: {
        path: dynAPI.Path
    },
    $i: {
        onError: ($: ParseError<ImplementationDetails>) => void
    },
    $d: ParseTypescriptProjectDependencies<ImplementationDetails>
) {
    $d.startAsync(

        parse(
            {
                tsConfigPath: [$.path, "tsconfig.json"],
            },
            {
                onError: ($) => {

                    $i.onError(["dynamic parser", $])
                },
                reportMissingToken: ($) => {
                    $i.onError(["missing token", $])
                },
                reportUnexpectedToken: ($) => {
                    $i.onError(["unexpected token", $])
                },
                onFile: ($) => {
                    const path = $d.parseFilePath({
                        filePath: $.path
                    })
                    const result = ap.analysePath({
                        definition: _typescriptProject,
                        filePath: path,
                    })

                    switch (result[0]) {
                        case "error":
                            pl.cc(result[1], ($) => {
                                $i.onError(["file path", $])
                                //pl.logDebugMessage(`path error: ${$.error[0]} ${pl.isNotNull($.path) ? p2s.getArrayAsString($.path, "/") : ""}`)
                            })
                            break
                        case "success":
                            pl.cc(result[1], ($) => {
                                const known = pw.wrapRawDictionary<null>({
                                    "src/_globals.ts": null,
                                    "src/index.ts": null,
                                    "src/interface/**/*.ts": null,
                                    "src/imp/**/*.ts": null,
                                    "src/bin/*.ts": null,
                                    "src/data/*.ts": null,
                                })
                                const pattern = p2s.getArrayAsString($.pattern, "/")
                                pr.getEntry(
                                    known,
                                    pattern,
                                    ($) => {

                                    },
                                    () => {
                                        $i.onError(["pattern", { "unknown pattern": $.pattern }])
                                    }
                                )
                            })
                            break
                        default: pl.au(result[0])
                    }

                },
                onEnd: () => {

                }

            },
            {
                parseDynamic: $d.parseDynamic,
                doUntil: $d.doUntil,
                lookAhead: $d.lookAhead,
                stringsNotEqual: $d.stringsNotEqual
            }
        )
    )


}