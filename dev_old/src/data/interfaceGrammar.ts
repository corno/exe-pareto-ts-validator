// import * as gta from "generate-typesafe-ast"
// import { _callback } from "./callback"
// import { _importDeclaration } from "./importDeclaration"
// import { _interface } from "./interface"
// import { _type } from "./type"
// export const _interfaceGrammar: gta.TGrammar = {
//     'globalValueTypes': {
//         "callback": _callback,
//         "identifier": ["node", {
//             'name': `Identifier`,
//             'type': ["leaf", { 'hasTextContent': true }]
//         }],
//         "interface": _interface,
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
//                             'type': _importDeclaration,
//                         }
//                     },
//                     {
//                         'name': `interfaces`,
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
//                                                 'name': `definition`,
//                                                 'value': {
                                                    
//                                                     'type': ["reference", { 'name': `interface` }],
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
