
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"


import { visit } from "./visit"

import { TNroot } from "../interface"
import { serializeParetoFile } from "./serializeParetoFile"
import { StartAsync } from "pareto-core-async"

export function serialize(
    $: {
        path: fs.Path
        data: TNroot
    },
    $d: {
        createWriteStream: fs.CreateWriteStream
        startAsync: StartAsync
    }
) {

    const intermediate = visit(
        $.data,
    )

    $d.startAsync(
        $d.createWriteStream(
            {
                path: $.path,
                createContainingDirectories: true,
            },
            {
                onError: ($) => {
                    pl.implementMe("FIXME")
                },

            },
            ($i) => {
                fp.createContext(
                    {
                        newline: "\n",
                        indentation: "    "
                    },
                    ($) => {

                        serializeParetoFile(
                            intermediate,
                            {
                                block: $
                            },
                            {
                                isNotEmpty: ($) => {
                                    const stack = pm.createStack($)
                                    return !stack.isEmpty()
                                }
                            }
                        )
                    },
                    {
                        consumer: $i
                    }
                )
            }
        )
    )

}