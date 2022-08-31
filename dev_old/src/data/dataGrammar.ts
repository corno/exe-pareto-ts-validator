// import * as gta from "generate-typesafe-ast"
// import { _importDeclaration } from "./importDeclaration"
// import { _literalDataInitialization } from "./literalDataInitialization"

// export const _dataGrammar: gta.TGrammar = {
//     'globalValueTypes': {
//         "identifier": ["node", {
//             'name': `Identifier`,
//             'type': ["leaf", { 'hasTextContent': true }]
//         }],
//         "initialization": ["choice", {
//             'options': {
//                 "identifier": {
//                     'type': ["node", {
//                         'name': `Identifier`,
//                         'type': ["leaf", { 'hasTextContent': true }]
//                     }]
//                 },
//                 "literal": {
//                     'type': ["reference", {
//                         'name': `literalDataInitialization`
//                     }]
//                 },
//                 "objectLiteral": {
//                     'type': ["node", {
//                         'name': `ObjectLiteralExpression`,
//                         'type': ["composite", {
//                             'cardinality': ["array", {}],
//                             'type': ["node", {
//                                 'name': `PropertyAssignment`,
//                                 'type': ["composite", {
//                                     'type': ["sequence", {
//                                         'elements': ([
//                                             {
//                                                 'name': `name`,
//                                                 'value': {
//                                                     'type': ["node", {
//                                                         'name': `StringLiteral`,
//                                                         'type': ["leaf", { 'hasTextContent': true }],
//                                                     }]
//                                                 }
//                                             },
//                                             {
//                                                 'name': `initialization`,
//                                                 'value': {
//                                                     'type': ["reference", { 'name': `initialization` }],
//                                                 }
//                                             },
//                                         ])
//                                     }]
//                                 }]
//                             }]
//                         }]
//                     }]
//                 },
//             }
//         }],
//         "literalDataInitialization": _literalDataInitialization,
//         "typelessParameter": ["node", {
//             'name': `Parameter`,
//             'type': ["composite", {
//                 'type': ["reference", {
//                     'name': `identifier`
//                 }]
//             }]
//         }],
//     },
//     'root': {
//         'name': `SourceFile`,
//         'type': ["composite", {
//             'type': ["sequence", {
//                 'elements': ([
//                     {
//                         'name': `import`,
//                         'value': {
//                             'cardinality': ["array", {}],
//                             'type': _importDeclaration,
//                         }
//                     },
//                     {
//                         'name': `variables`,
//                         'value': {
//                             'cardinality': ["array", {}],
//                             'type': ["node", {
//                                 'name': `VariableStatement`,
//                                 'type': ["composite", {
//                                     'type': ["sequence", {
//                                         'elements': ([
//                                             {
//                                                 'name': `export`,
//                                                 'value': {
//                                                     'type': ["node", {
//                                                         'name': `ExportKeyword`,
//                                                         'type': ["leaf", { 'hasTextContent': false }]
//                                                     }]
//                                                 }
//                                             },
//                                             {
//                                                 'name': `variableDeclarationList`,
//                                                 'value': {
//                                                     'type': ["node", {
//                                                         'name': `VariableDeclarationList`,
//                                                         'type': ["composite", {
//                                                             'cardinality': ["array", {}],
//                                                             'type': ["node", {
//                                                                 'name': `VariableDeclaration`,
//                                                                 'type': ["composite", {
//                                                                     'type': ["sequence", {
//                                                                         'elements': ([
//                                                                             {
//                                                                                 'name': `name`,
//                                                                                 'value': {
//                                                                                     'type': ["node", {
//                                                                                         'name': `Identifier`,
//                                                                                         'type': ["leaf", { 'hasTextContent': true }],
//                                                                                     }]
//                                                                                 },
//                                                                             },
//                                                                             {
//                                                                                 'name': `type`,
//                                                                                 'value': {
//                                                                                     'type': ["node", {
//                                                                                         'name': `TypeReference`,
//                                                                                         'type': ["composite", {
//                                                                                             'type': ["sequence", {
//                                                                                                 'elements': ([
//                                                                                                     {
//                                                                                                         'name': `name`,
//                                                                                                         'value': {
//                                                                                                             'type': ["node", {
//                                                                                                                 'name': `QualifiedName`,
//                                                                                                                 'type': ["composite", {
//                                                                                                                     'type': ["sequence", {
//                                                                                                                         'elements': ([
//                                                                                                                             {
//                                                                                                                                 'name': `context`,
//                                                                                                                                 'value': {
//                                                                                                                                     'type': ["node", {
//                                                                                                                                         'name': `Identifier`,
//                                                                                                                                         'type': ["leaf", { 'hasTextContent': true }],
//                                                                                                                                     }]
//                                                                                                                                 }
//                                                                                                                             },
//                                                                                                                             {
//                                                                                                                                 'name': `type`,
//                                                                                                                                 'value': {
//                                                                                                                                     'type': ["node", {
//                                                                                                                                         'name': `Identifier`,
//                                                                                                                                         'type': ["leaf", { 'hasTextContent': true }],
//                                                                                                                                     }]
//                                                                                                                                 },
//                                                                                                                             },
//                                                                                                                         ])
//                                                                                                                     }],
//                                                                                                                 }]
//                                                                                                             }]
//                                                                                                         }
//                                                                                                     },
//                                                                                                     // {
//                                                                                                     //     'name': `parameters`,
//                                                                                                     //     value: {
//                                                                                                     //         cardinality: ["array", {}],
//                                                                                                     //         type: ["reference", { 'name': `type` }],
//                                                                                                     //     }
//                                                                                                     // },
//                                                                                                 ])
//                                                                                             }]
//                                                                                         }]
//                                                                                     }],
//                                                                                 },
//                                                                             },
//                                                                             {
//                                                                                 'name': `one`,
//                                                                                 'value': {
//                                                                                     'cardinality': ["optional", {}],
//                                                                                     'type': ["reference", { 'name': `initialization` }],
//                                                                                 },
//                                                                             },
//                                                                         ])
//                                                                     }]
//                                                                 }]
//                                                             }]
//                                                         }]
//                                                     }]
//                                                 },
//                                             },
//                                         ])
//                                     }]
//                                 }]
//                             }]
//                         }
//                     },
//                     {
//                         'name': `endOfFile`,
//                         'value': {
//                             'type': ["node", {
//                                 'name': `EndOfFileToken`,
//                                 'type': ["leaf", { 'hasTextContent': false }],
//                             }]
//                         }
//                     }
//                 ])
//             }]
//         }]
//     }
// }
