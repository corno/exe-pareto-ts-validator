import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as uast from "api-untyped-ast"
import * as api from "../../interface"

export function parse(
    $: uast.TUntypedNode,
    $i: {
        callback: ($: api.TRoot) => void,
        reportUnexpectedToken: ($: { path: string, token: uast.TUntypedNode, expected: null | string }) => void,
        reportMissingToken: ($: { parentDetails: uast.TDetails, path: string, kindNameOptions: string, }) => void,
    },
    $d: {
        doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,
        lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,
        stringsNotEqual: (a: string, b: string) => boolean,
    },
): void {
    const $x = $i
    function GvariableDeclarationList(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGvariableDeclarationList) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "VariableDeclarationList")) {
                    $x.reportUnexpectedToken({
                        path: "GvariableDeclarationList",
                        token: currentChild,
                        expected: "VariableDeclarationList",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGvariableDeclarationList$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const elements = pm.createArrayBuilder<api.TVTGvariableDeclarationList$>()
                    const processElement = () => {
                        GvariableDeclaration(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    $d.doUntil(
                        children,
                        (nextChild) => {
                            switch (nextChild.kindName) {
                                case "VariableDeclaration": //z
                                    processElement()
                                    return true
                                default: return false
                            }
                        },
                    )
                    pl.cc(elements.getArray(), ($) => {
                        callback({
                            tokenDetails: node.details,
                            content: $,
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "GvariableDeclarationList$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GvariableDeclarationList",
                    kindNameOptions: "VariableDeclarationList",
                })
            },
        )
    }
    function GvariableDeclaration(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGvariableDeclaration) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "VariableDeclaration")) {
                    $x.reportUnexpectedToken({
                        path: "GvariableDeclaration",
                        token: currentChild,
                        expected: "VariableDeclaration",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGvariableDeclaration$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const sequenceEnd = ($: api.TVTGvariableDeclaration$) => {
                        callback({
                            tokenDetails: node.details,
                            content: $,
                        })
                    }
                    const choiceEnd_GvariableDeclaration$_nameOrArrayBinding = ($: api.TVTGvariableDeclaration$_nameOrArrayBinding) => {
                        const _nameOrArrayBinding = $
                        let optional: null | api.TVTGvariableDeclaration$_type = null
                        const setOptional = () => {
                            Gtype(node, children, ($) => {
                                optional = $
                            })
                        }
                        $d.lookAhead(children, 
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case "ArrayType": //XXX
                                        setOptional()
                                        break
                                    case "BooleanKeyword": //XXX
                                        setOptional()
                                        break
                                    case "FunctionType": //XXX
                                        setOptional()
                                        break
                                    case "LiteralType": //XXX
                                        setOptional()
                                        break
                                    case "ParenthesizedType": //XXX
                                        setOptional()
                                        break
                                    case "NumberKeyword": //XXX
                                        setOptional()
                                        break
                                    case "OptionalType": //XXX
                                        setOptional()
                                        break
                                    case "TupleType": //XXX
                                        setOptional()
                                        break
                                    case "TypeLiteral": //XXX
                                        setOptional()
                                        break
                                    case "StringKeyword": //XXX
                                        setOptional()
                                        break
                                    case "TypeReference": //XXX
                                        setOptional()
                                        break
                                    case "UndefinedKeyword": //XXX
                                        setOptional()
                                        break
                                    case "UnionType": //XXX
                                        setOptional()
                                        break
                                    case "VoidKeyword": //XXX
                                        setOptional()
                                        break
                                }
                            },
                            () => {},
                        )
                        pl.cc(optional, ($) => {
                            const _type = $
                            let optional: null | api.TVTGvariableDeclaration$_expression = null
                            const setOptional = () => {
                                Gexpression(node, children, ($) => {
                                    optional = $
                                })
                            }
                            $d.lookAhead(children, 
                                (nextChild) => {
                                    switch (nextChild.kindName) {
                                        case "ArrayLiteralExpression": //XXX
                                            setOptional()
                                            break
                                        case "ArrowFunction": //XXX
                                            setOptional()
                                            break
                                        case "BinaryExpression": //XXX
                                            setOptional()
                                            break
                                        case "CallExpression": //XXX
                                            setOptional()
                                            break
                                        case "ConditionalExpression": //XXX
                                            setOptional()
                                            break
                                        case "ElementAccessExpression": //XXX
                                            setOptional()
                                            break
                                        case "FalseKeyword": //XXX
                                            setOptional()
                                            break
                                        case "Identifier": //XXX
                                            setOptional()
                                            break
                                        case "NoSubstitutionTemplateLiteral": //XXX
                                            setOptional()
                                            break
                                        case "NumericLiteral": //XXX
                                            setOptional()
                                            break
                                        case "NullKeyword": //XXX
                                            setOptional()
                                            break
                                        case "ObjectLiteralExpression": //XXX
                                            setOptional()
                                            break
                                        case "ParenthesizedExpression": //XXX
                                            setOptional()
                                            break
                                        case "PrefixUnaryExpression": //XXX
                                            setOptional()
                                            break
                                        case "PropertyAccessExpression": //XXX
                                            setOptional()
                                            break
                                        case "StringLiteral": //XXX
                                            setOptional()
                                            break
                                        case "TemplateExpression": //XXX
                                            setOptional()
                                            break
                                        case "TrueKeyword": //XXX
                                            setOptional()
                                            break
                                    }
                                },
                                () => {},
                            )
                            pl.cc(optional, ($) => {
                                const _expression = $
                                sequenceEnd({
                                    "nameOrArrayBinding": _nameOrArrayBinding,
                                    "type": _type,
                                    "expression": _expression,
                                })
                            })
                        })
                    }
                    $d.lookAhead(children, 
                        (nextChild) => {
                            const choose_arrayBindingPattern = () => {
                                children.pop(
                                    (currentChild) => {
                                        if ($d.stringsNotEqual(currentChild.kindName, "ArrayBindingPattern")) {
                                            $x.reportUnexpectedToken({
                                                path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern",
                                                token: currentChild,
                                                expected: "ArrayBindingPattern",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode,
                                            callback: ($: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            const elements = pm.createArrayBuilder<api.TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$>()
                                            const processElement = () => {
                                                const choiceEnd_GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$ = ($: api.TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$) => {
                                                    elements.push($)
                                                }
                                                $d.lookAhead(children, 
                                                    (nextChild) => {
                                                        const choose_bindingElement = () => {
                                                            children.pop(
                                                                (currentChild) => {
                                                                    if ($d.stringsNotEqual(currentChild.kindName, "BindingElement")) {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement",
                                                                            token: currentChild,
                                                                            expected: "BindingElement",
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.TUntypedNode,
                                                                        callback: ($: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$) => void,
                                                                    ): void => {
                                                                        const node = $
                                                                        const children = pm.createStack($.children)
                                                                        Gidentifier(node, children, ($) => {
                                                                            callback({
                                                                                tokenDetails: node.details,
                                                                                content: $,
                                                                            })
                                                                        })
                                                                        children.pop(
                                                                            (nextChild) => {
                                                                                $x.reportUnexpectedToken({
                                                                                    path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$",
                                                                                    token: nextChild,
                                                                                    expected: null,
                                                                                })
                                                                            },
                                                                            () => {},
                                                                        )
                                                                    })(
                                                                        currentChild,
                                                                        ($) => {
                                                                            choiceEnd_GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$(["bindingElement", $])
                                                                        }
                                                                    )
                                                                },
                                                                () => { // no child
                                                                    $x.reportMissingToken({
                                                                        parentDetails: node.details,
                                                                        path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement",
                                                                        kindNameOptions: "BindingElement",
                                                                    })
                                                                },
                                                            )
                                                        }
                                                        const choose_omitted = () => {
                                                            children.pop(
                                                                (currentChild) => {
                                                                    if ($d.stringsNotEqual(currentChild.kindName, "OmittedExpression")) {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted",
                                                                            token: currentChild,
                                                                            expected: "OmittedExpression",
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.TUntypedNode,
                                                                        callback: ($: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$) => void,
                                                                    ): void => {
                                                                        const node = $
                                                                        const children = pm.createStack($.children)
                                                                        callback($.details)
                                                                        children.pop(
                                                                            (nextChild) => {
                                                                                $x.reportUnexpectedToken({
                                                                                    path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$",
                                                                                    token: nextChild,
                                                                                    expected: null,
                                                                                })
                                                                            },
                                                                            () => {},
                                                                        )
                                                                    })(
                                                                        currentChild,
                                                                        ($) => {
                                                                            choiceEnd_GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$(["omitted", $])
                                                                        }
                                                                    )
                                                                },
                                                                () => { // no child
                                                                    $x.reportMissingToken({
                                                                        parentDetails: node.details,
                                                                        path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted",
                                                                        kindNameOptions: "OmittedExpression",
                                                                    })
                                                                },
                                                            )
                                                        }
                                                        switch (nextChild.kindName) {
                                                            case "OmittedExpression": /*Y*/ {
                                                                choose_omitted()
                                                                break
                                                            }
                                                            case "BindingElement": /*Y*/ {
                                                                choose_bindingElement()
                                                                break
                                                            }
                                                            default: {
                                                                $x.reportUnexpectedToken({
                                                                    path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$",
                                                                    token: nextChild,
                                                                    expected: "OmittedExpression, BindingElement",
                                                                })
                                                            }
                                                        }
                                                    },
                                                    () => { //no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$",
                                                            kindNameOptions: "OmittedExpression, BindingElement",
                                                        })
                                                    },
                                                )
                                            }
                                            $d.doUntil(
                                                children,
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "OmittedExpression": //z
                                                            processElement()
                                                            return true
                                                        case "BindingElement": //z
                                                            processElement()
                                                            return true
                                                        default: return false
                                                    }
                                                },
                                            )
                                            pl.cc(elements.getArray(), ($) => {
                                                callback({
                                                    tokenDetails: node.details,
                                                    content: $,
                                                })
                                            })
                                            children.pop(
                                                (nextChild) => {
                                                    $x.reportUnexpectedToken({
                                                        path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$",
                                                        token: nextChild,
                                                        expected: null,
                                                    })
                                                },
                                                () => {},
                                            )
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GvariableDeclaration$_nameOrArrayBinding(["arrayBindingPattern", $])
                                            }
                                        )
                                    },
                                    () => { // no child
                                        $x.reportMissingToken({
                                            parentDetails: node.details,
                                            path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern",
                                            kindNameOptions: "ArrayBindingPattern",
                                        })
                                    },
                                )
                            }
                            const choose_identifier = () => {
                                Gidentifier(node, children, ($) => {
                                    choiceEnd_GvariableDeclaration$_nameOrArrayBinding(["identifier", $])
                                })
                            }
                            switch (nextChild.kindName) {
                                case "Identifier": /*Y*/ {
                                    choose_identifier()
                                    break
                                }
                                case "ArrayBindingPattern": /*Y*/ {
                                    choose_arrayBindingPattern()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedToken({
                                        path: "GvariableDeclaration$_nameOrArrayBinding",
                                        token: nextChild,
                                        expected: "Identifier, ArrayBindingPattern",
                                    })
                                }
                            }
                        },
                        () => { //no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GvariableDeclaration$_nameOrArrayBinding",
                                kindNameOptions: "Identifier, ArrayBindingPattern",
                            })
                        },
                    )
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "GvariableDeclaration$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GvariableDeclaration",
                    kindNameOptions: "VariableDeclaration",
                })
            },
        )
    }
    function GtypeSignature(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGtypeSignature) => void,
    ): void {
        const choiceEnd_GtypeSignature = ($: api.TVTGtypeSignature) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_property = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "PropertySignature")) {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_property",
                                    token: currentChild,
                                    expected: "PropertySignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtypeSignature_property$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtypeSignature_property$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGtypeSignature_property$_modifiers>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ExportKeyword": //z
                                                processElement()
                                                return true
                                            case "ReadonlyKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    GidentifierOrStringLiteral(node, children, ($) => {
                                        const _name = $
                                        let optional: null | api.TVTGtypeSignature_property$_quesionToken = null
                                        const setOptional = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if ($d.stringsNotEqual(currentChild.kindName, "QuestionToken")) {
                                                        $x.reportUnexpectedToken({
                                                            path: "GtypeSignature_property$_quesionToken",
                                                            token: currentChild,
                                                            expected: "QuestionToken",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode,
                                                        callback: ($: api.TNGtypeSignature_property$_quesionToken$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.details)
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "GtypeSignature_property$_quesionToken$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            optional = $
                                                        }
                                                    )
                                                },
                                                () => { // no child
                                                    $x.reportMissingToken({
                                                        parentDetails: node.details,
                                                        path: "GtypeSignature_property$_quesionToken",
                                                        kindNameOptions: "QuestionToken",
                                                    })
                                                },
                                            )
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "QuestionToken": //XXX
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _quesionToken = $
                                            let optional: null | api.TVTGtypeSignature_property$_type = null
                                            const setOptional = () => {
                                                Gtype(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "ArrayType": //XXX
                                                            setOptional()
                                                            break
                                                        case "BooleanKeyword": //XXX
                                                            setOptional()
                                                            break
                                                        case "FunctionType": //XXX
                                                            setOptional()
                                                            break
                                                        case "LiteralType": //XXX
                                                            setOptional()
                                                            break
                                                        case "ParenthesizedType": //XXX
                                                            setOptional()
                                                            break
                                                        case "NumberKeyword": //XXX
                                                            setOptional()
                                                            break
                                                        case "OptionalType": //XXX
                                                            setOptional()
                                                            break
                                                        case "TupleType": //XXX
                                                            setOptional()
                                                            break
                                                        case "TypeLiteral": //XXX
                                                            setOptional()
                                                            break
                                                        case "StringKeyword": //XXX
                                                            setOptional()
                                                            break
                                                        case "TypeReference": //XXX
                                                            setOptional()
                                                            break
                                                        case "UndefinedKeyword": //XXX
                                                            setOptional()
                                                            break
                                                        case "UnionType": //XXX
                                                            setOptional()
                                                            break
                                                        case "VoidKeyword": //XXX
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _type = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "quesionToken": _quesionToken,
                                                    "type": _type,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "GtypeSignature_property$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["property", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_property",
                                kindNameOptions: "PropertySignature",
                            })
                        },
                    )
                }
                const choose_method = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "MethodSignature")) {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_method",
                                    token: currentChild,
                                    expected: "MethodSignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtypeSignature_method$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtypeSignature_method$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gidentifier(node, children, ($) => {
                                    const _name = $
                                    GfunctionDefinition(node, children, ($) => {
                                        const _definition = $
                                        sequenceEnd({
                                            "name": _name,
                                            "definition": _definition,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "GtypeSignature_method$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["method", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_method",
                                kindNameOptions: "MethodSignature",
                            })
                        },
                    )
                }
                const choose_index = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "IndexSignature")) {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_index",
                                    token: currentChild,
                                    expected: "IndexSignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtypeSignature_index$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtypeSignature_index$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGtypeSignature_index$_modifiers>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ExportKeyword": //z
                                                processElement()
                                                return true
                                            case "ReadonlyKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gparameter(node, children, ($) => {
                                        const _parameter = $
                                        let optional: null | api.TVTGtypeSignature_index$_type = null
                                        const setOptional = () => {
                                            Gtype(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "ArrayType": //XXX
                                                        setOptional()
                                                        break
                                                    case "BooleanKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "FunctionType": //XXX
                                                        setOptional()
                                                        break
                                                    case "LiteralType": //XXX
                                                        setOptional()
                                                        break
                                                    case "ParenthesizedType": //XXX
                                                        setOptional()
                                                        break
                                                    case "NumberKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "OptionalType": //XXX
                                                        setOptional()
                                                        break
                                                    case "TupleType": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeLiteral": //XXX
                                                        setOptional()
                                                        break
                                                    case "StringKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeReference": //XXX
                                                        setOptional()
                                                        break
                                                    case "UndefinedKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "UnionType": //XXX
                                                        setOptional()
                                                        break
                                                    case "VoidKeyword": //XXX
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _type = $
                                            sequenceEnd({
                                                "modifiers": _modifiers,
                                                "parameter": _parameter,
                                                "type": _type,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "GtypeSignature_index$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_GtypeSignature(["index", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "GtypeSignature_index",
                                kindNameOptions: "IndexSignature",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "IndexSignature": /*Y*/ {
                        choose_index()
                        break
                    }
                    case "MethodSignature": /*Y*/ {
                        choose_method()
                        break
                    }
                    case "PropertySignature": /*Y*/ {
                        choose_property()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "GtypeSignature",
                            token: nextChild,
                            expected: "IndexSignature, MethodSignature, PropertySignature",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GtypeSignature",
                    kindNameOptions: "IndexSignature, MethodSignature, PropertySignature",
                })
            },
        )
    }
    function GtypeParameter(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGtypeParameter) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "TypeParameter")) {
                    $x.reportUnexpectedToken({
                        path: "GtypeParameter",
                        token: currentChild,
                        expected: "TypeParameter",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGtypeParameter$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    Gidentifier(node, children, ($) => {
                        callback({
                            tokenDetails: node.details,
                            content: $,
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "GtypeParameter$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GtypeParameter",
                    kindNameOptions: "TypeParameter",
                })
            },
        )
    }
    function Gtype(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGtype) => void,
    ): void {
        const choiceEnd_Gtype = ($: api.TVTGtype) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_void = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "VoidKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_void",
                                    token: currentChild,
                                    expected: "VoidKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_void$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_void$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["void", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_void",
                                kindNameOptions: "VoidKeyword",
                            })
                        },
                    )
                }
                const choose_union = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "UnionType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_union",
                                    token: currentChild,
                                    expected: "UnionType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_union$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGtype_union$>()
                                const processElement = () => {
                                    Gtype(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ArrayType": //z
                                                processElement()
                                                return true
                                            case "BooleanKeyword": //z
                                                processElement()
                                                return true
                                            case "FunctionType": //z
                                                processElement()
                                                return true
                                            case "LiteralType": //z
                                                processElement()
                                                return true
                                            case "ParenthesizedType": //z
                                                processElement()
                                                return true
                                            case "NumberKeyword": //z
                                                processElement()
                                                return true
                                            case "OptionalType": //z
                                                processElement()
                                                return true
                                            case "TupleType": //z
                                                processElement()
                                                return true
                                            case "TypeLiteral": //z
                                                processElement()
                                                return true
                                            case "StringKeyword": //z
                                                processElement()
                                                return true
                                            case "TypeReference": //z
                                                processElement()
                                                return true
                                            case "UndefinedKeyword": //z
                                                processElement()
                                                return true
                                            case "UnionType": //z
                                                processElement()
                                                return true
                                            case "VoidKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_union$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["union", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_union",
                                kindNameOptions: "UnionType",
                            })
                        },
                    )
                }
                const choose_undefined = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "UndefinedKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_undefined",
                                    token: currentChild,
                                    expected: "UndefinedKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_undefined$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_undefined$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["undefined", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_undefined",
                                kindNameOptions: "UndefinedKeyword",
                            })
                        },
                    )
                }
                const choose_typeReference = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "TypeReference")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_typeReference",
                                    token: currentChild,
                                    expected: "TypeReference",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_typeReference$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtype_typeReference$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const choiceEnd_Gtype_typeReference$_x = ($: api.TVTGtype_typeReference$_x) => {
                                    const _x = $
                                    const elements = pm.createArrayBuilder<api.TVTGtype_typeReference$_parameters>()
                                    const processElement = () => {
                                        Gtype(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "ArrayType": //z
                                                    processElement()
                                                    return true
                                                case "BooleanKeyword": //z
                                                    processElement()
                                                    return true
                                                case "FunctionType": //z
                                                    processElement()
                                                    return true
                                                case "LiteralType": //z
                                                    processElement()
                                                    return true
                                                case "ParenthesizedType": //z
                                                    processElement()
                                                    return true
                                                case "NumberKeyword": //z
                                                    processElement()
                                                    return true
                                                case "OptionalType": //z
                                                    processElement()
                                                    return true
                                                case "TupleType": //z
                                                    processElement()
                                                    return true
                                                case "TypeLiteral": //z
                                                    processElement()
                                                    return true
                                                case "StringKeyword": //z
                                                    processElement()
                                                    return true
                                                case "TypeReference": //z
                                                    processElement()
                                                    return true
                                                case "UndefinedKeyword": //z
                                                    processElement()
                                                    return true
                                                case "UnionType": //z
                                                    processElement()
                                                    return true
                                                case "VoidKeyword": //z
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        sequenceEnd({
                                            "x": _x,
                                            "parameters": _parameters,
                                        })
                                    })
                                }
                                $d.lookAhead(children, 
                                    (nextChild) => {
                                        const choose_qualifiedName = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if ($d.stringsNotEqual(currentChild.kindName, "QualifiedName")) {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gtype_typeReference$_x_qualifiedName",
                                                            token: currentChild,
                                                            expected: "QualifiedName",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode,
                                                        callback: ($: api.TNGtype_typeReference$_x_qualifiedName$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        const sequenceEnd = ($: api.TVTGtype_typeReference$_x_qualifiedName$) => {
                                                            callback({
                                                                tokenDetails: node.details,
                                                                content: $,
                                                            })
                                                        }
                                                        Gidentifier(node, children, ($) => {
                                                            const _context = $
                                                            Gidentifier(node, children, ($) => {
                                                                const _type = $
                                                                sequenceEnd({
                                                                    "context": _context,
                                                                    "type": _type,
                                                                })
                                                            })
                                                        })
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gtype_typeReference$_x_qualifiedName$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            choiceEnd_Gtype_typeReference$_x(["qualifiedName", $])
                                                        }
                                                    )
                                                },
                                                () => { // no child
                                                    $x.reportMissingToken({
                                                        parentDetails: node.details,
                                                        path: "Gtype_typeReference$_x_qualifiedName",
                                                        kindNameOptions: "QualifiedName",
                                                    })
                                                },
                                            )
                                        }
                                        const choose_identifier = () => {
                                            Gidentifier(node, children, ($) => {
                                                choiceEnd_Gtype_typeReference$_x(["identifier", $])
                                            })
                                        }
                                        switch (nextChild.kindName) {
                                            case "Identifier": /*Y*/ {
                                                choose_identifier()
                                                break
                                            }
                                            case "QualifiedName": /*Y*/ {
                                                choose_qualifiedName()
                                                break
                                            }
                                            default: {
                                                $x.reportUnexpectedToken({
                                                    path: "Gtype_typeReference$_x",
                                                    token: nextChild,
                                                    expected: "Identifier, QualifiedName",
                                                })
                                            }
                                        }
                                    },
                                    () => { //no child
                                        $x.reportMissingToken({
                                            parentDetails: node.details,
                                            path: "Gtype_typeReference$_x",
                                            kindNameOptions: "Identifier, QualifiedName",
                                        })
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_typeReference$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["typeReference", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_typeReference",
                                kindNameOptions: "TypeReference",
                            })
                        },
                    )
                }
                const choose_string = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "StringKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_string",
                                    token: currentChild,
                                    expected: "StringKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_string$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_string$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["string", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_string",
                                kindNameOptions: "StringKeyword",
                            })
                        },
                    )
                }
                const choose_typeLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "TypeLiteral")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_typeLiteral",
                                    token: currentChild,
                                    expected: "TypeLiteral",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_typeLiteral$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGtype_typeLiteral$>()
                                const processElement = () => {
                                    GtypeSignature(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "IndexSignature": //z
                                                processElement()
                                                return true
                                            case "MethodSignature": //z
                                                processElement()
                                                return true
                                            case "PropertySignature": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_typeLiteral$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["typeLiteral", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_typeLiteral",
                                kindNameOptions: "TypeLiteral",
                            })
                        },
                    )
                }
                const choose_tuple = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "TupleType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_tuple",
                                    token: currentChild,
                                    expected: "TupleType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_tuple$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGtype_tuple$>()
                                const processElement = () => {
                                    Gtype(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ArrayType": //z
                                                processElement()
                                                return true
                                            case "BooleanKeyword": //z
                                                processElement()
                                                return true
                                            case "FunctionType": //z
                                                processElement()
                                                return true
                                            case "LiteralType": //z
                                                processElement()
                                                return true
                                            case "ParenthesizedType": //z
                                                processElement()
                                                return true
                                            case "NumberKeyword": //z
                                                processElement()
                                                return true
                                            case "OptionalType": //z
                                                processElement()
                                                return true
                                            case "TupleType": //z
                                                processElement()
                                                return true
                                            case "TypeLiteral": //z
                                                processElement()
                                                return true
                                            case "StringKeyword": //z
                                                processElement()
                                                return true
                                            case "TypeReference": //z
                                                processElement()
                                                return true
                                            case "UndefinedKeyword": //z
                                                processElement()
                                                return true
                                            case "UnionType": //z
                                                processElement()
                                                return true
                                            case "VoidKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_tuple$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["tuple", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_tuple",
                                kindNameOptions: "TupleType",
                            })
                        },
                    )
                }
                const choose_optional = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "OptionalType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_optional",
                                    token: currentChild,
                                    expected: "OptionalType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_optional$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gtype(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_optional$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["optional", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_optional",
                                kindNameOptions: "OptionalType",
                            })
                        },
                    )
                }
                const choose_number = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "NumberKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_number",
                                    token: currentChild,
                                    expected: "NumberKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_number$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_number$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["number", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_number",
                                kindNameOptions: "NumberKeyword",
                            })
                        },
                    )
                }
                const choose_parenthesized = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ParenthesizedType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_parenthesized",
                                    token: currentChild,
                                    expected: "ParenthesizedType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_parenthesized$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gtype(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_parenthesized$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["parenthesized", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_parenthesized",
                                kindNameOptions: "ParenthesizedType",
                            })
                        },
                    )
                }
                const choose_literal = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "LiteralType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_literal",
                                    token: currentChild,
                                    expected: "LiteralType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_literal$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const choiceEnd_Gtype_literal$ = ($: api.TVTGtype_literal$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                $d.lookAhead(children, 
                                    (nextChild) => {
                                        const choose_string = () => {
                                            GstringLiteral(node, children, ($) => {
                                                choiceEnd_Gtype_literal$(["string", $])
                                            })
                                        }
                                        const choose_null = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if ($d.stringsNotEqual(currentChild.kindName, "NullKeyword")) {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gtype_literal$_null",
                                                            token: currentChild,
                                                            expected: "NullKeyword",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode,
                                                        callback: ($: api.TNGtype_literal$_null$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.details)
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gtype_literal$_null$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            choiceEnd_Gtype_literal$(["null", $])
                                                        }
                                                    )
                                                },
                                                () => { // no child
                                                    $x.reportMissingToken({
                                                        parentDetails: node.details,
                                                        path: "Gtype_literal$_null",
                                                        kindNameOptions: "NullKeyword",
                                                    })
                                                },
                                            )
                                        }
                                        switch (nextChild.kindName) {
                                            case "NullKeyword": /*Y*/ {
                                                choose_null()
                                                break
                                            }
                                            case "StringLiteral": /*Y*/ {
                                                choose_string()
                                                break
                                            }
                                            default: {
                                                $x.reportUnexpectedToken({
                                                    path: "Gtype_literal$",
                                                    token: nextChild,
                                                    expected: "NullKeyword, StringLiteral",
                                                })
                                            }
                                        }
                                    },
                                    () => { //no child
                                        $x.reportMissingToken({
                                            parentDetails: node.details,
                                            path: "Gtype_literal$",
                                            kindNameOptions: "NullKeyword, StringLiteral",
                                        })
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_literal$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["literal", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_literal",
                                kindNameOptions: "LiteralType",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "FunctionType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_function",
                                    token: currentChild,
                                    expected: "FunctionType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_function$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtype_function$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGtype_function$_typeParameters>()
                                const processElement = () => {
                                    GtypeParameter(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "TypeParameter": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _typeParameters = $
                                    const elements = pm.createArrayBuilder<api.TVTGtype_function$_parameters>()
                                    const processElement = () => {
                                        Gparameter(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "Parameter": //z
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        let optional: null | api.TVTGtype_function$_returnType = null
                                        const setOptional = () => {
                                            Gtype(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "ArrayType": //XXX
                                                        setOptional()
                                                        break
                                                    case "BooleanKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "FunctionType": //XXX
                                                        setOptional()
                                                        break
                                                    case "LiteralType": //XXX
                                                        setOptional()
                                                        break
                                                    case "ParenthesizedType": //XXX
                                                        setOptional()
                                                        break
                                                    case "NumberKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "OptionalType": //XXX
                                                        setOptional()
                                                        break
                                                    case "TupleType": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeLiteral": //XXX
                                                        setOptional()
                                                        break
                                                    case "StringKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeReference": //XXX
                                                        setOptional()
                                                        break
                                                    case "UndefinedKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "UnionType": //XXX
                                                        setOptional()
                                                        break
                                                    case "VoidKeyword": //XXX
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _returnType = $
                                            sequenceEnd({
                                                "typeParameters": _typeParameters,
                                                "parameters": _parameters,
                                                "returnType": _returnType,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_function$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["function", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_function",
                                kindNameOptions: "FunctionType",
                            })
                        },
                    )
                }
                const choose_boolean = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "BooleanKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_boolean",
                                    token: currentChild,
                                    expected: "BooleanKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_boolean$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_boolean$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["boolean", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_boolean",
                                kindNameOptions: "BooleanKeyword",
                            })
                        },
                    )
                }
                const choose_array = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ArrayType")) {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_array",
                                    token: currentChild,
                                    expected: "ArrayType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGtype_array$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gtype(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gtype_array$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype(["array", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gtype_array",
                                kindNameOptions: "ArrayType",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "ArrayType": /*Y*/ {
                        choose_array()
                        break
                    }
                    case "BooleanKeyword": /*Y*/ {
                        choose_boolean()
                        break
                    }
                    case "FunctionType": /*Y*/ {
                        choose_function()
                        break
                    }
                    case "LiteralType": /*Y*/ {
                        choose_literal()
                        break
                    }
                    case "ParenthesizedType": /*Y*/ {
                        choose_parenthesized()
                        break
                    }
                    case "NumberKeyword": /*Y*/ {
                        choose_number()
                        break
                    }
                    case "OptionalType": /*Y*/ {
                        choose_optional()
                        break
                    }
                    case "TupleType": /*Y*/ {
                        choose_tuple()
                        break
                    }
                    case "TypeLiteral": /*Y*/ {
                        choose_typeLiteral()
                        break
                    }
                    case "StringKeyword": /*Y*/ {
                        choose_string()
                        break
                    }
                    case "TypeReference": /*Y*/ {
                        choose_typeReference()
                        break
                    }
                    case "UndefinedKeyword": /*Y*/ {
                        choose_undefined()
                        break
                    }
                    case "UnionType": /*Y*/ {
                        choose_union()
                        break
                    }
                    case "VoidKeyword": /*Y*/ {
                        choose_void()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gtype",
                            token: nextChild,
                            expected: "ArrayType, BooleanKeyword, FunctionType, LiteralType, ParenthesizedType, NumberKeyword, OptionalType, TupleType, TypeLiteral, StringKeyword, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gtype",
                    kindNameOptions: "ArrayType, BooleanKeyword, FunctionType, LiteralType, ParenthesizedType, NumberKeyword, OptionalType, TupleType, TypeLiteral, StringKeyword, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                })
            },
        )
    }
    function GstringLiteral(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGstringLiteral) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "StringLiteral")) {
                    $x.reportUnexpectedToken({
                        path: "GstringLiteral",
                        token: currentChild,
                        expected: "StringLiteral",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGstringLiteral$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        tokenDetails: $.details,
                        value: $.value
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "GstringLiteral$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GstringLiteral",
                    kindNameOptions: "StringLiteral",
                })
            },
        )
    }
    function Gstatement(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGstatement) => void,
    ): void {
        const choiceEnd_Gstatement = ($: api.TVTGstatement) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_variable = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "VariableStatement")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_variable",
                                    token: currentChild,
                                    expected: "VariableStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_variable$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_variable$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_variable$_modifiers>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ExportKeyword": //z
                                                processElement()
                                                return true
                                            case "ReadonlyKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    GvariableDeclarationList(node, children, ($) => {
                                        const _variableDeclarationList = $
                                        sequenceEnd({
                                            "modifiers": _modifiers,
                                            "variableDeclarationList": _variableDeclarationList,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_variable$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["variable", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_variable",
                                kindNameOptions: "VariableStatement",
                            })
                        },
                    )
                }
                const choose_typeAlias = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "TypeAliasDeclaration")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_typeAlias",
                                    token: currentChild,
                                    expected: "TypeAliasDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_typeAlias$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_typeAlias$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_typeAlias$_modifiers>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ExportKeyword": //z
                                                processElement()
                                                return true
                                            case "ReadonlyKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        const elements = pm.createArrayBuilder<api.TVTGstatement_typeAlias$_typeParameters>()
                                        const processElement = () => {
                                            GtypeParameter(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        $d.doUntil(
                                            children,
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "TypeParameter": //z
                                                        processElement()
                                                        return true
                                                    default: return false
                                                }
                                            },
                                        )
                                        pl.cc(elements.getArray(), ($) => {
                                            const _typeParameters = $
                                            Gtype(node, children, ($) => {
                                                const _type = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "typeParameters": _typeParameters,
                                                    "type": _type,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_typeAlias$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["typeAlias", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_typeAlias",
                                kindNameOptions: "TypeAliasDeclaration",
                            })
                        },
                    )
                }
                const choose_switch = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "SwitchStatement")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_switch",
                                    token: currentChild,
                                    expected: "SwitchStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_switch$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_switch$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    children.pop(
                                        (currentChild) => {
                                            if ($d.stringsNotEqual(currentChild.kindName, "CaseBlock")) {
                                                $x.reportUnexpectedToken({
                                                    path: "Gstatement_switch$_caseBlock",
                                                    token: currentChild,
                                                    expected: "CaseBlock",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode,
                                                callback: ($: api.TNGstatement_switch$_caseBlock$) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                const elements = pm.createArrayBuilder<api.TVTGstatement_switch$_caseBlock$>()
                                                const processElement = () => {
                                                    const choiceEnd_Gstatement_switch$_caseBlock$ = ($: api.TVTGstatement_switch$_caseBlock$) => {
                                                        elements.push($)
                                                    }
                                                    $d.lookAhead(children, 
                                                        (nextChild) => {
                                                            const choose_default = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if ($d.stringsNotEqual(currentChild.kindName, "DefaultClause")) {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_switch$_caseBlock$_default",
                                                                                token: currentChild,
                                                                                expected: "DefaultClause",
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.TUntypedNode,
                                                                            callback: ($: api.TNGstatement_switch$_caseBlock$_default$) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = pm.createStack($.children)
                                                                            const elements = pm.createArrayBuilder<api.TVTGstatement_switch$_caseBlock$_default$>()
                                                                            const processElement = () => {
                                                                                Gstatement(node, children, ($) => {
                                                                                    elements.push($)
                                                                                })
                                                                            }
                                                                            $d.doUntil(
                                                                                children,
                                                                                (nextChild) => {
                                                                                    switch (nextChild.kindName) {
                                                                                        case "Block": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "BreakStatement": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "ExportDeclaration": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "ExpressionStatement": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "FunctionDeclaration": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "IfStatement": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "ImportDeclaration": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "InterfaceDeclaration": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "ReturnStatement": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "SwitchStatement": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "TypeAliasDeclaration": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        case "VariableStatement": //z
                                                                                            processElement()
                                                                                            return true
                                                                                        default: return false
                                                                                    }
                                                                                },
                                                                            )
                                                                            pl.cc(elements.getArray(), ($) => {
                                                                                callback({
                                                                                    tokenDetails: node.details,
                                                                                    content: $,
                                                                                })
                                                                            })
                                                                            children.pop(
                                                                                (nextChild) => {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gstatement_switch$_caseBlock$_default$",
                                                                                        token: nextChild,
                                                                                        expected: null,
                                                                                    })
                                                                                },
                                                                                () => {},
                                                                            )
                                                                        })(
                                                                            currentChild,
                                                                            ($) => {
                                                                                choiceEnd_Gstatement_switch$_caseBlock$(["default", $])
                                                                            }
                                                                        )
                                                                    },
                                                                    () => { // no child
                                                                        $x.reportMissingToken({
                                                                            parentDetails: node.details,
                                                                            path: "Gstatement_switch$_caseBlock$_default",
                                                                            kindNameOptions: "DefaultClause",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            const choose_case = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if ($d.stringsNotEqual(currentChild.kindName, "CaseClause")) {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_switch$_caseBlock$_case",
                                                                                token: currentChild,
                                                                                expected: "CaseClause",
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.TUntypedNode,
                                                                            callback: ($: api.TNGstatement_switch$_caseBlock$_case$) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = pm.createStack($.children)
                                                                            const sequenceEnd = ($: api.TVTGstatement_switch$_caseBlock$_case$) => {
                                                                                callback({
                                                                                    tokenDetails: node.details,
                                                                                    content: $,
                                                                                })
                                                                            }
                                                                            Gexpression(node, children, ($) => {
                                                                                const _case = $
                                                                                const elements = pm.createArrayBuilder<api.TVTGstatement_switch$_caseBlock$_case$_statements>()
                                                                                const processElement = () => {
                                                                                    Gstatement(node, children, ($) => {
                                                                                        elements.push($)
                                                                                    })
                                                                                }
                                                                                $d.doUntil(
                                                                                    children,
                                                                                    (nextChild) => {
                                                                                        switch (nextChild.kindName) {
                                                                                            case "Block": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "BreakStatement": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "ExportDeclaration": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "ExpressionStatement": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "FunctionDeclaration": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "IfStatement": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "ImportDeclaration": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "InterfaceDeclaration": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "ReturnStatement": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "SwitchStatement": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "TypeAliasDeclaration": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            case "VariableStatement": //z
                                                                                                processElement()
                                                                                                return true
                                                                                            default: return false
                                                                                        }
                                                                                    },
                                                                                )
                                                                                pl.cc(elements.getArray(), ($) => {
                                                                                    const _statements = $
                                                                                    sequenceEnd({
                                                                                        "case": _case,
                                                                                        "statements": _statements,
                                                                                    })
                                                                                })
                                                                            })
                                                                            children.pop(
                                                                                (nextChild) => {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gstatement_switch$_caseBlock$_case$",
                                                                                        token: nextChild,
                                                                                        expected: null,
                                                                                    })
                                                                                },
                                                                                () => {},
                                                                            )
                                                                        })(
                                                                            currentChild,
                                                                            ($) => {
                                                                                choiceEnd_Gstatement_switch$_caseBlock$(["case", $])
                                                                            }
                                                                        )
                                                                    },
                                                                    () => { // no child
                                                                        $x.reportMissingToken({
                                                                            parentDetails: node.details,
                                                                            path: "Gstatement_switch$_caseBlock$_case",
                                                                            kindNameOptions: "CaseClause",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            switch (nextChild.kindName) {
                                                                case "CaseClause": /*Y*/ {
                                                                    choose_case()
                                                                    break
                                                                }
                                                                case "DefaultClause": /*Y*/ {
                                                                    choose_default()
                                                                    break
                                                                }
                                                                default: {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gstatement_switch$_caseBlock$",
                                                                        token: nextChild,
                                                                        expected: "CaseClause, DefaultClause",
                                                                    })
                                                                }
                                                            }
                                                        },
                                                        () => { //no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gstatement_switch$_caseBlock$",
                                                                kindNameOptions: "CaseClause, DefaultClause",
                                                            })
                                                        },
                                                    )
                                                }
                                                $d.doUntil(
                                                    children,
                                                    (nextChild) => {
                                                        switch (nextChild.kindName) {
                                                            case "CaseClause": //z
                                                                processElement()
                                                                return true
                                                            case "DefaultClause": //z
                                                                processElement()
                                                                return true
                                                            default: return false
                                                        }
                                                    },
                                                )
                                                pl.cc(elements.getArray(), ($) => {
                                                    callback({
                                                        tokenDetails: node.details,
                                                        content: $,
                                                    })
                                                })
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gstatement_switch$_caseBlock$",
                                                            token: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    const _caseBlock = $
                                                    sequenceEnd({
                                                        "expression": _expression,
                                                        "caseBlock": _caseBlock,
                                                    })
                                                }
                                            )
                                        },
                                        () => { // no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gstatement_switch$_caseBlock",
                                                kindNameOptions: "CaseBlock",
                                            })
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_switch$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["switch", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_switch",
                                kindNameOptions: "SwitchStatement",
                            })
                        },
                    )
                }
                const choose_return = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ReturnStatement")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_return",
                                    token: currentChild,
                                    expected: "ReturnStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_return$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let optional: null | api.TVTGstatement_return$ = null
                                const setOptional = () => {
                                    Gexpression(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                $d.lookAhead(children, 
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ArrayLiteralExpression": //XXX
                                                setOptional()
                                                break
                                            case "ArrowFunction": //XXX
                                                setOptional()
                                                break
                                            case "BinaryExpression": //XXX
                                                setOptional()
                                                break
                                            case "CallExpression": //XXX
                                                setOptional()
                                                break
                                            case "ConditionalExpression": //XXX
                                                setOptional()
                                                break
                                            case "ElementAccessExpression": //XXX
                                                setOptional()
                                                break
                                            case "FalseKeyword": //XXX
                                                setOptional()
                                                break
                                            case "Identifier": //XXX
                                                setOptional()
                                                break
                                            case "NoSubstitutionTemplateLiteral": //XXX
                                                setOptional()
                                                break
                                            case "NumericLiteral": //XXX
                                                setOptional()
                                                break
                                            case "NullKeyword": //XXX
                                                setOptional()
                                                break
                                            case "ObjectLiteralExpression": //XXX
                                                setOptional()
                                                break
                                            case "ParenthesizedExpression": //XXX
                                                setOptional()
                                                break
                                            case "PrefixUnaryExpression": //XXX
                                                setOptional()
                                                break
                                            case "PropertyAccessExpression": //XXX
                                                setOptional()
                                                break
                                            case "StringLiteral": //XXX
                                                setOptional()
                                                break
                                            case "TemplateExpression": //XXX
                                                setOptional()
                                                break
                                            case "TrueKeyword": //XXX
                                                setOptional()
                                                break
                                        }
                                    },
                                    () => {},
                                )
                                pl.cc(optional, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_return$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["return", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_return",
                                kindNameOptions: "ReturnStatement",
                            })
                        },
                    )
                }
                const choose_interface = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "InterfaceDeclaration")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_interface",
                                    token: currentChild,
                                    expected: "InterfaceDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_interface$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_interface$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_interface$_modifiers>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ExportKeyword": //z
                                                processElement()
                                                return true
                                            case "ReadonlyKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        const elements = pm.createArrayBuilder<api.TVTGstatement_interface$_typeParameters>()
                                        const processElement = () => {
                                            GtypeParameter(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        $d.doUntil(
                                            children,
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "TypeParameter": //z
                                                        processElement()
                                                        return true
                                                    default: return false
                                                }
                                            },
                                        )
                                        pl.cc(elements.getArray(), ($) => {
                                            const _typeParameters = $
                                            const elements = pm.createArrayBuilder<api.TVTGstatement_interface$_signature>()
                                            const processElement = () => {
                                                GtypeSignature(node, children, ($) => {
                                                    elements.push($)
                                                })
                                            }
                                            $d.doUntil(
                                                children,
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "IndexSignature": //z
                                                            processElement()
                                                            return true
                                                        case "MethodSignature": //z
                                                            processElement()
                                                            return true
                                                        case "PropertySignature": //z
                                                            processElement()
                                                            return true
                                                        default: return false
                                                    }
                                                },
                                            )
                                            pl.cc(elements.getArray(), ($) => {
                                                const _signature = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "typeParameters": _typeParameters,
                                                    "signature": _signature,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_interface$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["interface", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_interface",
                                kindNameOptions: "InterfaceDeclaration",
                            })
                        },
                    )
                }
                const choose_import = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ImportDeclaration")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_import",
                                    token: currentChild,
                                    expected: "ImportDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_import$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_import$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (currentChild) => {
                                        if ($d.stringsNotEqual(currentChild.kindName, "ImportClause")) {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_import$_clause",
                                                token: currentChild,
                                                expected: "ImportClause",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode,
                                            callback: ($: api.TNGstatement_import$_clause$) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            const choiceEnd_Gstatement_import$_clause$ = ($: api.TVTGstatement_import$_clause$) => {
                                                callback({
                                                    tokenDetails: node.details,
                                                    content: $,
                                                })
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    const choose_named = () => {
                                                        children.pop(
                                                            (currentChild) => {
                                                                if ($d.stringsNotEqual(currentChild.kindName, "NamedImports")) {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gstatement_import$_clause$_named",
                                                                        token: currentChild,
                                                                        expected: "NamedImports",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode,
                                                                    callback: ($: api.TNGstatement_import$_clause$_named$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    const elements = pm.createArrayBuilder<api.TVTGstatement_import$_clause$_named$>()
                                                                    const processElement = () => {
                                                                        children.pop(
                                                                            (currentChild) => {
                                                                                if ($d.stringsNotEqual(currentChild.kindName, "ImportSpecifier")) {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gstatement_import$_clause$_named$",
                                                                                        token: currentChild,
                                                                                        expected: "ImportSpecifier",
                                                                                    })
                                                                                    return
                                                                                }
                                                                                ((
                                                                                    $: uast.TUntypedNode,
                                                                                    callback: ($: api.TNGstatement_import$_clause$_named$$) => void,
                                                                                ): void => {
                                                                                    const node = $
                                                                                    const children = pm.createStack($.children)
                                                                                    const sequenceEnd = ($: api.TVTGstatement_import$_clause$_named$$) => {
                                                                                        callback({
                                                                                            tokenDetails: node.details,
                                                                                            content: $,
                                                                                        })
                                                                                    }
                                                                                    Gidentifier(node, children, ($) => {
                                                                                        const _name = $
                                                                                        let optional: null | api.TVTGstatement_import$_clause$_named$$_as = null
                                                                                        const setOptional = () => {
                                                                                            Gidentifier(node, children, ($) => {
                                                                                                optional = $
                                                                                            })
                                                                                        }
                                                                                        $d.lookAhead(children, 
                                                                                            (nextChild) => {
                                                                                                switch (nextChild.kindName) {
                                                                                                    case "Identifier": //XXX
                                                                                                        setOptional()
                                                                                                        break
                                                                                                }
                                                                                            },
                                                                                            () => {},
                                                                                        )
                                                                                        pl.cc(optional, ($) => {
                                                                                            const _as = $
                                                                                            sequenceEnd({
                                                                                                "name": _name,
                                                                                                "as": _as,
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                    children.pop(
                                                                                        (nextChild) => {
                                                                                            $x.reportUnexpectedToken({
                                                                                                path: "Gstatement_import$_clause$_named$$",
                                                                                                token: nextChild,
                                                                                                expected: null,
                                                                                            })
                                                                                        },
                                                                                        () => {},
                                                                                    )
                                                                                })(
                                                                                    currentChild,
                                                                                    ($) => {
                                                                                        elements.push($)
                                                                                    }
                                                                                )
                                                                            },
                                                                            () => { // no child
                                                                                $x.reportMissingToken({
                                                                                    parentDetails: node.details,
                                                                                    path: "Gstatement_import$_clause$_named$",
                                                                                    kindNameOptions: "ImportSpecifier",
                                                                                })
                                                                            },
                                                                        )
                                                                    }
                                                                    $d.doUntil(
                                                                        children,
                                                                        (nextChild) => {
                                                                            switch (nextChild.kindName) {
                                                                                case "ImportSpecifier": //z
                                                                                    processElement()
                                                                                    return true
                                                                                default: return false
                                                                            }
                                                                        },
                                                                    )
                                                                    pl.cc(elements.getArray(), ($) => {
                                                                        callback({
                                                                            tokenDetails: node.details,
                                                                            content: $,
                                                                        })
                                                                    })
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_import$_clause$_named$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gstatement_import$_clause$(["named", $])
                                                                    }
                                                                )
                                                            },
                                                            () => { // no child
                                                                $x.reportMissingToken({
                                                                    parentDetails: node.details,
                                                                    path: "Gstatement_import$_clause$_named",
                                                                    kindNameOptions: "NamedImports",
                                                                })
                                                            },
                                                        )
                                                    }
                                                    const choose_namespace = () => {
                                                        children.pop(
                                                            (currentChild) => {
                                                                if ($d.stringsNotEqual(currentChild.kindName, "NamespaceImport")) {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gstatement_import$_clause$_namespace",
                                                                        token: currentChild,
                                                                        expected: "NamespaceImport",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode,
                                                                    callback: ($: api.TNGstatement_import$_clause$_namespace$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    Gidentifier(node, children, ($) => {
                                                                        callback({
                                                                            tokenDetails: node.details,
                                                                            content: $,
                                                                        })
                                                                    })
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_import$_clause$_namespace$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_Gstatement_import$_clause$(["namespace", $])
                                                                    }
                                                                )
                                                            },
                                                            () => { // no child
                                                                $x.reportMissingToken({
                                                                    parentDetails: node.details,
                                                                    path: "Gstatement_import$_clause$_namespace",
                                                                    kindNameOptions: "NamespaceImport",
                                                                })
                                                            },
                                                        )
                                                    }
                                                    switch (nextChild.kindName) {
                                                        case "NamespaceImport": /*Y*/ {
                                                            choose_namespace()
                                                            break
                                                        }
                                                        case "NamedImports": /*Y*/ {
                                                            choose_named()
                                                            break
                                                        }
                                                        default: {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gstatement_import$_clause$",
                                                                token: nextChild,
                                                                expected: "NamespaceImport, NamedImports",
                                                            })
                                                        }
                                                    }
                                                },
                                                () => { //no child
                                                    $x.reportMissingToken({
                                                        parentDetails: node.details,
                                                        path: "Gstatement_import$_clause$",
                                                        kindNameOptions: "NamespaceImport, NamedImports",
                                                    })
                                                },
                                            )
                                            children.pop(
                                                (nextChild) => {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gstatement_import$_clause$",
                                                        token: nextChild,
                                                        expected: null,
                                                    })
                                                },
                                                () => {},
                                            )
                                        })(
                                            currentChild,
                                            ($) => {
                                                const _clause = $
                                                GstringLiteral(node, children, ($) => {
                                                    const _file = $
                                                    sequenceEnd({
                                                        "clause": _clause,
                                                        "file": _file,
                                                    })
                                                })
                                            }
                                        )
                                    },
                                    () => { // no child
                                        $x.reportMissingToken({
                                            parentDetails: node.details,
                                            path: "Gstatement_import$_clause",
                                            kindNameOptions: "ImportClause",
                                        })
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_import$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["import", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_import",
                                kindNameOptions: "ImportDeclaration",
                            })
                        },
                    )
                }
                const choose_if = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "IfStatement")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_if",
                                    token: currentChild,
                                    expected: "IfStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_if$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_if$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    Gstatement(node, children, ($) => {
                                        const _thenStatement = $
                                        let optional: null | api.TVTGstatement_if$_elseStatement = null
                                        const setOptional = () => {
                                            Gstatement(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "Block": //XXX
                                                        setOptional()
                                                        break
                                                    case "BreakStatement": //XXX
                                                        setOptional()
                                                        break
                                                    case "ExportDeclaration": //XXX
                                                        setOptional()
                                                        break
                                                    case "ExpressionStatement": //XXX
                                                        setOptional()
                                                        break
                                                    case "FunctionDeclaration": //XXX
                                                        setOptional()
                                                        break
                                                    case "IfStatement": //XXX
                                                        setOptional()
                                                        break
                                                    case "ImportDeclaration": //XXX
                                                        setOptional()
                                                        break
                                                    case "InterfaceDeclaration": //XXX
                                                        setOptional()
                                                        break
                                                    case "ReturnStatement": //XXX
                                                        setOptional()
                                                        break
                                                    case "SwitchStatement": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeAliasDeclaration": //XXX
                                                        setOptional()
                                                        break
                                                    case "VariableStatement": //XXX
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _elseStatement = $
                                            sequenceEnd({
                                                "expression": _expression,
                                                "thenStatement": _thenStatement,
                                                "elseStatement": _elseStatement,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_if$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["if", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_if",
                                kindNameOptions: "IfStatement",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "FunctionDeclaration")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_function",
                                    token: currentChild,
                                    expected: "FunctionDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_function$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_function$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_function$_modifiers>()
                                const processElement = () => {
                                    Gmodifier(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ExportKeyword": //z
                                                processElement()
                                                return true
                                            case "ReadonlyKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _modifiers = $
                                    Gidentifier(node, children, ($) => {
                                        const _name = $
                                        GfunctionDefinition(node, children, ($) => {
                                            const _definition = $
                                            let optional: null | api.TVTGstatement_function$_block = null
                                            const setOptional = () => {
                                                Gblock(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    switch (nextChild.kindName) {
                                                        case "Block": //XXX
                                                            setOptional()
                                                            break
                                                    }
                                                },
                                                () => {},
                                            )
                                            pl.cc(optional, ($) => {
                                                const _block = $
                                                sequenceEnd({
                                                    "modifiers": _modifiers,
                                                    "name": _name,
                                                    "definition": _definition,
                                                    "block": _block,
                                                })
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_function$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["function", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_function",
                                kindNameOptions: "FunctionDeclaration",
                            })
                        },
                    )
                }
                const choose_expression = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ExpressionStatement")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_expression",
                                    token: currentChild,
                                    expected: "ExpressionStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_expression$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gexpression(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_expression$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["expression", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_expression",
                                kindNameOptions: "ExpressionStatement",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ExportDeclaration")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_export",
                                    token: currentChild,
                                    expected: "ExportDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_export$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                GstringLiteral(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_export$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["export", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_export",
                                kindNameOptions: "ExportDeclaration",
                            })
                        },
                    )
                }
                const choose_break = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "BreakStatement")) {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_break",
                                    token: currentChild,
                                    expected: "BreakStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGstatement_break$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let optional: null | api.TVTGstatement_break$ = null
                                const setOptional = () => {
                                    Gidentifier(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                $d.lookAhead(children, 
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "Identifier": //XXX
                                                setOptional()
                                                break
                                        }
                                    },
                                    () => {},
                                )
                                pl.cc(optional, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gstatement_break$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gstatement(["break", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gstatement_break",
                                kindNameOptions: "BreakStatement",
                            })
                        },
                    )
                }
                const choose_block = () => {
                    Gblock(node, children, ($) => {
                        choiceEnd_Gstatement(["block", $])
                    })
                }
                switch (nextChild.kindName) {
                    case "Block": /*Y*/ {
                        choose_block()
                        break
                    }
                    case "BreakStatement": /*Y*/ {
                        choose_break()
                        break
                    }
                    case "ExportDeclaration": /*Y*/ {
                        choose_export()
                        break
                    }
                    case "ExpressionStatement": /*Y*/ {
                        choose_expression()
                        break
                    }
                    case "FunctionDeclaration": /*Y*/ {
                        choose_function()
                        break
                    }
                    case "IfStatement": /*Y*/ {
                        choose_if()
                        break
                    }
                    case "ImportDeclaration": /*Y*/ {
                        choose_import()
                        break
                    }
                    case "InterfaceDeclaration": /*Y*/ {
                        choose_interface()
                        break
                    }
                    case "ReturnStatement": /*Y*/ {
                        choose_return()
                        break
                    }
                    case "SwitchStatement": /*Y*/ {
                        choose_switch()
                        break
                    }
                    case "TypeAliasDeclaration": /*Y*/ {
                        choose_typeAlias()
                        break
                    }
                    case "VariableStatement": /*Y*/ {
                        choose_variable()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gstatement",
                            token: nextChild,
                            expected: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, FunctionDeclaration, IfStatement, ImportDeclaration, InterfaceDeclaration, ReturnStatement, SwitchStatement, TypeAliasDeclaration, VariableStatement",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gstatement",
                    kindNameOptions: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, FunctionDeclaration, IfStatement, ImportDeclaration, InterfaceDeclaration, ReturnStatement, SwitchStatement, TypeAliasDeclaration, VariableStatement",
                })
            },
        )
    }
    function Gparameter(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGparameter) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "Parameter")) {
                    $x.reportUnexpectedToken({
                        path: "Gparameter",
                        token: currentChild,
                        expected: "Parameter",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGparameter$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const sequenceEnd = ($: api.TVTGparameter$) => {
                        callback({
                            tokenDetails: node.details,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        let optional: null | api.TVTGparameter$_questionToken = null
                        const setOptional = () => {
                            children.pop(
                                (currentChild) => {
                                    if ($d.stringsNotEqual(currentChild.kindName, "QuestionToken")) {
                                        $x.reportUnexpectedToken({
                                            path: "Gparameter$_questionToken",
                                            token: currentChild,
                                            expected: "QuestionToken",
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode,
                                        callback: ($: api.TNGparameter$_questionToken$) => void,
                                    ): void => {
                                        const node = $
                                        const children = pm.createStack($.children)
                                        callback($.details)
                                        children.pop(
                                            (nextChild) => {
                                                $x.reportUnexpectedToken({
                                                    path: "Gparameter$_questionToken$",
                                                    token: nextChild,
                                                    expected: null,
                                                })
                                            },
                                            () => {},
                                        )
                                    })(
                                        currentChild,
                                        ($) => {
                                            optional = $
                                        }
                                    )
                                },
                                () => { // no child
                                    $x.reportMissingToken({
                                        parentDetails: node.details,
                                        path: "Gparameter$_questionToken",
                                        kindNameOptions: "QuestionToken",
                                    })
                                },
                            )
                        }
                        $d.lookAhead(children, 
                            (nextChild) => {
                                switch (nextChild.kindName) {
                                    case "QuestionToken": //XXX
                                        setOptional()
                                        break
                                }
                            },
                            () => {},
                        )
                        pl.cc(optional, ($) => {
                            const _questionToken = $
                            let optional: null | api.TVTGparameter$_type = null
                            const setOptional = () => {
                                Gtype(node, children, ($) => {
                                    optional = $
                                })
                            }
                            $d.lookAhead(children, 
                                (nextChild) => {
                                    switch (nextChild.kindName) {
                                        case "ArrayType": //XXX
                                            setOptional()
                                            break
                                        case "BooleanKeyword": //XXX
                                            setOptional()
                                            break
                                        case "FunctionType": //XXX
                                            setOptional()
                                            break
                                        case "LiteralType": //XXX
                                            setOptional()
                                            break
                                        case "ParenthesizedType": //XXX
                                            setOptional()
                                            break
                                        case "NumberKeyword": //XXX
                                            setOptional()
                                            break
                                        case "OptionalType": //XXX
                                            setOptional()
                                            break
                                        case "TupleType": //XXX
                                            setOptional()
                                            break
                                        case "TypeLiteral": //XXX
                                            setOptional()
                                            break
                                        case "StringKeyword": //XXX
                                            setOptional()
                                            break
                                        case "TypeReference": //XXX
                                            setOptional()
                                            break
                                        case "UndefinedKeyword": //XXX
                                            setOptional()
                                            break
                                        case "UnionType": //XXX
                                            setOptional()
                                            break
                                        case "VoidKeyword": //XXX
                                            setOptional()
                                            break
                                    }
                                },
                                () => {},
                            )
                            pl.cc(optional, ($) => {
                                const _type = $
                                sequenceEnd({
                                    "name": _name,
                                    "questionToken": _questionToken,
                                    "type": _type,
                                })
                            })
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "Gparameter$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gparameter",
                    kindNameOptions: "Parameter",
                })
            },
        )
    }
    function GnumericLiteral(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGnumericLiteral) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "NumericLiteral")) {
                    $x.reportUnexpectedToken({
                        path: "GnumericLiteral",
                        token: currentChild,
                        expected: "NumericLiteral",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGnumericLiteral$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        tokenDetails: $.details,
                        value: $.value
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "GnumericLiteral$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GnumericLiteral",
                    kindNameOptions: "NumericLiteral",
                })
            },
        )
    }
    function Gmodifier(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGmodifier) => void,
    ): void {
        const choiceEnd_Gmodifier = ($: api.TVTGmodifier) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_readonly = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ReadonlyKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_readonly",
                                    token: currentChild,
                                    expected: "ReadonlyKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGmodifier_readonly$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gmodifier_readonly$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gmodifier(["readonly", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gmodifier_readonly",
                                kindNameOptions: "ReadonlyKeyword",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ExportKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_export",
                                    token: currentChild,
                                    expected: "ExportKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGmodifier_export$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gmodifier_export$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gmodifier(["export", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gmodifier_export",
                                kindNameOptions: "ExportKeyword",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "ExportKeyword": /*Y*/ {
                        choose_export()
                        break
                    }
                    case "ReadonlyKeyword": /*Y*/ {
                        choose_readonly()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gmodifier",
                            token: nextChild,
                            expected: "ExportKeyword, ReadonlyKeyword",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gmodifier",
                    kindNameOptions: "ExportKeyword, ReadonlyKeyword",
                })
            },
        )
    }
    function GidentifierOrStringLiteral(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGidentifierOrStringLiteral) => void,
    ): void {
        const choiceEnd_GidentifierOrStringLiteral = ($: api.TVTGidentifierOrStringLiteral) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_stringLiteral = () => {
                    GstringLiteral(node, children, ($) => {
                        choiceEnd_GidentifierOrStringLiteral(["stringLiteral", $])
                    })
                }
                const choose_identifier = () => {
                    Gidentifier(node, children, ($) => {
                        choiceEnd_GidentifierOrStringLiteral(["identifier", $])
                    })
                }
                switch (nextChild.kindName) {
                    case "Identifier": /*Y*/ {
                        choose_identifier()
                        break
                    }
                    case "StringLiteral": /*Y*/ {
                        choose_stringLiteral()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "GidentifierOrStringLiteral",
                            token: nextChild,
                            expected: "Identifier, StringLiteral",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "GidentifierOrStringLiteral",
                    kindNameOptions: "Identifier, StringLiteral",
                })
            },
        )
    }
    function Gidentifier(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGidentifier) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "Identifier")) {
                    $x.reportUnexpectedToken({
                        path: "Gidentifier",
                        token: currentChild,
                        expected: "Identifier",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGidentifier$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        tokenDetails: $.details,
                        value: $.value
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "Gidentifier$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gidentifier",
                    kindNameOptions: "Identifier",
                })
            },
        )
    }
    function GfunctionDefinition(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGfunctionDefinition) => void,
    ): void {
        const sequenceEnd = ($: api.TVTGfunctionDefinition) => {
            callback($)
        }
        const elements = pm.createArrayBuilder<api.TVTGfunctionDefinition_typeParameters>()
        const processElement = () => {
            GtypeParameter(node, children, ($) => {
                elements.push($)
            })
        }
        $d.doUntil(
            children,
            (nextChild) => {
                switch (nextChild.kindName) {
                    case "TypeParameter": //z
                        processElement()
                        return true
                    default: return false
                }
            },
        )
        pl.cc(elements.getArray(), ($) => {
            const _typeParameters = $
            const elements = pm.createArrayBuilder<api.TVTGfunctionDefinition_parameters>()
            const processElement = () => {
                Gparameter(node, children, ($) => {
                    elements.push($)
                })
            }
            $d.doUntil(
                children,
                (nextChild) => {
                    switch (nextChild.kindName) {
                        case "Parameter": //z
                            processElement()
                            return true
                        default: return false
                    }
                },
            )
            pl.cc(elements.getArray(), ($) => {
                const _parameters = $
                let optional: null | api.TVTGfunctionDefinition_returnType = null
                const setOptional = () => {
                    Gtype(node, children, ($) => {
                        optional = $
                    })
                }
                $d.lookAhead(children, 
                    (nextChild) => {
                        switch (nextChild.kindName) {
                            case "ArrayType": //XXX
                                setOptional()
                                break
                            case "BooleanKeyword": //XXX
                                setOptional()
                                break
                            case "FunctionType": //XXX
                                setOptional()
                                break
                            case "LiteralType": //XXX
                                setOptional()
                                break
                            case "ParenthesizedType": //XXX
                                setOptional()
                                break
                            case "NumberKeyword": //XXX
                                setOptional()
                                break
                            case "OptionalType": //XXX
                                setOptional()
                                break
                            case "TupleType": //XXX
                                setOptional()
                                break
                            case "TypeLiteral": //XXX
                                setOptional()
                                break
                            case "StringKeyword": //XXX
                                setOptional()
                                break
                            case "TypeReference": //XXX
                                setOptional()
                                break
                            case "UndefinedKeyword": //XXX
                                setOptional()
                                break
                            case "UnionType": //XXX
                                setOptional()
                                break
                            case "VoidKeyword": //XXX
                                setOptional()
                                break
                        }
                    },
                    () => {},
                )
                pl.cc(optional, ($) => {
                    const _returnType = $
                    sequenceEnd({
                        "typeParameters": _typeParameters,
                        "parameters": _parameters,
                        "returnType": _returnType,
                    })
                })
            })
        })
    }
    function Gexpression(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGexpression) => void,
    ): void {
        const choiceEnd_Gexpression = ($: api.TVTGexpression) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_true = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "TrueKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_true",
                                    token: currentChild,
                                    expected: "TrueKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_true$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_true$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["true", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_true",
                                kindNameOptions: "TrueKeyword",
                            })
                        },
                    )
                }
                const choose_template = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "TemplateExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_template",
                                    token: currentChild,
                                    expected: "TemplateExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_template$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_template$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (currentChild) => {
                                        if ($d.stringsNotEqual(currentChild.kindName, "TemplateHead")) {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_template$_head",
                                                token: currentChild,
                                                expected: "TemplateHead",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode,
                                            callback: ($: api.TNGexpression_template$_head$) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            callback({
                                                tokenDetails: $.details,
                                                value: $.value
                                            })
                                            children.pop(
                                                (nextChild) => {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_template$_head$",
                                                        token: nextChild,
                                                        expected: null,
                                                    })
                                                },
                                                () => {},
                                            )
                                        })(
                                            currentChild,
                                            ($) => {
                                                const _head = $
                                                const elements = pm.createArrayBuilder<api.TVTGexpression_template$_spans>()
                                                const processElement = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if ($d.stringsNotEqual(currentChild.kindName, "TemplateSpan")) {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_template$_spans",
                                                                    token: currentChild,
                                                                    expected: "TemplateSpan",
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode,
                                                                callback: ($: api.TNGexpression_template$_spans$) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children = pm.createStack($.children)
                                                                const sequenceEnd = ($: api.TVTGexpression_template$_spans$) => {
                                                                    callback({
                                                                        tokenDetails: node.details,
                                                                        content: $,
                                                                    })
                                                                }
                                                                Gexpression(node, children, ($) => {
                                                                    const _expression = $
                                                                    const choiceEnd_Gexpression_template$_spans$_x = ($: api.TVTGexpression_template$_spans$_x) => {
                                                                        const _x = $
                                                                        sequenceEnd({
                                                                            "expression": _expression,
                                                                            "x": _x,
                                                                        })
                                                                    }
                                                                    $d.lookAhead(children, 
                                                                        (nextChild) => {
                                                                            const choose_tail = () => {
                                                                                children.pop(
                                                                                    (currentChild) => {
                                                                                        if ($d.stringsNotEqual(currentChild.kindName, "TemplateTail")) {
                                                                                            $x.reportUnexpectedToken({
                                                                                                path: "Gexpression_template$_spans$_x_tail",
                                                                                                token: currentChild,
                                                                                                expected: "TemplateTail",
                                                                                            })
                                                                                            return
                                                                                        }
                                                                                        ((
                                                                                            $: uast.TUntypedNode,
                                                                                            callback: ($: api.TNGexpression_template$_spans$_x_tail$) => void,
                                                                                        ): void => {
                                                                                            const node = $
                                                                                            const children = pm.createStack($.children)
                                                                                            callback({
                                                                                                tokenDetails: $.details,
                                                                                                value: $.value
                                                                                            })
                                                                                            children.pop(
                                                                                                (nextChild) => {
                                                                                                    $x.reportUnexpectedToken({
                                                                                                        path: "Gexpression_template$_spans$_x_tail$",
                                                                                                        token: nextChild,
                                                                                                        expected: null,
                                                                                                    })
                                                                                                },
                                                                                                () => {},
                                                                                            )
                                                                                        })(
                                                                                            currentChild,
                                                                                            ($) => {
                                                                                                choiceEnd_Gexpression_template$_spans$_x(["tail", $])
                                                                                            }
                                                                                        )
                                                                                    },
                                                                                    () => { // no child
                                                                                        $x.reportMissingToken({
                                                                                            parentDetails: node.details,
                                                                                            path: "Gexpression_template$_spans$_x_tail",
                                                                                            kindNameOptions: "TemplateTail",
                                                                                        })
                                                                                    },
                                                                                )
                                                                            }
                                                                            const choose_middle = () => {
                                                                                children.pop(
                                                                                    (currentChild) => {
                                                                                        if ($d.stringsNotEqual(currentChild.kindName, "TemplateMiddle")) {
                                                                                            $x.reportUnexpectedToken({
                                                                                                path: "Gexpression_template$_spans$_x_middle",
                                                                                                token: currentChild,
                                                                                                expected: "TemplateMiddle",
                                                                                            })
                                                                                            return
                                                                                        }
                                                                                        ((
                                                                                            $: uast.TUntypedNode,
                                                                                            callback: ($: api.TNGexpression_template$_spans$_x_middle$) => void,
                                                                                        ): void => {
                                                                                            const node = $
                                                                                            const children = pm.createStack($.children)
                                                                                            callback({
                                                                                                tokenDetails: $.details,
                                                                                                value: $.value
                                                                                            })
                                                                                            children.pop(
                                                                                                (nextChild) => {
                                                                                                    $x.reportUnexpectedToken({
                                                                                                        path: "Gexpression_template$_spans$_x_middle$",
                                                                                                        token: nextChild,
                                                                                                        expected: null,
                                                                                                    })
                                                                                                },
                                                                                                () => {},
                                                                                            )
                                                                                        })(
                                                                                            currentChild,
                                                                                            ($) => {
                                                                                                choiceEnd_Gexpression_template$_spans$_x(["middle", $])
                                                                                            }
                                                                                        )
                                                                                    },
                                                                                    () => { // no child
                                                                                        $x.reportMissingToken({
                                                                                            parentDetails: node.details,
                                                                                            path: "Gexpression_template$_spans$_x_middle",
                                                                                            kindNameOptions: "TemplateMiddle",
                                                                                        })
                                                                                    },
                                                                                )
                                                                            }
                                                                            switch (nextChild.kindName) {
                                                                                case "TemplateMiddle": /*Y*/ {
                                                                                    choose_middle()
                                                                                    break
                                                                                }
                                                                                case "TemplateTail": /*Y*/ {
                                                                                    choose_tail()
                                                                                    break
                                                                                }
                                                                                default: {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gexpression_template$_spans$_x",
                                                                                        token: nextChild,
                                                                                        expected: "TemplateMiddle, TemplateTail",
                                                                                    })
                                                                                }
                                                                            }
                                                                        },
                                                                        () => { //no child
                                                                            $x.reportMissingToken({
                                                                                parentDetails: node.details,
                                                                                path: "Gexpression_template$_spans$_x",
                                                                                kindNameOptions: "TemplateMiddle, TemplateTail",
                                                                            })
                                                                        },
                                                                    )
                                                                })
                                                                children.pop(
                                                                    (nextChild) => {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "Gexpression_template$_spans$",
                                                                            token: nextChild,
                                                                            expected: null,
                                                                        })
                                                                    },
                                                                    () => {},
                                                                )
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    elements.push($)
                                                                }
                                                            )
                                                        },
                                                        () => { // no child
                                                            $x.reportMissingToken({
                                                                parentDetails: node.details,
                                                                path: "Gexpression_template$_spans",
                                                                kindNameOptions: "TemplateSpan",
                                                            })
                                                        },
                                                    )
                                                }
                                                $d.doUntil(
                                                    children,
                                                    (nextChild) => {
                                                        switch (nextChild.kindName) {
                                                            case "TemplateSpan": //z
                                                                processElement()
                                                                return true
                                                            default: return false
                                                        }
                                                    },
                                                )
                                                pl.cc(elements.getArray(), ($) => {
                                                    const _spans = $
                                                    sequenceEnd({
                                                        "head": _head,
                                                        "spans": _spans,
                                                    })
                                                })
                                            }
                                        )
                                    },
                                    () => { // no child
                                        $x.reportMissingToken({
                                            parentDetails: node.details,
                                            path: "Gexpression_template$_head",
                                            kindNameOptions: "TemplateHead",
                                        })
                                    },
                                )
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_template$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["template", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_template",
                                kindNameOptions: "TemplateExpression",
                            })
                        },
                    )
                }
                const choose_stringLiteral = () => {
                    GstringLiteral(node, children, ($) => {
                        choiceEnd_Gexpression(["stringLiteral", $])
                    })
                }
                const choose_propertyAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "PropertyAccessExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_propertyAccess",
                                    token: currentChild,
                                    expected: "PropertyAccessExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_propertyAccess$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_propertyAccess$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _object = $
                                    Gexpression(node, children, ($) => {
                                        const _property = $
                                        sequenceEnd({
                                            "object": _object,
                                            "property": _property,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_propertyAccess$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["propertyAccess", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_propertyAccess",
                                kindNameOptions: "PropertyAccessExpression",
                            })
                        },
                    )
                }
                const choose_prefixUnary = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "PrefixUnaryExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_prefixUnary",
                                    token: currentChild,
                                    expected: "PrefixUnaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_prefixUnary$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gexpression(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_prefixUnary$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["prefixUnary", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_prefixUnary",
                                kindNameOptions: "PrefixUnaryExpression",
                            })
                        },
                    )
                }
                const choose_parenthesizedExpression = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ParenthesizedExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_parenthesizedExpression",
                                    token: currentChild,
                                    expected: "ParenthesizedExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_parenthesizedExpression$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gexpression(node, children, ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_parenthesizedExpression$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["parenthesizedExpression", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_parenthesizedExpression",
                                kindNameOptions: "ParenthesizedExpression",
                            })
                        },
                    )
                }
                const choose_objectLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ObjectLiteralExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_objectLiteral",
                                    token: currentChild,
                                    expected: "ObjectLiteralExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_objectLiteral$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGexpression_objectLiteral$>()
                                const processElement = () => {
                                    const choiceEnd_Gexpression_objectLiteral$ = ($: api.TVTGexpression_objectLiteral$) => {
                                        elements.push($)
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            const choose_propertyAssignment = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if ($d.stringsNotEqual(currentChild.kindName, "PropertyAssignment")) {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gexpression_objectLiteral$_propertyAssignment",
                                                                token: currentChild,
                                                                expected: "PropertyAssignment",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode,
                                                            callback: ($: api.TNGexpression_objectLiteral$_propertyAssignment$) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            const sequenceEnd = ($: api.TVTGexpression_objectLiteral$_propertyAssignment$) => {
                                                                callback({
                                                                    tokenDetails: node.details,
                                                                    content: $,
                                                                })
                                                            }
                                                            const choiceEnd_Gexpression_objectLiteral$_propertyAssignment$_name = ($: api.TVTGexpression_objectLiteral$_propertyAssignment$_name) => {
                                                                const _name = $
                                                                Gexpression(node, children, ($) => {
                                                                    const _expression = $
                                                                    sequenceEnd({
                                                                        "name": _name,
                                                                        "expression": _expression,
                                                                    })
                                                                })
                                                            }
                                                            $d.lookAhead(children, 
                                                                (nextChild) => {
                                                                    const choose_stringLiteral = () => {
                                                                        GstringLiteral(node, children, ($) => {
                                                                            choiceEnd_Gexpression_objectLiteral$_propertyAssignment$_name(["stringLiteral", $])
                                                                        })
                                                                    }
                                                                    const choose_identifier = () => {
                                                                        Gidentifier(node, children, ($) => {
                                                                            choiceEnd_Gexpression_objectLiteral$_propertyAssignment$_name(["identifier", $])
                                                                        })
                                                                    }
                                                                    switch (nextChild.kindName) {
                                                                        case "Identifier": /*Y*/ {
                                                                            choose_identifier()
                                                                            break
                                                                        }
                                                                        case "StringLiteral": /*Y*/ {
                                                                            choose_stringLiteral()
                                                                            break
                                                                        }
                                                                        default: {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_objectLiteral$_propertyAssignment$_name",
                                                                                token: nextChild,
                                                                                expected: "Identifier, StringLiteral",
                                                                            })
                                                                        }
                                                                    }
                                                                },
                                                                () => { //no child
                                                                    $x.reportMissingToken({
                                                                        parentDetails: node.details,
                                                                        path: "Gexpression_objectLiteral$_propertyAssignment$_name",
                                                                        kindNameOptions: "Identifier, StringLiteral",
                                                                    })
                                                                },
                                                            )
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gexpression_objectLiteral$_propertyAssignment$",
                                                                        token: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_objectLiteral$(["propertyAssignment", $])
                                                            }
                                                        )
                                                    },
                                                    () => { // no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "Gexpression_objectLiteral$_propertyAssignment",
                                                            kindNameOptions: "PropertyAssignment",
                                                        })
                                                    },
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case "PropertyAssignment": /*Y*/ {
                                                    choose_propertyAssignment()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_objectLiteral$",
                                                        token: nextChild,
                                                        expected: "PropertyAssignment",
                                                    })
                                                }
                                            }
                                        },
                                        () => { //no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gexpression_objectLiteral$",
                                                kindNameOptions: "PropertyAssignment",
                                            })
                                        },
                                    )
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "PropertyAssignment": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_objectLiteral$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["objectLiteral", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_objectLiteral",
                                kindNameOptions: "ObjectLiteralExpression",
                            })
                        },
                    )
                }
                const choose_nullKeyword = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "NullKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_nullKeyword",
                                    token: currentChild,
                                    expected: "NullKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_nullKeyword$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_nullKeyword$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["nullKeyword", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_nullKeyword",
                                kindNameOptions: "NullKeyword",
                            })
                        },
                    )
                }
                const choose_numericLiteral = () => {
                    GnumericLiteral(node, children, ($) => {
                        choiceEnd_Gexpression(["numericLiteral", $])
                    })
                }
                const choose_noSubstitutionTemplateLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "NoSubstitutionTemplateLiteral")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_noSubstitutionTemplateLiteral",
                                    token: currentChild,
                                    expected: "NoSubstitutionTemplateLiteral",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_noSubstitutionTemplateLiteral$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_noSubstitutionTemplateLiteral$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["noSubstitutionTemplateLiteral", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_noSubstitutionTemplateLiteral",
                                kindNameOptions: "NoSubstitutionTemplateLiteral",
                            })
                        },
                    )
                }
                const choose_identifier = () => {
                    Gidentifier(node, children, ($) => {
                        choiceEnd_Gexpression(["identifier", $])
                    })
                }
                const choose_false = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "FalseKeyword")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_false",
                                    token: currentChild,
                                    expected: "FalseKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_false$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.details)
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_false$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["false", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_false",
                                kindNameOptions: "FalseKeyword",
                            })
                        },
                    )
                }
                const choose_elementAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ElementAccessExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_elementAccess",
                                    token: currentChild,
                                    expected: "ElementAccessExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_elementAccess$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_elementAccess$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _array = $
                                    Gexpression(node, children, ($) => {
                                        const _element = $
                                        sequenceEnd({
                                            "array": _array,
                                            "element": _element,
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_elementAccess$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["elementAccess", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_elementAccess",
                                kindNameOptions: "ElementAccessExpression",
                            })
                        },
                    )
                }
                const choose_conditional = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ConditionalExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_conditional",
                                    token: currentChild,
                                    expected: "ConditionalExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_conditional$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_conditional$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _test = $
                                    children.pop(
                                        (currentChild) => {
                                            if ($d.stringsNotEqual(currentChild.kindName, "QuestionToken")) {
                                                $x.reportUnexpectedToken({
                                                    path: "Gexpression_conditional$_questionToken",
                                                    token: currentChild,
                                                    expected: "QuestionToken",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode,
                                                callback: ($: api.TNGexpression_conditional$_questionToken$) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                callback($.details)
                                                children.pop(
                                                    (nextChild) => {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gexpression_conditional$_questionToken$",
                                                            token: nextChild,
                                                            expected: null,
                                                        })
                                                    },
                                                    () => {},
                                                )
                                            })(
                                                currentChild,
                                                ($) => {
                                                    const _questionToken = $
                                                    Gexpression(node, children, ($) => {
                                                        const _ifExpression = $
                                                        children.pop(
                                                            (currentChild) => {
                                                                if ($d.stringsNotEqual(currentChild.kindName, "ColonToken")) {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gexpression_conditional$_colonToken",
                                                                        token: currentChild,
                                                                        expected: "ColonToken",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode,
                                                                    callback: ($: api.TNGexpression_conditional$_colonToken$) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    callback($.details)
                                                                    children.pop(
                                                                        (nextChild) => {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_conditional$_colonToken$",
                                                                                token: nextChild,
                                                                                expected: null,
                                                                            })
                                                                        },
                                                                        () => {},
                                                                    )
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        const _colonToken = $
                                                                        Gexpression(node, children, ($) => {
                                                                            const _elseExpression = $
                                                                            sequenceEnd({
                                                                                "test": _test,
                                                                                "questionToken": _questionToken,
                                                                                "ifExpression": _ifExpression,
                                                                                "colonToken": _colonToken,
                                                                                "elseExpression": _elseExpression,
                                                                            })
                                                                        })
                                                                    }
                                                                )
                                                            },
                                                            () => { // no child
                                                                $x.reportMissingToken({
                                                                    parentDetails: node.details,
                                                                    path: "Gexpression_conditional$_colonToken",
                                                                    kindNameOptions: "ColonToken",
                                                                })
                                                            },
                                                        )
                                                    })
                                                }
                                            )
                                        },
                                        () => { // no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gexpression_conditional$_questionToken",
                                                kindNameOptions: "QuestionToken",
                                            })
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_conditional$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["conditional", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_conditional",
                                kindNameOptions: "ConditionalExpression",
                            })
                        },
                    )
                }
                const choose_call = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "CallExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_call",
                                    token: currentChild,
                                    expected: "CallExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_call$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_call$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _function = $
                                    const elements = pm.createArrayBuilder<api.TVTGexpression_call$_typeParameters>()
                                    const processElement = () => {
                                        Gtype(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "ArrayType": //z
                                                    processElement()
                                                    return true
                                                case "BooleanKeyword": //z
                                                    processElement()
                                                    return true
                                                case "FunctionType": //z
                                                    processElement()
                                                    return true
                                                case "LiteralType": //z
                                                    processElement()
                                                    return true
                                                case "ParenthesizedType": //z
                                                    processElement()
                                                    return true
                                                case "NumberKeyword": //z
                                                    processElement()
                                                    return true
                                                case "OptionalType": //z
                                                    processElement()
                                                    return true
                                                case "TupleType": //z
                                                    processElement()
                                                    return true
                                                case "TypeLiteral": //z
                                                    processElement()
                                                    return true
                                                case "StringKeyword": //z
                                                    processElement()
                                                    return true
                                                case "TypeReference": //z
                                                    processElement()
                                                    return true
                                                case "UndefinedKeyword": //z
                                                    processElement()
                                                    return true
                                                case "UnionType": //z
                                                    processElement()
                                                    return true
                                                case "VoidKeyword": //z
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _typeParameters = $
                                        const elements = pm.createArrayBuilder<api.TVTGexpression_call$_parameters>()
                                        const processElement = () => {
                                            Gexpression(node, children, ($) => {
                                                elements.push($)
                                            })
                                        }
                                        $d.doUntil(
                                            children,
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "ArrayLiteralExpression": //z
                                                        processElement()
                                                        return true
                                                    case "ArrowFunction": //z
                                                        processElement()
                                                        return true
                                                    case "BinaryExpression": //z
                                                        processElement()
                                                        return true
                                                    case "CallExpression": //z
                                                        processElement()
                                                        return true
                                                    case "ConditionalExpression": //z
                                                        processElement()
                                                        return true
                                                    case "ElementAccessExpression": //z
                                                        processElement()
                                                        return true
                                                    case "FalseKeyword": //z
                                                        processElement()
                                                        return true
                                                    case "Identifier": //z
                                                        processElement()
                                                        return true
                                                    case "NoSubstitutionTemplateLiteral": //z
                                                        processElement()
                                                        return true
                                                    case "NumericLiteral": //z
                                                        processElement()
                                                        return true
                                                    case "NullKeyword": //z
                                                        processElement()
                                                        return true
                                                    case "ObjectLiteralExpression": //z
                                                        processElement()
                                                        return true
                                                    case "ParenthesizedExpression": //z
                                                        processElement()
                                                        return true
                                                    case "PrefixUnaryExpression": //z
                                                        processElement()
                                                        return true
                                                    case "PropertyAccessExpression": //z
                                                        processElement()
                                                        return true
                                                    case "StringLiteral": //z
                                                        processElement()
                                                        return true
                                                    case "TemplateExpression": //z
                                                        processElement()
                                                        return true
                                                    case "TrueKeyword": //z
                                                        processElement()
                                                        return true
                                                    default: return false
                                                }
                                            },
                                        )
                                        pl.cc(elements.getArray(), ($) => {
                                            const _parameters = $
                                            sequenceEnd({
                                                "function": _function,
                                                "typeParameters": _typeParameters,
                                                "parameters": _parameters,
                                            })
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_call$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["call", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_call",
                                kindNameOptions: "CallExpression",
                            })
                        },
                    )
                }
                const choose_binary = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "BinaryExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_binary",
                                    token: currentChild,
                                    expected: "BinaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_binary$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_binary$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _leftHandSide = $
                                    const choiceEnd_Gexpression_binary$_operator = ($: api.TVTGexpression_binary$_operator) => {
                                        const _operator = $
                                        Gexpression(node, children, ($) => {
                                            const _rightHandSide = $
                                            sequenceEnd({
                                                "leftHandSide": _leftHandSide,
                                                "operator": _operator,
                                                "rightHandSide": _rightHandSide,
                                            })
                                        })
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            const choose_equals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if ($d.stringsNotEqual(currentChild.kindName, "EqualsToken")) {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gexpression_binary$_operator_equals",
                                                                token: currentChild,
                                                                expected: "EqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode,
                                                            callback: ($: api.TNGexpression_binary$_operator_equals$) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.details)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gexpression_binary$_operator_equals$",
                                                                        token: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["equals", $])
                                                            }
                                                        )
                                                    },
                                                    () => { // no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "Gexpression_binary$_operator_equals",
                                                            kindNameOptions: "EqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            const choose_equalsEqualsEquals = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if ($d.stringsNotEqual(currentChild.kindName, "EqualsEqualsEqualsToken")) {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                                                token: currentChild,
                                                                expected: "EqualsEqualsEqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode,
                                                            callback: ($: api.TNGexpression_binary$_operator_equalsEqualsEquals$) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.details)
                                                            children.pop(
                                                                (nextChild) => {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gexpression_binary$_operator_equalsEqualsEquals$",
                                                                        token: nextChild,
                                                                        expected: null,
                                                                    })
                                                                },
                                                                () => {},
                                                            )
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_Gexpression_binary$_operator(["equalsEqualsEquals", $])
                                                            }
                                                        )
                                                    },
                                                    () => { // no child
                                                        $x.reportMissingToken({
                                                            parentDetails: node.details,
                                                            path: "Gexpression_binary$_operator_equalsEqualsEquals",
                                                            kindNameOptions: "EqualsEqualsEqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case "EqualsEqualsEqualsToken": /*Y*/ {
                                                    choose_equalsEqualsEquals()
                                                    break
                                                }
                                                case "EqualsToken": /*Y*/ {
                                                    choose_equals()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_binary$_operator",
                                                        token: nextChild,
                                                        expected: "EqualsEqualsEqualsToken, EqualsToken",
                                                    })
                                                }
                                            }
                                        },
                                        () => { //no child
                                            $x.reportMissingToken({
                                                parentDetails: node.details,
                                                path: "Gexpression_binary$_operator",
                                                kindNameOptions: "EqualsEqualsEqualsToken, EqualsToken",
                                            })
                                        },
                                    )
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_binary$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["binary", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_binary",
                                kindNameOptions: "BinaryExpression",
                            })
                        },
                    )
                }
                const choose_arrowFunction = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ArrowFunction")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_arrowFunction",
                                    token: currentChild,
                                    expected: "ArrowFunction",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_arrowFunction$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_arrowFunction$) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGexpression_arrowFunction$_typeParameters>()
                                const processElement = () => {
                                    GtypeParameter(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "TypeParameter": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    const _typeParameters = $
                                    const elements = pm.createArrayBuilder<api.TVTGexpression_arrowFunction$_parameters>()
                                    const processElement = () => {
                                        Gparameter(node, children, ($) => {
                                            elements.push($)
                                        })
                                    }
                                    $d.doUntil(
                                        children,
                                        (nextChild) => {
                                            switch (nextChild.kindName) {
                                                case "Parameter": //z
                                                    processElement()
                                                    return true
                                                default: return false
                                            }
                                        },
                                    )
                                    pl.cc(elements.getArray(), ($) => {
                                        const _parameters = $
                                        let optional: null | api.TVTGexpression_arrowFunction$_returnType = null
                                        const setOptional = () => {
                                            Gtype(node, children, ($) => {
                                                optional = $
                                            })
                                        }
                                        $d.lookAhead(children, 
                                            (nextChild) => {
                                                switch (nextChild.kindName) {
                                                    case "ArrayType": //XXX
                                                        setOptional()
                                                        break
                                                    case "BooleanKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "FunctionType": //XXX
                                                        setOptional()
                                                        break
                                                    case "LiteralType": //XXX
                                                        setOptional()
                                                        break
                                                    case "ParenthesizedType": //XXX
                                                        setOptional()
                                                        break
                                                    case "NumberKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "OptionalType": //XXX
                                                        setOptional()
                                                        break
                                                    case "TupleType": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeLiteral": //XXX
                                                        setOptional()
                                                        break
                                                    case "StringKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "TypeReference": //XXX
                                                        setOptional()
                                                        break
                                                    case "UndefinedKeyword": //XXX
                                                        setOptional()
                                                        break
                                                    case "UnionType": //XXX
                                                        setOptional()
                                                        break
                                                    case "VoidKeyword": //XXX
                                                        setOptional()
                                                        break
                                                }
                                            },
                                            () => {},
                                        )
                                        pl.cc(optional, ($) => {
                                            const _returnType = $
                                            children.pop(
                                                (currentChild) => {
                                                    if ($d.stringsNotEqual(currentChild.kindName, "EqualsGreaterThanToken")) {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                            token: currentChild,
                                                            expected: "EqualsGreaterThanToken",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode,
                                                        callback: ($: api.TNGexpression_arrowFunction$_equalsGreaterThan$) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.details)
                                                        children.pop(
                                                            (nextChild) => {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_arrowFunction$_equalsGreaterThan$",
                                                                    token: nextChild,
                                                                    expected: null,
                                                                })
                                                            },
                                                            () => {},
                                                        )
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            const _equalsGreaterThan = $
                                                            const choiceEnd_Gexpression_arrowFunction$_implementation = ($: api.TVTGexpression_arrowFunction$_implementation) => {
                                                                const _implementation = $
                                                                sequenceEnd({
                                                                    "typeParameters": _typeParameters,
                                                                    "parameters": _parameters,
                                                                    "returnType": _returnType,
                                                                    "equalsGreaterThan": _equalsGreaterThan,
                                                                    "implementation": _implementation,
                                                                })
                                                            }
                                                            $d.lookAhead(children, 
                                                                (nextChild) => {
                                                                    const choose_expression = () => {
                                                                        Gexpression(node, children, ($) => {
                                                                            choiceEnd_Gexpression_arrowFunction$_implementation(["expression", $])
                                                                        })
                                                                    }
                                                                    const choose_block = () => {
                                                                        Gblock(node, children, ($) => {
                                                                            choiceEnd_Gexpression_arrowFunction$_implementation(["block", $])
                                                                        })
                                                                    }
                                                                    switch (nextChild.kindName) {
                                                                        case "Block": /*Y*/ {
                                                                            choose_block()
                                                                            break
                                                                        }
                                                                        case "ArrayLiteralExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "ArrowFunction": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "BinaryExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "CallExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "ConditionalExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "ElementAccessExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "FalseKeyword": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "Identifier": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "NoSubstitutionTemplateLiteral": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "NumericLiteral": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "NullKeyword": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "ObjectLiteralExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "ParenthesizedExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "PrefixUnaryExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "PropertyAccessExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "StringLiteral": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "TemplateExpression": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        case "TrueKeyword": /*Y*/ {
                                                                            choose_expression()
                                                                            break
                                                                        }
                                                                        default: {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gexpression_arrowFunction$_implementation",
                                                                                token: nextChild,
                                                                                expected: "Block, ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                                                                            })
                                                                        }
                                                                    }
                                                                },
                                                                () => { //no child
                                                                    $x.reportMissingToken({
                                                                        parentDetails: node.details,
                                                                        path: "Gexpression_arrowFunction$_implementation",
                                                                        kindNameOptions: "Block, ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                                                                    })
                                                                },
                                                            )
                                                        }
                                                    )
                                                },
                                                () => { // no child
                                                    $x.reportMissingToken({
                                                        parentDetails: node.details,
                                                        path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                        kindNameOptions: "EqualsGreaterThanToken",
                                                    })
                                                },
                                            )
                                        })
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_arrowFunction$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["arrowFunction", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_arrowFunction",
                                kindNameOptions: "ArrowFunction",
                            })
                        },
                    )
                }
                const choose_arrayLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if ($d.stringsNotEqual(currentChild.kindName, "ArrayLiteralExpression")) {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_arrayLiteral",
                                    token: currentChild,
                                    expected: "ArrayLiteralExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode,
                                callback: ($: api.TNGexpression_arrayLiteral$) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGexpression_arrayLiteral$>()
                                const processElement = () => {
                                    Gexpression(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
                                            case "ArrayLiteralExpression": //z
                                                processElement()
                                                return true
                                            case "ArrowFunction": //z
                                                processElement()
                                                return true
                                            case "BinaryExpression": //z
                                                processElement()
                                                return true
                                            case "CallExpression": //z
                                                processElement()
                                                return true
                                            case "ConditionalExpression": //z
                                                processElement()
                                                return true
                                            case "ElementAccessExpression": //z
                                                processElement()
                                                return true
                                            case "FalseKeyword": //z
                                                processElement()
                                                return true
                                            case "Identifier": //z
                                                processElement()
                                                return true
                                            case "NoSubstitutionTemplateLiteral": //z
                                                processElement()
                                                return true
                                            case "NumericLiteral": //z
                                                processElement()
                                                return true
                                            case "NullKeyword": //z
                                                processElement()
                                                return true
                                            case "ObjectLiteralExpression": //z
                                                processElement()
                                                return true
                                            case "ParenthesizedExpression": //z
                                                processElement()
                                                return true
                                            case "PrefixUnaryExpression": //z
                                                processElement()
                                                return true
                                            case "PropertyAccessExpression": //z
                                                processElement()
                                                return true
                                            case "StringLiteral": //z
                                                processElement()
                                                return true
                                            case "TemplateExpression": //z
                                                processElement()
                                                return true
                                            case "TrueKeyword": //z
                                                processElement()
                                                return true
                                            default: return false
                                        }
                                    },
                                )
                                pl.cc(elements.getArray(), ($) => {
                                    callback({
                                        tokenDetails: node.details,
                                        content: $,
                                    })
                                })
                                children.pop(
                                    (nextChild) => {
                                        $x.reportUnexpectedToken({
                                            path: "Gexpression_arrayLiteral$",
                                            token: nextChild,
                                            expected: null,
                                        })
                                    },
                                    () => {},
                                )
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gexpression(["arrayLiteral", $])
                                }
                            )
                        },
                        () => { // no child
                            $x.reportMissingToken({
                                parentDetails: node.details,
                                path: "Gexpression_arrayLiteral",
                                kindNameOptions: "ArrayLiteralExpression",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
                    case "ArrayLiteralExpression": /*Y*/ {
                        choose_arrayLiteral()
                        break
                    }
                    case "ArrowFunction": /*Y*/ {
                        choose_arrowFunction()
                        break
                    }
                    case "BinaryExpression": /*Y*/ {
                        choose_binary()
                        break
                    }
                    case "CallExpression": /*Y*/ {
                        choose_call()
                        break
                    }
                    case "ConditionalExpression": /*Y*/ {
                        choose_conditional()
                        break
                    }
                    case "ElementAccessExpression": /*Y*/ {
                        choose_elementAccess()
                        break
                    }
                    case "FalseKeyword": /*Y*/ {
                        choose_false()
                        break
                    }
                    case "Identifier": /*Y*/ {
                        choose_identifier()
                        break
                    }
                    case "NoSubstitutionTemplateLiteral": /*Y*/ {
                        choose_noSubstitutionTemplateLiteral()
                        break
                    }
                    case "NumericLiteral": /*Y*/ {
                        choose_numericLiteral()
                        break
                    }
                    case "NullKeyword": /*Y*/ {
                        choose_nullKeyword()
                        break
                    }
                    case "ObjectLiteralExpression": /*Y*/ {
                        choose_objectLiteral()
                        break
                    }
                    case "ParenthesizedExpression": /*Y*/ {
                        choose_parenthesizedExpression()
                        break
                    }
                    case "PrefixUnaryExpression": /*Y*/ {
                        choose_prefixUnary()
                        break
                    }
                    case "PropertyAccessExpression": /*Y*/ {
                        choose_propertyAccess()
                        break
                    }
                    case "StringLiteral": /*Y*/ {
                        choose_stringLiteral()
                        break
                    }
                    case "TemplateExpression": /*Y*/ {
                        choose_template()
                        break
                    }
                    case "TrueKeyword": /*Y*/ {
                        choose_true()
                        break
                    }
                    default: {
                        $x.reportUnexpectedToken({
                            path: "Gexpression",
                            token: nextChild,
                            expected: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gexpression",
                    kindNameOptions: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                })
            },
        )
    }
    function Gblock(
        node: uast.TUntypedNode,
        children: pm.Stack<uast.TUntypedNode>,
        callback: ($: api.TGblock) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if ($d.stringsNotEqual(currentChild.kindName, "Block")) {
                    $x.reportUnexpectedToken({
                        path: "Gblock",
                        token: currentChild,
                        expected: "Block",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode,
                    callback: ($: api.TNGblock$) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const elements = pm.createArrayBuilder<api.TVTGblock$>()
                    const processElement = () => {
                        Gstatement(node, children, ($) => {
                            elements.push($)
                        })
                    }
                    $d.doUntil(
                        children,
                        (nextChild) => {
                            switch (nextChild.kindName) {
                                case "Block": //z
                                    processElement()
                                    return true
                                case "BreakStatement": //z
                                    processElement()
                                    return true
                                case "ExportDeclaration": //z
                                    processElement()
                                    return true
                                case "ExpressionStatement": //z
                                    processElement()
                                    return true
                                case "FunctionDeclaration": //z
                                    processElement()
                                    return true
                                case "IfStatement": //z
                                    processElement()
                                    return true
                                case "ImportDeclaration": //z
                                    processElement()
                                    return true
                                case "InterfaceDeclaration": //z
                                    processElement()
                                    return true
                                case "ReturnStatement": //z
                                    processElement()
                                    return true
                                case "SwitchStatement": //z
                                    processElement()
                                    return true
                                case "TypeAliasDeclaration": //z
                                    processElement()
                                    return true
                                case "VariableStatement": //z
                                    processElement()
                                    return true
                                default: return false
                            }
                        },
                    )
                    pl.cc(elements.getArray(), ($) => {
                        callback({
                            tokenDetails: node.details,
                            content: $,
                        })
                    })
                    children.pop(
                        (nextChild) => {
                            $x.reportUnexpectedToken({
                                path: "Gblock$",
                                token: nextChild,
                                expected: null,
                            })
                        },
                        () => {},
                    )
                })(
                    currentChild,
                    ($) => {
                        callback($)
                    }
                )
            },
            () => { // no child
                $x.reportMissingToken({
                    parentDetails: node.details,
                    path: "Gblock",
                    kindNameOptions: "Block",
                })
            },
        )
    }
    if ($d.stringsNotEqual($.kindName, "SourceFile")) {
        $x.reportUnexpectedToken({
            path: "",
            token: $,
            expected: "SourceFile",
        })
        return
    } else {
        ((
            $: uast.TUntypedNode,
            callback: ($: api.TNroot) => void,
        ): void => {
            const node = $
            const children = pm.createStack($.children)
            const sequenceEnd = ($: api.TVTroot) => {
                callback({
                    tokenDetails: node.details,
                    content: $,
                })
            }
            const elements = pm.createArrayBuilder<api.TVTroot_statements>()
            const processElement = () => {
                Gstatement(node, children, ($) => {
                    elements.push($)
                })
            }
            $d.doUntil(
                children,
                (nextChild) => {
                    switch (nextChild.kindName) {
                        case "Block": //z
                            processElement()
                            return true
                        case "BreakStatement": //z
                            processElement()
                            return true
                        case "ExportDeclaration": //z
                            processElement()
                            return true
                        case "ExpressionStatement": //z
                            processElement()
                            return true
                        case "FunctionDeclaration": //z
                            processElement()
                            return true
                        case "IfStatement": //z
                            processElement()
                            return true
                        case "ImportDeclaration": //z
                            processElement()
                            return true
                        case "InterfaceDeclaration": //z
                            processElement()
                            return true
                        case "ReturnStatement": //z
                            processElement()
                            return true
                        case "SwitchStatement": //z
                            processElement()
                            return true
                        case "TypeAliasDeclaration": //z
                            processElement()
                            return true
                        case "VariableStatement": //z
                            processElement()
                            return true
                        default: return false
                    }
                },
            )
            pl.cc(elements.getArray(), ($) => {
                const _statements = $
                children.pop(
                    (currentChild) => {
                        if ($d.stringsNotEqual(currentChild.kindName, "EndOfFileToken")) {
                            $x.reportUnexpectedToken({
                                path: "root_endOfFile",
                                token: currentChild,
                                expected: "EndOfFileToken",
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode,
                            callback: ($: api.TNroot_endOfFile$) => void,
                        ): void => {
                            const node = $
                            const children = pm.createStack($.children)
                            callback($.details)
                            children.pop(
                                (nextChild) => {
                                    $x.reportUnexpectedToken({
                                        path: "root_endOfFile$",
                                        token: nextChild,
                                        expected: null,
                                    })
                                },
                                () => {},
                            )
                        })(
                            currentChild,
                            ($) => {
                                const _endOfFile = $
                                sequenceEnd({
                                    "statements": _statements,
                                    "endOfFile": _endOfFile,
                                })
                            }
                        )
                    },
                    () => { // no child
                        $x.reportMissingToken({
                            parentDetails: node.details,
                            path: "root_endOfFile",
                            kindNameOptions: "EndOfFileToken",
                        })
                    },
                )
            })
            children.pop(
                (nextChild) => {
                    $x.reportUnexpectedToken({
                        path: "root",
                        token: nextChild,
                        expected: null,
                    })
                },
                () => {},
            )
        })(
            $,
            ($) => {
                $x.callback($)
            },
        )
    }
}