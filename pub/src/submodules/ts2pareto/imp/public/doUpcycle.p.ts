
import * as pl from "pareto-core-lib"

// import * as uast from "api-untyped-ast"

// import { convertGlobalType } from "../private/convertGlobalType"
// import * as ts from "../../../cleanup/interface"
// import { convertAlgorithm } from "../private/convertAlgorithm"
// import { convertGlobalInterface } from "../private/convertGlobalInterface"
// import { convertDependency } from "../private/convertDependency"
// import { DTS2ParetoDependencies } from "../../interface"
// import { convertFunctionStatements } from "../private/convertFunctionStatements"
// import { convertProcedureStatements } from "../private/convertProcedureStatements"


// export type TFileType =
//     | ["globals", {}]
//     | ["root index", {}]
//     | ["imp index", {}]
//     | ["interface index", {}]
//     | ["interface algorithms", {}]
//     | ["interface dependencies", {}]
//     | ["interface interfaces", {}]
//     | ["interface types", {}]
//     | ["implementation public", {}]
//     | ["implementation private", {}]
//     | ["bin", {}]
//     | ["data", {}]
//     | ["dependencies", {}]
//     | ["unknown", {
//         readonly "pattern": string
//     }]

// export function doUpcycle(
//     $: {
//         fileType: null | TFileType
//         data: ts.TSourceFile<uast.TDetails>
//         path: string
//     },
//     $i: ($: {
//         message: string
//         annotation: null | uast.TDetails
//     }) => void,
//     $d: DTS2ParetoDependencies
// ) {
//     const path = $.path
//     const config = $


//     function doImport($: ts.TImportStatement<uast.TDetails>) {
//         const file = $.file
//         const ann = $.annotation
//         pl.cc($d.analyseImportFile($.file.strippedValue), ($) => {
//             if ($ === null) {
//                 $i({
//                     message: `invalid import`,
//                     annotation: ann,
//                 })
//             } else {
//                 switch ($[0]) {
//                     case "core":
//                         pl.cc($[1], ($) => {

//                         })
//                         break
//                     case "dependency":
//                         pl.cc($[1], ($) => {

//                         })
//                         break
//                     case "local":
//                         pl.cc($[1], ($) => {

//                         })
//                         break
//                     default: pl.au($[0])
//                 }
//             }
//         })
//         switch ($.clause[0]) {
//             case "named":
//                 pl.cc($.clause[1], ($) => {

//                 })
//                 break
//             case "namespace":
//                 pl.cc($.clause[1], ($) => {

//                 })
//                 break
//             default: pl.au($.clause[0])
//         }
//     }

//     if ($.fileType === null) {

//     } else {
//         switch ($.fileType[0]) {
//             case "bin":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         switch ($.type[0]) {
//                             case "expression":
//                                 pl.cc($.type[1], ($) => {

//                                 })
//                                 break
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in bin`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })
//                 })
//                 break
//             case "data":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         switch ($.type[0]) {
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "variable":
//                                 pl.cc($.type[1], ($) => {

//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in data`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "dependencies":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         switch ($.type[0]) {
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "variable":
//                                 pl.cc($.type[1], ($) => {

//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in dependencies`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "globals":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         switch ($.type[0]) {
//                             case "interface":
//                                 pl.cc($.type[1], ($) => {

//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in globals`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })
//                 })
//                 break
//             case "implementation private":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         const ann = $.annotation
//                         switch ($.type[0]) {
//                             case "function":
//                                 pl.cc($.type[1], ($) => {
//                                     const name = $.name
//                                     pl.cc($d.analyseAlgorithmName($.name.myValue), ($) => {
//                                         if ($ === null) {

//                                             $i({
//                                                 message: `INVALID NAME ${name.myValue}`,
//                                                 annotation: ann,
//                                             })
//                                         } else {
//                                             //Go and ANALYSE
//                                         }
//                                     })
//                                 })
//                                 break
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "variable":
//                                 pl.cc($.type[1], ($) => {
//                                     $.list.declarations.forEach(($) => {
//                                         const name = $.name
//                                         if (`${$.name.myValue}.ts` !== $d.basename(path)) {

//                                             $i({
//                                                 message: `#########################################################WRONG NAME ${$.name.myValue}<>${path}`,
//                                                 annotation: ann,
//                                             })
//                                         }
//                                         pl.cc($d.analyseAlgorithmName($.name.myValue), ($) => {
//                                             if ($ === null) {

//                                                 $i({
//                                                     message: `INVALID NAME ${name.myValue}`,
//                                                     annotation: ann,
//                                                 })
//                                             } else {
//                                                 //Go and ANALYSE
//                                             }
//                                         })

//                                     })
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in implementation`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "implementation public":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         const ann = $.annotation
//                         switch ($.type[0]) {
//                             case "function":
//                                 pl.cc($.type[1], ($) => {
//                                     $i({
//                                         message: `this public function should be written as a const variable`,
//                                         annotation: ann,
//                                     })
//                                 })
//                                 break
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     //need to handle resources differently
//                                     //doImport($)
//                                     doImport($)
//                                 })
//                                 break
//                             case "variable":
//                                 pl.cc($.type[1], ($) => {
//                                     $.list.declarations.forEach(($) => {
//                                         const name = $.name
//                                         if (`${$.name.myValue}.ts` !== $d.basename(path)) {

//                                             $i({
//                                                 message: `#########################################################WRONG NAME ${$.name.myValue}<>${path}`,
//                                                 annotation: ann,
//                                             })
//                                         }
//                                         //const expression = $.expression

//                                         pl.cc($.expression, (($) => {

//                                             if ($ === null) {

//                                                 $i({
//                                                     message: `missing expression`,
//                                                     annotation: ann,
//                                                 })
//                                             } else {
//                                                 const context = $.annotation
//                                                 if ($.type[0] !== "arrowFunction") {

//                                                     $i({
//                                                         message: `expected arrow function`,
//                                                         annotation: ann,
//                                                     })
//                                                 } else {
//                                                     pl.cc($.type[1], ($) => {
//                                                         if ($.implementation[0] !== "block") {

//                                                             $i({
//                                                                 message: `expected block`,
//                                                                 annotation: ann,
//                                                             })
//                                                         } else {
//                                                             pl.cc($.implementation[1], ($) => {
//                                                                 const block = $
//                                                                 pl.cc($d.analyseAlgorithmName(name.myValue), ($) => {
//                                                                     if ($ === null) {

//                                                                         $i({
//                                                                             message: `INVALID NAME ${name.myValue}`,
//                                                                             annotation: ann,
//                                                                         })
//                                                                     } else {
//                                                                         switch ($.type[0]) {
//                                                                             case "procedure":
//                                                                                 pl.cc($.type[1], ($) => {
//                                                                                     convertProcedureStatements(
//                                                                                         block.statements,
//                                                                                         $i,
//                                                                                         $d,
//                                                                                     )
//                                                                                 })
//                                                                                 break
//                                                                             case "function":
//                                                                                 pl.cc($.type[1], ($) => {
//                                                                                     convertFunctionStatements(
//                                                                                         {
//                                                                                             statements: block.statements,
//                                                                                             context: context,

//                                                                                         },
//                                                                                         $i,
//                                                                                         $d,
//                                                                                     )

//                                                                                 })
//                                                                                 break
//                                                                             default: pl.au($.type[0])
//                                                                         }
//                                                                     }
//                                                                 })
//                                                             })
//                                                         }
//                                                     })
//                                                 }
//                                             }
//                                         }))

//                                     })
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in implementation`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "root index":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         if ($.type[0] !== "export") {
//                             $i({
//                                 message: "only expect export statements in index.ts files",
//                                 annotation: $.annotation,
//                             })
//                         } else {
//                             pl.cc($.type[1], ($) => {
//                                 if ({
//                                     "./interface": null,
//                                     "./imp": null,
//                                     "./data": null,
//                                 }[$.file.strippedValue] === undefined) {

//                                     $i({
//                                         message: `unexpected file in rootindex: '${$.file.strippedValue}'`,
//                                         annotation: null,
//                                     })
//                                 }
//                             })
//                         }
//                     })

//                 })
//                 break
//             case "imp index":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         if ($.type[0] !== "export") {
//                             $i({
//                                 message: "only expect export statements in index.ts files",
//                                 annotation: $.annotation,
//                             })
//                         } else {
//                             pl.cc($.type[1], ($) => {
//                                 // if ($d.startsWith({
//                                 //     contextString: $.file.strippedValue,
//                                 //     searchString: "./public/",
//                                 // })) {

//                                 // } else {

//                                 //     $i({
//                                 //         message: "can only export files from public",
//                                 //         annotation: $.file.annotation,
//                                 //     })
//                                 // }
//                             })
//                         }
//                     })

//                 })
//                 break
//             case "interface index":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         if ($.type[0] !== "export") {
//                             $i({
//                                 message: "only expect export statements in index.ts files",
//                                 annotation: $.annotation,
//                             })
//                         } else {
//                             // pl.cc($.type[1], ($) => {
//                             //     if ($d.startsWith({
//                             //         contextString: $.file.strippedValue,
//                             //         searchString: "./public/",
//                             //     })) {

//                             //     } else {

//                             //         $i({
//                             //             message: "can only export files from public",
//                             //             annotation: $.file.annotation,
//                             //         })
//                             //     }
//                             // })
//                         }
//                     })

//                 })
//                 break
//             case "interface interfaces":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         const ann = $.annotation
//                         switch ($.type[0]) {
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "typeAlias":
//                                 pl.cc($.type[1], ($) => {
//                                     convertGlobalInterface(
//                                         $,
//                                         $i,
//                                         $d
//                                     )
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in interface`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "interface algorithms":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         const ann = $.annotation
//                         switch ($.type[0]) {
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "typeAlias":
//                                 pl.cc($.type[1], ($) => {
//                                     convertAlgorithm(
//                                         $,
//                                         $i,
//                                         $d
//                                     )
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in interface`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "interface dependencies":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         const ann = $.annotation
//                         switch ($.type[0]) {
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "typeAlias":
//                                 pl.cc($.type[1], ($) => {
//                                     convertDependency(
//                                         $,
//                                         $i,
//                                         $d
//                                     )
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in interface dependency`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "interface types":
//                 pl.cc($.fileType[1], ($) => {
//                     config.data.statements.forEach(($) => {
//                         const ann = $.annotation
//                         switch ($.type[0]) {
//                             case "import":
//                                 pl.cc($.type[1], ($) => {
//                                     doImport($)
//                                 })
//                                 break
//                             case "typeAlias":
//                                 pl.cc($.type[1], ($) => {
//                                     convertGlobalType(
//                                         $,
//                                         $i,
//                                         $d
//                                     )
//                                 })
//                                 break
//                             default: {
//                                 $i({
//                                     message: `unexpected statement '${$.type[0]}' in interface`,
//                                     annotation: $.annotation,
//                                 })
//                             }
//                         }
//                     })

//                 })
//                 break
//             case "unknown":
//                 pl.cc($.fileType[1], ($) => {
//                     $i({
//                         message: `unknown file type: ${$.pattern}`,
//                         annotation: null,
//                     })
//                 })
//                 break
//             default: pl.au($.fileType[0])
//         }
//     }


// }