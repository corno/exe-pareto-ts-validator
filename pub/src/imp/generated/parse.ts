import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as uast from "api-untyped-ast"
import * as api from "../../interface"

export function parse<Annotation>(
    $: uast.TUntypedNode<Annotation>,
    $i: {
        callback: ($: api.TRoot<Annotation>) => void,
        reportUnexpectedToken: ($: { path: string, token: uast.TUntypedNode<Annotation>, expected: null | string }) => void,
        reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string, }) => void,
    },
    $d: {
        doUntil: <T>(stack: pm.Stack<T>, callback: ($: T) => boolean) => void,
        lookAhead: <T>(stack: pm.Stack<T>, exists: ($: T) => void, notExists: () => void) => void,
    },
): void {
    const $x = $i
    function GvariableDeclarationList(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGvariableDeclarationList<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "VariableDeclarationList") {
                    $x.reportUnexpectedToken({
                        path: "GvariableDeclarationList",
                        token: currentChild,
                        expected: "VariableDeclarationList",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGvariableDeclarationList$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const elements = pm.createArrayBuilder<api.TVTGvariableDeclarationList$<Annotation>>()
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
                            annotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "GvariableDeclarationList",
                    kindNameOptions: "VariableDeclarationList",
                })
            },
        )
    }
    function GvariableDeclaration(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGvariableDeclaration<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "VariableDeclaration") {
                    $x.reportUnexpectedToken({
                        path: "GvariableDeclaration",
                        token: currentChild,
                        expected: "VariableDeclaration",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGvariableDeclaration$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const sequenceEnd = ($: api.TVTGvariableDeclaration$<Annotation>) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    }
                    const choiceEnd_GvariableDeclaration$_nameOrArrayBinding = ($: api.TVTGvariableDeclaration$_nameOrArrayBinding<Annotation>) => {
                        const _nameOrArrayBinding = $
                        let optional: null | api.TVTGvariableDeclaration$_type<Annotation> = null
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
                            let optional: null | api.TVTGvariableDeclaration$_expression<Annotation> = null
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
                                        if (currentChild.kindName !== "ArrayBindingPattern") {
                                            $x.reportUnexpectedToken({
                                                path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern",
                                                token: currentChild,
                                                expected: "ArrayBindingPattern",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            const elements = pm.createArrayBuilder<api.TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>>()
                                            const processElement = () => {
                                                const choiceEnd_GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$ = ($: api.TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>) => {
                                                    elements.push($)
                                                }
                                                $d.lookAhead(children, 
                                                    (nextChild) => {
                                                        const choose_bindingElement = () => {
                                                            children.pop(
                                                                (currentChild) => {
                                                                    if (currentChild.kindName !== "BindingElement") {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement",
                                                                            token: currentChild,
                                                                            expected: "BindingElement",
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.TUntypedNode<Annotation>,
                                                                        callback: ($: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>) => void,
                                                                    ): void => {
                                                                        const node = $
                                                                        const children = pm.createStack($.children)
                                                                        Gidentifier(node, children, ($) => {
                                                                            callback({
                                                                                annotation: node.implementationDetails,
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
                                                                        parentAnnotation: node.implementationDetails,
                                                                        path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement",
                                                                        kindNameOptions: "BindingElement",
                                                                    })
                                                                },
                                                            )
                                                        }
                                                        const choose_omitted = () => {
                                                            children.pop(
                                                                (currentChild) => {
                                                                    if (currentChild.kindName !== "OmittedExpression") {
                                                                        $x.reportUnexpectedToken({
                                                                            path: "GvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted",
                                                                            token: currentChild,
                                                                            expected: "OmittedExpression",
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.TUntypedNode<Annotation>,
                                                                        callback: ($: api.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$<Annotation>) => void,
                                                                    ): void => {
                                                                        const node = $
                                                                        const children = pm.createStack($.children)
                                                                        callback($.implementationDetails)
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
                                                                        parentAnnotation: node.implementationDetails,
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
                                                            parentAnnotation: node.implementationDetails,
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
                                                    annotation: node.implementationDetails,
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
                                            parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "GvariableDeclaration",
                    kindNameOptions: "VariableDeclaration",
                })
            },
        )
    }
    function GtypeSignature(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGtypeSignature<Annotation>) => void,
    ): void {
        const choiceEnd_GtypeSignature = ($: api.TVTGtypeSignature<Annotation>) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_property = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "PropertySignature") {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_property",
                                    token: currentChild,
                                    expected: "PropertySignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtypeSignature_property$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtypeSignature_property$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGtypeSignature_property$_modifiers<Annotation>>()
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
                                        let optional: null | api.TVTGtypeSignature_property$_quesionToken<Annotation> = null
                                        const setOptional = () => {
                                            children.pop(
                                                (currentChild) => {
                                                    if (currentChild.kindName !== "QuestionToken") {
                                                        $x.reportUnexpectedToken({
                                                            path: "GtypeSignature_property$_quesionToken",
                                                            token: currentChild,
                                                            expected: "QuestionToken",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: api.TNGtypeSignature_property$_quesionToken$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.implementationDetails)
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
                                                        parentAnnotation: node.implementationDetails,
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
                                            let optional: null | api.TVTGtypeSignature_property$_type<Annotation> = null
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
                                parentAnnotation: node.implementationDetails,
                                path: "GtypeSignature_property",
                                kindNameOptions: "PropertySignature",
                            })
                        },
                    )
                }
                const choose_method = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "MethodSignature") {
                                $x.reportUnexpectedToken({
                                    path: "GtypeSignature_method",
                                    token: currentChild,
                                    expected: "MethodSignature",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtypeSignature_method$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtypeSignature_method$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "GtypeSignature_method",
                                kindNameOptions: "MethodSignature",
                            })
                        },
                    )
                }
                switch (nextChild.kindName) {
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
                            expected: "MethodSignature, PropertySignature",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "GtypeSignature",
                    kindNameOptions: "MethodSignature, PropertySignature",
                })
            },
        )
    }
    function GtypeParameter(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGtypeParameter<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "TypeParameter") {
                    $x.reportUnexpectedToken({
                        path: "GtypeParameter",
                        token: currentChild,
                        expected: "TypeParameter",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGtypeParameter$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    Gidentifier(node, children, ($) => {
                        callback({
                            annotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "GtypeParameter",
                    kindNameOptions: "TypeParameter",
                })
            },
        )
    }
    function Gtype(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGtype<Annotation>) => void,
    ): void {
        const choiceEnd_Gtype = ($: api.TVTGtype<Annotation>) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_void = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "VoidKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_void",
                                    token: currentChild,
                                    expected: "VoidKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_void$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_void",
                                kindNameOptions: "VoidKeyword",
                            })
                        },
                    )
                }
                const choose_union = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "UnionType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_union",
                                    token: currentChild,
                                    expected: "UnionType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_union$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGtype_union$<Annotation>>()
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_union",
                                kindNameOptions: "UnionType",
                            })
                        },
                    )
                }
                const choose_undefined = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "UndefinedKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_undefined",
                                    token: currentChild,
                                    expected: "UndefinedKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_undefined$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_undefined",
                                kindNameOptions: "UndefinedKeyword",
                            })
                        },
                    )
                }
                const choose_typeReference = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TypeReference") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_typeReference",
                                    token: currentChild,
                                    expected: "TypeReference",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_typeReference$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtype_typeReference$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const choiceEnd_Gtype_typeReference$_x = ($: api.TVTGtype_typeReference$_x<Annotation>) => {
                                    const _x = $
                                    const elements = pm.createArrayBuilder<api.TVTGtype_typeReference$_parameters<Annotation>>()
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
                                                    if (currentChild.kindName !== "QualifiedName") {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gtype_typeReference$_x_qualifiedName",
                                                            token: currentChild,
                                                            expected: "QualifiedName",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: api.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        const sequenceEnd = ($: api.TVTGtype_typeReference$_x_qualifiedName$<Annotation>) => {
                                                            callback({
                                                                annotation: node.implementationDetails,
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
                                                        parentAnnotation: node.implementationDetails,
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
                                            parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_typeReference",
                                kindNameOptions: "TypeReference",
                            })
                        },
                    )
                }
                const choose_string = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "StringKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_string",
                                    token: currentChild,
                                    expected: "StringKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_string$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_string",
                                kindNameOptions: "StringKeyword",
                            })
                        },
                    )
                }
                const choose_typeLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TypeLiteral") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_typeLiteral",
                                    token: currentChild,
                                    expected: "TypeLiteral",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_typeLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGtype_typeLiteral$<Annotation>>()
                                const processElement = () => {
                                    GtypeSignature(node, children, ($) => {
                                        elements.push($)
                                    })
                                }
                                $d.doUntil(
                                    children,
                                    (nextChild) => {
                                        switch (nextChild.kindName) {
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_typeLiteral",
                                kindNameOptions: "TypeLiteral",
                            })
                        },
                    )
                }
                const choose_tuple = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TupleType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_tuple",
                                    token: currentChild,
                                    expected: "TupleType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_tuple$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGtype_tuple$<Annotation>>()
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_tuple",
                                kindNameOptions: "TupleType",
                            })
                        },
                    )
                }
                const choose_optional = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "OptionalType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_optional",
                                    token: currentChild,
                                    expected: "OptionalType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_optional$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gtype(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_optional",
                                kindNameOptions: "OptionalType",
                            })
                        },
                    )
                }
                const choose_number = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NumberKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_number",
                                    token: currentChild,
                                    expected: "NumberKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_number$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_number",
                                kindNameOptions: "NumberKeyword",
                            })
                        },
                    )
                }
                const choose_parenthesized = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ParenthesizedType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_parenthesized",
                                    token: currentChild,
                                    expected: "ParenthesizedType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_parenthesized$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gtype(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_parenthesized",
                                kindNameOptions: "ParenthesizedType",
                            })
                        },
                    )
                }
                const choose_literal = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "LiteralType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_literal",
                                    token: currentChild,
                                    expected: "LiteralType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_literal$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const choiceEnd_Gtype_literal$ = ($: api.TVTGtype_literal$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                                    if (currentChild.kindName !== "NullKeyword") {
                                                        $x.reportUnexpectedToken({
                                                            path: "Gtype_literal$_null",
                                                            token: currentChild,
                                                            expected: "NullKeyword",
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: api.TNGtype_literal$_null$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children = pm.createStack($.children)
                                                        callback($.implementationDetails)
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
                                                        parentAnnotation: node.implementationDetails,
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
                                            parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_literal",
                                kindNameOptions: "LiteralType",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "FunctionType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_function",
                                    token: currentChild,
                                    expected: "FunctionType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_function$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGtype_function$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGtype_function$_parameters<Annotation>>()
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
                                    let optional: null | api.TVTGtype_function$_returnType<Annotation> = null
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
                                            "parameters": _parameters,
                                            "returnType": _returnType,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_function",
                                kindNameOptions: "FunctionType",
                            })
                        },
                    )
                }
                const choose_boolean = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "BooleanKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_boolean",
                                    token: currentChild,
                                    expected: "BooleanKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_boolean$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gtype_boolean",
                                kindNameOptions: "BooleanKeyword",
                            })
                        },
                    )
                }
                const choose_array = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ArrayType") {
                                $x.reportUnexpectedToken({
                                    path: "Gtype_array",
                                    token: currentChild,
                                    expected: "ArrayType",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGtype_array$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gtype(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "Gtype",
                    kindNameOptions: "ArrayType, BooleanKeyword, FunctionType, LiteralType, ParenthesizedType, NumberKeyword, OptionalType, TupleType, TypeLiteral, StringKeyword, TypeReference, UndefinedKeyword, UnionType, VoidKeyword",
                })
            },
        )
    }
    function GstringLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGstringLiteral<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "StringLiteral") {
                    $x.reportUnexpectedToken({
                        path: "GstringLiteral",
                        token: currentChild,
                        expected: "StringLiteral",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGstringLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        annotation: $.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "GstringLiteral",
                    kindNameOptions: "StringLiteral",
                })
            },
        )
    }
    function Gstatement(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGstatement<Annotation>) => void,
    ): void {
        const choiceEnd_Gstatement = ($: api.TVTGstatement<Annotation>) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_variable = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "VariableStatement") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_variable",
                                    token: currentChild,
                                    expected: "VariableStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_variable$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_variable$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_variable$_modifiers<Annotation>>()
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_variable",
                                kindNameOptions: "VariableStatement",
                            })
                        },
                    )
                }
                const choose_typeAlias = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TypeAliasDeclaration") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_typeAlias",
                                    token: currentChild,
                                    expected: "TypeAliasDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_typeAlias$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_typeAlias$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_typeAlias$_modifiers<Annotation>>()
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
                                        const elements = pm.createArrayBuilder<api.TVTGstatement_typeAlias$_typeParameters<Annotation>>()
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_typeAlias",
                                kindNameOptions: "TypeAliasDeclaration",
                            })
                        },
                    )
                }
                const choose_switch = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "SwitchStatement") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_switch",
                                    token: currentChild,
                                    expected: "SwitchStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_switch$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_switch$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    children.pop(
                                        (currentChild) => {
                                            if (currentChild.kindName !== "CaseBlock") {
                                                $x.reportUnexpectedToken({
                                                    path: "Gstatement_switch$_caseBlock",
                                                    token: currentChild,
                                                    expected: "CaseBlock",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: api.TNGstatement_switch$_caseBlock$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                const elements = pm.createArrayBuilder<api.TVTGstatement_switch$_caseBlock$<Annotation>>()
                                                const processElement = () => {
                                                    const choiceEnd_Gstatement_switch$_caseBlock$ = ($: api.TVTGstatement_switch$_caseBlock$<Annotation>) => {
                                                        elements.push($)
                                                    }
                                                    $d.lookAhead(children, 
                                                        (nextChild) => {
                                                            const choose_default = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if (currentChild.kindName !== "DefaultClause") {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_switch$_caseBlock$_default",
                                                                                token: currentChild,
                                                                                expected: "DefaultClause",
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.TUntypedNode<Annotation>,
                                                                            callback: ($: api.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = pm.createStack($.children)
                                                                            const elements = pm.createArrayBuilder<api.TVTGstatement_switch$_caseBlock$_default$<Annotation>>()
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
                                                                                    annotation: node.implementationDetails,
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
                                                                            parentAnnotation: node.implementationDetails,
                                                                            path: "Gstatement_switch$_caseBlock$_default",
                                                                            kindNameOptions: "DefaultClause",
                                                                        })
                                                                    },
                                                                )
                                                            }
                                                            const choose_case = () => {
                                                                children.pop(
                                                                    (currentChild) => {
                                                                        if (currentChild.kindName !== "CaseClause") {
                                                                            $x.reportUnexpectedToken({
                                                                                path: "Gstatement_switch$_caseBlock$_case",
                                                                                token: currentChild,
                                                                                expected: "CaseClause",
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.TUntypedNode<Annotation>,
                                                                            callback: ($: api.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children = pm.createStack($.children)
                                                                            const sequenceEnd = ($: api.TVTGstatement_switch$_caseBlock$_case$<Annotation>) => {
                                                                                callback({
                                                                                    annotation: node.implementationDetails,
                                                                                    content: $,
                                                                                })
                                                                            }
                                                                            Gexpression(node, children, ($) => {
                                                                                const _case = $
                                                                                const elements = pm.createArrayBuilder<api.TVTGstatement_switch$_caseBlock$_case$_statements<Annotation>>()
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
                                                                            parentAnnotation: node.implementationDetails,
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
                                                                parentAnnotation: node.implementationDetails,
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
                                                        annotation: node.implementationDetails,
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
                                                parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_switch",
                                kindNameOptions: "SwitchStatement",
                            })
                        },
                    )
                }
                const choose_return = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ReturnStatement") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_return",
                                    token: currentChild,
                                    expected: "ReturnStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_return$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let optional: null | api.TVTGstatement_return$<Annotation> = null
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_return",
                                kindNameOptions: "ReturnStatement",
                            })
                        },
                    )
                }
                const choose_import = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ImportDeclaration") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_import",
                                    token: currentChild,
                                    expected: "ImportDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_import$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_import$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (currentChild) => {
                                        if (currentChild.kindName !== "ImportClause") {
                                            $x.reportUnexpectedToken({
                                                path: "Gstatement_import$_clause",
                                                token: currentChild,
                                                expected: "ImportClause",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: api.TNGstatement_import$_clause$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            const choiceEnd_Gstatement_import$_clause$ = ($: api.TVTGstatement_import$_clause$<Annotation>) => {
                                                callback({
                                                    annotation: node.implementationDetails,
                                                    content: $,
                                                })
                                            }
                                            $d.lookAhead(children, 
                                                (nextChild) => {
                                                    const choose_named = () => {
                                                        children.pop(
                                                            (currentChild) => {
                                                                if (currentChild.kindName !== "NamedImports") {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gstatement_import$_clause$_named",
                                                                        token: currentChild,
                                                                        expected: "NamedImports",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: api.TNGstatement_import$_clause$_named$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    const elements = pm.createArrayBuilder<api.TVTGstatement_import$_clause$_named$<Annotation>>()
                                                                    const processElement = () => {
                                                                        children.pop(
                                                                            (currentChild) => {
                                                                                if (currentChild.kindName !== "ImportSpecifier") {
                                                                                    $x.reportUnexpectedToken({
                                                                                        path: "Gstatement_import$_clause$_named$",
                                                                                        token: currentChild,
                                                                                        expected: "ImportSpecifier",
                                                                                    })
                                                                                    return
                                                                                }
                                                                                ((
                                                                                    $: uast.TUntypedNode<Annotation>,
                                                                                    callback: ($: api.TNGstatement_import$_clause$_named$$<Annotation>) => void,
                                                                                ): void => {
                                                                                    const node = $
                                                                                    const children = pm.createStack($.children)
                                                                                    const sequenceEnd = ($: api.TVTGstatement_import$_clause$_named$$<Annotation>) => {
                                                                                        callback({
                                                                                            annotation: node.implementationDetails,
                                                                                            content: $,
                                                                                        })
                                                                                    }
                                                                                    Gidentifier(node, children, ($) => {
                                                                                        const _name = $
                                                                                        let optional: null | api.TVTGstatement_import$_clause$_named$$_as<Annotation> = null
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
                                                                                    parentAnnotation: node.implementationDetails,
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
                                                                            annotation: node.implementationDetails,
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
                                                                    parentAnnotation: node.implementationDetails,
                                                                    path: "Gstatement_import$_clause$_named",
                                                                    kindNameOptions: "NamedImports",
                                                                })
                                                            },
                                                        )
                                                    }
                                                    const choose_namespace = () => {
                                                        children.pop(
                                                            (currentChild) => {
                                                                if (currentChild.kindName !== "NamespaceImport") {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gstatement_import$_clause$_namespace",
                                                                        token: currentChild,
                                                                        expected: "NamespaceImport",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: api.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    Gidentifier(node, children, ($) => {
                                                                        callback({
                                                                            annotation: node.implementationDetails,
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
                                                                    parentAnnotation: node.implementationDetails,
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
                                                        parentAnnotation: node.implementationDetails,
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
                                            parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_import",
                                kindNameOptions: "ImportDeclaration",
                            })
                        },
                    )
                }
                const choose_if = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "IfStatement") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_if",
                                    token: currentChild,
                                    expected: "IfStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_if$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_if$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _expression = $
                                    Gstatement(node, children, ($) => {
                                        const _thenStatement = $
                                        let optional: null | api.TVTGstatement_if$_elseStatement<Annotation> = null
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_if",
                                kindNameOptions: "IfStatement",
                            })
                        },
                    )
                }
                const choose_function = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "FunctionDeclaration") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_function",
                                    token: currentChild,
                                    expected: "FunctionDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_function$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGstatement_function$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGstatement_function$_modifiers<Annotation>>()
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
                                            let optional: null | api.TVTGstatement_function$_block<Annotation> = null
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_function",
                                kindNameOptions: "FunctionDeclaration",
                            })
                        },
                    )
                }
                const choose_expression = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ExpressionStatement") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_expression",
                                    token: currentChild,
                                    expected: "ExpressionStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_expression$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_expression",
                                kindNameOptions: "ExpressionStatement",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ExportDeclaration") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_export",
                                    token: currentChild,
                                    expected: "ExportDeclaration",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_export$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                GstringLiteral(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gstatement_export",
                                kindNameOptions: "ExportDeclaration",
                            })
                        },
                    )
                }
                const choose_break = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "BreakStatement") {
                                $x.reportUnexpectedToken({
                                    path: "Gstatement_break",
                                    token: currentChild,
                                    expected: "BreakStatement",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGstatement_break$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                let optional: null | api.TVTGstatement_break$<Annotation> = null
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
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
                            expected: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, FunctionDeclaration, IfStatement, ImportDeclaration, ReturnStatement, SwitchStatement, TypeAliasDeclaration, VariableStatement",
                        })
                    }
                }
            },
            () => { //no child
                $x.reportMissingToken({
                    parentAnnotation: node.implementationDetails,
                    path: "Gstatement",
                    kindNameOptions: "Block, BreakStatement, ExportDeclaration, ExpressionStatement, FunctionDeclaration, IfStatement, ImportDeclaration, ReturnStatement, SwitchStatement, TypeAliasDeclaration, VariableStatement",
                })
            },
        )
    }
    function Gparameter(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGparameter<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "Parameter") {
                    $x.reportUnexpectedToken({
                        path: "Gparameter",
                        token: currentChild,
                        expected: "Parameter",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGparameter$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const sequenceEnd = ($: api.TVTGparameter$<Annotation>) => {
                        callback({
                            annotation: node.implementationDetails,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        let optional: null | api.TVTGparameter$_questionToken<Annotation> = null
                        const setOptional = () => {
                            children.pop(
                                (currentChild) => {
                                    if (currentChild.kindName !== "QuestionToken") {
                                        $x.reportUnexpectedToken({
                                            path: "Gparameter$_questionToken",
                                            token: currentChild,
                                            expected: "QuestionToken",
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: api.TNGparameter$_questionToken$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children = pm.createStack($.children)
                                        callback($.implementationDetails)
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
                                        parentAnnotation: node.implementationDetails,
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
                            let optional: null | api.TVTGparameter$_type<Annotation> = null
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
                    parentAnnotation: node.implementationDetails,
                    path: "Gparameter",
                    kindNameOptions: "Parameter",
                })
            },
        )
    }
    function GnumericLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGnumericLiteral<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "NumericLiteral") {
                    $x.reportUnexpectedToken({
                        path: "GnumericLiteral",
                        token: currentChild,
                        expected: "NumericLiteral",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGnumericLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        annotation: $.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "GnumericLiteral",
                    kindNameOptions: "NumericLiteral",
                })
            },
        )
    }
    function Gmodifier(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGmodifier<Annotation>) => void,
    ): void {
        const choiceEnd_Gmodifier = ($: api.TVTGmodifier<Annotation>) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_readonly = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ReadonlyKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_readonly",
                                    token: currentChild,
                                    expected: "ReadonlyKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGmodifier_readonly$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gmodifier_readonly",
                                kindNameOptions: "ReadonlyKeyword",
                            })
                        },
                    )
                }
                const choose_export = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ExportKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gmodifier_export",
                                    token: currentChild,
                                    expected: "ExportKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGmodifier_export$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "Gmodifier",
                    kindNameOptions: "ExportKeyword, ReadonlyKeyword",
                })
            },
        )
    }
    function GidentifierOrStringLiteral(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGidentifierOrStringLiteral<Annotation>) => void,
    ): void {
        const choiceEnd_GidentifierOrStringLiteral = ($: api.TVTGidentifierOrStringLiteral<Annotation>) => {
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
                    parentAnnotation: node.implementationDetails,
                    path: "GidentifierOrStringLiteral",
                    kindNameOptions: "Identifier, StringLiteral",
                })
            },
        )
    }
    function Gidentifier(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGidentifier<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "Identifier") {
                    $x.reportUnexpectedToken({
                        path: "Gidentifier",
                        token: currentChild,
                        expected: "Identifier",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGidentifier$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    callback({
                        annotation: $.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "Gidentifier",
                    kindNameOptions: "Identifier",
                })
            },
        )
    }
    function GfunctionDefinition(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGfunctionDefinition<Annotation>) => void,
    ): void {
        const sequenceEnd = ($: api.TVTGfunctionDefinition<Annotation>) => {
            callback($)
        }
        const elements = pm.createArrayBuilder<api.TVTGfunctionDefinition_typeParameters<Annotation>>()
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
            const elements = pm.createArrayBuilder<api.TVTGfunctionDefinition_parameters<Annotation>>()
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
                let optional: null | api.TVTGfunctionDefinition_returnType<Annotation> = null
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
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGexpression<Annotation>) => void,
    ): void {
        const choiceEnd_Gexpression = ($: api.TVTGexpression<Annotation>) => {
            callback($)
        }
        $d.lookAhead(children, 
            (nextChild) => {
                const choose_true = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TrueKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_true",
                                    token: currentChild,
                                    expected: "TrueKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_true$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_true",
                                kindNameOptions: "TrueKeyword",
                            })
                        },
                    )
                }
                const choose_template = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "TemplateExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_template",
                                    token: currentChild,
                                    expected: "TemplateExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_template$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_template$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                children.pop(
                                    (currentChild) => {
                                        if (currentChild.kindName !== "TemplateHead") {
                                            $x.reportUnexpectedToken({
                                                path: "Gexpression_template$_head",
                                                token: currentChild,
                                                expected: "TemplateHead",
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: api.TNGexpression_template$_head$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children = pm.createStack($.children)
                                            callback({
                                                annotation: $.implementationDetails,
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
                                                const elements = pm.createArrayBuilder<api.TVTGexpression_template$_spans<Annotation>>()
                                                const processElement = () => {
                                                    children.pop(
                                                        (currentChild) => {
                                                            if (currentChild.kindName !== "TemplateSpan") {
                                                                $x.reportUnexpectedToken({
                                                                    path: "Gexpression_template$_spans",
                                                                    token: currentChild,
                                                                    expected: "TemplateSpan",
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: api.TNGexpression_template$_spans$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children = pm.createStack($.children)
                                                                const sequenceEnd = ($: api.TVTGexpression_template$_spans$<Annotation>) => {
                                                                    callback({
                                                                        annotation: node.implementationDetails,
                                                                        content: $,
                                                                    })
                                                                }
                                                                Gexpression(node, children, ($) => {
                                                                    const _expression = $
                                                                    const choiceEnd_Gexpression_template$_spans$_x = ($: api.TVTGexpression_template$_spans$_x<Annotation>) => {
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
                                                                                        if (currentChild.kindName !== "TemplateTail") {
                                                                                            $x.reportUnexpectedToken({
                                                                                                path: "Gexpression_template$_spans$_x_tail",
                                                                                                token: currentChild,
                                                                                                expected: "TemplateTail",
                                                                                            })
                                                                                            return
                                                                                        }
                                                                                        ((
                                                                                            $: uast.TUntypedNode<Annotation>,
                                                                                            callback: ($: api.TNGexpression_template$_spans$_x_tail$<Annotation>) => void,
                                                                                        ): void => {
                                                                                            const node = $
                                                                                            const children = pm.createStack($.children)
                                                                                            callback({
                                                                                                annotation: $.implementationDetails,
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
                                                                                            parentAnnotation: node.implementationDetails,
                                                                                            path: "Gexpression_template$_spans$_x_tail",
                                                                                            kindNameOptions: "TemplateTail",
                                                                                        })
                                                                                    },
                                                                                )
                                                                            }
                                                                            const choose_middle = () => {
                                                                                children.pop(
                                                                                    (currentChild) => {
                                                                                        if (currentChild.kindName !== "TemplateMiddle") {
                                                                                            $x.reportUnexpectedToken({
                                                                                                path: "Gexpression_template$_spans$_x_middle",
                                                                                                token: currentChild,
                                                                                                expected: "TemplateMiddle",
                                                                                            })
                                                                                            return
                                                                                        }
                                                                                        ((
                                                                                            $: uast.TUntypedNode<Annotation>,
                                                                                            callback: ($: api.TNGexpression_template$_spans$_x_middle$<Annotation>) => void,
                                                                                        ): void => {
                                                                                            const node = $
                                                                                            const children = pm.createStack($.children)
                                                                                            callback({
                                                                                                annotation: $.implementationDetails,
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
                                                                                            parentAnnotation: node.implementationDetails,
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
                                                                                parentAnnotation: node.implementationDetails,
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
                                                                parentAnnotation: node.implementationDetails,
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
                                            parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
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
                            if (currentChild.kindName !== "PropertyAccessExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_propertyAccess",
                                    token: currentChild,
                                    expected: "PropertyAccessExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_propertyAccess$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_propertyAccess$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_propertyAccess",
                                kindNameOptions: "PropertyAccessExpression",
                            })
                        },
                    )
                }
                const choose_prefixUnary = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "PrefixUnaryExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_prefixUnary",
                                    token: currentChild,
                                    expected: "PrefixUnaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_prefixUnary$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_prefixUnary",
                                kindNameOptions: "PrefixUnaryExpression",
                            })
                        },
                    )
                }
                const choose_parenthesizedExpression = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ParenthesizedExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_parenthesizedExpression",
                                    token: currentChild,
                                    expected: "ParenthesizedExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_parenthesizedExpression$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                Gexpression(node, children, ($) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_parenthesizedExpression",
                                kindNameOptions: "ParenthesizedExpression",
                            })
                        },
                    )
                }
                const choose_objectLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ObjectLiteralExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_objectLiteral",
                                    token: currentChild,
                                    expected: "ObjectLiteralExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_objectLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGexpression_objectLiteral$<Annotation>>()
                                const processElement = () => {
                                    const choiceEnd_Gexpression_objectLiteral$ = ($: api.TVTGexpression_objectLiteral$<Annotation>) => {
                                        elements.push($)
                                    }
                                    $d.lookAhead(children, 
                                        (nextChild) => {
                                            const choose_propertyAssignment = () => {
                                                children.pop(
                                                    (currentChild) => {
                                                        if (currentChild.kindName !== "PropertyAssignment") {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gexpression_objectLiteral$_propertyAssignment",
                                                                token: currentChild,
                                                                expected: "PropertyAssignment",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: api.TNGexpression_objectLiteral$_propertyAssignment$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            const sequenceEnd = ($: api.TVTGexpression_objectLiteral$_propertyAssignment$<Annotation>) => {
                                                                callback({
                                                                    annotation: node.implementationDetails,
                                                                    content: $,
                                                                })
                                                            }
                                                            const choiceEnd_Gexpression_objectLiteral$_propertyAssignment$_name = ($: api.TVTGexpression_objectLiteral$_propertyAssignment$_name<Annotation>) => {
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
                                                                        parentAnnotation: node.implementationDetails,
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
                                                            parentAnnotation: node.implementationDetails,
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
                                                parentAnnotation: node.implementationDetails,
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_objectLiteral",
                                kindNameOptions: "ObjectLiteralExpression",
                            })
                        },
                    )
                }
                const choose_nullKeyword = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "NullKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_nullKeyword",
                                    token: currentChild,
                                    expected: "NullKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_nullKeyword$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
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
                            if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_noSubstitutionTemplateLiteral",
                                    token: currentChild,
                                    expected: "NoSubstitutionTemplateLiteral",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
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
                            if (currentChild.kindName !== "FalseKeyword") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_false",
                                    token: currentChild,
                                    expected: "FalseKeyword",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_false$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                callback($.implementationDetails)
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_false",
                                kindNameOptions: "FalseKeyword",
                            })
                        },
                    )
                }
                const choose_elementAccess = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ElementAccessExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_elementAccess",
                                    token: currentChild,
                                    expected: "ElementAccessExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_elementAccess$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_elementAccess$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_elementAccess",
                                kindNameOptions: "ElementAccessExpression",
                            })
                        },
                    )
                }
                const choose_conditional = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ConditionalExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_conditional",
                                    token: currentChild,
                                    expected: "ConditionalExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_conditional$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_conditional$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _test = $
                                    children.pop(
                                        (currentChild) => {
                                            if (currentChild.kindName !== "QuestionToken") {
                                                $x.reportUnexpectedToken({
                                                    path: "Gexpression_conditional$_questionToken",
                                                    token: currentChild,
                                                    expected: "QuestionToken",
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: api.TNGexpression_conditional$_questionToken$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children = pm.createStack($.children)
                                                callback($.implementationDetails)
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
                                                                if (currentChild.kindName !== "ColonToken") {
                                                                    $x.reportUnexpectedToken({
                                                                        path: "Gexpression_conditional$_colonToken",
                                                                        token: currentChild,
                                                                        expected: "ColonToken",
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: api.TNGexpression_conditional$_colonToken$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children = pm.createStack($.children)
                                                                    callback($.implementationDetails)
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
                                                                    parentAnnotation: node.implementationDetails,
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
                                                parentAnnotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_conditional",
                                kindNameOptions: "ConditionalExpression",
                            })
                        },
                    )
                }
                const choose_call = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "CallExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_call",
                                    token: currentChild,
                                    expected: "CallExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_call$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_call$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _function = $
                                    const elements = pm.createArrayBuilder<api.TVTGexpression_call$_typeParameters<Annotation>>()
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
                                        const elements = pm.createArrayBuilder<api.TVTGexpression_call$_parameters<Annotation>>()
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_call",
                                kindNameOptions: "CallExpression",
                            })
                        },
                    )
                }
                const choose_binary = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "BinaryExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_binary",
                                    token: currentChild,
                                    expected: "BinaryExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_binary$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_binary$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                Gexpression(node, children, ($) => {
                                    const _leftHandSide = $
                                    const choiceEnd_Gexpression_binary$_operator = ($: api.TVTGexpression_binary$_operator<Annotation>) => {
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
                                                        if (currentChild.kindName !== "EqualsToken") {
                                                            $x.reportUnexpectedToken({
                                                                path: "Gexpression_binary$_operator_equals",
                                                                token: currentChild,
                                                                expected: "EqualsToken",
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: api.TNGexpression_binary$_operator_equals$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children = pm.createStack($.children)
                                                            callback($.implementationDetails)
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
                                                            parentAnnotation: node.implementationDetails,
                                                            path: "Gexpression_binary$_operator_equals",
                                                            kindNameOptions: "EqualsToken",
                                                        })
                                                    },
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case "EqualsToken": /*Y*/ {
                                                    choose_equals()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_binary$_operator",
                                                        token: nextChild,
                                                        expected: "EqualsToken",
                                                    })
                                                }
                                            }
                                        },
                                        () => { //no child
                                            $x.reportMissingToken({
                                                parentAnnotation: node.implementationDetails,
                                                path: "Gexpression_binary$_operator",
                                                kindNameOptions: "EqualsToken",
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_binary",
                                kindNameOptions: "BinaryExpression",
                            })
                        },
                    )
                }
                const choose_arrowFunction = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ArrowFunction") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_arrowFunction",
                                    token: currentChild,
                                    expected: "ArrowFunction",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_arrowFunction$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const sequenceEnd = ($: api.TVTGexpression_arrowFunction$<Annotation>) => {
                                    callback({
                                        annotation: node.implementationDetails,
                                        content: $,
                                    })
                                }
                                const elements = pm.createArrayBuilder<api.TVTGexpression_arrowFunction$_parameters<Annotation>>()
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
                                    let optional: null | api.TVTGexpression_arrowFunction$_returnType<Annotation> = null
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
                                                if (currentChild.kindName !== "EqualsGreaterThanToken") {
                                                    $x.reportUnexpectedToken({
                                                        path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                        token: currentChild,
                                                        expected: "EqualsGreaterThanToken",
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: api.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children = pm.createStack($.children)
                                                    callback($.implementationDetails)
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
                                                        const choiceEnd_Gexpression_arrowFunction$_implementation = ($: api.TVTGexpression_arrowFunction$_implementation<Annotation>) => {
                                                            const _implementation = $
                                                            sequenceEnd({
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
                                                                    parentAnnotation: node.implementationDetails,
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
                                                    parentAnnotation: node.implementationDetails,
                                                    path: "Gexpression_arrowFunction$_equalsGreaterThan",
                                                    kindNameOptions: "EqualsGreaterThanToken",
                                                })
                                            },
                                        )
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
                                parentAnnotation: node.implementationDetails,
                                path: "Gexpression_arrowFunction",
                                kindNameOptions: "ArrowFunction",
                            })
                        },
                    )
                }
                const choose_arrayLiteral = () => {
                    children.pop(
                        (currentChild) => {
                            if (currentChild.kindName !== "ArrayLiteralExpression") {
                                $x.reportUnexpectedToken({
                                    path: "Gexpression_arrayLiteral",
                                    token: currentChild,
                                    expected: "ArrayLiteralExpression",
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: api.TNGexpression_arrayLiteral$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children = pm.createStack($.children)
                                const elements = pm.createArrayBuilder<api.TVTGexpression_arrayLiteral$<Annotation>>()
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
                                        annotation: node.implementationDetails,
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
                                parentAnnotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "Gexpression",
                    kindNameOptions: "ArrayLiteralExpression, ArrowFunction, BinaryExpression, CallExpression, ConditionalExpression, ElementAccessExpression, FalseKeyword, Identifier, NoSubstitutionTemplateLiteral, NumericLiteral, NullKeyword, ObjectLiteralExpression, ParenthesizedExpression, PrefixUnaryExpression, PropertyAccessExpression, StringLiteral, TemplateExpression, TrueKeyword",
                })
            },
        )
    }
    function Gblock(
        node: uast.TUntypedNode<Annotation>,
        children: pm.Stack<uast.TUntypedNode<Annotation>>,
        callback: ($: api.TGblock<Annotation>) => void,
    ): void {
        children.pop(
            (currentChild) => {
                if (currentChild.kindName !== "Block") {
                    $x.reportUnexpectedToken({
                        path: "Gblock",
                        token: currentChild,
                        expected: "Block",
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: api.TNGblock$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children = pm.createStack($.children)
                    const elements = pm.createArrayBuilder<api.TVTGblock$<Annotation>>()
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
                            annotation: node.implementationDetails,
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
                    parentAnnotation: node.implementationDetails,
                    path: "Gblock",
                    kindNameOptions: "Block",
                })
            },
        )
    }
    if ($.kindName !== "SourceFile") {
        $x.reportUnexpectedToken({
            path: "",
            token: $,
            expected: "SourceFile",
        })
        return
    } else {
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: api.TNroot<Annotation>) => void,
        ): void => {
            const node = $
            const children = pm.createStack($.children)
            const sequenceEnd = ($: api.TVTroot<Annotation>) => {
                callback({
                    annotation: node.implementationDetails,
                    content: $,
                })
            }
            const elements = pm.createArrayBuilder<api.TVTroot_statements<Annotation>>()
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
                        if (currentChild.kindName !== "EndOfFileToken") {
                            $x.reportUnexpectedToken({
                                path: "root_endOfFile",
                                token: currentChild,
                                expected: "EndOfFileToken",
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: api.TNroot_endOfFile$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children = pm.createStack($.children)
                            callback($.implementationDetails)
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
                            parentAnnotation: node.implementationDetails,
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