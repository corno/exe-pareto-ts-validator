
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"

import { f_serializeTypeScriptSubsetFile } from "../private/serializeTypeScriptSubsetFile"
import { StartAsync } from "pareto-core-async"
import { TSourceFile } from "../../../cleanup"
import { DSerializeTypeScriptSubset } from "../../../../interface/dependencies/x"

export function serialize<PAnnotation>(
    $: {
        path: fs.Path
        data: TSourceFile<PAnnotation>
    },
    $d: DSerializeTypeScriptSubset,
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
                        f_serializeTypeScriptSubsetFile(
                            config.data,
                            {
                                block: $
                            },
                            $d
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