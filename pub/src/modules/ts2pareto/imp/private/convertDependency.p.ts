import * as pl from "pareto-core-lib"


// import * as ts from "../../../cleanup/interface"
// import { DTS2ParetoDependencies } from "../../interface"
// import * as t from "../../interface"
// import { ILog } from "../types/Log"

// type TDependencyPair = {
//     name: string,
//     value: undefined | t.TGlobalInterface
// }


// export function convertDependency<PAnnotation>(
//     $: ts.TTypeAlias<PAnnotation>,
//     $i: ILog<PAnnotation>,
//     $d: DTS2ParetoDependencies,
// ): TDependencyPair {

//     const typeAlias = $
//     function logMessage(message: string, annotation: PAnnotation) {
//         $i({
//             message: message,
//             annotation: annotation,
//         })
//     }

//     const hasExport = typeAlias.modifiers.reduce(false, (current, $) => {
//         return $[0] === "export"
//             ? true
//             : current
//     })
//     if (!hasExport) {
//         logMessage(`NO EXPORT: ${typeAlias.name.myValue}`, typeAlias.details)
//     }

//     pl.cc($d.analyseDependencyName($.name.myValue), ($) => {
//         if ($ === null) {
//             logMessage(`expected a dependency definition (starting with a D)`, typeAlias.details)

//         }
//     })
    

//     return {
//         name: $.name.myValue,
//         value: {
//             type: undefined
//         },
//     }
// }
