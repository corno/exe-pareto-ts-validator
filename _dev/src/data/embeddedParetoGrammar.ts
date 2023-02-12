import * as pw from 'pareto-core-raw'

import * as gr from "exe-generate-typesafe-ast"

export const _typeScriptGrammar: gr.TGrammar = {
    'globalValueTypes': pw.wrapRawDictionary({
        'block': ["node", {
            'name': `Block`,
            'type': ["composite", {
                'cardinality': ["one", {}],
                'type': ["reference", { 'name': `statements` }]
            }],
        }],
        'expression': ["choice", {
            'options': pw.wrapRawDictionary({
                'arrayLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ArrayLiteralExpression`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'arrowFunction': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ArrowFunction`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `functionDefinition`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `equalsGreaterThan`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `EqualsGreaterThanToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }]
                                        }
                                    },
                                    {
                                        'name': `implementation`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "block": {
                                                        'cardinality': ["one", {}],
                                                        'type': ["reference", {
                                                            'name': `block`,
                                                        }]
                                                    },
                                                    "expression": {
                                                        'cardinality': ["one", {}],
                                                        'type': ["reference", { 'name': `expression` }],
                                                    },
                                                })
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }]
                    }]
                },
                'binary': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `BinaryExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `leftHandSide`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `operator`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    'equalsEqualsEquals': {
                                                        'cardinality': ["one", {}],
                                                        'type': ["node", {
                                                            'name': `EqualsEqualsEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'exclamationEqualsEquals': {
                                                        'type': ["node", {
                                                            'name': `ExclamationEqualsEqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    'equals': {
                                                        'cardinality': ["one", {}],
                                                        'type': ["node", {
                                                            'name': `EqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                })
                                            }],
                                        }
                                    },
                                    {
                                        'name': `rightHandSide`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'call': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `CallExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `function`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `typeArguments`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                    {
                                        'name': `arguments`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'conditional': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ConditionalExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `test`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `questionToken`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `QuestionToken`,
                                                'type': ["leaf", { 'hasTextContent': false }]
                                            }],
                                        }
                                    },
                                    {
                                        'name': `ifExpression`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `colonToken`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `ColonToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }],
                                        }
                                    },
                                    {
                                        'name': `elseExpression`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'elementAccess': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ElementAccessExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `array`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `element`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    }
                                ])
                            }],
                        }]
                    }]
                },
                'false': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `FalseKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'identifier': {
                    'cardinality': ["one", {}],
                    'type': ["reference", {
                        'name': `identifier`
                    }],
                },
                'noSubstitutionTemplateLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `NoSubstitutionTemplateLiteral`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'numericLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["reference", {
                        'name': `numericLiteral`,
                    }],
                },
                'nullKeyword': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `NullKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'objectLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ObjectLiteralExpression`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["choice", {
                                'options': pw.wrapRawDictionary({
                                    "propertyAssignment": {
                                        'cardinality': ["one", {}],
                                        'type': ["node", {
                                            'name': `PropertyAssignment`,
                                            'type': ["composite", {
                                                'cardinality': ["one", {}],
                                                'type': ["sequence", {
                                                    'elements': pw.wrapRawArray([
                                                        {
                                                            'name': `name`,
                                                            'value': {
                                                                'cardinality': ["one", {}],
                                                                'type': ["reference", {
                                                                    'name': "identifierOrStringLiteral"
                                                                }]
                                                            }
                                                        },
                                                        {
                                                            'name': `expression`,
                                                            'value': {
                                                                'cardinality': ["one", {}],
                                                                'type': ["reference", { 'name': `expression` }],
                                                            }
                                                        },
                                                    ])
                                                }]
                                            }]
                                        }]
                                    }
                                })
                            }]
                        }],
                    }]
                },
                'parenthesizedExpression': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ParenthesizedExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'prefixUnary': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `PrefixUnaryExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'propertyAccess': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `PropertyAccessExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `object`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                    {
                                        'name': `property`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        }
                                    },
                                ])
                            }]
                        }],
                    }]
                },
                'stringLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["reference", {
                        'name': `stringLiteral`
                    }]
                },
                'template': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TemplateExpression`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `head`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `TemplateHead`,
                                                'type': ["leaf", { 'hasTextContent': true }],
                                            }]
                                        }
                                    },
                                    {
                                        'name': `spans`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["node", {
                                                'name': `TemplateSpan`,
                                                'type': ["composite", {
                                                    'cardinality': ["one", {}],
                                                    'type': ["sequence", {
                                                        'elements': pw.wrapRawArray([
                                                            {
                                                                'name': `expression`,
                                                                'value': {
                                                                    'cardinality': ["one", {}],
                                                                    'type': ["reference", { 'name': `expression` }],
                                                                }
                                                            },
                                                            {
                                                                'name': `x`,
                                                                'value': {
                                                                    'cardinality': ["one", {}],
                                                                    'type': ["choice", {
                                                                        'options': pw.wrapRawDictionary({
                                                                            'middle': {
                                                                                'cardinality': ["one", {}],
                                                                                'type': ["node", {
                                                                                    'name': `TemplateMiddle`,
                                                                                    'type': ["leaf", { 'hasTextContent': true }],
                                                                                }],
                                                                            },
                                                                            'tail': {
                                                                                'cardinality': ["one", {}],
                                                                                'type': ["node", {
                                                                                    'name': `TemplateTail`,
                                                                                    'type': ["leaf", { 'hasTextContent': true }]
                                                                                }],
                                                                            }
                                                                        })
                                                                    }],
                                                                }
                                                            },
                                                        ])
                                                    }]
                                                }]
                                            }]
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'true': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TrueKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            })
        }],
        'functionDefinition': ["sequence", {
            'elements': pw.wrapRawArray([
                {
                    'name': `typeParameters`,
                    'value': {
                        'cardinality': ["one", {}],
                        'type': ["reference", {
                            'name': `typeParameters`
                        }]
                    },
                },
                {
                    'name': `parameters`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["reference", {
                            'name': `parameter`
                        }]
                    },
                },
                {
                    'name': `returnType`,
                    'value': {
                        'cardinality': ["optional", {}],
                        'type': ["reference", { 'name': `type` }],
                    },
                },
            ])
        }],
        'identifier': ["node", {
            'name': `Identifier`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'identifierOrStringLiteral': ["choice", {
            'options': pw.wrapRawDictionary({
                'identifier': {
                    'cardinality': ["one", {}],
                    'type': ["reference", {
                        'name': `identifier`
                    }],
                },
                'stringLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["reference", {
                        'name': `stringLiteral`
                    }]
                },
            })
        }],
        'modifiers': ["sequence", {
            'elements': pw.wrapRawArray([
                {
                    'name': `modifiers`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["choice", {
                            'options': pw.wrapRawDictionary({
                                'export': {
                                    'cardinality': ["one", {}],
                                    'type': ["node", {
                                        'name': `ExportKeyword`,
                                        'type': ["leaf", { 'hasTextContent': false }],
                                    }]
                                },
                                'readonly': {
                                    'cardinality': ["one", {}],
                                    'type': ["node", {
                                        'name': `ReadonlyKeyword`,
                                        'type': ["leaf", { 'hasTextContent': false }],
                                    }]
                                },
                            })
                        }]
                    },
                },
            ])
        }],
        'numericLiteral': ["node", {
            'name': `NumericLiteral`,
            'type': ["leaf", { 'hasTextContent': true }],
        }],
        'parameter': ["node", {
            'name': `Parameter`,
            'type': ["composite", {
                'cardinality': ["one", {}],
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `name`,
                            'value': {
                                'cardinality': ["one", {}],
                                'type': ["reference", {
                                    'name': `identifier`
                                }],
                            }
                        },
                        {
                            'name': `questionToken`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["node", {
                                    'name': `QuestionToken`,
                                    'type': ["leaf", { 'hasTextContent': false }],
                                }]
                            }
                        },
                        {
                            'name': `type`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["reference", { 'name': `type` }],
                            }
                        }
                    ])
                }]
            }]
        }],
        'statement': ["choice", {
            'options': pw.wrapRawDictionary({
                'block': {
                    'cardinality': ["one", {}],
                    'type': ["reference", {
                        'name': `block`
                    }]
                },
                'break': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `BreakStatement`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'export': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ExportDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", {
                                'name': `stringLiteral`
                            }],
                        }]
                    }]
                },
                'expression': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ExpressionStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `expression` }]
                        }],
                    }]
                },
                'function': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `FunctionDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `modifiers` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        },
                                    },
                                    {
                                        'name': `definition`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `block`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", {
                                                'name': `block`
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'if': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `IfStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `expression`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }],
                                        },
                                    },
                                    {
                                        'name': `thenStatement`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `statement` }],
                                        },
                                    },
                                    {
                                        'name': `elseStatement`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `statement` }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'import': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ImportDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `clause`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `ImportClause`,
                                                'type': ["composite", {
                                                    'cardinality': ["one", {}],
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            'namespace': {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `NamespaceImport`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", {}],
                                                                        'type': ["reference", {
                                                                            'name': `identifier`
                                                                        }],
                                                                    }],
                                                                }]
                                                            },
                                                            'named': {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `NamedImports`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["array", {}],
                                                                        'type': ["node", {
                                                                            'name': `ImportSpecifier`,
                                                                            'type': ["composite", {
                                                                                'cardinality': ["one", {}],
                                                                                'type': ["sequence", {
                                                                                    'elements': pw.wrapRawArray([
                                                                                        {
                                                                                            'name': `name`,
                                                                                            'value': {
                                                                                                'cardinality': ["one", {}],
                                                                                                'type': ["reference", {
                                                                                                    'name': `identifier`
                                                                                                }],
                                                                                            }
                                                                                        },
                                                                                        {
                                                                                            'name': `as`,
                                                                                            'value': {
                                                                                                'cardinality': ["optional", {}],
                                                                                                'type': ["reference", {
                                                                                                    'name': `identifier`
                                                                                                }],
                                                                                            }
                                                                                        },
                                                                                    ])
                                                                                }]
                                                                            }]
                                                                        }]
                                                                    }]
                                                                }]
                                                            }
                                                        })
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                    {
                                        'name': `file`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `stringLiteral`
                                            }],
                                        }
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'interface': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `InterfaceDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `modifiers` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `typeParameters`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `signature`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `typeSignature` }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'return': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ReturnStatement`,
                        'type': ["composite", {
                            'cardinality': ["optional", {}],
                            'type': ["reference", { 'name': `expression` }],
                        }],
                    }]
                },
                'switch': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `SwitchStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `expression`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `caseBlock`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `CaseBlock`,
                                                'type': ["composite", {
                                                    'cardinality': ["array", {}],
                                                    'type': ["choice", {
                                                        'options': pw.wrapRawDictionary({
                                                            "case": {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `CaseClause`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", {}],
                                                                        'type': ["sequence", {
                                                                            'elements': pw.wrapRawArray([
                                                                                {
                                                                                    'name': `case`,
                                                                                    'value': {
                                                                                        'cardinality': ["one", {}],
                                                                                        'type': ["reference", { 'name': `expression` }]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    'name': `statements`,
                                                                                    'value': {
                                                                                        'cardinality': ["one", {}],
                                                                                        'type': ["reference", { 'name': `statements` }]
                                                                                    },
                                                                                }
                                                                            ])
                                                                        }]
                                                                    }]
                                                                }]
                                                            },
                                                            "default": {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `DefaultClause`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", {}],
                                                                        'type': ["reference", { 'name': `statements` }]
                                                                    }]
                                                                }]
                                                            },
                                                        })
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }]
                    }]
                },
                'typeAlias': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TypeAliasDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `modifiers` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `typeParameters`
                                            }]
                                        },
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
                'variable': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `VariableStatement`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `modifiers` }]
                                        },
                                    },
                                    {
                                        'name': `variableDeclarationList`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `variableDeclarationList`
                                            }]
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
            })
        }],
        'statements': ["sequence", {
            'elements': pw.wrapRawArray([
                {
                    'name': `statements`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["reference", {
                            'name': `statement`
                        }]
                    },
                },
            ])
        }],
        'stringLiteral': ["node", {
            'name': `StringLiteral`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'type': ["choice", {
            'options': pw.wrapRawDictionary({
                'array': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ArrayType`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `type` }],
                        }]
                    }]
                },
                'booleanKeyword': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `BooleanKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'function': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `FunctionType`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", {
                                'name': "functionDefinition"
                            }]
                        }]
                    }]
                },
                'literal': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `LiteralType`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["choice", {
                                'options': pw.wrapRawDictionary({
                                    'null': {
                                        'cardinality': ["one", {}],
                                        'type': ["node", {
                                            'name': `NullKeyword`,
                                            'type': ["leaf", { 'hasTextContent': false }],
                                        }]
                                    },
                                    'string': {
                                        'cardinality': ["one", {}],
                                        'type': ["reference", {
                                            'name': `stringLiteral`
                                        }],
                                    },
                                })
                            }]
                        }]
                    }]
                },
                'parenthesized': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `ParenthesizedType`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'numberKeyword': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `NumberKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'optional': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `OptionalType`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'tuple': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TupleType`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'typeLiteral': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TypeLiteral`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `typeSignature` }],
                        }],
                    }]
                },
                'stringKeyword': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `StringKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
                'typeReference': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TypeReference`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `x`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["choice", {
                                                'options': pw.wrapRawDictionary({
                                                    "identifier": {
                                                        'cardinality': ["one", {}],
                                                        'type': ["reference", {
                                                            'name': `identifier`
                                                        }],
                                                    },
                                                    "qualifiedName": {
                                                        'cardinality': ["one", {}],
                                                        'type': ["node", {
                                                            'name': `QualifiedName`,
                                                            'type': ["composite", {
                                                                'cardinality': ["one", {}],
                                                                'type': ["sequence", {
                                                                    'elements': pw.wrapRawArray([
                                                                        {
                                                                            'name': `context`,
                                                                            'value': {
                                                                                'cardinality': ["one", {}],
                                                                                'type': ["reference", {
                                                                                    'name': `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                        {
                                                                            'name': `type`,
                                                                            'value': {
                                                                                'cardinality': ["one", {}],
                                                                                'type': ["reference", {
                                                                                    'name': `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                    ])
                                                                }],
                                                            }]
                                                        }]
                                                    }
                                                })
                                            }]
                                        }
                                    },
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'undefinedKeyword': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `UndefinedKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }],
                    }]
                },
                'union': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `UnionType`,
                        'type': ["composite", {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `type` }],
                        }],
                    }]
                },
                'voidKeyword': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `VoidKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            })
        }],
        'typeParameters': ["sequence", {
            'elements': pw.wrapRawArray([
                {
                    'name': `typeParameters`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["node", {
                            'name': `TypeParameter`,
                            'type': ["composite", {
                                'cardinality': ["one", {}],
                                'type': ["reference", {
                                    'name': `identifier`
                                }],
                            }]

                        }]
                    }
                }
            ]),
        }],
        'typeSignature': ["choice", {
            'options': pw.wrapRawDictionary({
                'index': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `IndexSignature`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `modifiers` }]
                                        },
                                    },
                                    {
                                        'name': `parameter`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }],
                                        }
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                // 'method': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `MethodSignature`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': pw.wrapRawArray([
                //                     {
                //                         'name': `name`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `identifier`
                //                             }],
                //                         }
                //                     },
                //                     {
                //                         'name': `definition`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `functionDefinition`
                //                             }]
                //                         }
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
                'property': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `PropertySignature`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': pw.wrapRawArray([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `modifiers` }]
                                        },
                                    },
                                    {
                                        'name': `name`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", { 'name': `identifierOrStringLiteral` }],
                                        }
                                    },
                                    {
                                        'name': `questionToken`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["node", {
                                                'name': `QuestionToken`,
                                                'type': ["leaf", { 'hasTextContent': false }],
                                            }],
                                        }
                                    },
                                    {
                                        'name': `type`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        },
                                    }
                                ])
                            }]
                        }]
                    }]
                },
            })
        }],
        'variableDeclaration': ["node", {
            'name': `VariableDeclaration`,
            'type': ["composite", {
                'cardinality': ["one", {}],
                'type': ["sequence", {
                    'elements': pw.wrapRawArray([
                        {
                            'name': `identifier`,
                            'value': {
                                'cardinality': ["one", {}],
                                'type': ["reference", { 'name': `identifier` }],
                            },
                        },
                        {
                            'name': `type`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["reference", { 'name': `type` }],
                            },
                        },
                        {
                            'name': `expression`,
                            'value': {
                                'cardinality': ["optional", {}],
                                'type': ["reference", { 'name': `expression` }],
                            },
                        },
                    ])
                }]
            }]
        }],
        'variableDeclarationList': ["node", {
            'name': `VariableDeclarationList`,
            'type': ["composite", {
                'cardinality': ["array", {}],
                'type': ["reference", {
                    'name': `variableDeclaration`
                }]
            }],
        }]
    }),
    'root': {
        'name': `SourceFile`,
        'type': ["composite", {
            'cardinality': ["one", {}],
            'type': ["sequence", {
                'elements': pw.wrapRawArray([
                    {
                        'name': `statements`,
                        'value': {
                            'cardinality': ["one", {}],
                            'type': ["reference", { 'name': `statements` }]
                        },
                    },
                    {
                        'name': `endOfFile`,
                        'value': {
                            'cardinality': ["one", {}],
                            'type': ["node", {
                                'name': `EndOfFileToken`,
                                'type': ["leaf", { 'hasTextContent': false }]
                            }]
                        }
                    }
                ])
            }]
        }]
    }
}