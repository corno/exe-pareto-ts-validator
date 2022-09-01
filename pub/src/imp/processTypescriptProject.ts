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

export function parseTypescriptProject<ImplementationDetails>(
    $: {
        projectName: string
        partName: string
        path: dynAPI.Path
    },
    $i: {
        reportUnexpectedToken: ($: UnexpectedTokenData<ImplementationDetails>) => void
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
        parseDynamic: dynAPI.Parse<ImplementationDetails>
        doUntil: uglyStuff.DoUntil
        lookAhead: uglyStuff.LookAhead
        stringsNotEqual: (a: string, b: string) => boolean
        parseFilePath: pp.ParseFilePath
    }
) {
    const projectName = $.projectName
    const partName = $.partName
    //pl.logDebugMessage($.path)
    $d.startAsync(

        parse(
            {
                tsConfigPath: [$.path, "tsconfig.json"],
            },
            {
                onError: ($) => {

                    pl.logDebugMessage(`${projectName}/${partName}: parser error: ${$[0]}`)
                },
                reportMissingToken: () => {
                    pl.logDebugMessage("missing token")
                },
                reportUnexpectedToken: $i.reportUnexpectedToken,
                onFile: ($) => {
                    //pl.logDebugMessage(`FILE: ${$.path}`)
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
                                pl.logDebugMessage(`path error: ${$.error[0]} ${pl.isNotNull($.path) ? p2s.getArrayAsString($.path, "/") : ""}`)
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
                                        pl.logDebugMessage(`Unknown pattern: ${pattern}`)
                                    }
                                )
                                //pl.logDebugMessage(`path success: ${p2s.getArrayAsString($.pattern, "/")}`)
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