import * as pl from "pareto-core-lib"
import * as fp from "lib-fountain-pen"

import * as api from "../../interface"
import { DDependencies } from "../../interface"

export function serializeLocalType<PAnnotation>(
    $: api.TLocalType<PAnnotation>,
    $i: fp.ILine,
    $d: DDependencies<PAnnotation>,
) {
    if ($.optional) {
        $i.snippet(`null | `)
    }
    switch ($.type[0]) {
        case "boolean":
            pl.cc($.type[1], ($) => {
                $i.snippet(`boolean`)
            })
            break
        case "dictionary":
            pl.cc($.type[1], ($) => {
                $i.snippet(`xxx`)
            })
            break
        case "list":
            pl.cc($.type[1], ($) => {
                $i.snippet(`list`)
            })
            break
        case "null":
            pl.cc($.type[1], ($) => {
                $i.snippet(`null`)
            })
            break
        case "reference":
            pl.cc($.type[1], ($) => {
                $i.snippet(`yyy`)
            })
            break
        case "string":
            pl.cc($.type[1], ($) => {
                $i.snippet(`string`)
            })
            break
        case "tagged union":
            pl.cc($.type[1], ($) => {
                $i.snippet(`TU`)
            })
            break
        case "undefined":
            pl.cc($.type[1], ($) => {
                $i.snippet(`undefined`)
            })
            break
        default: pl.au($.type[0])
    }

}