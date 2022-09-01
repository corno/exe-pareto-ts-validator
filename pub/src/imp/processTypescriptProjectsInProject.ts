// #!/usr/bin/env node

import * as dynAPI from "api-dynamic-typescript-parser"

import { _typescriptProject } from "../data/typescriptProject"
import { ParseError, parseTypescriptProject, ParseTypescriptProjectDependencies } from "./processTypescriptProject"

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
    }
) {
    parseTypescriptProject(
        {
            path: [$.contextDirectory, $.projectName, "dev"],
        },
        {
            onError: $i.onError
        },
        $d.parseDependencies
    )
    if ($.type[0] === "resource") {
        //skip
    } else {
        parseTypescriptProject(
            {
                path: [$.contextDirectory, $.projectName, "pub"],
            },
            {
                onError: $i.onError
            },
            $d.parseDependencies
        )
    }
    parseTypescriptProject(
        {
            path: [$.contextDirectory, $.projectName, "test"],
        },
        {
            onError: $i.onError
        },
        $d.parseDependencies
    )
}