import * as pl from "pareto-core-lib"
import * as pt from "pareto-core-types"

import * as fp from "lib-fountain-pen"

import * as nt from "./cleanup/types"


export function serializeParetoFile<Annotation>(
    $: nt.TSourceFile<Annotation>,
    $i: {
        block: fp.IBlock
    },
    $d: {
        isNotEmpty: <T> ($: pt.Array<T>) => boolean
    }
) {

    function Block(
        $: nt.TBlock<Annotation>,
        $i: fp.ILine
    ) {
        $i.snippet(`{`)
        $i.indent({}, ($i) => {
            Statements($.statements, $i)
        })
        $i.snippet(`}`)

    }
    function Expression(
        $: nt.TExpression<Annotation>,
        $i: fp.ILine,
    ) {
        switch ($.type[0]) {
            case "arrayLiteral":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`[`)
                    let first = true
                    $.expressions.forEach(($) => {
                        if (first) {
                            first = false
                        } else {
                            $i.snippet(`, `)
                        }
                        Expression($, $i)
                    })
                    $i.snippet(`]`)
                })
                break
            case "arrowFunction":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
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
                        case "exclamationEqualsEqualsEquals":
                            pl.cc($.operator[1], ($) => {
                                $i.snippet(` !== `)
                            })
                            break
                        default: pl.au($.operator[0])
                    }
                    Expression($.rightHandSide, $i)
                })
                break
            case "call":
                pl.cc($.type[1], ($) => {
                    Expression($.function, $i)
                    if ($d.isNotEmpty($.typeArguments)) {
                        $i.snippet(`<`)
                        let first = true
                        $.typeArguments.forEach(($) => {
                            if (first) {
                                first = false
                            } else {
                                $i.snippet(`, `)
                            }
                            Type($, $i)
                        })
                        $i.snippet(`>`)
                    }
                    $i.snippet(`(`)
                    let first = true
                    $.arguments.forEach(($) => {
                        if (first) {
                            first = false
                        } else {
                            $i.snippet(`, `)
                        }
                        Expression($, $i)
                    })
                    $i.snippet(`)`)

                })
                break
            case "conditional":
                pl.cc($.type[1], ($) => {
                    Expression($.test, $i)
                    $i.snippet(` ?`)
                    Expression($.ifExpression, $i)
                    $i.snippet(` :`)
                    Expression($.elseExpression, $i)
                })
                break
            case "elementAccess":
                pl.cc($.type[1], ($) => {
                    Expression($.array, $i)
                    $i.snippet(`[`)
                    Expression($.element, $i)
                    $i.snippet(`]`)
                })
                break
            case "false":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`false`)
                })
                break
            case "identifier":
                pl.cc($.type[1], ($) => {
                    Identifier($, $i)
                })
                break
            case "noSubstitutionTemplateLiteral":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`\`${"FIXMETEMPLATE"}\``)
                })
                break
            case "nullKeyword":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`null`)
                })
                break
            case "numericLiteral":
                pl.cc($.type[1], ($) => {
                    $i.snippet($.myValue)
                })
                break
            case "objectLiteral":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
                    $i.snippet(`(`)
                    Expression($, $i)
                    $i.snippet(`)`)
                })
                break
            case "prefixUnary":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`?????PREFIXUNARY`)
                    Expression($, $i)
                })
                break
            case "propertyAccess":
                pl.cc($.type[1], ($) => {
                    Expression($.object, $i)
                    $i.snippet(`.`)
                    Expression($.property, $i)
                })
                break
            case "stringLiteral":
                pl.cc($.type[1], ($) => {
                    StringLiteral($, $i)
                })
                break
            case "template":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
                    $i.snippet(`true`)
                })
                break
            default: pl.au($.type[0])
        }
    }
    function FunctionDefinition(
        $: {
            sign: string
            def: nt.TFunctionDefinition<Annotation>
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
        $: nt.TIdentifier<Annotation>,
        $i: fp.ILine,
    ) {
        $i.snippet($.myValue)
    }
    function IdentifierOrStringLiteral(
        $: nt.TIdentifierOrStringLiteral<Annotation>,
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
        $: nt.TModifiers<Annotation>,
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
        $: nt.TParameter<Annotation>,
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
        $: nt.TStatement<Annotation>,
        $i: fp.ILine,
    ) {

        return {
            type: pl.cc($, ($) => {

                switch ($.type[0]) {
                    case "block":
                        pl.cc($.type[1], (($) => {
                            Block($, $i)
                        }))
                        break
                    case "break":
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`break`)
                        })
                        break
                    case "export":
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`export * from `)
                            StringLiteral($.stringLiteral, $i)
                        })
                        break
                    case "expression":
                        pl.cc($.type[1], (($) => {
                            Expression($, $i)
                        }))
                        break
                    case "function":
                        pl.cc($.type[1], ($) => {
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
                        pl.cc($.type[1], ($) => {
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
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`import `)
                            switch ($.clause[0]) {
                                case "named":
                                    pl.cc($.clause[1], ($) => {
                                        $i.snippet(`{ `)
                                        let first = true
                                        $.forEach(($) => {
                                            if (first) {
                                                first = false
                                            } else {
                                                $i.snippet(`, `)
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
                        pl.cc($.type[1], ($) => {
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
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`return`)
                            if (pl.isNotNull($)) {
                                $i.snippet(` `)
                                Expression($, $i)
                            } else {

                            }
                        })
                        break
                    case "switch":
                        pl.cc($.type[1], ($) => {
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
                        pl.cc($.type[1], ($) => {
                            Modifiers($.modifiers, $i)
                            $i.snippet(`type `)
                            Identifier($.name, $i)
                            TypeParameters($.typeParameters, $i)
                            $i.snippet(` = `)
                            Type($.type, $i)
                        })
                        break
                    case "variable":
                        pl.cc($.type[1], ($) => {
                            Modifiers($.modifiers, $i)
                            VariableDeclarationList($.list, $i)
                        })
                        break
                    default: pl.au($.type[0])
                }
            })
        }
    }
    function Statements(
        $: nt.TStatements<Annotation>,
        $i: fp.IBlock,
    ) {
        $.forEach(($) => {
            $i.line({}, ($i) => {
                Statement($, $i)

            })
        })
    }
    function StringLiteral(
        $: nt.TStringLiteral<Annotation>,
        $i: fp.ILine
    ) {
        //$i.snippet(`"${$.myValue}"`)

        $i.snippet(`${$.wrapper}${$.strippedValue}${$.wrapper}`)
    }
    function Type(
        $: nt.TType<Annotation>,
        $i: fp.ILine,
    ) {
        switch ($.type[0]) {
            case "array":
                pl.cc($.type[1], ($) => {
                    Type($, $i)
                })
                break
            case "booleanKeyword":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`boolean`)
                })
                break
            case "function":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
                    $i.snippet(`number`)
                })
                break
            case "optional":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`FIXME OPTIONAL`)
                    Type($, $i)
                })
                break
            case "parenthesized":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`(`)
                    Type($, $i)
                    $i.snippet(`)`)
                })
                break
            case "stringKeyword":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`string`)
                })
                break
            case "tuple":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`[`)
                    let first = true
                    $.forEach(($) => {
                        if (first) {
                            first = false
                        } else {
                            $i.snippet(`, `)
                        }
                        Type($, $i)
                    })
                    $i.snippet(`]`)
                })
                break
            case "typeLiteral":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
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
                            if (first) {
                                first = false
                            } else {
                                $i.snippet(`, `)
                            }
                            Type($, $i)
                        })
                        $i.snippet(`>`)

                    }
                })
                break
            case "undefinedKeyword":
                pl.cc($.type[1], ($) => {
                    $i.snippet(`undefined`)
                })
                break
            case "union":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {
                    $i.snippet(`void`)
                })
                break
            default: pl.au($.type[0])
        }
    }
    function TypeParameters(
        $: nt.TTypeParameters<Annotation>,
        $i: fp.ILine,
    ) {
        if ($d.isNotEmpty($)) {
            $i.snippet(`<`)
            let first = true
            $.forEach(($) => {
                if (first) {
                    first = false
                } else {
                    $i.snippet(`, `)
                }
                Identifier($, $i)
            })
            $i.snippet(`>`)

        }

    }
    function TypeSignature(
        $: nt.TTypeSignature<Annotation>,
        $i: fp.ILine,
    ) {
        switch ($.type[0]) {
            case "index":
                pl.cc($.type[1], ($) => {
                    Modifiers($.modifiers, $i)
                    $i.snippet(`[ `)
                    Parameter($.parameter, $i)
                    $i.snippet(` ]`)
                    OptionalType($.type, $i)
                })
                break
            case "method":
                pl.cc($.type[1], ($) => {
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
                pl.cc($.type[1], ($) => {

                    Modifiers($.modifiers, $i)
                    IdentifierOrStringLiteral($.name, $i)
                    if ($.optional) {
                        $i.snippet(`?`)
                    } else {

                    }
                    OptionalType($.type, $i)
                })
                break
            default: pl.au($.type[0])
        }
    }
    function OptionalType(
        $: nt.TType<Annotation> | null,
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
        $: nt.TVariableDeclaration<Annotation>,
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
        $: nt.TVariableDeclarationList<Annotation>,
        $i: fp.ILine,
    ) {
        let first = true
        $i.snippet(`const/*??*/ `)
        $.declarations.forEach(($) => {
            if (first) {
                first = false
            } else {
                $i.snippet(`, `)
            }
            VariableDeclaration($, $i)
        })
    }

    Statements(
        $.statements,
        $i.block,
    )
}