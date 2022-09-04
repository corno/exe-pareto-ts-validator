

import * as dynAPI from "api-dynamic-typescript-parser"

import * as fs from "api-pareto-filesystem"
import * as uglyStuff from "api-pareto-ugly-stuff"
import { StartAsync } from "pareto-core-async"

import { _typescriptProject } from "../data/typescriptProject"
import { cleanup, DCleanupDependencies } from "./cleanup/imp/cleanup"
import { doUpcycle } from "./doUpcycle"
import { TParseError, parseTypescriptProject, DParseTypescriptProjectDependencies } from "./processTypescriptProject"
import { serialize } from "./serialize"
import { ts2pareto } from "./pareto/imp/ts2pareto"

export type TProjectType =
    | ["executable", {}]
    | ["resource", {}]
    | ["library", {}]
    | ["api", {}]
    | ["unknown", {}]

export function parseTypescriptProjectsInProject(
    $: {
        projectName: string
        contextDirectory: dynAPI.TPath
        type: TProjectType
    },
    $i: {
        onError: ($: TParseError) => void
    },
    $d: {
        parseDependencies: DParseTypescriptProjectDependencies
        createWriteStream: fs.CreateWriteStream
        cleanupDependencies: DCleanupDependencies
    },
    $s: StartAsync,
) {
    const config = $
    const deps = {
        createWriteStream: $d.createWriteStream,
    }
    parseTypescriptProject(
        {
            path: [$.contextDirectory, $.projectName, "dev"],
            allowNonExistence: true,
        },
        {
            onError: $i.onError,
            onFile: ($) => {

                const intermediate = cleanup(
                    $.data,
                    $d.cleanupDependencies
                )
                doUpcycle(
                    {
                        path: [ config.contextDirectory, config.projectName, "dev", $.path],
                        data: intermediate,
                    },
                    $d.cleanupDependencies

                )
                serialize(
                    {
                        path: [ ".", "tmp", config.projectName, "dev", $.path],
                        data: intermediate,
                    },
                    deps,
                    $s,
                )
            }
        },
        $d.parseDependencies,
        $s,
    )
    if ($.type[0] === "resource") {
        //skip
    } else {
        parseTypescriptProject(
            {
                path: [$.contextDirectory, $.projectName, "pub"],
                allowNonExistence: false,
            },
            {
                onError: $i.onError,
                onFile: ($) => {
                
                    const intermediate = cleanup(
                        $.data,
                        $d.cleanupDependencies
                    )
                    doUpcycle(
                        {
                            path: [ config.contextDirectory, config.projectName, "pub", $.path],
                            data: intermediate,
                        },
                        $d.cleanupDependencies
    
                    )
                    serialize(
                        {
                            path: [ ".", "tmp", config.projectName, "pub", $.path],
                            data: intermediate,
                        },
                        deps,
                        $s
                    )
                },
            },
            $d.parseDependencies,
            $s,
        )
    }
    parseTypescriptProject(
        {
            path: [$.contextDirectory, $.projectName, "test"],
            allowNonExistence: $.type[0] === "api",
        },
        {
            onError: $i.onError,
            onFile: ($) => {
                const intermediate = cleanup(
                    $.data,
                    $d.cleanupDependencies
                )
                doUpcycle(
                    {
                        path: [ config.contextDirectory, config.projectName, "test", $.path],
                        data: intermediate,
                    },
                    $d.cleanupDependencies

                )
                serialize(
                    {
                        path: [".", "tmp", config.projectName, "test", $.path],
                        data: intermediate,
                    },
                    deps,
                    $s,
                )
            },
        },
        $d.parseDependencies,
        $s,
    )
}