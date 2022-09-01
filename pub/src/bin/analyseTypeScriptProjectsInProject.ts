// #!/usr/bin/env node

import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as ts from "res-dynamic-typescript-parser"
import * as path from "res-pareto-path"
import * as uglyStuff from "res-pareto-ugly-stuff"

import * as exeLib from "lib-pareto-exe"

import { _typescriptProject } from "../data/typescriptProject"
import { parseTypescriptProjectsInProject } from "../imp"


pe.runProgram(($, $i, $d) => {
    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {
                pl.panic("args")
            },
            callback: ($) => {
                const projectPathAsString = $

                const projectPath = path.parseFilePath({
                    filePath: projectPathAsString
                })

                if (projectPath.extension !== null) {
                    pl.panic("unexpected extension")
                }

                parseTypescriptProjectsInProject(
                    {
                        projectName: projectPath.baseName,
                        //path: projectPath.directoryPath
                    },
                    {
                        reportUnexpectedToken: ($) => {
                            pl.logDebugMessage(`${$.file.absolutePath}:${$.token.details.location.line}:${$.token.details.location.column}: unexpected token '${$.token.kindName}', expected: ${$.expected}`)
                        },
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

            }
        }
    )
})
