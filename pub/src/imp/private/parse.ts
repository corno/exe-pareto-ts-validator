
import * as x from "../../modules/embeddedParetoParser/imp"
import { XParse } from "./ParseType"

export const parse: XParse = ($, $i, $d) => {
    return $d.parseDynamic(
        {
            tsconfigPath: $.tsConfigPath
        },
        {
            onError: $i.onErrorX,
            onFile: ($$) => {
                const $ = $$.data
                const fullPath = $.fullPath
                const key = $$.path
                x.parse(
                    $.root,
                    {
                        reportMissingToken: ($) => {
                            $i.reportMissingToken(
                                {
                                    parentDetails: $.parentDetails,
                                    path: $.path,
                                    kindNameOptions: $.kindNameOptions
                                }
                            )

                        },
                        reportUnexpectedToken: ($) => {
                            $i.reportUnexpectedToken(
                                {
                                    file: {
                                        relativePath: key,
                                        absolutePath: fullPath,
                                    },
                                    token: {
                                        path: $.path,
                                        kindName: $.token.kindName,
                                        details: $.token.details,
                                    },
                                    expected: $.expected,
                                }
                            )

                        },
                        callback: ($) => {
                            $i.onFile({
                                path: key,
                                data: $,
                            })
                        },
                    },
                    {
                        doUntil: $d.doUntil,
                        lookAhead: $d.lookAhead,
                        stringsAreEqual: (a, b) => $d.stringsAreEqual({
                            a: a,
                            b: b,
                        }),
                    }
                )
            },
            onEnd: () => {
            },
        }
    )
}