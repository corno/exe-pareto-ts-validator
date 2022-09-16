// import * as pr from "pareto-core-lib"
// import * as pf from "pareto-filesystem-res"
// export function readWorkspace(
//     $: {
//         directoryPath: string
//     },
//     $p: {
//         onError: ($: {
//             message: string
//         }) => void
//         fileCallback: (
//             filePath: string,
//         ) => void
//     }
// ) {
//     const $dp = $.directoryPath


//     pf.wrapDirectory(
//         {
//             rootDirectory: $.directoryPath,
//         },
//         {
//             callback: ($i) => {
//                 $i.readDirWithFileTypes(
//                     {
//                         path: $.directoryPath,
//                         idStyle: ["name only", {}]
//                     },
//                     {
//                         callbacks: {
//                             directory: ($) => {
//                                 $p.fileCallback($.id)
//                             },
//                             file: ($) => {
//                                 $p.onError({ message: `Unexpected File: ${$dp}/${$.id} ` })
//                             },
//                         },
//                         onEnd: () => {

//                         },
//                     }
//                 )
//             },
//             onEnd: () => {

//             },
//             onError: () => {
//                 $p.onError({ message: "ERROR WHILE READING DIR" })
//             }
//         },
//     )

// }