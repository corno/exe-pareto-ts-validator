// import * as pw from "pareto-core-raw"

// import * as ap from "lib-analyse-path"

// export const _dataDirectory: ap.TNode = {
//     'type': ["directory", {
//         'type': ["files dictionary", {
//             'allow missing extension': true,
//             'extensionsX': pw.wrapRawArray([
//                 `astn-schema`,
//                 `astn`,
//                 `csv`,
//                 `html`,
//                 `json`,
//                 `sh`,
//                 `test`,
//                 `ts`,
//                 `txt`,
//             ]),
//             'recursive': true
//         }]
//     }],
// }

// export const _typescriptDirectory: ap.TNode = {
//     'type': ["directory", {
//         'type': ["type", {
//             'nodesX': pw.wrapRawDictionary({
//                 "data": _dataDirectory,
//                 "package.json": {
//                     'type': ["file", {}]
//                 },
//                 "package-lock.json": {
//                     'type': ["file", {}]
//                 },
//                 "src": {
//                     'type': ["directory", {
//                         'type': ["files dictionary", {
//                             'allow missing extension': false,
//                             'extensionsX': pw.wrapRawArray([
//                                 `ts`,
//                             ]),
//                             'recursive': true
//                         }]
                        
//                     }],
//                 },
//                 "tsconfig.json": {
//                     'type': ["file", {}]
//                 },
//             })
//         }]
//     }]
// }
// export const _paretoProject: ap.TDirectory = {
//     'type': ["type", {
//         'nodesX': pw.wrapRawDictionary({
//             ".gitignore": {
//                 'type': ["file", {}]
//             },
//             "custom scripts": {
//                 'type': ["directory", {
//                     'type': ["type", {
//                         'nodesX': pw.wrapRawDictionary({
//                             "package.json": {
//                                 'type': ["file", {}]
//                             },
//                         })
//                     }]
//                 }]
//             },
//             "dev": _typescriptDirectory,
//             "pareto": {
//                 'type': ["directory", {
//                     'type': ["type", {
//                         'nodesX': pw.wrapRawDictionary({
//                             "package.json": {
//                                 'type': ["file", {}]
//                             },
//                             "package-lock.json": {
//                                 'type': ["file", {}]
//                             },
//                             "scripts": {
//                                 'type': ["directory", {
//                                     'type': ["files dictionary", {
//                                         'allow missing extension': false,
//                                         'extensionsX': pw.wrapRawArray([
//                                             `sh`,
//                                         ]),
//                                         'recursive': false
//                                     }]
//                                 }],
//                             }
//                         })
//                     }]
//                 }],
//             },
//             "pub": _typescriptDirectory,
//             "README.md": {
//                 'type': ["file", {}]
//             },
//             "test": _typescriptDirectory,
//             "tmp": _dataDirectory,
//         })
//     }]
// }