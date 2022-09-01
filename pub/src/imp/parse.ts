
import * as x from "./generated"
import { Parse } from "./ParseType"

export const parse: Parse = ($, $i, $d) => {
    return $d.parseDynamic(
        {
            tsconfigPath: $.tsConfigPath
        },
        {
            onError: $i.onError,
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
                        stringsNotEqual: $d.stringsNotEqual,
                    }
                )
            },
            onEnd: () => {
            },
            // callback: ($) => {
            //     $.files.forEach((a, b) => a > b, ($, key) => {
            //     })
            // }

        }
    )
}