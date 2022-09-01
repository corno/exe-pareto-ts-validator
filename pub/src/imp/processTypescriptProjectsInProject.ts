// #!/usr/bin/env node

import * as pt from "pareto-core-types"

import * as dynAPI from "api-dynamic-typescript-parser"
import * as uglyStuff from "api-pareto-ugly-stuff"
import * as pp from "api-pareto-path"

import { _typescriptProject } from "../data/typescriptProject"
import { parseTypescriptProject } from "./processTypescriptProject"
import { UnexpectedTokenData } from "./ParseType"


export function parseTypescriptProjectsInProject<ImplementationDetails>(
    $: {
        projectName: string
        path: dynAPI.Path
    },
    $i: {
        reportUnexpectedToken: ($: UnexpectedTokenData<ImplementationDetails>) => void
    },
    $d: {
        startAsync: ($: pt.AsyncNonValue) => void
        parseDynamic: dynAPI.Parse<ImplementationDetails>
        doUntil: uglyStuff.DoUntil
        lookAhead: uglyStuff.LookAhead
        stringsNotEqual: (a: string, b: string) => boolean
        parseFilePath: pp.ParseFilePath
    }
) {
    parseTypescriptProject(
        {
            projectName: $.projectName,
            partName: "dev",
            path: [$.path, "dev"],
        },
        {
            reportUnexpectedToken: $i.reportUnexpectedToken
        },
        $d
    )
    parseTypescriptProject(
        {
            projectName: $.projectName,
            partName: "pub",
            path: [$.path, "pub"],
        },
        {
            reportUnexpectedToken: $i.reportUnexpectedToken
        },
        $d
    )
    parseTypescriptProject(
        {
            projectName: $.projectName,
            partName: "test",
            path: [$.path, "test"],
        },
        {
            reportUnexpectedToken: $i.reportUnexpectedToken
        },
        $d
    )
}