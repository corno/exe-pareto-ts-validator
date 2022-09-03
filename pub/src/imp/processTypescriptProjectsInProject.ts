

import * as dynAPI from "api-dynamic-typescript-parser"

import * as fs from "api-pareto-filesystem"

import { _typescriptProject } from "../data/typescriptProject"
import { ParseError, parseTypescriptProject, ParseTypescriptProjectDependencies } from "./processTypescriptProject"
import { serialize } from "./serialize"

export type ProjectType =
    | ["executable", {}]
    | ["resource", {}]
    | ["library", {}]
    | ["api", {}]
    | ["unknown", {}]

export function parseTypescriptProjectsInProject(
    $: {
        projectName: string
        contextDirectory: dynAPI.Path
        type: ProjectType
    },
    $i: {
        onError: ($: ParseError) => void
    },
    $d: {
        parseDependencies: ParseTypescriptProjectDependencies
        createWriteStream: fs.CreateWriteStream

    }
) {
    const config = $
    parseTypescriptProject(
        {
            path: [$.contextDirectory, $.projectName, "dev"],
            allowNonExistence: true,
        },
        {
            onError: $i.onError,
            onFile: ($) => {
                serialize(
                    {
                        path: [ ".", "tmp", config.projectName, "dev", $.path],
                        data: $.data,
                    },
                    {
                        createWriteStream: $d.createWriteStream,
                        startAsync: $d.parseDependencies.startAsync,
                    }
                )
            }
        },
        $d.parseDependencies
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
                
                    serialize(
                        {
                            path: [ ".", "tmp", config.projectName, "pub", $.path],
                            data: $.data,
                        },
                        {
                            createWriteStream: $d.createWriteStream,
                            startAsync: $d.parseDependencies.startAsync,
                        }
                    )
                },
            },
            $d.parseDependencies
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
                serialize(
                    {
                        path: [".", "tmp", config.projectName, "test", $.path],
                        data: $.data,
                    },
                    {
                        createWriteStream: $d.createWriteStream,
                        startAsync: $d.parseDependencies.startAsync,
                    }
                )
            },
        },
        $d.parseDependencies
    )
}