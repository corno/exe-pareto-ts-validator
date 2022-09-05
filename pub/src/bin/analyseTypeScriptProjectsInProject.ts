#!/usr/bin/env node

import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as ts from "res-dynamic-typescript-parser"
import * as path from "res-pareto-path"
import * as uglyStuff from "res-pareto-ugly-stuff"
import * as diff from "res-pareto-diff"
import * as fs from "res-pareto-filesystem"

import * as exeLib from "lib-pareto-exe"

import { _typescriptProject } from "../data/typescriptProject"
import { parseTypescriptProjectsInProject } from "../imp"
import { createParseErrorMessage } from "../imp/public/createParseErrorMessage"
import { getType } from "../imp/private/getType"
import { cleanupDependencies } from "../dependencies/cleanupDependencies"
import { parseDependencies } from "../dependencies/parseDependencies"
import { cleanup } from "../imp/modules/cleanup/imp/cleanup"
import { ts2ParetoDependencies } from "../dependencies/ts2paretoDependencies"


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
                                first3Characters: ($) => uglyStuff.substr({
                                    value: $,
                                    begin: 0,
                                    length: 3,
                                })
                            }
                        ),
                    },
                    {
                        onError: ($) => {
                            pl.logDebugMessage(createParseErrorMessage($))
                        },
                    },
                    {
                        parseDependencies: parseDependencies,
                        createWriteStream: fs.createWriteStream,
                        cleanupDependencies: cleanupDependencies,
                        ts2ParetoDependencies: ts2ParetoDependencies,
                        
                    },
                    $d.startAsync,
                )

            }
        }
    )
})
