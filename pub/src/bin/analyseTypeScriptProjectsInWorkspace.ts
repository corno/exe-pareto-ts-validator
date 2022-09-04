#!/usr/bin/env node

import * as pa from "pareto-core-async"
import * as pe from "pareto-core-exe"
import * as pl from "pareto-core-lib"

import * as fs from "res-pareto-filesystem"
import * as collation from "res-pareto-collation"
import * as uglyStuff from "res-pareto-ugly-stuff"


import * as exeLib from "lib-pareto-exe"

import { _typescriptProject } from "../data/typescriptProject"
import { parseTypescriptProjectsInProject, TProjectType } from "../imp/processTypescriptProjectsInProject"
import { createParseErrorMessage } from "../imp/createParseErrorMessage"
import { getType } from "../imp/getType"
import { cleanupDependencies } from "./cleanupDependencies"
import { parseDependencies } from "./parseDependencies"


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
                                        $.forEach((a, b) => collation.localeIsYinBeforeYang({ yin: b, yang: a }), ($, key) => {

                                            parseTypescriptProjectsInProject(
                                                {
                                                    projectName: key,
                                                    contextDirectory: contextPath,
                                                    type: getType(
                                                        key,
                                                        {
                                                            substr: uglyStuff.substr,
                                                        }
                                                    ),
                                                    //path: $.path,
                                                },
                                                {
                                                    onError: ($) => {

                                                        pl.logDebugMessage(createParseErrorMessage($))
                                                    }
                                                },
                                                {
                                                    parseDependencies: parseDependencies,
                                                    createWriteStream: fs.createWriteStream,
                                                    cleanupDependencies: cleanupDependencies,
                                                },

                                                $d.startAsync,
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
