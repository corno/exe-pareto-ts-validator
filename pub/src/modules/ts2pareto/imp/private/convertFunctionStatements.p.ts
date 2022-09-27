import * as pl from "pareto-core-lib"

import * as ts from "../../../cleanup/interface"
import { DTS2ParetoDependencies } from "../../interface"
import { convertProcedureStatements } from "./convertProcedureStatements"
import { ILog } from "../types/Log"

export function convertFunctionStatements<PAnnotation>(
    $: {
        statements: ts.TStatements<PAnnotation>
        context: PAnnotation
    },
    $i: ILog<PAnnotation>,
    $d: DTS2ParetoDependencies
) {
    const context = $.context
    function convertOptionalStatement($: {
        context: PAnnotation,
        statement: null | ts.TStatement<PAnnotation>
    }) {
        if ($.statement === null) {

            $i({
                message: `missing statement`,
                annotation: context,
            })
        } else {
            const ann = $.context
            if ($.statement.type[0] !== "block") {
                $i({
                    message: `expected block`,
                    annotation: ann,
                })
            } else {
                convertFunctionStatements(
                    {
                        statements: $.statement.type[1].statements,
                        context: ann,
                    },
                    $i,
                    $d
                )

            }
        }
    }
    pl.cc($d.splitLastElement($.statements), ($) => {
        if ($ === null) {

            $i({
                message: `missing statement`,
                annotation: context,
            })
        } else {
            convertProcedureStatements(
                $.rest,
                $i,
                $d,
            )
            pl.cc($.last, ($) => {

                const context = $.annotation
                switch ($.type[0]) {
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
                                            convertFunctionStatements(
                                                {
                                                    statements: $.statements,
                                                    context: context,
                                                },
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
                    case "return":
                        pl.cc($.type[1], ($) => {
                            if ($ === null) {
                                $i({
                                    message: `missing expression`,
                                    annotation: context,
                                })

                            } else {
                                switch ($.type[0]) {
                                    case "arrowFunction":
                                        pl.cc($.type[1], ($) => {

                                        })
                                        break
                                    // case "arrayLiteral":
                                    //     pl.cc($.type[1], ($) => {

                                    //     })
                                    //     break
                                    case "call":
                                        pl.cc($.type[1], ($) => {

                                        })
                                        break
                                    // case "false":
                                    //     pl.cc($.type[1], ($) => {

                                    //     })
                                    //     break
                                    case "identifier":
                                        pl.cc($.type[1], ($) => {

                                        })
                                        break
                                    case "nullKeyword":
                                        pl.cc($.type[1], ($) => {

                                        })
                                        break
                                    case "objectLiteral":
                                        pl.cc($.type[1], ($) => {

                                        })
                                        break
                                    case "template":
                                        pl.cc($.type[1], ($) => {

                                        })
                                        break
                                    // case "true":
                                    //     pl.cc($.type[1], ($) => {

                                    //     })
                                    //     break
                    
                                    default:
                                        $i({
                                            message: `unexpected expression ${$.type[0]}`,
                                            annotation: $.annotation,
                                        })
                                }
                            }
                        })
                        break
                    case "expression":
                        pl.cc($.type[1], ($) => {
                            //this should be 'pl.panic()'
                            const annotation = $.annotation
                            if ($.type[0] !== "call") {
                                $i({
                                    message: `unexpected statement`,
                                    annotation: $.annotation,
                                })
                            } else {
                                pl.cc($.type[1], ($) => {

                                    if ($.function.type[0] !== "identifier") { //this should not be an identifier but a pl.panic
                                        $i({
                                            message: `unexpected statement`,
                                            annotation: annotation,
                                        })
                                    } else {
                                        pl.cc($.function.type[1], ($) => {
                                            if ($.myValue !== "panic") {
                                                $i({
                                                    message: `unexpected statement`,
                                                    annotation: annotation,
                                                })
                                            } else {

                                            }
                                        })
                                    }
                                })
                            }
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
    })
}