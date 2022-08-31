// import * as gta from "generate-typesafe-ast"

// export const _literalDataInitialization: gta.TValueType = ["choice", {
//     'options': {
//         "state": {
//             'type': ["node", {
//                 'name': `ArrayLiteralExpression`,
//                 'type': ["composite", {
//                     'type': ["sequence", {
//                         'elements': ([
//                             {
//                                 'name': `state`,
//                                 'value': {
//                                     'type': ["node", {
//                                         'name': `StringLiteral`,
//                                         'type': ["leaf", { 'hasTextContent': true }]
//                                     }]
//                                 }
//                             },
//                             {
//                                 'name': `data`,
//                                 'value': {
//                                     'type': ["reference", {
//                                         'name': `initialization`,
//                                     }]
//                                 }
//                             }
//                         ])
//                     }],
//                 }]
//             }]
//         },
//         "false": {
//             'type': ["node", {
//                 'name': `FalseKeyword`,
//                 'type': ["leaf", { 'hasTextContent': false }]
//             }]
//         },
//         "stringLiteral": {
//             'type': ["node", {
//                 'name': `NoSubstitutionTemplateLiteral`,
//                 'type': ["leaf", { 'hasTextContent': true }]
//             }]
//         },
//         "numericLiteral": {
//             'type': ["node", {
//                 'name': `NumericLiteral`,
//                 'type': ["leaf", { 'hasTextContent': true }],
//             }]
//         },
//         "null": {
//             'type': ["node", {
//                 'name': `NullKeyword`,
//                 'type': ["leaf", { 'hasTextContent': false }],
//             }]
//         },
//         // stringLiteral: { //don't use this one, use 'noSubstitutionTemplateLiteral' to make it visible this is a literal
//         //     cardinality: ["one", {}],
//         //     type: ["node", {
//         //         'name': `StringLiteral`,
//         //         type: ["leaf", { 'hasTextContent': true }],
//         //     }]
//         // },
//         "true": {
//             'type': ["node", {
//                 'name': `TrueKeyword`,
//                 'type': ["leaf", { 'hasTextContent': false }],
//             }]
//         },
//         "array": {
//             'type': ["node", {
//                 'name': `ParenthesizedExpression`,
//                 'type': ["composite", { 
//                     'type': ["node", {
//                         'name': `ArrayLiteralExpression`,
//                         'type': ["composite", {
//                             'cardinality': ["array", {    }],
//                             'type': ["reference", {
//                                 'name': `initialization`
//                             }]
//                         }]
//                     }],
//                  }],
//             }]
//         },
//     }
// }]