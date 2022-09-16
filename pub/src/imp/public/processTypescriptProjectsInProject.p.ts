import * as pl from "pareto-core-lib"
import * as pa from "pareto-core-async"
import * as p2s from "pareto-core-tostring"

import * as dynAPI from "api-dynamic-typescript-parser"
import * as fs from "api-pareto-filesystem"
import * as ap from "lib-analyse-path"
import * as uast from "api-untyped-ast"

import * as x from "../../modules/embeddedParetoParser"




import { cleanup, TSourceFile } from "../../modules/cleanup"
import { DCleanupDependencies } from "../../modules/cleanup"

import { DTS2ParetoDependencies } from "../../modules/ts2pareto"
import { doUpcycle, TFileType } from "../../modules/ts2pareto"


import { TParseError } from "../private/processTypescriptProject"


import { DParseTypescriptProjectDependencies, DSerializeTypeScriptSubset } from "../../interface/dependencies/x"

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
        onSourceFile: ($: TSourceFile<uast.TDetails>) => void
    },
    $d: {
        parseDependencies: DParseTypescriptProjectDependencies
        cleanupDependencies: DCleanupDependencies
    },
    $s: pa.StartAsync,
) {
    const config = $
    function doPart(
        type: string,
        required: boolean,
        isNative: boolean
    ) {
        const contextPath = [$.contextDirectory, $.projectName, type]
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
                            if ($d.cleanupDependencies.firstCharacter($.path) === ".") {
                                pl.logDebugMessage(`&&&&&${$.path}`)
                            } else {

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
                                                    case "src/bin/*.ts":
                                                        return ["bin", {}]
                                                    case "src/data/*.ts":
                                                        return ["data", {}]
                                                    case "src/dependencies/*.ts":
                                                        return ["dependencies", {}]
    
                                                    //root module
    
                                                    case "src/imp/index.ts":
                                                        return ["imp index", {}]
                                                    case "src/imp/private/*.ts":
                                                        return ["implementation private", {}]
                                                    case "src/imp/public/*.ts":
                                                        return ["implementation public", {}]
    
                                                    case "src/index.ts":
                                                        return ["root index", {}]
    
                                                    case "src/interface/algorithms/*.ts":
                                                        return ["interface algorithms", {}]
                                                    case "src/interface/dependencies/*.ts":
                                                        return ["interface dependencies", {}]
                                                    case "src/interface/index.ts":
                                                        return ["interface index", {}]
                                                    case "src/interface/interfaces/*.ts":
                                                        return ["interface interfaces", {}]
                                                    case "src/interface/types/*.ts":
                                                        return ["interface types", {}]
    
                                                    //modules
    
                                                    case "src/modules/*/imp/index.ts":
                                                        return ["imp index", {}]
                                                    case "src/modules/*/imp/private/*.ts":
                                                        return ["implementation private", {}]
                                                    case "src/modules/*/imp/public/*.ts":
                                                        return ["implementation public", {}]
    
                                                    case "src/modules/*/index.ts":
                                                        return ["root index", {}]
    
                                                    case "src/modules/*/interface/algorithms/*.ts":
                                                        return ["interface algorithms", {}]
                                                    case "src/modules/*/interface/index.ts":
                                                        return ["interface index", {}]
                                                    case "src/modules/*/interface/interfaces/*.ts":
                                                        return ["interface interfaces", {}]
                                                    case "src/modules/*/interface/types/*.ts":
                                                        return ["interface types", {}]
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
                                                            $i.onSourceFile(intermediate)
                                                            // serialize(
                                                            //     {
                                                            //         path: ["..", "tmp", config.projectName, type, file.path],
                                                            //         data: intermediate,
                                                            //     },
                                                            //     $d.serialize,
                                                            //     $s,
                                                            // )
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
                                                if (getFileType(pattern)[0] !== "implementation private") {
                                                    doParse()
                                                } else {
                                                    //
                                                }
                                            }
    
                                        })
                                    default: return pl.au(analysisResult[0])
                                }
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