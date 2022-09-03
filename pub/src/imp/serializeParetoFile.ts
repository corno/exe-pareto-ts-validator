import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"

import * as fp from "lib-fountain-pen"

import * as nt from "./newTypes"


export function serializeParetoFile(
    $: nt.SourceFile,
    $i: {
        block: fp.IBlock
    },
    $d: {
        isNotEmpty: <T> ($: pt.Array<T>) => boolean
    }
) {

    function Block(
        $: nt.Block,
        $i: fp.ILine
    ) {
        $i.snippet(`{`)
        $i.indent({}, ($i) => {
            Statements($.statements, $i)
        })
        $i.snippet(`}`)

    }
    function Expression(
        $: nt.Expression,
        $i: fp.ILine,
    ) {
        switch ($[0]) {
            case "arrayLiteral":
                pl.cc($[1], ($) => {
                    $i.snippet(`[`)
                    let first = true
                    $.expressions.forEach(($) => {
                        if (!first) {
                            $i.snippet(`, `)
                        } else {
                            first = false
                        }
                        Expression($, $i)
                    })
                    $i.snippet(`]`)
                })
                break
            case "arrowFunction":
                pl.cc($[1], ($) => {
                    FunctionDefinition(
                        {
                            sign: ":",
                            def: $.definition
                        },
                        $i,
                    )
                    $i.snippet(` => `)
                    switch ($.implementation[0]) {
                        case "block":
                            pl.cc($.implementation[1], ($) => {
                                Block($, $i)
                            })
                            break
                        case "expression":
                            pl.cc($.implementation[1], ($) => {
                                Expression($, $i)
                            })
                            break
                        default: pl.au($.implementation[0])
                    }
                })
                break
            case "binary":
                pl.cc($[1], ($) => {
                    Expression($.leftHandSide, $i)
                    switch ($.operator[0]) {
                        case "equals":
                            pl.cc($.operator[1], ($) => {
                                $i.snippet(` = `)
                            })
                            break
                        case "equalsEqualsEquals":
                            pl.cc($.operator[1], ($) => {
                                $i.snippet(` === `)
                            })
                            break
                        default: pl.au($.operator[0])
                    }
                    Expression($.rightHandSide, $i)
                })
                break
            case "call":
                pl.cc($[1], ($) => {
                    Expression($.function, $i)
                    if ($d.isNotEmpty($.typeArguments)) {
                        $i.snippet(`<`)
                        let first = true
                        $.typeArguments.forEach(($) => {
                            if (!first) {
                                $i.snippet(`, `)
                            } else {
                                first = false
                            }
                            Type($, $i)
                        })
                        $i.snippet(`>`)
                    }
                    $i.snippet(`(`)
                    let first = true
                    $.arguments.forEach(($) => {
                        if (!first) {
                            $i.snippet(`, `)
                        } else {
                            first = false
                        }
                        Expression($, $i)
                    })
                    $i.snippet(`)`)

                })
                break
            case "conditional":
                pl.cc($[1], ($) => {
                    Expression($.test, $i)
                    $i.snippet(` ?`)
                    Expression($.ifExpression, $i)
                    $i.snippet(` :`)
                    Expression($.elseExpression, $i)
                })
                break
            case "elementAccess":
                pl.cc($[1], ($) => {
                    Expression($.array, $i)
                    $i.snippet(`[`)
                    Expression($.element, $i)
                    $i.snippet(`]`)
                })
                break
            case "false":
                pl.cc($[1], ($) => {
                    $i.snippet(`false`)
                })
                break
            case "identifier":
                pl.cc($[1], ($) => {
                    Identifier($, $i)
                })
                break
            case "noSubstitutionTemplateLiteral":
                pl.cc($[1], ($) => {
                    $i.snippet(`\`${"FIXMETEMPLATE"}\``)
                })
                break
            case "nullKeyword":
                pl.cc($[1], ($) => {
                    $i.snippet(`null`)
                })
                break
            case "numericLiteral":
                pl.cc($[1], ($) => {
                    $i.snippet($.myValue)
                })
                break
            case "objectLiteral":
                pl.cc($[1], ($) => {
                    $i.snippet(`{`)
                    $i.indent({}, ($i) => {

                        $.properties.forEach(($) => {
                            $i.line({}, ($i) => {
                                IdentifierOrStringLiteral($.name, $i)
                                $i.snippet(`: `)
                                Expression($.expression, $i)
                                $i.snippet(`,`)
                            })
                        })

                    })
                    $i.snippet(`}`)

                })
                break
            case "parenthesizedExpression":
                pl.cc($[1], ($) => {
                    $i.snippet(`(`)
                    Expression($, $i)
                    $i.snippet(`)`)
                })
                break
            case "prefixUnary":
                pl.cc($[1], ($) => {
                    $i.snippet(`?????PREFIXUNARY`)
                    Expression($, $i)
                })
                break
            case "propertyAccess":
                pl.cc($[1], ($) => {
                    Expression($.object, $i)
                    $i.snippet(`.`)
                    Expression($.property, $i)
                })
                break
            case "stringLiteral":
                pl.cc($[1], ($) => {
                    StringLiteral($, $i)
                })
                break
            case "template":
                pl.cc($[1], ($) => {
                    $i.snippet(`"<<`)
                    //$i.snippet(`\``)
                    $i.snippet($.head.myValue)
                    $.spans.forEach(($) => {
                        //$i.snippet(`\${`)
                        Expression($.expression, $i)
                        //$i.snippet(`}`)
                        switch ($.suffix[0]) {
                            case "middle":
                                pl.cc($.suffix[1], ($) => {
                                    $i.snippet($.myValue)
                                })
                                break
                            case "tail":
                                pl.cc($.suffix[1], ($) => {
                                    $i.snippet($.myValue)
                                })
                                break
                            default: pl.au($.suffix[0])
                        }
                    })
                    //$i.snippet(`\``)
                    $i.snippet(`>>"`)


                })
                break
            case "true":
                pl.cc($[1], ($) => {
                    $i.snippet(`true`)
                })
                break
            default: pl.au($[0])
        }
    }
    function FunctionDefinition(
        $: {
            sign: string
            def: nt.FunctionDefinition
        },
        $i: fp.ILine,
    ) {
        TypeParameters($.def.typeParameters, $i)
        $i.snippet(`(`)
        $i.indent({}, ($i) => {
            $.def.parameters.forEach(($) => {
                $i.line({}, ($i) => {
                    Parameter($, $i)
                    $i.snippet(`,`)
                })
            })
        })
        $i.snippet(`)`)
        if (pl.isNotNull($.def.returnType)) {
            $i.snippet($.sign)
            $i.snippet(` `)
            Type($.def.returnType, $i)
        } else {
            //
        }
    }
    function Identifier(
        $: nt.Identifier,
        $i: fp.ILine,
    ) {
        $i.snippet($.myValue)
    }
    function IdentifierOrStringLiteral(
        $: nt.IdentifierOrStringLiteral,
        $i: fp.ILine,
    ) {
        switch ($[0]) {
            case "identifier":
                pl.cc($[1], ($) => {
                    Identifier($, $i)
                })
                break
            case "stringLiteral":
                pl.cc($[1], ($) => {
                    StringLiteral($, $i)
                })
                break
            default: pl.au($[0])
        }
    }
    function Modifiers(
        $: nt.Modifiers,
        $i: fp.ILine,
    ) {
        $.forEach(($) => {
            switch ($[0]) {
                case "export":
                    pl.cc($[1], ($) => {
                        $i.snippet(`export `)
                    })
                    break
                case "readonly":
                    pl.cc($[1], ($) => {
                        $i.snippet(`readonly `)
                    })
                    break
                default: pl.au($[0])
            }
        })
    }
    function Parameter(
        $: nt.Parameter,
        $i: fp.ILine
    ) {
        Identifier($.name, $i)
        if ($.optional) {
            $i.snippet(`?`)
        } else {
            //
        }
        OptionalType($.type, $i)
    }
    function Statement(
        $: nt.Statement,
        $i: fp.ILine,
    ) {
        switch ($[0]) {
            case "block":
                pl.cc($[1], (($) => {
                    Block($, $i)
                }))
                break
            case "break":
                pl.cc($[1], ($) => {
                    $i.snippet(`break`)
                })
                break
            case "export":
                pl.cc($[1], ($) => {
                    $i.snippet(`export * from `)
                    StringLiteral($.stringLiteral, $i)
                })
                break
            case "expression":
                pl.cc($[1], (($) => {
                    Expression($, $i)
                }))
                break
            case "function":
                pl.cc($[1], ($) => {
                    Modifiers($.modifiers, $i)
                    $i.snippet(`function `)
                    Identifier($.name, $i)
                    FunctionDefinition(
                        {
                            sign: ":",
                            def: $.definition
                        },
                        $i,
                    )
                    if (pl.isNotNull($.block)) {
                        $i.snippet(` `)
                        Block($.block, $i)
                    } else {
                        //
                    }
                })
                break
            case "if":
                pl.cc($[1], ($) => {
                    $i.snippet(`if (`)
                    Expression($.expression, $i)
                    $i.snippet(`)`)
                    Statement($.thenStatement, $i)
                    if (pl.isNotNull($.elseStatement)) {
                        $i.snippet(` else`)
                        Statement($.elseStatement, $i)
                    } else {
                        ///
                    }
                })
                break
            case "import":
                pl.cc($[1], ($) => {
                    $i.snippet(`import `)
                    switch ($.clause[0]) {
                        case "named":
                            pl.cc($.clause[1], ($) => {
                                $i.snippet(`{ `)
                                let first = true
                                $.forEach(($) => {
                                    if (!first) {
                                        $i.snippet(`, `)
                                    } else {
                                        first = false
                                    }
                                    Identifier($.name, $i)
                                    if (pl.isNotNull($.as)) {
                                        $i.snippet(` as `)
                                        Identifier($.as, $i)
                                    } else {
                                        //
                                    }
                                })
                                $i.snippet(` }`)
                            })
                            break
                        case "namespace":
                            pl.cc($.clause[1], ($) => {
                                $i.snippet(`* as `)
                                Identifier($, $i)
                            })
                            break
                        default: pl.au($.clause[0])
                    }
                    $i.snippet(` from `)
                    StringLiteral($.file, $i)
                })
                break
            case "interface":
                pl.cc($[1], ($) => {
                    Modifiers($.modifiers, $i)
                    $i.snippet(`interface `)
                    Identifier($.name, $i)
                    TypeParameters($.typeParameters, $i)
                    $i.snippet(` {`)
                    $i.indent({}, ($i) => {
                        $.signatures.forEach(($) => {
                            $i.line({}, ($i) => {
                                TypeSignature($, $i)
                            })
                        })

                    })
                    $i.snippet(`}`)
                })
                break
            case "return":
                pl.cc($[1], ($) => {
                    $i.snippet(`return`)
                    if (pl.isNotNull($)) {
                        $i.snippet(` `)
                        Expression($, $i)
                    } else {

                    }
                })
                break
            case "switch":
                pl.cc($[1], ($) => {
                    $i.snippet(`switch (`)
                    Expression($.expression, $i)
                    $i.snippet(`) {`)
                    $i.indent({}, ($i) => {
                        $.clauses.forEach(($) => {
                            $i.line({}, ($i) => {
                                switch ($[0]) {
                                    case "case":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`case `)
                                            Expression($.expression, $i)
                                            $i.snippet(`:`)
                                            $i.indent({}, ($i) => {
                                                Statements($.statements, $i)
                                            })
                                        })
                                        break
                                    case "default":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`default:`)
                                            $i.indent({}, ($i) => {
                                                Statements($.statements, $i)
                                            })
                                        })
                                        break
                                    default: pl.au($[0])
                                }
                            })
                        })
                    })
                    $i.snippet(`}`)
                })
                break
            case "typeAlias":
                pl.cc($[1], ($) => {
                    Modifiers($.modifiers, $i)
                    $i.snippet(`type `)
                    Identifier($.name, $i)
                    TypeParameters($.typeParameters, $i)
                    $i.snippet(` = `)
                    Type($.type, $i)
                })
                break
            case "variable":
                pl.cc($[1], ($) => {
                    Modifiers($.modifiers, $i)
                    VariableDeclarationList($.list, $i)
                })
                break
            default: pl.au($[0])
        }
    }
    function Statements(
        $: nt.Statements,
        $i: fp.IBlock,
    ) {
        $.forEach(($) => {
            $i.line({}, ($i) => {
                Statement($, $i)

            })
        })
    }
    function StringLiteral(
        $: nt.StringLiteral,
        $i: fp.ILine
    ) {
        //$i.snippet(`"${$.myValue}"`)
        $i.snippet(`${$.myValue}`)
    }
    function Type(
        $: nt.Type,
        $i: fp.ILine,
    ) {
        switch ($[0]) {
            case "array":
                pl.cc($[1], ($) => {
                    Type($, $i)
                })
                break
            case "booleanKeyword":
                pl.cc($[1], ($) => {
                    $i.snippet(`boolean`)
                })
                break
            case "function":
                pl.cc($[1], ($) => {
                    FunctionDefinition(
                        {
                            sign: " =>",
                            def: $
                        },
                        $i,
                    )
                })
                break
            case "literal":
                pl.cc($[1], ($) => {
                    switch ($[0]) {
                        case "null":
                            pl.cc($[1], ($) => {
                                $i.snippet(`null`)
                            })
                            break
                        case "string":
                            pl.cc($[1], ($) => {
                                StringLiteral($, $i)
                            })
                            break
                        default: pl.au($[0])
                    }
                })
                break
            case "numberKeyword":
                pl.cc($[1], ($) => {
                    $i.snippet(`number`)
                })
                break
            case "optional":
                pl.cc($[1], ($) => {
                    $i.snippet(`FIXME OPTIONAL`)
                    Type($, $i)
                })
                break
            case "parenthesized":
                pl.cc($[1], ($) => {
                    $i.snippet(`(`)
                    Type($, $i)
                    $i.snippet(`)`)
                })
                break
            case "stringKeyword":
                pl.cc($[1], ($) => {
                    $i.snippet(`string`)
                })
                break
            case "tuple":
                pl.cc($[1], ($) => {
                    $i.snippet(`[`)
                    let first = true
                    $.forEach(($) => {
                        if (!first) {
                            $i.snippet(`, `)
                        } else {
                            first = false
                        }
                        Type($, $i)
                    })
                    $i.snippet(`]`)
                })
                break
            case "typeLiteral":
                pl.cc($[1], ($) => {
                    $i.snippet(`{`)
                    $i.indent({}, ($i) => {
                        $.forEach(($) => {
                            $i.line({}, ($i) => {
                                TypeSignature($, $i)
                            })
                        })
                    })
                    $i.snippet(`}`)
                })
                break
            case "typeReference":
                pl.cc($[1], ($) => {
                    switch ($.identification[0]) {
                        case "identifier":
                            pl.cc($.identification[1], ($) => {
                                Identifier($, $i)
                            })
                            break
                        case "qualifiedName":
                            pl.cc($.identification[1], ($) => {
                                Identifier($.context, $i)
                                $i.snippet(`.`)
                                Identifier($.type, $i)
                            })
                            break
                        default: pl.au($.identification[0])
                    }
                    if ($d.isNotEmpty($.parameters)) {
                        $i.snippet(`<`)
                        let first = true
                        $.parameters.forEach(($) => {
                            if (!first) {
                                $i.snippet(`, `)
                            } else {
                                first = false
                            }
                            Type($, $i)
                        })
                        $i.snippet(`>`)

                    }
                })
                break
            case "undefinedKeyword":
                pl.cc($[1], ($) => {
                    $i.snippet(`undefined`)
                })
                break
            case "union":
                pl.cc($[1], ($) => {
                    $i.indent({}, ($i) => {
                        $.forEach(($) => {
                            $i.line({}, ($i) => {
                                $i.snippet(`| `)
                                Type($, $i)
                            })
                        })
                    })
                })
                break
            case "voidKeyword":
                pl.cc($[1], ($) => {
                    $i.snippet(`void`)
                })
                break
            default: pl.au($[0])
        }
    }
    function TypeParameters(
        $: nt.TypeParameters,
        $i: fp.ILine,
    ) {
        if ($d.isNotEmpty($)) {
            $i.snippet(`<`)
            let first = true
            $.forEach(($) => {
                if (!first) {
                    $i.snippet(`, `)
                } else {
                    first = false
                }
                Identifier($, $i)
            })
            $i.snippet(`>`)

        }

    }
    function TypeSignature(
        $: nt.TypeSignature,
        $i: fp.ILine,
    ) {
        switch ($[0]) {
            case "index":
                pl.cc($[1], ($) => {
                    Modifiers($.modifiers, $i)
                    $i.snippet(`[ `)
                    Parameter($.parameter, $i)
                    $i.snippet(` ]`)
                    OptionalType($.type, $i)
                })
                break
            case "method":
                pl.cc($[1], ($) => {
                    Identifier($.name, $i)
                    FunctionDefinition(
                        {
                            sign: " =>",
                            def: $.definition
                        },
                        $i,
                    )
                })
                break
            case "property":
                pl.cc($[1], ($) => {

                    Modifiers($.modifiers, $i)
                    IdentifierOrStringLiteral($.name, $i)
                    if ($.optional) {
                        $i.snippet(`?`)
                    } else {

                    }
                    OptionalType($.type, $i)
                })
                break
            default: pl.au($[0])
        }
    }
    function OptionalType(
        $: nt.Type | null,
        $i: fp.ILine
    ) {
        if (pl.isNotNull($)) {
            $i.snippet(`: `)
            Type($, $i)
        } else {
            //
        }
    }
    function VariableDeclaration(
        $: nt.VariableDeclaration,
        $i: fp.ILine,
    ) {
        Identifier($.name, $i)
        OptionalType($.type, $i)
        if (pl.isNotNull($.expression)) {
            $i.snippet(` = `)
            Expression($.expression, $i)
        } else {
            //
        }
    }
    function VariableDeclarationList(
        $: nt.VariableDeclarationList,
        $i: fp.ILine,
    ) {
        let first = true
        $i.snippet(`const/*??*/ `)
        $.declarations.forEach(($) => {
            if (!first) {
                $i.snippet(`, `)
            } else {
                first = false
            }
            VariableDeclaration($, $i)
        })
    }

    Statements(
        $.statements,
        $i.block,
    )
}