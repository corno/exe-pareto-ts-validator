// import * as gta from "generate-typesafe-ast"
// import { _importDeclaration } from "./importDeclaration"
// import { _literalDataInitialization } from "./literalDataInitialization"
// import { _type } from "./type"
// export const _typeGrammar: gta.TGrammar = {
//     'globalValueTypes': {
//         "identifier": ["node", {
//             'name': `Identifier`,
//             'type': ["leaf", { 'hasTextContent': true }]
//         }],
//         "type": _type,
//     },
//     'root': {
//         'name': `SourceFile`,
//         'type': ["composite", {

//             'type': ["sequence", {
//                 'elements': ([
//                     {
//                         'name': `imports`,
//                         'value': {
//                             'cardinality': ["array", {}],
//                             'type': _importDeclaration
//                         }
//                     },
//                     {
//                         'name': `globals`,
//                         'value': {
//                             'cardinality': ["array", {}],
//                             'type': ["node", {
//                                 'name': `TypeAliasDeclaration`,
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
//                                                 'name': `name`,
//                                                 'value': {

//                                                     'type': ["reference", {
//                                                         'name': `identifier`
//                                                     }],
//                                                 }
//                                             },
//                                             {
//                                                 'name': `typeParameters`,
//                                                 'value': {
//                                                     'cardinality': ["array", {}],
//                                                     'type': ["node", {
//                                                         'name': `TypeParameter`,
//                                                         'type': ["composite", {

//                                                             'type': ["reference", {
//                                                                 'name': `identifier`
//                                                             }],
//                                                         }]
//                                                     }]
//                                                 },
//                                             },
//                                             {
//                                                 'name': `type`,
//                                                 'value': {

//                                                     'type': ["reference", { 'name': `type` }],
//                                                 },
//                                             }
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
//                                 'type': ["leaf", { 'hasTextContent': false }]
//                             }]
//                         }
//                     }
//                 ])
//             }]
//         }]
//     }
// }
