// import * as gta from "generate-typesafe-ast"
// import { _typeReference } from "./typeReference"
// export const _type: gta.TValueType = ["choice", {
//     'options': {
//         "array": {
//             'type': ["node", {
//                 'name': `ArrayType`,
//                 'type': ["composite", {
//                     'type': ["reference", { 'name': `type` }],
//                 }]
//             }]
//         },
//         // identifier: {
//         //     cardinality: ["one", {}],
//         //     type: ["node", {
//         //         'name': `Identifier`
//         //     }]
//         // },
//         "boolean": {
//             'type': ["node", {
//                 'name': `BooleanKeyword`,
//                 'type': ["leaf", { 'hasTextContent': false }]
//             }]
//         },
//         "string": {
//             'type': ["node", {
//                 'name': `StringKeyword`,
//                 'type': ["leaf", { 'hasTextContent': false }]
//             }]
//         },
//         "number": {
//             'type': ["node", {
//                 'name': `NumberKeyword`,
//                 'type': ["leaf", { 'hasTextContent': false }]
//             }]
//         },
//         "literalType": {
//             'type': ["node", {
//                 'name': `LiteralType`,
//                 'type': ["composite", {
//                     'type': ["node", {
//                         'name': `NullKeyword`,
//                         'type': ["leaf", { 'hasTextContent': false }]
//                     }]
//                 }]
//             }],
//         },
//         // null: {
//         //     cardinality: ["one", {}],
//         //     type: ["node", {
//         //         'name': `NullKeyword`,
//         //         type: ["leaf", { 'hasTextContent': false }]
//         //     }]
//         // },
//         "typeLiteral": {
//             'type': ["node", {
//                 'name': `TypeLiteral`,
//                 'type': ["composite", {
//                     'cardinality': ["optional", {}],
//                     'type': ["choice", {
//                         'options': {
//                             "index": { // { [key: string]: T }
//                                 'type': ["node", {
//                                     'name': `IndexSignature`,
//                                     'type': ["composite", {
//                                         'type': ["sequence", {
//                                             'elements': ([
//                                                 {
//                                                     'name': `key`,
//                                                     'value': {
//                                                         'type': ["node", {
//                                                             'name': `Parameter`,
//                                                             'type': ["composite", {
//                                                                 'type': ["sequence", {
//                                                                     'elements': ([
//                                                                         {
//                                                                             'name': `name`,
//                                                                             'value': {
//                                                                                 'type': ["reference", {
//                                                                                     'name': `identifier`
//                                                                                 }],
//                                                                             }
//                                                                         },
//                                                                         {
//                                                                             'name': `type`,
//                                                                             'value': {
//                                                                                 'type': ["node", {
//                                                                                     'name': `StringKeyword`,
//                                                                                     'type': ["leaf", { 'hasTextContent': false }]
//                                                                                 }]
//                                                                             }
//                                                                         },
//                                                                     ])
//                                                                 }]
//                                                             }]
//                                                         }],
//                                                     }
//                                                 },
//                                                 {
//                                                     'name': `type`,
//                                                     'value': {
//                                                         'type': ["reference", { 'name': `type` }],
//                                                     },
//                                                 },
//                                             ])
//                                         }]
//                                     }]
//                                 }]
//                             },
//                             "properties": {
//                                 'cardinality': ["array", {}],
//                                 'type': ["node", {
//                                     'name': `PropertySignature`,
//                                     'type': ["composite", {
//                                         'type': ["sequence", {
//                                             'elements': ([
//                                                 // {
//                                                 //     'name': `modifiers`,
//                                                 //     value: {
//                                                 //         cardinality: ["array", {}],
//                                                 //         type: ["reference", { 'name': `modifier` }]
//                                                 //     }
//                                                 //     ,
//                                                 // },
//                                                 {
//                                                     'name': `readonly`,
//                                                     'value': {
//                                                         'type': ["node", {
//                                                             'name': `ReadonlyKeyword`,
//                                                             'type': ["leaf", { 'hasTextContent': false }]
//                                                         }],
//                                                     }
//                                                 },
//                                                 {
//                                                     'name': `name`,
//                                                     'value': {
//                                                         'type': ["node", {
//                                                             'name': `StringLiteral`,
//                                                             'type': ["leaf", { 'hasTextContent': true }]
//                                                         }],
//                                                     }
//                                                 },
//                                                 {
//                                                     'name': `questionToken`,
//                                                     'value': {
//                                                         'cardinality': ["optional", {}],
//                                                         'type': ["node", {
//                                                             'name': `QuestionToken`,
//                                                             'type': ["leaf", { 'hasTextContent': false }]
//                                                         }],
//                                                     }
//                                                 },
//                                                 {
//                                                     'name': `type`,
//                                                     'value': {
//                                                         'type': ["reference", { 'name': `type` }],
//                                                     },
//                                                 }
//                                             ])
//                                         }]
//                                     }]
//                                 }]
//                             },
//                         }
//                     }],
//                 }]
//             }]
//         },
//         "typeReference": {
//             'type': _typeReference
//         },
//         "union": {
//             'type': ["node", {
//                 'name': `UnionType`,
//                 'type': ["composite", {
//                     'cardinality': ["array", {}],
//                     'type': ["node", {
//                         'name': `TupleType`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `state`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `LiteralType`,
//                                                 'type': ["composite", {
//                                                     'type': ["node", {
//                                                         'name': `StringLiteral`,
//                                                         'type': ["leaf", { 'hasTextContent': true }]
//                                                     }]
//                                                 }]
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `data`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `type`,
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }],
//                         }]
//                     }]
//                 }],
//             }]
//         },
//     }
// }]
