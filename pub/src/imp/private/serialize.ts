
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"

import { serializeParetoFile } from "./serializeParetoFile"
import { StartAsync } from "pareto-core-async"
import { TSourceFile } from "../../modules/cleanup"

export function serialize<Annotation>(
    $: {
        path: fs.Path
        data: TSourceFile<Annotation>
    },
    $d: {
        createWriteStream: fs.CreateWriteStream
    },
    $s: StartAsync
) {

    const config = $

    $s(
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
                            config.data,
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