import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

import * as process from "api-pareto-process"
import * as str from "glo-pareto-string"

export const git_ls_files_raw = (
    $: string,
    $d: {
        process: process.FCall
    }
): pt.AsyncValue<process.TResult> => {
    return $d.process(`git -C "${$}" ls-files`)
}

export type TGitLsError =
    | ["unknown", string]


export const git_createErrorMessage = ($: TGitLsError): string => {
   switch ($[0]) {
       case "unknown": 
           return pl.cc($[1], ($) => {
               return `unknown git error: ${$}`
           })
       default: return pl.au($[0])
   }
}

export const git_ls_files_raw_2 = (
    $: string,
    $i: {
        onError: ($: TGitLsError) => void
    },
    $d: {
        process: process.FCall
    }
): pt.AsyncValue<string> => {
    return git_ls_files_raw(
        $,
        $d
        ).setCondition(($) => {
        switch ($[0]) {
            case "error":
                return pl.cc($[1], ($) => {
                    $i.onError(["unknown", $.stderr])
                    return undefined
                })
            case "success":
                return pl.cc($[1], ($) => {
                    return pl.asyncValue($)
                })
            default: return pl.au($[0])
        }
    })
}

export const git_ls_files = (
    $: string,
    $i: {
        onError: ($: TGitLsError) => void
    },
    $d: {
        process: process.FCall
        trimEnd: str.FTrimEnd
        splitString: str.FSplitString
    }
): pt.AsyncValue<pt.Array<string>> => {
    return git_ls_files_raw_2($, $i, $d).map(($) => pl.asyncValue($d.splitString({
        value: $d.trimEnd($),
        splitter: "\n",
    })))
}
