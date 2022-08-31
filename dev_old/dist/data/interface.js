"use strict";
// import * as gta from "generate-typesafe-ast"
// export const _interface: gta.TValueType = ["choice", {
//     'options': {
//         "function": {
//             'type': ["node", {
//                 'name': `FunctionType`,
//                 'type': ["composite", {
//                     'type': ["sequence", {
//                         'elements': ([
//                             {
//                                 'name': `dataParameter`,
//                                 'value': {
//                                     'type': ["node", {
//                                         'name': `Parameter`,
//                                         'type': ["composite", {
//                                             'type': ["sequence", {
//                                                 'elements': ([
//                                                     {
//                                                         'name': `name`,
//                                                         'value': {
//                                                             'type': ["reference", {
//                                                                 'name': `identifier`,
//                                                             }],
//                                                         },
//                                                     },
//                                                     {
//                                                         'name': `type`,
//                                                         'value': {
//                                                             'type': ["reference", {
//                                                                 'name': `type`
//                                                             }],
//                                                         }
//                                                     }
//                                                 ])
//                                             }],
//                                         }]
//                                     }]
//                                 },
//                             },
//                             {
//                                 'name': `callbackParameter`,
//                                 'value': {
//                                     'cardinality': ["optional", {}],
//                                     'type': ["reference", {
//                                         'name': `callback`
//                                     }],
//                                 },
//                             },
//                             {
//                                 'name': `void`,
//                                 'value': {
//                                     'type': ["node", {
//                                         'name': `VoidKeyword`,
//                                         'type': ["leaf", { 'hasTextContent': false }]
//                                     }],
//                                 },
//                             },
//                         ])
//                     }]
//                 }]
//             }]
//         },
//         "typeLiteral": {
//             'type': ["node", {
//                 'name': `TypeLiteral`,
//                 'type': ["composite", {
//                     'cardinality': ["array", {}],
//                     'type': ["node", {
//                         'name': `PropertySignature`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     // {
//                                     //     'name': `modifiers`,
//                                     //     value: {
//                                     //         cardinality: ["array", {}],
//                                     //         type: ["reference", { 'name': `modifier` }]
//                                     //     }
//                                     //     ,
//                                     // },
//                                     {
//                                         'name': `readonly`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `ReadonlyKeyword`,
//                                                 'type': ["leaf", { 'hasTextContent': false }]
//                                             }],
//                                         }
//                                     },
//                                     {
//                                         'name': `name`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `StringLiteral`,
//                                                 'type': ["leaf", { 'hasTextContent': true }]
//                                             }],
//                                         }
//                                     },
//                                     {
//                                         'name': `questionToken`,
//                                         'value': {
//                                             'cardinality': ["optional", {}],
//                                             'type': ["node", {
//                                                 'name': `QuestionToken`,
//                                                 'type': ["leaf", { 'hasTextContent': false }]
//                                             }],
//                                         }
//                                     },
//                                     {
//                                         'name': `type`,
//                                         'value': {
//                                             'cardinality': ["optional", {}],
//                                             'type': ["reference", { 'name': `interface` }],
//                                         },
//                                     }
//                                 ])
//                             }]
//                         }]
//                     }]
//                 }]
//             }]
//         },
//         "typeReference": {
//             'type': ["node", {
//                 'name': `TypeReference`,
//                 'type': ["composite", {
//                     'type': ["sequence", {
//                         'elements': ([
//                             {
//                                 'name': `name`,
//                                 'value': {
//                                     "cardinality": ["one", {}],
//                                     'type': ["reference", {
//                                         'name': `identifier`
//                                     }]
//                                 }
//                             },
//                             {
//                                 'name': `parameters`,
//                                 'value': {
//                                     "cardinality": ["array", {}],
//                                     'type': ["reference", { 'name': `type` }],
//                                 }
//                             },
//                         ])
//                     }]
//                 }]
//             }]
//         }
//     }
// }]
