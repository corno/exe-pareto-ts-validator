#!/usr/bin/env node

import * as pe from "pareto-core-exe"

import { _typescriptProject } from "../data/typescriptProject"
import { analyseTypeScriptProjectsInWorkspace } from "../imp"

import { parseDependencies } from "../modules/cleanup/dependencies/parseDependencies"
import * as fs from "res-pareto-filesystem"
import * as uglyStuff from "res-pareto-ugly-stuff"
import * as collation from "res-pareto-collation"
import { cleanupDependencies } from "../modules/cleanup/dependencies/cleanupDependencies"
import { ts2ParetoDependencies } from "../modules/ts2pareto/dependencies/ts2paretoDependencies"

pe.runProgram(($, $i, $x) => {
    analyseTypeScriptProjectsInWorkspace(
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
            readDirectory: fs.readDirectory,
            substr: uglyStuff.substr,
            sortedForEach: collation.createSortedForEach({
                isYinBeforeYang: collation.localeIsYinBeforeYang
            })
        },
        $x.startAsync
    )
})
