import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as main from "api-pareto-main"
import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"

import * as gta from "exe-generate-typesafe-ast"

export type Dependencies = {
    isYinBeforeYang: collation.IsYinBeforeYang
    createWriteStream: fs.CreateWriteStream
    startAsync: main.StartAsync
}


export function generateImplementation(
    $: {
        grammar: gta.TGrammar,
        arguments: main.Arguments,
    },
    $d: Dependencies
): void {
    const conf = $
    const deps = $d
    const argStack = pm.createStack($.arguments)

    argStack.pop(
        (first) => {

            argStack.pop(
                (second) => {
                    const rootPath = first

                    gta.generateImplementation(
                        {
                            fpSettings: {
                                newline: "\n",
                                indentation: "    ",
                            },
                            generation: {
                                grammar: conf.grammar,
                                pathToInterface: second,
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
                                            onError: () => {
                                                pl.implementMe("ERROR HANDLER")
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
        },
        () => {
            pl.panic("args")
        }
    )
}
