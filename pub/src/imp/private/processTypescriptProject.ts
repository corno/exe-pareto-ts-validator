// #!/usr/bin/env node

import * as pl from "pareto-core-lib"
import * as p2s from "pareto-core-tostring"

import * as fs from "api-pareto-filesystem"
import * as ts from "api-dynamic-typescript-parser"
import * as uast from "api-untyped-ast"
import * as pp from "api-pareto-path"

import * as ap from "lib-analyse-path"

import { parse } from "./parse"
import { _typescriptProject } from "../../data/typescriptProject"
import { DParse2Dependencies, TUnexpectedTokenData } from "./ParseType"
import { TNroot } from "../../interface"
import { StartAsync } from "pareto-core-async"

export type TParseError =
    | ["dynamic parser", ts.TTypeScriptParserError]
    | ["unexpected token", TUnexpectedTokenData]
    | ["missing token", {
        readonly "parentDetails": uast.TDetails
        readonly "path": string
        readonly "kindNameOptions": string
    }]
    | ["file path", {
        readonly "error": ap.TAnnotatedPathError
        readonly "path": ts.TPath
    }]
    | ["pattern", {
        readonly "unknown pattern": string
    }]
    | ["upcycle", {
        readonly "message": string
        readonly "path": fs.Path
        readonly "annotation": null | uast.TDetails
    }]

export type FStringsAreEqual = ($: {
    readonly "a": string,
    readonly "b": string
}) => boolean

export type DParseTypescriptProjectDependencies = {
    readonly parse2: DParse2Dependencies
    readonly parseFilePath: pp.ParseFilePath
}

export function parseTypescriptProject(
    $: {
        readonly "path": ts.TPath
        readonly "allowNonExistence": boolean
    },
    $i: {
        onError: ($: TParseError) => void
        onFile: ($: {
            readonly "path": string
            readonly "data": TNroot
        }) => void
    },
    $d: DParseTypescriptProjectDependencies,
    $s: StartAsync,
) {
    const config = $
    $s(

        parse(
            {
                tsConfigPath: [$.path, "tsconfig.json"],
            },
            {
                onErrorX: ($) => {
                    if (config.allowNonExistence) {
                        if ($[0] === "tsconfg.json does not exist") {
                            //do nothing
                        } else {
                            $i.onError(["dynamic parser", $])
                        }
                    } else {
                        $i.onError(["dynamic parser", $])
                    }
                },
                reportMissingToken: ($) => {
                    $i.onError(["missing token", $])
                },
                reportUnexpectedToken: ($) => {
                    $i.onError(["unexpected token", $])
                },
                onFile: ($) => {

                    $i.onFile({
                        data: $.data,
                        path: $.path,
                    })


                },
                onEnd: () => {

                }

            },
            $d.parse2
        )
    )


}