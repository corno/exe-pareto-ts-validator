// #!/usr/bin/env node

import * as pa from "pareto-core-async"
import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as fs from "res-pareto-filesystem"
import * as ts from "res-dynamic-typescript-parser"
import * as path from "res-pareto-path"
import * as uglyStuff from "res-pareto-ugly-stuff"


import * as exeLib from "lib-pareto-exe"

import { _typescriptProject } from "../data/typescriptProject"
import { parseTypescriptProjectsInProject } from "../imp/processTypescriptProjectsInProject"

pe.runProgram(($, $i, $d) => {
    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {
                pl.panic("args")
            },
            callback: ($) => {
                const contextPath = $

                $d.startAsync(
                    pa.processValue(

                        fs.readDirectory({
                            path: contextPath
                        }),
                        ($) => {
                            switch ($[0]) {
                                case "error":
                                    pl.cc($[1], ($) => {
                                        pl.logDebugMessage("READ DIR ERROR")
                                    })
                                    break
                                case "success":
                                    pl.cc($[1], ($) => {
                                        $.forEach((a, b) => a > b, ($, key) => {

                                            parseTypescriptProjectsInProject(
                                                {
                                                    projectName: key,
                                                    path: $.path
                                                },
                                                {
                                                    reportUnexpectedToken: ($) => {
                                                        pl.logDebugMessage(`${$.file.absolutePath}:${$.token.details.location.line}:${$.token.details.location.column}: unexpected token '${$.token.kindName}', expected: ${$.expected}`)
                                                    }
                                                },
                                                {
                                                    parseDynamic: ts.parse,
                                                    startAsync: $d.startAsync,
                                                    doUntil: uglyStuff.doUntil,
                                                    lookAhead: uglyStuff.lookAhead,
                                                    stringsNotEqual: (a, b) => a !== b,
                                                    parseFilePath: path.parseFilePath,
                                                }
                                            )
                                        })
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        }
                    )
                )

            }
        }
    )
})
