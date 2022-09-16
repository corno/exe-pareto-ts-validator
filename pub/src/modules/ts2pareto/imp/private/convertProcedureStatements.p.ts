import * as pl from "pareto-core-lib"


import * as ts from "../../../cleanup/interface/types/types"
import { DTS2ParetoDependencies } from "../../interface"
import { ILog } from "../types/Log"

export function convertProcedureStatements<PAnnotation>(
    $: ts.TStatements<PAnnotation>,
    $i: ILog<PAnnotation>,
    $d: DTS2ParetoDependencies
) {
    function convertOptionalStatement($: {
        context: Annotation,
        statement: null | ts.TStatement<PAnnotation>
    }) {
        if ($.statement === null) {

            $i({
                message: `missing statement`,
                annotation: $.context,
            })
        } else {
            const ann = $.context
            if ($.statement.type[0] !== "block") {
                $i({
                    message: `expected block`,
                    annotation: ann,
                })
            } else {
                convertProcedureStatements(
                    $.statement.type[1].statements,
                    $i,
                    $d
                )

            }
        }
    }
    $.forEach(($) => {
        const context = $.annotation
        switch ($.type[0]) {
            case "block":
                pl.cc($.type[1], ($) => {

                    $i({
                        message: `BLOCK`,
                        annotation: context,
                    })
                })
                break
            case "expression":
                pl.cc($.type[1], ($) => {

                })
                break
            case "function":
                pl.cc($.type[1], ($) => {

                    $i({
                        message: `FUNCTION ${$.name.myValue}`,
                        annotation: context,
                    })
                })
                break
            case "if":
                pl.cc($.type[1], ($) => {
                    convertOptionalStatement({
                        statement: $.thenStatement,
                        context: context
                    })
                    convertOptionalStatement({
                        statement: $.elseStatement,
                        context: context
                    })

                })
                break
            case "switch":
                pl.cc($.type[1], ($) => {

                    $.clauses.forEach(($) => {
                        const context = $.annotation
                        switch ($.type[0]) {
                            case "case":
                                pl.cc($.type[1], ($) => {
                                    convertProcedureStatements(
                                        $.statements,
                                        $i,
                                        $d,
                                    )

                                })
                                break
                            case "default":
                                pl.cc($.type[1], ($) => {

                                })
                                break
                            default: pl.au($.type[0])
                        }
                    })
                })
                break
            case "typeAlias":
                pl.cc($.type[1], ($) => {

                    $i({
                        message: `TYPEALIAS ${$.name.myValue}`,
                        annotation: context,
                    })
                })
                break
            case "variable":
                pl.cc($.type[1], ($) => {

                })
                break

            default:

                $i({
                    message: `unexpected statement`,
                    annotation: context,
                })
        }
    })
}