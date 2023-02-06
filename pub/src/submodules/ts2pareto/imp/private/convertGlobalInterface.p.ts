import * as pl from "pareto-core-lib"

// import * as ts from "../../../cleanup/interface"
// import * as t from "../../interface"
// // import { unsafeToDictionary } from "../../../private/paretoCandidates"
// import { convertLocalInterface } from "./convertLocalInterface"
// import { DTS2ParetoDependencies } from "../../interface"
// import { ILog } from "../types/Log"

// type TGlobalInterfacePair = {
//     name: string,
//     value: undefined | t.TGlobalInterface
// }


// export function convertGlobalInterface<PAnnotation>(
//     $: ts.TTypeAlias<PAnnotation>,
//     $i: ILog<PAnnotation>,
//     $d: DTS2ParetoDependencies,
// ): TGlobalInterfacePair {

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

//     pl.cc($d.analyseInterfaceName($.name.myValue), ($) => {
//         if ($ === null) {
//         logMessage(`expected an interface (starting with a I)`, typeAlias.details)

//         }
//     })

//     return {
//         name: $.name.myValue,
//         value: {
//             type: convertLocalInterface(typeAlias.type, $i, $d)
//         },
//     }
// }
