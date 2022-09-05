
import * as pl from "pareto-core-lib"

import * as uast from "api-untyped-ast"

import { convertGlobalType } from "../private/convertGlobalType"
import * as ts from "../../../cleanup/interface/types/types"
import { convertAlgorithm } from "../private/convertAlgorithm"
import { convertGlobalInterface } from "../private/convertGlobalInterface"
import { convertDependency } from "../private/convertDependency"
import { DTS2ParetoDependencies } from "../../interface/dependencies/x"


export type TFileType =
    | ["globals", {}]
    | ["root index", {}]
    | ["imp index", {}]
    | ["interface index", {}]
    | ["interface algorithms", {}]
    | ["interface dependencies", {}]
    | ["interface interfaces", {}]
    | ["interface types", {}]
    | ["module", {}]
    | ["public implementation", {}]
    | ["private implementation", {}]
    | ["bin", {}]
    | ["data", {}]
    | ["dependencies", {}]
    | ["unknown", {
        readonly "pattern": string
    }]

export function doUpcycle(
    $: {
        fileType: null | TFileType
        data: ts.TSourceFile<uast.TDetails>
        path: string
    },
    $i: ($: {
        message: string
        annotation: null | uast.TDetails
    }) => void,
    $d: DTS2ParetoDependencies
) {
    const path = $.path
    const config = $


    function doImport($: ts.TImportStatement<uast.TDetails>) {
        const file = $.file
        const ann = $.annotation
        function startsWith($: string): boolean {
            return $d.startsWith({
                contextString: file.strippedValue,
                searchString: $
            })
        }
        switch ($.file.strippedValue) {
            case "pareto-core-types":
                break
            case "pareto-core-candidates":
                break
            case "pareto-core-async":
                break
            case "pareto-core-tostring":
                break
            case "pareto-core-raw":
                break
            case "pareto-core-lib":
                break
            case "pareto-core-resolve":
                break
            case "pareto-core-exe":
                break
            case "pareto-core-state":
                break
            default:
                if (startsWith("api-")) {

                } else {

                    if (startsWith("lib-")) {

                    } else {

                        if (startsWith("res-")) {

                        } else {
                            if (startsWith(".")) {
                                $i({
                                    message: `IMPORT: ${$.file.strippedValue}`,
                                    annotation: ann,
                                })
                            } else {
                                $i({
                                    message: `UNKNOWN IMPORT: ${$.file.strippedValue}`,
                                    annotation: ann,
                                })
                            }
                        }
                    }
                }
        }
        if ($.file.strippedValue === "pareto-core-types") {

        }
        switch ($.clause[0]) {
            case "named":
                pl.cc($.clause[1], ($) => {

                })
                break
            case "namespace":
                pl.cc($.clause[1], ($) => {

                })
                break
            default: pl.au($.clause[0])
        }
    }

    if ($.fileType === null) {

    } else {
        switch ($.fileType[0]) {
            case "bin":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        switch ($.type[0]) {
                            case "expression":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in bin`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })
                })
                break
            case "data":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        switch ($.type[0]) {
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "variable":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in data`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "dependencies":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        switch ($.type[0]) {
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "variable":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in dependencies`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "globals":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        switch ($.type[0]) {
                            case "interface":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in globals`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })
                })
                break
            case "module":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        switch ($.type[0]) {
                            case "function":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "typeAlias":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            // case "variable":
                            //     pl.cc($.type[1], ($) => {

                            //     })
                            //     break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in implementation`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })
                })
                break
            case "private implementation":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        switch ($.type[0]) {
                            case "function":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    //need to handle resources differently
                                    doImport($)
                                })
                                break
                            case "typeAlias":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            // case "variable":
                            //     pl.cc($.type[1], ($) => {

                            //     })
                            //     break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in implementation`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "public implementation":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        const ann = $.annotation
                        switch ($.type[0]) {
                            case "function":
                                pl.cc($.type[1], ($) => {
                                    $i({
                                        message: `this public function should be written as a const variable`,
                                        annotation: ann,
                                    })
                                })
                                break
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    //need to handle resources differently
                                    //doImport($)
                                    doImport($)
                                })
                                break
                            case "variable":
                                pl.cc($.type[1], ($) => {
                                    $.list.declarations.forEach(($) => {
                                        if (`src/imp/public/${$.name.myValue}.ts` !== path) {

                                            $i({
                                                message: `#########################################################WRONG NAME ${$.name.myValue}<>${path}`,
                                                annotation: ann,
                                            })
                                        }

                                    })
                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in implementation`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "root index":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        if ($.type[0] !== "export") {
                            $i({
                                message: "only expect export statements in index.ts files",
                                annotation: $.annotation,
                            })
                        } else {
                            pl.cc($.type[1], ($) => {
                                if ({
                                    "./interface": null,
                                    "./imp": null,
                                    "./data": null,
                                }[$.file.strippedValue] === undefined) {

                                    $i({
                                        message: `unexpected file in rootindex: '${$.file.strippedValue}'`,
                                        annotation: null,
                                    })
                                }
                            })
                        }
                    })

                })
                break
            case "imp index":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        if ($.type[0] !== "export") {
                            $i({
                                message: "only expect export statements in index.ts files",
                                annotation: $.annotation,
                            })
                        } else {
                            pl.cc($.type[1], ($) => {
                                if ($d.startsWith({
                                    contextString: $.file.strippedValue,
                                    searchString: "./public/",
                                })) {

                                } else {

                                    $i({
                                        message: "can only export files from public",
                                        annotation: $.file.annotation,
                                    })
                                }
                            })
                        }
                    })

                })
                break
            case "interface index":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        if ($.type[0] !== "export") {
                            $i({
                                message: "only expect export statements in index.ts files",
                                annotation: $.annotation,
                            })
                        } else {
                            // pl.cc($.type[1], ($) => {
                            //     if ($d.startsWith({
                            //         contextString: $.file.strippedValue,
                            //         searchString: "./public/",
                            //     })) {

                            //     } else {

                            //         $i({
                            //             message: "can only export files from public",
                            //             annotation: $.file.annotation,
                            //         })
                            //     }
                            // })
                        }
                    })

                })
                break
            case "interface interfaces":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        const ann = $.annotation
                        switch ($.type[0]) {
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "typeAlias":
                                pl.cc($.type[1], ($) => {
                                    convertGlobalInterface(
                                        $,
                                        $i,
                                        $d
                                    )
                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in interface`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "interface algorithms":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        const ann = $.annotation
                        switch ($.type[0]) {
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "typeAlias":
                                pl.cc($.type[1], ($) => {
                                    convertAlgorithm(
                                        $,
                                        $i,
                                        $d
                                    )
                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in interface`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "interface dependencies":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        const ann = $.annotation
                        switch ($.type[0]) {
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "typeAlias":
                                pl.cc($.type[1], ($) => {
                                    convertDependency(
                                        $,
                                        $i,
                                        $d
                                    )
                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in interface dependency`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "interface types":
                pl.cc($.fileType[1], ($) => {
                    config.data.statements.forEach(($) => {
                        const ann = $.annotation
                        switch ($.type[0]) {
                            case "import":
                                pl.cc($.type[1], ($) => {
                                    doImport($)
                                })
                                break
                            case "typeAlias":
                                pl.cc($.type[1], ($) => {
                                    convertGlobalType(
                                        $,
                                        $i,
                                        $d
                                    )
                                })
                                break
                            default: {
                                $i({
                                    message: `unexpected statement '${$.type[0]}' in interface`,
                                    annotation: $.annotation,
                                })
                            }
                        }
                    })

                })
                break
            case "unknown":
                pl.cc($.fileType[1], ($) => {
                    $i({
                        message: `unknown file type: ${$.pattern}`,
                        annotation: null,
                    })
                })
                break
            default: pl.au($.fileType[0])
        }
    }


}