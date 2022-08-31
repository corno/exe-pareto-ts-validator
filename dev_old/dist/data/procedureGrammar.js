"use strict";
// import * as gta from "generate-typesafe-ast"
// import { _callback } from "./callback"
// import { _importDeclaration } from "./importDeclaration"
// import { _interface } from "./interface"
// import { _parameterTriplet } from "./parameterTriplet"
// import { _type } from "./type"
// import { _typeReference } from "./typeReference"
// import { _literalDataInitialization } from "./literalDataInitialization"
// export const _procedureGrammar: gta.TGrammar = {
//     'globalValueTypes': {
//         "block": ["node", {
//             'name': `Block`,
//             'type': ["composite", {
//                 'type': ["sequence", {
//                     'elements': ([
//                         {
//                             'name': `variables`,
//                             'value': {
//                                 'cardinality': ["array", {}],
//                                 'type': ["node", {
//                                     'name': `VariableStatement`,
//                                     'type': ["composite", {
//                                         'type': ["node", {
//                                             'name': `VariableDeclarationList`,
//                                             'type': ["composite", {
//                                                 'type': ["node", {
//                                                     'name': `VariableDeclaration`,
//                                                     'type': ["composite", {
//                                                         'type': ["sequence", {
//                                                             'elements': ([
//                                                                 {
//                                                                     'name': `name`,
//                                                                     'value': {
//                                                                         'type': ["reference", {
//                                                                             'name': `identifier`,
//                                                                         }]
//                                                                     }
//                                                                 },
//                                                                 {
//                                                                     'name': `type`,
//                                                                     'value': {
//                                                                         'cardinality': ["optional", {}], //for example for: let x: pt.Optional<XXX> = y
//                                                                         'type': ["reference", {
//                                                                             'name': `type`,
//                                                                         }]
//                                                                     }
//                                                                 },
//                                                                 {
//                                                                     'name': `initialization`,
//                                                                     'value': {
//                                                                         'type': ["reference", {
//                                                                             'name': `initialization`,
//                                                                         }]
//                                                                     }
//                                                                 },
//                                                             ]),
//                                                         }]
//                                                     }]
//                                                 }]
//                                             }]
//                                         }]
//                                     }]
//                                 }]
//                             }
//                         },
//                         {
//                             'name': `nestedProcedures`,
//                             'value': {
//                                 'cardinality': ["array", {}],
//                                 'type': ["node", {
//                                     'name': `FunctionDeclaration`,
//                                     'type': ["composite", {
//                                         'type': ["sequence", {
//                                             'elements': ([
//                                                 {
//                                                     'name': `name`,
//                                                     'value': {
//                                                         'type': ["reference", {
//                                                             'name': `identifier`,
//                                                         }]
//                                                     }
//                                                 },
//                                                 {
//                                                     'name': `parameters`,
//                                                     'value': {
//                                                         'type': ["reference", {
//                                                             'name': `parameterTriplet`,
//                                                         }]
//                                                     },
//                                                 },
//                                                 {
//                                                     'name': `void`,
//                                                     'value': {
//                                                         'type': ["node", {
//                                                             'name': `VoidKeyword`,
//                                                             'type': ["leaf", { 'hasTextContent': false }]
//                                                         }]
//                                                     },
//                                                 },
//                                                 {
//                                                     'name': `block`,
//                                                     'value': {
//                                                         'type': ["reference", {
//                                                             'name': `block`,
//                                                         }]
//                                                     },
//                                                 },
//                                             ]),
//                                         }]
//                                     }]
//                                 }]
//                             }
//                         },
//                         {
//                             'name': `statements`,
//                             'value': {
//                                 'cardinality': ["array", {}],
//                                 'type': ["choice", {
//                                     'options': {
//                                         "expressionStatement": {
//                                             'type': ["node", {
//                                                 'name': `ExpressionStatement`,
//                                                 'type': ["composite", {
//                                                     'type': ["choice", {
//                                                         'options': {
//                                                             "binaryExpression": {
//                                                                 'type': ["node", {
//                                                                     'name': `BinaryExpression`,
//                                                                     'type': ["composite", {
//                                                                         'type': ["sequence", {
//                                                                             'elements': ([
//                                                                                 {
//                                                                                     'name': `referencedVariable`,
//                                                                                     'value': {
//                                                                                         'type': ["reference", {
//                                                                                             'name': `identifier`
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                                 {
//                                                                                     'name': `operator`,
//                                                                                     'value': {
//                                                                                         'type': ["choice", {
//                                                                                             'options': {
//                                                                                                 "equalsToken": {
//                                                                                                     'type': ["node", {
//                                                                                                         'name': `EqualsToken`,
//                                                                                                         'type': ["leaf", {
//                                                                                                             'hasTextContent': false,
//                                                                                                         }]
//                                                                                                     }]
//                                                                                                 },
//                                                                                                 "plusEqualsToken": {
//                                                                                                     'type': ["node", {
//                                                                                                         'name': `PlusEqualsToken`,
//                                                                                                         'type': ["leaf", {
//                                                                                                             'hasTextContent': false,
//                                                                                                         }]
//                                                                                                     }]
//                                                                                                 },
//                                                                                             }
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                                 {
//                                                                                     'name': `initializer`,
//                                                                                     'value': {
//                                                                                         'type': ["reference", {
//                                                                                             'name': `initialization`
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                             ])
//                                                                         }]
//                                                                     }]
//                                                                 }]
//                                                             },
//                                                             "call": {
//                                                                 'type': ["node", {
//                                                                     'name': `CallExpression`,
//                                                                     'type': ["composite", {
//                                                                         'type': ["sequence", {
//                                                                             'elements': ([
//                                                                                 {
//                                                                                     'name': `selection`,
//                                                                                     'value': {
//                                                                                         'type': ["reference", {
//                                                                                             'name': `selection`
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                                 {
//                                                                                     'name': `dataArgument`,
//                                                                                     'value': {
//                                                                                         'type': ["reference", {
//                                                                                             'name': `initialization`
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                                 {
//                                                                                     'name': `callbackArgument`,
//                                                                                     'value': {
//                                                                                         'cardinality': ["optional", {}],
//                                                                                         'type': ["reference", {
//                                                                                             'name': `initialization`
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                                 {
//                                                                                     'name': `thirdArgument`,
//                                                                                     'value': {
//                                                                                         'cardinality': ["optional", {}],
//                                                                                         'type': ["reference", {
//                                                                                             'name': `initialization`
//                                                                                         }]
//                                                                                     }
//                                                                                 },
//                                                                             ])
//                                                                         }]
//                                                                     }]
//                                                                 }]
//                                                             }
//                                                         },
//                                                     }]
//                                                 }]
//                                             }]
//                                         },
//                                         "ifStatement": {
//                                             'type': ["node", {
//                                                 'name': `IfStatement`,
//                                                 'type': ["composite", {
//                                                     'type': ["sequence", {
//                                                         'elements': ([
//                                                             {
//                                                                 'name': `expression`,
//                                                                 'value': {
//                                                                     'type': ["reference", {
//                                                                         'name': `booleanExpression`
//                                                                     }]
//                                                                 }
//                                                             },
//                                                             {
//                                                                 'name': `then`,
//                                                                 'value': {
//                                                                     'type': ["reference", {
//                                                                         'name': `block`
//                                                                     }]
//                                                                 }
//                                                             },
//                                                             {
//                                                                 'name': `else`,
//                                                                 'value': {
//                                                                     'cardinality': ["optional", {}],
//                                                                     'type': ["reference", {
//                                                                         'name': `block`
//                                                                     }]
//                                                                 }
//                                                             }
//                                                         ])
//                                                     }]
//                                                 }]
//                                             }]
//                                         }
//                                     }
//                                 }]
//                             }
//                         }
//                     ])
//                 }],
//             }]
//         }],
//         "booleanExpression": ["choice", {
//             'options': {
//                 "binaryExpression": {
//                     'type': ["node", {
//                         'name': `BinaryExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `left`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `identifier`
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `operator`,
//                                         'value': {
//                                             'type': ["choice", {
//                                                 'options': {
//                                                     "notEqual": {
//                                                         'type': ["node", {
//                                                             'name': `ExclamationEqualsEqualsToken`,
//                                                             'type': ["leaf", { 'hasTextContent': false }]
//                                                         }]
//                                                     },
//                                                     // "equal": { DON'T USE THIS ONE
//                                                     //     'type': ["node", {
//                                                     //         'name': `EqualsEqualsEqualsToken`,
//                                                     //         'type': ["leaf", { 'hasTextContent': false }]
//                                                     //     }]
//                                                     // }
//                                                 }
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `right`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `NullKeyword`,
//                                                 'type': ["leaf", { 'hasTextContent': false }]
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }]
//                         }],
//                     }]
//                 },
//                 "prefixUnaryExpression": {
//                     'type': ["node", {
//                         'name': `PrefixUnaryExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `data`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `initialization`
//                                             }]
//                                         }
//                                     }
//                                 ])
//                             }]
//                         }]
//                     }]
//                 },
//             },
//         }],
//         "callback": _callback,
//         "identifier": ["node", {
//             'name': `Identifier`,
//             'type': ["leaf", { 'hasTextContent': true }]
//         }],
//         "interface": _interface,
//         "initialization": ["choice", {
//             'options': {
//                 "temlateExpression": {
//                     'type': ["node", {
//                         'name': `TemplateExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `head`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `TemplateHead`,
//                                                 'type': ["leaf", {
//                                                     'hasTextContent': true,
//                                                 }]
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `span`,
//                                         'value': {
//                                             'cardinality': ["array", {}],
//                                             'type': ["node", {
//                                                 'name': `TemplateSpan`,
//                                                 'type': ["composite", {
//                                                     'type': ["sequence", {
//                                                         'elements': ([
//                                                             {
//                                                                 'name': `expression`,
//                                                                 'value': {
//                                                                     'type': ["reference", { 'name': `initialization` }],
//                                                                 }
//                                                             },
//                                                             {
//                                                                 'name': `x`,
//                                                                 'value': {
//                                                                     'type': ["choice", {
//                                                                         'options': {
//                                                                             'middle': {
//                                                                                 'type': ["node", {
//                                                                                     'name': `TemplateMiddle`,
//                                                                                     'type': ["leaf", { 'hasTextContent': true }],
//                                                                                 }],
//                                                                             },
//                                                                             'tail': {
//                                                                                 'type': ["node", {
//                                                                                     'name': `TemplateTail`,
//                                                                                     'type': ["leaf", { 'hasTextContent': true }]
//                                                                                 }],
//                                                                             }
//                                                                         }
//                                                                     }],
//                                                                 }
//                                                             },
//                                                         ])
//                                                     }]
//                                                 }]
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }]
//                         }]
//                     }]
//                 },
//                 "binaryExpression": {
//                     'type': ["node", {
//                         'name': `BinaryExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `left`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `selection`
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `operator`,
//                                         'value': {
//                                             'type': ["choice", {
//                                                 'options': {
//                                                     "PlusToken": {
//                                                         'type': ["node", {
//                                                             'name': `PlusToken`,
//                                                             'type': ["leaf", {
//                                                                 'hasTextContent': false,
//                                                             }]
//                                                         }]
//                                                     },
//                                                 }
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `right`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `initialization`
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }],
//                         }]
//                     }]
//                 },
//                 "functionImplementation": {
//                     'type': ["node", {
//                         'name': `ArrowFunction`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `dataParameter`,
//                                         'value': {
//                                             'cardinality': ["optional", {}],
//                                             'type': ["reference", {
//                                                 'name': `typelessParameter`,
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `interfaceParameter`,
//                                         'value': {
//                                             'cardinality': ["optional", {}],
//                                             'type': ["reference", {
//                                                 'name': `typelessParameter`,
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `callbackParameter`,
//                                         'value': {
//                                             'cardinality': ["optional", {}],
//                                             'type': ["reference", {
//                                                 'name': `typelessParameter`,
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `equalsGreaterThan`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `EqualsGreaterThanToken`,
//                                                 'type': ["leaf", {
//                                                     'hasTextContent': false,
//                                                 }],
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `block`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `block`,
//                                             }]
//                                         }
//                                     },
//                                 ]),
//                             }],
//                         }]
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
//                 "selection": {
//                     'type': ["reference", {
//                         'name': `selection`,
//                     }]
//                 }
//             }
//         }],
//         "literalDataInitialization": _literalDataInitialization,
//         "parameterTriplet": _parameterTriplet,
//         "selection": ["choice", {
//             'options': {
//                 "call": {
//                     'type': ["node", {
//                         'name': `CallExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `name`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `selection`
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `initialization`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `initialization`
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }]
//                         }],
//                     }]
//                 },
//                 "conditial": {
//                     'type': ["node", {
//                         'name': `ConditionalExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `condition`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `selection`
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `questionToken`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `QuestionToken`,
//                                                 'type': ["leaf", { 'hasTextContent': false }]
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `then`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `initialization`
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `colon`,
//                                         'value': {
//                                             'type': ["node", {
//                                                 'name': `ColonToken`,
//                                                 'type': ["leaf", { 'hasTextContent': false }]
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `else`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `initialization`
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }]
//                         }]
//                     }]
//                 },
//                 "identifier": {
//                     'type': ["reference", {
//                         'name': `identifier`,
//                     }]
//                 },
//                 "propertyAccess": {
//                     'type': ["node", {
//                         'name': `PropertyAccessExpression`,
//                         'type': ["composite", {
//                             'type': ["sequence", {
//                                 'elements': ([
//                                     {
//                                         'name': `first`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `selection`,
//                                             }]
//                                         }
//                                     },
//                                     {
//                                         'name': `second`,
//                                         'value': {
//                                             'type': ["reference", {
//                                                 'name': `identifier`,
//                                             }]
//                                         }
//                                     },
//                                 ])
//                             }]
//                         }]
//                     }]
//                 }
//             }
//         }],
//         "type": _type,
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
//                         'name': `imports`,
//                         'value': {
//                             'cardinality': ["array", {}],
//                             'type': _importDeclaration,
//                         }
//                     },
//                     {
//                         'name': `procedures`,
//                         'value': {
//                             'cardinality': ["array", {}],
//                             'type': ["node", {
//                                 'name': `FunctionDeclaration`,
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
//                                                 'name': `parameters`,
//                                                 'value': {
//                                                     'cardinality': ["array", {}],
//                                                     'type': ["node", {
//                                                         'name': `Parameter`,
//                                                         'type': ["composite", {
//                                                             'type': ["sequence", {
//                                                                 'elements': ([
//                                                                     {
//                                                                         'name': `name`,
//                                                                         'value': {
//                                                                             'type': ["reference", {
//                                                                                 'name': `identifier`,
//                                                                             }]
//                                                                         }
//                                                                     },
//                                                                     {
//                                                                         'name': `type`,
//                                                                         'value': {
//                                                                             'type': ["choice", {
//                                                                                 'options': {
//                                                                                     "func": {
//                                                                                         'type': ["node", {
//                                                                                             'name': `FunctionType`,
//                                                                                             'type': ["composite", {
//                                                                                                 'type': ["sequence", {
//                                                                                                     'elements': ([
//                                                                                                         {
//                                                                                                             'name': `parameters`,
//                                                                                                             'value': {
//                                                                                                                 'type': ["node", {
//                                                                                                                     'name': `Parameter`,
//                                                                                                                     'type': ["composite", {
//                                                                                                                         'type': ["sequence", {
//                                                                                                                             'elements': ([
//                                                                                                                                 {
//                                                                                                                                     'name': `name`,
//                                                                                                                                     'value': {
//                                                                                                                                         'type': ["reference", {
//                                                                                                                                             'name': `identifier`
//                                                                                                                                         }]
//                                                                                                                                     }
//                                                                                                                                 },
//                                                                                                                                 {
//                                                                                                                                     'name': `type`,
//                                                                                                                                     'value': {
//                                                                                                                                         'type': ["reference", {
//                                                                                                                                             'name': `type`
//                                                                                                                                         }]
//                                                                                                                                     }
//                                                                                                                                 },
//                                                                                                                             ])
//                                                                                                                         }]
//                                                                                                                     }]
//                                                                                                                 }]
//                                                                                                             }
//                                                                                                         },
//                                                                                                         {
//                                                                                                             'name': `returnType`,
//                                                                                                             'value': {
//                                                                                                                 'type': ["reference", {
//                                                                                                                     'name': `type`,
//                                                                                                                 }]
//                                                                                                             }
//                                                                                                         }
//                                                                                                     ])
//                                                                                                 }]
//                                                                                             }]
//                                                                                         }]
//                                                                                     },
//                                                                                     "typeReference": {
//                                                                                         'type': ["node", {
//                                                                                             'name': `TypeReference`,
//                                                                                             'type': ["composite", {
//                                                                                                 'type': ["sequence", {
//                                                                                                     'elements': ([
//                                                                                                         {
//                                                                                                             'name': `name`,
//                                                                                                             'value': {
//                                                                                                                 'type': ["node", {
//                                                                                                                     'name': `QualifiedName`,
//                                                                                                                     'type': ["composite", {
//                                                                                                                         'type': ["sequence", {
//                                                                                                                             'elements': ([
//                                                                                                                                 {
//                                                                                                                                     'name': `context`,
//                                                                                                                                     'value': {
//                                                                                                                                         'type': ["node", {
//                                                                                                                                             'name': `Identifier`,
//                                                                                                                                             'type': ["leaf", { 'hasTextContent': true }],
//                                                                                                                                         }]
//                                                                                                                                     }
//                                                                                                                                 },
//                                                                                                                                 {
//                                                                                                                                     'name': `type`,
//                                                                                                                                     'value': {
//                                                                                                                                         'type': ["node", {
//                                                                                                                                             'name': `Identifier`,
//                                                                                                                                             'type': ["leaf", { 'hasTextContent': true }],
//                                                                                                                                         }]
//                                                                                                                                     },
//                                                                                                                                 },
//                                                                                                                             ])
//                                                                                                                         }],
//                                                                                                                     }]
//                                                                                                                 }]
//                                                                                                             }
//                                                                                                         },
//                                                                                                         // {
//                                                                                                         //     'name': `parameters`,
//                                                                                                         //     value: {
//                                                                                                         //         cardinality: ["array", {}],
//                                                                                                         //         type: ["reference", { 'name': `type` }],
//                                                                                                         //     }
//                                                                                                         // },
//                                                                                                     ])
//                                                                                                 }]
//                                                                                             }]
//                                                                                         }]
//                                                                                     }
//                                                                                 }
//                                                                             }]
//                                                                         }
//                                                                     },
//                                                                 ])
//                                                             }],
//                                                         }],
//                                                     }]
//                                                 },
//                                             },
//                                             {
//                                                 'name': `returnType`,
//                                                 'value': {
//                                                     'type': _typeReference,
//                                                 }
//                                             },
//                                             {
//                                                 'name': `block`,
//                                                 'value': {
//                                                     'type': ["node", {
//                                                         'name': `Block`,
//                                                         'type': ["composite", {
//                                                             'type': ["sequence", {
//                                                                 'elements': ([
//                                                                     {
//                                                                         'name': `returnStatement`,
//                                                                         'value': {
//                                                                             'type': ["node", {
//                                                                                 'name': `ReturnStatement`,
//                                                                                 'type': ["composite", {
//                                                                                     'type': ["reference", {
//                                                                                         'name': `initialization`,
//                                                                                     }]
//                                                                                 }]
//                                                                             }]
//                                                                         }
//                                                                     }
//                                                                 ])
//                                                             }],
//                                                         }]
//                                                     }]
//                                                 }
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
//                                 'type': ["leaf", { 'hasTextContent': false }]
//                             }]
//                         }
//                     }
//                 ])
//             }]
//         }]
//     }
// }
