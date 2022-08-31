import * as gr from "exe-generate-typesafe-ast"

export const _typeScriptGrammar: gr.TGrammar = {
    'globalValueTypes': {
        'block': ["node", {
            'name': `Block`,
            'type': ["composite", {
                'cardinality': ["array", {}],
                'type': ["reference", { 'name': `statement` }]
            }],
        }],
        'expression': ["choice", {
            'options': {
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
                                'elements': ([
                                    {
                                        'name': `parameters`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `parameter`
                                            }]
                                        }
                                    },
                                    {
                                        'name': `returnType`,
                                        'value': {
                                            'cardinality': ["optional", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
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
                                                'options': {
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
                                                }
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
                                'elements': ([
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
                                                'options': {
                                                    // 'ampersandAmpersand': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `AmpersandAmpersandToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // },
                                                    // 'barBar': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `BarBarToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // },
                                                    'equals': {
                                                        'cardinality': ["one", {}],
                                                        'type': ["node", {
                                                            'name': `EqualsToken`,
                                                            'type': ["leaf", { 'hasTextContent': false }]
                                                        }]
                                                    },
                                                    // 'equalsEqualsEquals': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `EqualsEqualsEqualsToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // },
                                                    // 'exclamationEqualsEquals': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `ExclamationEqualsEqualsToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // },
                                                    // 'greaterThan': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `GreaterThanToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }],
                                                    //     }]
                                                    // },
                                                    // 'lessThan': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `LessThanToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }],
                                                    //     }]
                                                    // },
                                                    // 'minus': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `MinusToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }],
                                                    //     }]
                                                    // },
                                                    // 'minusEquals': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `MinusEqualsToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // },
                                                    // 'plus': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `PlusToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // },
                                                    // 'plusEquals': {
                                                    //     'cardinality': ["one", {}],
                                                    //     'type': ["node", {
                                                    //         'name': `PlusEqualsToken`,
                                                    //         'type': ["leaf", { 'hasTextContent': false }]
                                                    //     }]
                                                    // }
                                                }
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
                                'elements': ([
                                    {
                                        'name': `function`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["reference", { 'name': `expression` }]
                                        }
                                    },
                                    {
                                        'name': `typeParameters`,
                                        'value': {
                                            "cardinality": ["array", {}],
                                            'type': ["reference", { 'name': `type` }],
                                        }
                                    },
                                    {
                                        'name': `parameters`,
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
                                'elements': ([
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
                                'elements': ([
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
                // 'new': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `NewExpression`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `class`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `expression`
                //                             }],
                //                         }
                //                     },
                //                     {
                //                         'name': `parameters`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["reference", { 'name': `expression` }],
                //                         }
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
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
                                'options': {
                                    // "getAccessor": {
                                    //     'cardinality': ["one", {}],
                                    //     'type': ["reference", {
                                    //         'name': `getAccessor`
                                    //     }]
                                    // },
                                    "propertyAssignment": {
                                        'cardinality': ["one", {}],

                                        'type': ["node", {
                                            'name': `PropertyAssignment`,
                                            'type': ["composite", {
                                                'cardinality': ["one", {}],
                                                'type': ["sequence", {
                                                    'elements': ([
                                                        {
                                                            'name': `name`,
                                                            'value': {
                                                                'cardinality': ["one", {}],
                                                                'type': ["choice", {
                                                                    'options': {
                                                                        'identifier': {
                                                                            'cardinality': ["one", {}],
                                                                            'type': ["reference", {
                                                                                'name': `identifier`
                                                                            }],
                                                                        },
                                                                        // 'numericLiteral': {
                                                                        //     'cardinality': ["one", {}],
                                                                        //     'type': ["reference", {
                                                                        //         'name': `numericLiteral`,
                                                                        //     }],
                                                                        // },
                                                                        'stringLiteral': {
                                                                            'cardinality': ["one", {}],
                                                                            'type': ["reference", {
                                                                                'name': `stringLiteral`
                                                                            }]
                                                                        },
                                                                    }
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
                                }
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
                // 'postfixUnary': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `PostfixUnaryExpression`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["reference", { 'name': `expression` }],
                //         }],
                //     }]
                // },
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
                                'elements': ([
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
                                'elements': ([
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
                                                        'elements': ([
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
                                                                        'options': {
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
                                                                        }
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
            }
        }],
        'functionDefinition': ["sequence", {
            'elements': ([
                {
                    'name': `typeParameters`,
                    'value': {
                        'cardinality': ["array", {}],
                        'type': ["reference", {
                            'name': `typeParameter`
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
        // 'getAccessor': ["node", {
        //     'name': `GetAccessor`,
        //     'type': ["composite", {
        //         'cardinality': ["one", {}],
        //         'type': ["sequence", {
        //             'elements': ([
        //                 {
        //                     'name': `name`,
        //                     'value': {
        //                         'cardinality': ["one", {}],
        //                         'type': ["reference", {
        //                             'name': `identifier`,
        //                         }]
        //                     }
        //                 },
        //                 {
        //                     'name': `block`,
        //                     'value': {
        //                         'cardinality': ["one", {}],
        //                         'type': ["reference", {
        //                             'name': `block`,
        //                         }]
        //                     }
        //                 }
        //             ])
        //         }]
        //     }]
        // }],
        'identifier': ["node", {
            'name': `Identifier`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'identifierOrStringLiteral': ["choice", {
            'options': {
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
            }
        }],
        'modifier': ["choice", {
            //AbstractKeyword | AsyncKeyword | ConstKeyword | DeclareKeyword | DefaultKeyword | ExportKeyword | PrivateKeyword | ProtectedKeyword | PublicKeyword | OverrideKeyword | ReadonlyKeyword | StaticKeyword;
            'options': {
                // 'declare': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `DeclareKeyword`,
                //         'type': ["leaf", { 'hasTextContent': false }]
                //     }]
                // },
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
            }
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
                    'elements': ([
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
            'options': {
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
                        'type': ["composite", {
                            'cardinality': ["optional", {}],
                            'type': ["reference", {
                                'name': `identifier`
                            }],
                        }],
                    }]
                },
                // 'class': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `ClassDeclaration`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
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
                //                         'name': `heritageClause`,
                //                         'value': {
                //                             'cardinality': ["optional", {}],
                //                             'type': ["node", {
                //                                 'name': `HeritageClause`,
                //                                 'type': ["composite", {
                //                                     'cardinality': ["array", {}],
                //                                     'type': ["node", {
                //                                         'name': `ExpressionWithTypeArguments`,
                //                                         'type': ["composite", {
                //                                             'cardinality': ["one", {}],
                //                                             'type': ["sequence", {
                //                                                 'elements': ([
                //                                                     {
                //                                                         'name': `expression`,
                //                                                         'value': {
                //                                                             'cardinality': ["one", {}],
                //                                                             'type': ["reference", {
                //                                                                 'name': `expression`
                //                                                             }]

                //                                                         }
                //                                                     },
                //                                                     {
                //                                                         'name': `typeArguments`,
                //                                                         'value': {
                //                                                             'cardinality': ["array", {}],
                //                                                             'type': ["reference", {
                //                                                                 'name': `type`
                //                                                             }]

                //                                                         }
                //                                                     }
                //                                                 ])
                //                                             }]
                //                                         }]
                //                                     }]
                //                                 }]
                //                             }]
                //                         }
                //                     },
                //                     {
                //                         'name': `members`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["choice", {
                //                                 'options': {
                //                                     "getAccessor": {
                //                                         'cardinality': ["one", {}],
                //                                         'type': ["reference", { 'name': `getAccessor` }]
                //                                     }
                //                                 }
                //                             }]
                //                         }
                //                     },
                //                 ])
                //             }],
                //         }],
                //     }]
                // },
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
                // 'for': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `ForStatement`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `initializer`,
                //                         'value': {
                //                             "cardinality": ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `variableDeclarationList`
                //                             }]
                //                         }
                //                     },
                //                     {
                //                         'name': `condition`,
                //                         'value': {
                //                             "cardinality": ["one", {}],
                //                             'type': ["reference", { 'name': `expression` }]
                //                         }
                //                     },
                //                     {
                //                         'name': `incrementer`,
                //                         'value': {
                //                             "cardinality": ["one", {}],
                //                             'type': ["reference", { 'name': `expression` }]
                //                         }
                //                     },
                //                     {
                //                         'name': `block`,
                //                         'value': {
                //                             "cardinality": ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `block`,
                //                             }]
                //                         }
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
                'function': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `FunctionDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': ([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
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
                                'elements': ([
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
                                'elements': ([
                                    {
                                        'name': `clause`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `ImportClause`,
                                                'type': ["composite", {
                                                    'cardinality': ["one", {}],
                                                    'type': ["choice", {
                                                        'options': {
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
                                                                                    'elements': ([
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
                                                        }
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
                // 'interface': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `InterfaceDeclaration`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `modifiers`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["reference", { 'name': `modifier` }]
                //                         },
                //                     },
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
                //                         'name': `typeParameters`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["reference", {
                //                                 'name': `typeParameter`
                //                             }]
                //                         },
                //                     },
                //                     {
                //                         'name': `signature`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["reference", { 'name': `typeSignature` }]
                //                         },
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
                // 'labeled': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `LabeledStatement`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `label`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `identifier`
                //                             }],
                //                         }
                //                     },
                //                     {
                //                         'name': `statement`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", { 'name': `statement` }],
                //                         }
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
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
                                'elements': ([
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
                                                        'options': {
                                                            "case": {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `CaseClause`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", {}],
                                                                        'type': ["sequence", {
                                                                            'elements': ([
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
                                                                                        'cardinality': ["array", {}],
                                                                                        'type': ["reference", { 'name': `statement` }]
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
                                                                        'cardinality': ["array", {}],
                                                                        'type': ["reference", { 'name': `statement` }]
                                                                    }]
                                                                }]
                                                            },
                                                        }
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
                // 'throw': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `ThrowStatement`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["reference", { 'name': `expression` }],
                //         }]
                //     }]
                // },
                // 'try': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `TryStatement`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `block`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `block`
                //                             }]
                //                         },
                //                     },
                //                     {
                //                         'name': `catchClause`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["node", {
                //                                 'name': `CatchClause`,
                //                                 'type': ["composite", {
                //                                     'cardinality': ["one", {}],
                //                                     'type': ["sequence", {
                //                                         'elements': ([
                //                                             {
                //                                                 'name': `variable`,
                //                                                 'value': {
                //                                                     'cardinality': ["one", {}],
                //                                                     'type': ["reference", {
                //                                                         'name': `variableDeclaration`
                //                                                     }]
                //                                                 }
                //                                             },
                //                                             {
                //                                                 'name': `block`,
                //                                                 'value': {
                //                                                     'cardinality': ["one", {}],
                //                                                     'type': ["reference", {
                //                                                         'name': `block`
                //                                                     }]
                //                                                 }
                //                                             },
                //                                         ])
                //                                     }]
                //                                 }]
                //                             }]
                //                         },
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
                'typeAlias': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `TypeAliasDeclaration`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': ([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
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
                                            'cardinality': ["array", {}],
                                            'type': ["reference", {
                                                'name': `typeParameter`
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
                                'elements': ([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
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
                // 'while': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `WhileStatement`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `condition`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", { 'name': `expression` }],
                //                         },
                //                     },
                //                     {
                //                         'name': `block`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `block`
                //                             }],
                //                         },
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
            }
        }],
        'stringLiteral': ["node", {
            'name': `StringLiteral`,
            'type': ["leaf", { 'hasTextContent': true }]
        }],
        'type': ["choice", {
            'options': {
                // 'any': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `AnyKeyword`,
                //         'type': ["leaf", { 'hasTextContent': false }],
                //     }]
                // },
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
                'boolean': {
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
                            'type': ["sequence", {
                                'elements': ([
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
                                    }
                                ])
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
                                'options': {
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
                                }
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
                // 'never': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `NeverKeyword`,
                //         'type': ["leaf", { 'hasTextContent': false }],
                //     }]
                // },
                'number': {
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
                'string': {
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
                                'elements': ([
                                    {
                                        'name': `x`,
                                        'value': {
                                            "cardinality": ["one", {}],
                                            'type': ["choice", {
                                                'options': {
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
                                                                    'elements': ([
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
                                                }
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
                'undefined': {
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
                'void': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `VoidKeyword`,
                        'type': ["leaf", { 'hasTextContent': false }]
                    }]
                },
            }
        }],
        'typeParameter': ["node", {
            'name': `TypeParameter`,
            'type': ["composite", {
                'cardinality': ["one", {}],
                'type': ["reference", {
                    'name': `identifier`
                }],
            }]
        }],
        'typeSignature': ["choice", {
            'options': {
                // 'construct': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `ConstructSignature`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `parameters`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["reference", {
                //                                 'name': `parameter`
                //                             }]
                //                         }
                //                     },
                //                     {
                //                         'name': `returnType`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `type`
                //                             }]
                //                         }
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
                // 'index': {
                //     'cardinality': ["one", {}],
                //     'type': ["node", {
                //         'name': `IndexSignature`,
                //         'type': ["composite", {
                //             'cardinality': ["one", {}],
                //             'type': ["sequence", {
                //                 'elements': ([
                //                     {
                //                         'name': `modifiers`,
                //                         'value': {
                //                             'cardinality': ["array", {}],
                //                             'type': ["reference", { 'name': `modifier` }]
                //                         },
                //                     },
                //                     {
                //                         'name': `parameter`,
                //                         'value': {
                //                             'cardinality': ["one", {}],
                //                             'type': ["reference", {
                //                                 'name': `parameter`
                //                             }],
                //                         }
                //                     },
                //                     {
                //                         'name': `type`,
                //                         'value': {
                //                             'cardinality': ["optional", {}],
                //                             'type': ["reference", { 'name': `type` }],
                //                         },
                //                     },
                //                 ])
                //             }]
                //         }]
                //     }]
                // },
                'method': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `MethodSignature`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': ([
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
                                        'name': `definition`,
                                        'value': {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `functionDefinition`
                                            }]
                                        }
                                    },
                                ])
                            }]
                        }]
                    }]
                },
                'property': {
                    'cardinality': ["one", {}],
                    'type': ["node", {
                        'name': `PropertySignature`,
                        'type': ["composite", {
                            'cardinality': ["one", {}],
                            'type': ["sequence", {
                                'elements': ([
                                    {
                                        'name': `modifiers`,
                                        'value': {
                                            'cardinality': ["array", {}],
                                            'type': ["reference", { 'name': `modifier` }]
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
                                        'name': `quesionToken`,
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
            }
        }],
        'variableDeclaration': ["node", {
            'name': `VariableDeclaration`,
            'type': ["composite", {
                'cardinality': ["one", {}],
                'type': ["sequence", {
                    'elements': ([
                        {
                            'name': `nameOrArrayBinding`,
                            'value': {
                                'cardinality': ["one", {}],
                                'type': ["choice", {
                                    'options': {
                                        "identifier": {
                                            'cardinality': ["one", {}],
                                            'type': ["reference", {
                                                'name': `identifier`
                                            }],
                                        },
                                        "arrayBindingPattern": {
                                            'cardinality': ["one", {}],
                                            'type': ["node", {
                                                'name': `ArrayBindingPattern`,
                                                'type': ["composite", {
                                                    'cardinality': ["array", {}],
                                                    'type': ["choice", {
                                                        'options': {
                                                            "omitted": {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `OmittedExpression`,
                                                                    'type': ["leaf", { 'hasTextContent': false }]
                                                                }]
                                                            },
                                                            "bindingElement": {
                                                                'cardinality': ["one", {}],
                                                                'type': ["node", {
                                                                    'name': `BindingElement`,
                                                                    'type': ["composite", {
                                                                        'cardinality': ["one", {}],
                                                                        'type': ["reference", {
                                                                            'name': `identifier`
                                                                        }]
                                                                    }]
                                                                }]
                                                            }
                                                        }
                                                    }]
                                                }]
                                            }],
                                        }
                                    }
                                }]
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
    },
    'root': {
        'name': `SourceFile`,
        'type': ["composite", {
            'cardinality': ["one", {}],
            'type': ["sequence", {
                'elements': ([
                    {
                        'name': `statements`,
                        'value': {
                            'cardinality': ["array", {}],
                            'type': ["reference", { 'name': `statement` }]
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