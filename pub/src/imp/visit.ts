import * as pl from "pareto-core-lib"
import * as api from "../interface"
import * as t from "./newTypes"


export function visit(
    $: api.TNroot,
): t.SourceFile {
    function createAnnotatedString($: api.TAnnotatedString): t.TAnnotatedString {
        return {
            myValue: $.value
        }
    }
    function X_block(
        $: api.TGblock,
    ): t.Block {
        return ((
            $: api.TNGblock$,
        ) => {
            return {
                statements: X_statements($.content)
            }


        })($)
    }
    function X_expression(
        $: api.TGexpression,
    ): t.Expression {
        switch ($[0]) {
            case "arrayLiteral": {
                return pl.cc($[1], ($) => {
                    return ["arrayLiteral", pl.cc($.content, ($) => {
                        return {
                            expressions: $.map(($) => {
                                return X_expression($)
                            })
                        }
                    })]
                })
            }
            case "arrowFunction": {
                return pl.cc($[1], ($) => {

                    return ["arrowFunction", pl.cc($.content, ($) => {
                        pl.cc($["equalsGreaterThan"], ($) => {
                            ((
                                $: api.TNGexpression_arrowFunction$_equalsGreaterThan$,
                            ) => {

                            })($)
                        })
                        return {
                            definition: X_functionDefinition($.functionDefinition),
                            implementation: pl.cc($["implementation"], ($) => {
                                switch ($[0]) {
                                    case "block": {
                                        return pl.cc($[1], ($) => {
                                            return ["block", X_block($)]
                                        })
                                    }
                                    case "expression": {
                                        return pl.cc($[1], ($) => {
                                            return ["expression", X_expression($)]
                                        })
                                    }
                                    default: return pl.au($[0])
                                }
                            })
                        }
                    })]
                })
            }
            case "binary": {
                return pl.cc($[1], ($) => {
                    return ["binary", pl.cc($.content, ($) => {
                        return {
                            leftHandSide: pl.cc($["leftHandSide"], ($) => {
                                return X_expression($)
                            }),
                            operator: pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "equals": {
                                        return pl.cc($[1], ($) => {
                                            return ["equals", {}]
                                        })
                                    }
                                    case "equalsEqualsEquals": {
                                        return pl.cc($[1], ($) => {
                                            return ["equalsEqualsEquals", {}]
                                        })
                                    }
                                    default: return pl.au($[0])
                                }
                            }),
                            rightHandSide: pl.cc($["rightHandSide"], ($) => {
                                return X_expression($)
                            })
                        }
                    })]
                })
            }
            case "call": {
                return pl.cc($[1], ($) => {
                    return ["call", pl.cc($.content, ($) => {

                        return {
                            function: pl.cc($["function"], ($) => {
                                return X_expression($)
                            }),
                            typeArguments: pl.cc($["typeArguments"], ($) => {
                                return $.map(($) => {
                                    return X_type($)
                                })
                            }),
                            arguments: pl.cc($["arguments"], ($) => {
                                return $.map(($) => {
                                    return X_expression($)
                                })
                            }),

                        }
                    })]
                })
            }
            case "conditional": {
                return pl.cc($[1], ($) => {
                    return ["conditional", pl.cc($.content, ($) => {

                        pl.cc($["questionToken"], ($) => {
                            ((
                                $: api.TNGexpression_conditional$_questionToken$,
                            ) => {

                            })($)
                        })
                        pl.cc($["colonToken"], ($) => {
                            ((
                                $: api.TNGexpression_conditional$_colonToken$,
                            ) => {

                            })($)
                        })
                        return {
                            test: pl.cc($["test"], ($) => {
                                return X_expression($)
                            }),
                            ifExpression: pl.cc($["ifExpression"], ($) => {
                                return X_expression($)
                            }),
                            elseExpression: pl.cc($["elseExpression"], ($) => {
                                return X_expression($)
                            })
                        }
                    })]
                })
            }
            case "elementAccess": {
                return pl.cc($[1], ($) => {
                    return ["elementAccess", pl.cc($.content, ($) => {
                        return {
                            array: pl.cc($["array"], ($) => {
                                return X_expression($)
                            }),
                            element: pl.cc($["element"], ($) => {
                                return X_expression($)
                            })
                        }
                    })]
                })
            }
            case "false": {
                return pl.cc($[1], ($) => {
                    return ["false", {}]
                })
            }
            case "identifier": {
                return pl.cc($[1], ($) => {
                    return ["identifier", X_identifier($)]
                })
            }
            case "noSubstitutionTemplateLiteral": {
                return pl.cc($[1], ($) => {
                    return ["noSubstitutionTemplateLiteral", {}]
                })
            }
            case "nullKeyword": {
                return pl.cc($[1], ($) => {
                    return ["nullKeyword", {}]
                })
            }
            case "numericLiteral": {
                return pl.cc($[1], ($) => {
                    return ["numericLiteral", X_numericLiteral($)]
                })
            }
            case "objectLiteral": {
                return pl.cc($[1], ($) => {
                    return ["objectLiteral", pl.cc($.content, ($) => {
                        return {
                            properties: $.map(($) => {
                                switch ($[0]) {
                                    case "propertyAssignment": {
                                        return pl.cc($[1], ($) => {
                                            return pl.cc($.content, ($) => {
                                                return {
                                                    name: pl.cc($["name"], ($) => {
                                                        switch ($[0]) {
                                                            case "identifier": {
                                                                return pl.cc($[1], ($) => {
                                                                    return ["identifier", X_identifier($)]
                                                                })
                                                            }
                                                            case "stringLiteral": {
                                                                return pl.cc($[1], ($) => {
                                                                    return ["stringLiteral", X_stringLiteral($)]
                                                                })
                                                            }
                                                            default: return pl.au($[0])
                                                        }
                                                    }),
                                                    expression: pl.cc($["expression"], ($) => {
                                                        return X_expression($)
                                                    })
                                                }
                                            })
                                        })
                                    }
                                    default: return pl.au($[0])
                                }
                            })
                        }
                    })]
                })
            }
            case "parenthesizedExpression": {
                return pl.cc($[1], ($) => {
                    return ["parenthesizedExpression", pl.cc($.content, ($) => {
                        return X_expression($)
                    })]

                })
            }
            case "prefixUnary": {
                return pl.cc($[1], ($) => {
                    return ["prefixUnary", pl.cc($.content, ($) => {
                        return X_expression($)
                    })]

                })
            }
            case "propertyAccess": {
                return pl.cc($[1], ($) => {
                    return ["propertyAccess", pl.cc($.content, ($) => {
                        return {
                            object: pl.cc($["object"], ($) => {
                                return X_expression($)
                            }),
                            property: pl.cc($["property"], ($) => {
                                return X_expression($)
                            })
                        }
                    })]
                })
            }
            case "stringLiteral": {
                return pl.cc($[1], ($) => {
                    return ["stringLiteral", X_stringLiteral($)]
                })
            }
            case "template": {
                return pl.cc($[1], ($) => {
                    return ["template", pl.cc($.content, ($) => {


                        return {
                            head: createAnnotatedString($["head"]),
                            spans: pl.cc($["spans"], ($) => {
                                return $.map(($) => {
                                    return pl.cc($.content, ($) => {


                                        return {
                                            expression: pl.cc($["expression"], ($) => {
                                                return X_expression($)
                                            }),
                                            suffix: pl.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        return pl.cc($[1], ($) => {
                                                            return ["middle", createAnnotatedString($)]
                                                        })
                                                    }
                                                    case "tail": {
                                                        return pl.cc($[1], ($) => {
                                                            return ["tail", createAnnotatedString($)]
                                                        })
                                                    }
                                                    default: return pl.au($[0])
                                                }
                                            }),
                                        }
                                    })
                                })
                            })
                        }
                    })]
                })
            }
            case "true": {
                return pl.cc($[1], ($) => {
                    return ["true", {}]
                })
            }
            default: return pl.au($[0])
        }
    }
    function X_functionDefinition(
        $: api.TGfunctionDefinition,
    ): t.FunctionDefinition {
        return {
            typeParameters: pl.cc($["typeParameters"], ($) => {
                return X_typeParameters($)
            }),
            parameters: pl.cc($["parameters"], ($) => {
                return $.map(($) => {
                    return X_parameter($)
                })
            }),
            returnType: pl.cc($["returnType"], ($) => {
                if (pl.isNotNull($)) {
                    return X_type($)
                } else {
                    return null
                }
            }),
        }
    }
    function X_identifier(
        $: api.TGidentifier,
    ): t.Identifier {
        return createAnnotatedString($)
    }
    function X_identifierOrStringLiteral(
        $: api.TGidentifierOrStringLiteral,
    ): t.IdentifierOrStringLiteral {
        switch ($[0]) {
            case "identifier": {
                return pl.cc($[1], ($) => {
                    return ["identifier", X_identifier($)]
                })
            }
            case "stringLiteral": {
                return pl.cc($[1], ($) => {
                    return ["stringLiteral", X_stringLiteral($)]
                })
            }
            default: return pl.au($[0])
        }
    }
    function X_modifiers(
        $: api.TGmodifiers,
    ): t.Modifiers {
        return $.modifiers.map(($) => {
            switch ($[0]) {
                case "export": {
                    return pl.cc($[1], ($) => {
                        return ["export", {}]
                    })
                }
                case "readonly": {
                    return pl.cc($[1], ($) => {
                        return ["readonly", {}]
                    })
                }
                default: return pl.au($[0])
            }
        })
    }
    function X_numericLiteral(
        $: api.TGnumericLiteral,
    ): t.NumericLiteral {
        return createAnnotatedString($)
    }
    function X_parameter(
        $: api.TGparameter,
    ): t.Parameter {
        return pl.cc($.content, ($) => {
            return {
                name: X_identifier($.name),
                optional: pl.isNotNull($.questionToken),
                type: pl.isNotNull($.type) ? X_type($.type) : null
            }
        })
    }
    function X_statement(
        $: api.TGstatement,
    ): t.Statement {

        switch ($[0]) {
            case "block": {
                return pl.cc($[1], ($) => {
                    return ["block", X_block($)]
                })
            }
            case "break": {
                return ["break", {}]
            }
            case "export": {
                return pl.cc($[1], ($) => {
                    return ["export", {
                        stringLiteral: X_stringLiteral($.content)
                    }]
                })
            }
            case "expression": {
                return pl.cc($[1], ($) => {
                    return ["expression", pl.cc($.content, ($) => {
                        return X_expression($)
                    })]
                })
            }
            case "function": {
                return pl.cc($[1], ($) => {
                    return ["function", pl.cc($.content, ($) => {
                        return {
                            modifiers: pl.cc($["modifiers"], ($) => {
                                return X_modifiers($)
                            }),
                            name: X_identifier($.name),
                            definition: X_functionDefinition($.definition),
                            block: pl.isNotNull($.block) ? X_block($.block) : null,
                        }
                    })]
                })
            }
            case "if": {
                return pl.cc($[1], ($) => {
                    return ["if", pl.cc($.content, ($) => {
                        return {
                            expression: X_expression($.expression),
                            thenStatement: X_statement($.thenStatement),
                            elseStatement: pl.isNotNull($.elseStatement) ? X_statement($.elseStatement) : null,
                        }
                    })]
                })
            }
            case "import": {
                return pl.cc($[1], ($) => {

                    return ["import", pl.cc($.content, ($) => {

                        return {
                            clause: pl.cc($["clause"], ($) => {
                                return pl.cc($.content, ($) => {
                                    switch ($[0]) {
                                        case "named": {
                                            return pl.cc($[1], ($) => {
                                                return ["named", pl.cc($.content, ($) => {
                                                    return $.map(($) => {
                                                        return pl.cc($.content, ($) => {
                                                            return {
                                                                name: X_identifier($.name),
                                                                as: pl.isNotNull($.as) ? X_identifier($.as) : null,
                                                            }
                                                        })
                                                    })
                                                })]
                                            })
                                        }
                                        case "namespace": {
                                            return pl.cc($[1], ($) => {
                                                return ["namespace", pl.cc($.content, ($) => {
                                                    return X_identifier($)
                                                })]
                                            })
                                        }
                                        default: return pl.au($[0])
                                    }
                                })
                            }),
                            file: X_stringLiteral($.file),
                        }
                    })]
                })
            }
            case "interface": {
                return pl.cc($[1], ($) => {
                    return ["interface", pl.cc($.content, ($) => {
                        return {
                            modifiers: X_modifiers($.modifiers),
                            name: X_identifier($.name),
                            typeParameters: X_typeParameters($.typeParameters),
                            signatures: $.signature.map(($) => {
                                return X_typeSignature($)
                            }),
                        }
                    })]
                })
            }
            case "return": {
                return pl.cc($[1], ($) => {
                    return ["return", pl.isNotNull($.content) ? X_expression($.content) : null]
                })
            }
            case "switch": {
                return pl.cc($[1], ($) => {

                    return ["switch", pl.cc($.content, ($) => {
                        pl.cc($["expression"], ($) => {
                            X_expression($)
                        })
                        pl.cc($["caseBlock"], ($) => {
                        })
                        return {
                            expression: X_expression($.expression),
                            clauses: $.caseBlock.content.map(($): t.SwitchClause => {
                                switch ($[0]) {
                                    case "case": {
                                        return pl.cc($[1], ($) => {
                                            return ["case", pl.cc($.content, ($) => {
                                                return {
                                                    expression: X_expression($.case),
                                                    statements: X_statements($.statements),
                                                }
                                            })]
                                        })
                                    }
                                    case "default": {
                                        return pl.cc($[1], ($) => {
                                            return ["default", {
                                                statements: X_statements($.content)
                                            }]
                                        })
                                    }
                                    default: return pl.au($[0])
                                }
                            }),

                        }
                    })]
                })
            }
            case "typeAlias": {
                return pl.cc($[1], ($) => {

                    return ["typeAlias", pl.cc($.content, ($) => {
                        return {
                            modifiers: X_modifiers($.modifiers),
                            name: X_identifier($.name),
                            typeParameters: X_typeParameters($.typeParameters),
                            type: X_type($.type),
                        }
                    })]
                })
            }
            case "variable": {
                return pl.cc($[1], ($) => {

                    return ["variable", pl.cc($.content, ($) => {
                        pl.cc($["modifiers"], ($) => {

                        })
                        pl.cc($["variableDeclarationList"], ($) => {
                            X_variableDeclarationList($)
                        })
                        return {
                            modifiers: X_modifiers($.modifiers),
                            list: X_variableDeclarationList($.variableDeclarationList)
                        }
                    })]

                })
            }
            default: return pl.au($[0])
        }
    }
    function X_stringLiteral(
        $: api.TGstringLiteral,
    ): t.StringLiteral {
        return createAnnotatedString($)
    }
    function X_statements(
        $: api.TGstatements,
    ): t.Statements {
        return $.statements.map(($) => {
            return X_statement($)
        })
    }
    function X_type(
        $: api.TGtype,
    ): t.Type {
        switch ($[0]) {
            case "array": {
                return pl.cc($[1], ($) => {
                    return ["array", pl.cc($.content, ($) => {
                        return X_type($)
                    })]

                })
            }
            case "booleanKeyword": {
                return ["booleanKeyword", {}]
            }
            case "function": {
                return pl.cc($[1], ($) => {
                    return ["function", X_functionDefinition($.content)]
                })
            }
            case "literal": {
                return pl.cc($[1], ($) => {
                    return ["literal", pl.cc($.content, ($): t.Literal => {
                        switch ($[0]) {
                            case "null": {
                                return ["null", {}]
                            }
                            case "string": {
                                return pl.cc($[1], ($) => {
                                    return ["string", X_stringLiteral($)]
                                })
                            }
                            default: return pl.au($[0])
                        }
                    })]
                })
            }
            case "numberKeyword": {
                return ["numberKeyword", {}]
            }
            case "optional": {
                return pl.cc($[1], ($) => {
                    return ["optional", X_type($.content)]
                })
            }
            case "parenthesized": {
                return pl.cc($[1], ($) => {
                    return ["parenthesized", X_type($.content)]
                })
            }
            case "stringKeyword": {
                return ["stringKeyword", {}]
            }
            case "tuple": {
                return pl.cc($[1], ($) => {
                    return ["tuple", $.content.map(($) => {
                        return X_type($)
                    })]
                })
            }
            case "typeLiteral": {
                return pl.cc($[1], ($) => {
                    return ["typeLiteral", $.content.map(($) => {
                        return X_typeSignature($)
                    })]
                })
            }
            case "typeReference": {
                return pl.cc($[1], ($) => {
                    return ["typeReference", pl.cc($.content, ($) => {

                        return {
                            identification: pl.cc($["x"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        return pl.cc($[1], ($) => {
                                            return ["identifier", X_identifier($)]
                                        })
                                    }
                                    case "qualifiedName": {
                                        return pl.cc($[1], ($) => {
                                            return ["qualifiedName", pl.cc($.content, ($) => {
                                                return {
                                                    context: X_identifier($.context),
                                                    type: X_identifier($.type)
                                                }
                                            })]
                                        })
                                    }
                                    default: return pl.au($[0])
                                }
                            }),
                            parameters: $.parameters.map(($) => {
                                return X_type($)
                            }),
                        }
                    })]
                })
            }
            case "undefinedKeyword": {
                return ["undefinedKeyword", {}]
            }
            case "union": {
                return pl.cc($[1], ($) => {
                    return ["union", $.content.map(($) => {
                        return X_type($)
                    })]
                })
            }
            case "voidKeyword": {
                return ["voidKeyword", {}]
            }
            default: return pl.au($[0])
        }
    }
    function X_typeParameters(
        $: api.TGtypeParameters,
    ): t.TypeParameters {
        return $.typeParameters.map(($) => {
            return X_identifier($.content)
        })
    }
    function X_typeSignature(
        $: api.TGtypeSignature,
    ): t.TypeSignature {
        switch ($[0]) {
            case "index": {
                return pl.cc($[1], ($) => {
                    return ["index", pl.cc($.content, ($) => {
                        return {
                            modifiers: X_modifiers($.modifiers),
                            parameter: X_parameter($.parameter),
                            type: pl.isNotNull($.type) ? X_type($.type) : null,

                        }
                    })]
                })
                break
            }
            case "method": {
                return pl.cc($[1], ($) => {
                    return ["method", pl.cc($.content, ($) => {
                        return {
                            name: X_identifier($.name),
                            definition: X_functionDefinition($.definition)
                        }
                    })]
                })
            }
            case "property": {
                return pl.cc($[1], ($): t.TypeSignature => {
                    return ["property", pl.cc($.content, ($) => {
                        return {
                            modifiers: X_modifiers($.modifiers),
                            name: X_identifierOrStringLiteral($.name),
                            optional: pl.isNotNull($.questionToken),
                            type: pl.isNotNull($.type) ? X_type($.type) : null,
                        }
                    })]
                })
            }
            default: return pl.au($[0])
        }
    }
    function X_variableDeclaration(
        $: api.TGvariableDeclaration,
    ): t.VariableDeclaration {
        return pl.cc($.content, ($) => {

            return {
                name: X_identifier($.identifier),
                type: pl.isNotNull($.type) ? X_type($.type) : null,
                expression: pl.isNotNull($.expression) ? X_expression($.expression) : null,
            }
        })
    }
    function X_variableDeclarationList(
        $: api.TGvariableDeclarationList,
    ): t.VariableDeclarationList {
        return {
            declarations: $.content.map(($) => {
                return X_variableDeclaration($)
            })
        }
    }

    return pl.cc($.content, ($) => {
        pl.cc($["endOfFile"], ($) => {
            ((
                $: api.TNroot_endOfFile$,
            ) => {

            })($)
        })
        return {
            statements: X_statements($.statements)
        }
    })
}