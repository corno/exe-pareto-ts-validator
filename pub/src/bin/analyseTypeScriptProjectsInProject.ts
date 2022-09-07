#!/usr/bin/env node

import * as pe from "pareto-core-exe"

import { parseDependencies } from "../dependencies/parseDependencies"
import * as fs from "res-pareto-filesystem"
import * as path from "res-pareto-path"
import * as uglyStuff from "res-pareto-ugly-stuff"
import { cleanupDependencies } from "../modules/cleanup/dependencies/cleanupDependencies"
import { ts2ParetoDependencies } from "../modules/pareto/dependencies/ts2paretoDependencies"
import { analyseTypeScriptProjectsInProject } from "../imp"
import { _typescriptProject } from "../data/typescriptProject"



pe.runProgram(($, $i, $d) => {
    analyseTypeScriptProjectsInProject(
        {
            arguments: $.arguments,
            typescriptProject: _typescriptProject,
        },
        {
            x: {
                parseDependencies: parseDependencies,
                cleanupDependencies: cleanupDependencies,
                ts2ParetoDependencies: ts2ParetoDependencies,
                serialize: {
                    createWriteStream: fs.createWriteStream,
                    forEach: ($, $i) => {
                        let first = true
                        let empty = true
                        $.forEach(($) => {
                            if (empty) {
                                $i.onBegin()
                            }
                            empty = false
                            $i.onEntry({
                                isFirst: first,
                                entry: $
                            })
                            first = false
                        })
                        if (!empty) {
                            $i.onEnd()
                        }
                    }
                }
            },
            path: {
                basename: path.basename,
                dirname: path.dirname,
                //splitString: uglyStuff.SplitString
            },
            substr: uglyStuff.substr
        },
        $d.startAsync,
    )
})
