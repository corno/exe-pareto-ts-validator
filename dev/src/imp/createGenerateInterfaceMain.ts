import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as main from "api-pareto-main"
import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"

import * as gta from "exe-generate-typesafe-ast"

export type Dependencies = {
    isYinBeforeYang: collation.IsYinBeforeYang
    createWriteStream: fs.CreateWriteStream
}

export function createGenerateInterfaceMain(
    $: {
        grammar: gta.TGrammar,
    },
    $d: Dependencies
): main.ProgramMain {
    const conf = $
    const deps = $d
    return ($, $i, $d) => {

        const argStack = pm.createStack($.arguments)

        argStack.pop(
            (first) => {
                    const rootPath = first
                
                    gta.generateInterface(
                        {
                            fpSettings: {
                                newline: "\n",
                                indentation: "    ",
                            },
                            generation: {
                                grammar: conf.grammar,
                            }
                        },
                        {
                            isYinBeforeYang: deps.isYinBeforeYang,
                            createWriteStream: (
                                $,
                                $c,
                            ) => {
                                $d.startAsync(
                                    deps.createWriteStream(
                                        {
                                            path: [rootPath, $.path],
                                            createContainingDirectories: true,
                                        },
                                        {
                                            onError: ($) => {
                                                pl.implementMe("ERROR MSG")
                                            }
                                        },
                                        ($c2) => {
                                            $c($c2)
                                        }
                                    )
                                )
                            }
                        }
                    )
            },
            () => {
                pl.panic("args")
            }
        )
    }
}
