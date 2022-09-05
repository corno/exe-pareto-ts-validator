import * as pt from "pareto-core-types"


export type TAnnotatedString<Annotation> = {
    readonly "myValue": string
    readonly "annotation": Annotation
}

export type TImportName<Annotation> = {
    readonly "name": TIdentifier<Annotation>
    readonly "as": null | TIdentifier<Annotation>
}

export type TSwitchClause<Annotation> =
    | ["case", {
        readonly "expression": TExpression<Annotation>
        readonly "statements": TStatements<Annotation>
    }]
    | ["default", {
        readonly "statements": TStatements<Annotation>
    }]

export type TImportClause<Annotation> =
    | ["named", pt.Array<TImportName<Annotation>>]
    | ["namespace", TIdentifier<Annotation>]

export type TTypeAlias<Annotation> = {
    readonly "details": Annotation
    readonly "modifiers": TModifiers<Annotation>
    readonly "name": TIdentifier<Annotation>
    readonly "typeParameters": TTypeParameters<Annotation>
    readonly "type": TType<Annotation>

}

export type TImportStatement<Annotation> = {
    readonly "annotation": Annotation
    readonly "clause": TImportClause<Annotation>
    readonly "file": TStringLiteral<Annotation>
}

export type TStatement<Annotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["block", TBlock<Annotation>]
    | ["break", {}]
    | ["export", {
        readonly "file": TStringLiteral<Annotation>
    }]
    | ["expression", TExpression<Annotation>]
    | ["function", {
        readonly "modifiers": TModifiers<Annotation>
        readonly "name": TIdentifier<Annotation>
        readonly "definition": TFunctionDefinition<Annotation>
        readonly "block": null | TBlock<Annotation>
    }]
    | ["if", {
        readonly "expression": TExpression<Annotation>
        readonly "thenStatement": TStatement<Annotation>
        readonly "elseStatement": null | TStatement<Annotation>
    }]
    | ["import", TImportStatement<Annotation>]
    | ["interface", {
        readonly "modifiers": TModifiers<Annotation>
        readonly "name": TIdentifier<Annotation>
        readonly "typeParameters": TTypeParameters<Annotation>
        readonly "signatures": pt.Array<TTypeSignature<Annotation>>
    }]
    | ["return", null | TExpression<Annotation>]
    | ["switch", {
        readonly "expression": TExpression<Annotation>
        readonly "clauses": pt.Array<TSwitchClause<Annotation>>
    }]
    | ["typeAlias", TTypeAlias<Annotation>]
    | ["variable", {
        readonly "modifiers": TModifiers<Annotation>
        readonly "list": TVariableDeclarationList<Annotation>
    }]
}

export type TStatements<Annotation> = pt.Array<TStatement<Annotation>>

export type TBlock<Annotation> = {
    readonly "statements": TStatements<Annotation>
}

export type TTypeParameters<Annotation> = pt.Array<TIdentifier<Annotation>>

export type TParameter<Annotation> = {
    readonly "name": TIdentifier<Annotation>
    readonly "optional": boolean
    readonly "type": null | TType<Annotation>
}

export type TLiteral<Annotation> =
    | ["null", {}]
    | ["string", TStringLiteral<Annotation>]

export type TType<Annotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["array", TType<Annotation>]
    | ["booleanKeyword", {}]
    | ["function", TFunctionDefinition<Annotation>]
    | ["literal", TLiteral<Annotation>]
    | ["numberKeyword", {}]
    | ["optional", TType<Annotation>]
    | ["parenthesized", TType<Annotation>]
    | ["stringKeyword", {}]
    | ["tuple", pt.Array<TType<Annotation>>]
    | ["typeLiteral", pt.Array<TTypeSignature<Annotation>>]
    | ["typeReference", {
        readonly "identification":
        | ["identifier", TIdentifier<Annotation>]
        | ["qualifiedName", {
            readonly "context": TIdentifier<Annotation>
            readonly "type": TIdentifier<Annotation>
        }]
        readonly "parameters": pt.Array<TType<Annotation>>
    }]
    | ["undefinedKeyword", {}]
    | ["union", pt.Array<TType<Annotation>>]
    | ["voidKeyword", {}]
}

export type TIdentifier<Annotation> = TAnnotatedString<Annotation>
export type TStringLiteral<Annotation> = {
    readonly "annotation": Annotation
    readonly "strippedValue": string
    readonly "wrapper": string
}

export type TNumericLiteral<Annotation> = TAnnotatedString<Annotation>
export type TPropertyAssignment<Annotation> = {
    readonly "name": TIdentifierOrStringLiteral<Annotation>
    readonly "expression": TExpression<Annotation>
}

export type TIdentifierOrStringLiteral<Annotation> =
    | ["identifier", TIdentifier<Annotation>]
    | ["stringLiteral", TStringLiteral<Annotation>]

export type TSpan<Annotation> = {
    readonly "expression": TExpression<Annotation>
    readonly "suffix":
    | ["middle", TAnnotatedString<Annotation>]
    | ["tail", TAnnotatedString<Annotation>]
}

export type TExpression<Annotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["arrayLiteral", {
        readonly "expressions": pt.Array<TExpression<Annotation>>
    }]
    | ["arrowFunction", {
        readonly "definition": TFunctionDefinition<Annotation>
        readonly "implementation":
        | ["block", TBlock<Annotation>]
        | ["expression", TExpression<Annotation>]
    }]
    | ["binary", {
        readonly "leftHandSide": TExpression<Annotation>
        readonly "operator":
        | ["equals", {}]
        | ["equalsEqualsEquals", {}]
        | ["exclamationEqualsEqualsEquals", {}]
        readonly "rightHandSide": TExpression<Annotation>
    }]
    | ["call", {
        readonly "function": TExpression<Annotation>
        readonly "typeArguments": pt.Array<TType<Annotation>>
        readonly "arguments": pt.Array<TExpression<Annotation>>
    }]
    | ["conditional", {
        readonly "test": TExpression<Annotation>
        readonly "ifExpression": TExpression<Annotation>
        readonly "elseExpression": TExpression<Annotation>
    }]
    | ["elementAccess", {
        readonly "array": TExpression<Annotation>
        readonly "element": TExpression<Annotation>
    }]
    | ["false", {}]
    | ["identifier", TIdentifier<Annotation>]
    | ["noSubstitutionTemplateLiteral", {}]
    | ["nullKeyword", {}]
    | ["numericLiteral", TNumericLiteral<Annotation>]
    | ["objectLiteral", {
        readonly "properties": pt.Array<TPropertyAssignment<Annotation>>
    }]
    | ["parenthesizedExpression", TExpression<Annotation>]
    | ["prefixUnary", TExpression<Annotation>]
    | ["propertyAccess", {
        readonly "object": TExpression<Annotation>
        readonly "property": TExpression<Annotation>
    }]
    | ["stringLiteral", TStringLiteral<Annotation>]
    | ["template", {
        readonly "head": TAnnotatedString<Annotation>
        readonly "spans": pt.Array<TSpan<Annotation>>
    }]
    | ["true", {}]
}

export type TFunctionDefinition<Annotation> = {
    readonly "typeParameters": TTypeParameters<Annotation>
    readonly "parameters": pt.Array<TParameter<Annotation>>
    readonly "returnType": null | TType<Annotation>
}

export type TModifier =
    | ["export", {}]
    | ["readonly", {}]

export type TModifiers<Annotation> = pt.Array<TModifier>

export type TSourceFile<Annotation> = {
    readonly "statements": TStatements<Annotation>
}

export type TTypeSignature<Annotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["index", {
        readonly "modifiers": TModifiers<Annotation>
        readonly "parameter": TParameter<Annotation>
        readonly "type": null | TType<Annotation>
    }]
    // | ["method", {
    //     readonly "name": TIdentifier<Annotation>,
    //     readonly "definition": TFunctionDefinition<Annotation>
    // }]
    | ["property", {
        readonly "modifiers": TModifiers<Annotation>
        readonly "name": TIdentifierOrStringLiteral<Annotation>
        readonly "optional": boolean
        readonly "type": null | TType<Annotation>
    }]
}
export type TVariableDeclaration<Annotation> = {
    readonly "name": TIdentifier<Annotation>
    readonly "type": null | TType<Annotation>
    readonly "expression": null | TExpression<Annotation>
}
export type TVariableDeclarationList<Annotation> = {
    readonly "declarations": pt.Array<TVariableDeclaration<Annotation>>
}