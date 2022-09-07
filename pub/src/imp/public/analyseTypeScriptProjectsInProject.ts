#!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"


import * as fs from "api-pareto-filesystem"

import * as main from "api-pareto-main"
import * as path from "api-pareto-path"
import * as uglyStuff from "api-pareto-ugly-stuff"

import * as exeLib from "lib-pareto-exe"
import * as ap from "lib-analyse-path"


import { parseTypescriptProjectsInProject } from "./processTypescriptProjectsInProject"
import { createParseErrorMessage } from "./createParseErrorMessage"
import { getType } from "../private/getType"

import { DCleanupDependencies } from "../../modules/cleanup"
import { DTS2ParetoDependencies } from "../../modules/pareto"
import { DParseTypescriptProjectDependencies, DSerializeTypeScriptSubset } from "../../interface/dependencies/x"

export function analyseTypeScriptProjectsInProject(
    $: {
        arguments: main.Arguments
        typescriptProject: ap.TDirectory,
    },
    $d: {
        x: {
            parseDependencies: DParseTypescriptProjectDependencies
            cleanupDependencies: DCleanupDependencies
            ts2ParetoDependencies: DTS2ParetoDependencies
            serialize: DSerializeTypeScriptSubset
        },
        path: {
            basename: path.Basename
            dirname: path.Dirname
            //splitString: uglyStuff.SplitString
        },
        substr: uglyStuff.FSubStr
    },
    $s: pa.StartAsync
): void {
    const config = $
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
                        typescriptProject: config.typescriptProject,
                        projectName: $d.path.basename(projectPath),
                        contextDirectory: $d.path.dirname(projectPath),
                        type: getType(
                            $d.path.basename(projectPath),
                            {
                                first3Characters: ($) => $d.substr({
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
                    $d.x,
                    $s,
                )

            }
        }
    )
}
