import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"
import * as p2s from "pareto-core-tostring"

import * as dynAPI from "api-dynamic-typescript-parser"
import * as fs from "api-pareto-filesystem"
import * as ap from "lib-analyse-path"

import * as x from "../../modules/embeddedParetoParser"


import { cleanup } from "../../modules/cleanup"
import { DCleanupDependencies } from "../../modules/cleanup"

import { DTS2ParetoDependencies } from "../../modules/pareto"
import { doUpcycle, TFileType } from "../../modules/pareto"


import { TParseError } from "../private/processTypescriptProject"
import { serialize } from "../private/serialize"


import { DParseTypescriptProjectDependencies } from "../../dependencies/x"

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
        typescriptProject: ap.TDirectory
    },
    $i: {
        onError: ($: TParseError) => void
    },
    $d: {
        parseDependencies: DParseTypescriptProjectDependencies
        createWriteStream: fs.CreateWriteStream
        cleanupDependencies: DCleanupDependencies
        ts2ParetoDependencies: DTS2ParetoDependencies
    },
    $s: pa.StartAsync,
) {
    const config = $
    const deps = {
        createWriteStream: $d.createWriteStream,
    }
    function doPart(
        type: string,
        required: boolean,
        isNative: boolean
    ) {
        const contextPath =  [$.contextDirectory, $.projectName, type]
        $s(
            $d.parseDependencies.parse2.parseDynamic(
                {
                    tsconfigPath: [$.contextDirectory, $.projectName, type, "tsconfig.json"],
                },
                {
                    onError: ($) => {

                        if ($[0] === "tsconfg.json does not exist") {
                            if (required) {
                                $i.onError(["dynamic parser", $])
                            } else {
                                //this is okay
                            }
                        } else {
                            pl.panic(`error while parsing`)
                        }
                    },
                    onFile: ($) => {
                        const file = $
                        pl.cc($, ($) => {
                            const path = $d.parseDependencies.parseFilePath({
                                filePath: $.path
                            })
                            const analysisResult = ap.analysePath({
                                definition: config.typescriptProject,
                                filePath: path,
                            })

                            switch (analysisResult[0]) {
                                case "error":
                                    return pl.cc(analysisResult[1], ($) => {
                                        $i.onError(["file path", {
                                            error: $,
                                            path: contextPath,
                                        }])
                                        return null
                                    })
                                case "success":
                                    return pl.cc(analysisResult[1], ($) => {
                                        const pattern = p2s.getArrayAsString($.pattern, "/")


                                        function getFileType(
                                            $: string
                                        ): TFileType {
                                            switch ($) {
                                                case "src/_globals.ts":
                                                    return ["globals", {}]
                                                case "src/index.ts":
                                                    return ["root index", {}]
                                                case "src/interface/types/**/*.ts":
                                                    return ["interface types", {}]
                                                case "src/interface/interfaces/*.ts":
                                                    return ["interface interfaces", {}]
                                                case "src/interface/algorithms/*.ts":
                                                    return ["interface algorithms", {}]
                                                case "src/interface/dependencies/*.ts":
                                                    return ["interface dependencies", {}]
                                                case "src/interface/index.ts":
                                                    return ["interface index", {}]
                                                case "src/imp/index.ts":
                                                    return ["imp index", {}]
                                                case "src/imp/public/*.ts":
                                                    return ["public implementation", {}]
                                                case "src/imp/private/**/*.ts":
                                                    return ["private implementation", {}]
                                                case "src/bin/*.ts":
                                                    return ["bin", {}]
                                                case "src/data/*.ts":
                                                    return ["data", {}]
                                                case "src/dependencies/*.ts":
                                                    return ["dependencies", {}]
                                                default:
                                                    return ["unknown", {
                                                        pattern: $
                                                    }]
                                            }
                                        }
                                        function doParse() {

                                            x.parse(
                                                file.data.root,
                                                {
                                                    reportMissingToken: ($) => {
                                                        $i.onError(["missing token", $])

                                                    },
                                                    reportUnexpectedToken: ($) => {
                                                        $i.onError(["unexpected token", {
                                                            file: {
                                                                relativePath: file.path,
                                                                absolutePath: file.data.fullPath,
                                                            },
                                                            token: {
                                                                path: $.path,
                                                                kindName: $.token.kindName,
                                                                details: $.token.details,
                                                            },
                                                            expected: $.expected,
                                                        }])

                                                    },
                                                    callback: ($) => {

                                                        const intermediate = cleanup(
                                                            $,
                                                            $d.cleanupDependencies
                                                        )
                                                        doUpcycle(
                                                            {
                                                                fileType: getFileType(pattern),
                                                                data: intermediate,
                                                                path: file.path,
                                                            },
                                                            ($) => {
                                                                $i.onError(["upcycle", {
                                                                    message: $.message,
                                                                    path: [config.contextDirectory, config.projectName, type, file.path],
                                                                    annotation: $.annotation,
                                                                }])
                                                            },
                                                            $d.ts2ParetoDependencies

                                                        )
                                                        serialize(
                                                            {
                                                                path: ["..", "tmp", config.projectName, type, file.path],
                                                                data: intermediate,
                                                            },
                                                            deps,
                                                            $s,
                                                        )
                                                    },
                                                },
                                                {
                                                    doUntil: $d.parseDependencies.parse2.doUntil,
                                                    lookAhead: $d.parseDependencies.parse2.lookAhead,
                                                    stringsAreEqual: (a, b) => $d.parseDependencies.parse2.stringsAreEqual({
                                                        a: a,
                                                        b: b,
                                                    }),
                                                }
                                            )
                                        }

                                        if (!isNative) {
                                            doParse()
                                        } else {
                                            if (getFileType(pattern)[0] !== "private implementation") {
                                                doParse()
                                            } else {
                                                //
                                            }
                                        }

                                    })
                                default: return pl.au(analysisResult[0])
                            }
                        })
                    },
                    onEnd: () => {
                    }
                }
            )
        )

        // parseTypescriptProject(
        //     {
        //         path: [$.contextDirectory, $.projectName, type],
        //         allowNonExistence: true,
        //     },
        //     {
        //         onError: $i.onError,
        //         onFile: ($) => {
        //             const x = $.path

        //         }
        //     },
        //     $d.parseDependencies,
        //     $s,
        // )
    }
    doPart("dev", false, false)
    doPart("pub", true, $.type[0] === "resource")

    doPart("test", $.type[0] !== "api", false)
}