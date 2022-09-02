#!/usr/bin/env node

import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as ts from "res-dynamic-typescript-parser"
import * as path from "res-pareto-path"
import * as uglyStuff from "res-pareto-ugly-stuff"

import * as exeLib from "lib-pareto-exe"

import { _typescriptProject } from "../data/typescriptProject"
import { parseTypescriptProjectsInProject } from "../imp"
import { createParseErrorMessage } from "../imp/createParseErrorMessage"
import { getType } from "../imp/getType"


pe.runProgram(($, $i, $d) => {
    exeLib.getSingleArgument(
        $.arguments,
        {
            error: () => {
                pl.panic("args")
            },
            callback: ($) => {
                const projectPath = $

                parseTypescriptProjectsInProject(
                    {
                        projectName: path.basename(projectPath),
                        contextDirectory: path.dirname(projectPath),
                        type: getType(
                            path.basename(projectPath),
                            {
                                substr: uglyStuff.substr
                            }
                        ),
                    },
                    {
                        onError: ($) => {
                            pl.logDebugMessage(createParseErrorMessage($))
                        },
                    },
                    {
                        parseDependencies: {
                            parseDynamic: ts.parse,
                            startAsync: $d.startAsync,
                            doUntil: uglyStuff.doUntil,
                            lookAhead: uglyStuff.lookAhead,
                            stringsNotEqual: (a, b) => a !== b,
                            parseFilePath: path.parseFilePath,
                        },
                    }
                )

            }
        }
    )
})
