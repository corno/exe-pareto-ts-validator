import * as pt from "pareto-core-types"


export type TAnnotatedString<PAnnotation> = {
    readonly "myValue": string
    readonly "annotation": Annotation
}

export type TImportName<PAnnotation> = {
    readonly "name": TIdentifier<PAnnotation>
    readonly "as": null | TIdentifier<PAnnotation>
}

export type TSwitchClause<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "type": | ["case", {
        readonly "expression": TExpression<PAnnotation>
        readonly "statements": TStatements<PAnnotation>
    }]
    | ["default", {
        readonly "statements": TStatements<PAnnotation>
    }]
}

export type TImportClause<PAnnotation> =
    | ["named", pt.Array<TImportName<PAnnotation>>]
    | ["namespace", TIdentifier<PAnnotation>]

export type TTypeAlias<PAnnotation> = {
    readonly "details": Annotation
    readonly "modifiers": TModifiers<PAnnotation>
    readonly "name": TIdentifier<PAnnotation>
    readonly "typeParameters": TTypeParameters<PAnnotation>
    readonly "type": TType<PAnnotation>

}

export type TImportStatement<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "clause": TImportClause<PAnnotation>
    readonly "file": TStringLiteral<PAnnotation>
}

export type TStatement<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["block", TBlock<PAnnotation>]
    | ["break", {}]
    | ["export", {
        readonly "file": TStringLiteral<PAnnotation>
    }]
    | ["expression", TExpression<PAnnotation>]
    | ["function", {
        readonly "modifiers": TModifiers<PAnnotation>
        readonly "name": TIdentifier<PAnnotation>
        readonly "definition": TFunctionDefinition<PAnnotation>
        readonly "block": null | TBlock<PAnnotation>
    }]
    | ["if", {
        readonly "expression": TExpression<PAnnotation>
        readonly "thenStatement": TStatement<PAnnotation>
        readonly "elseStatement": null | TStatement<PAnnotation>
    }]
    | ["import", TImportStatement<PAnnotation>]
    | ["interface", {
        readonly "modifiers": TModifiers<PAnnotation>
        readonly "name": TIdentifier<PAnnotation>
        readonly "typeParameters": TTypeParameters<PAnnotation>
        readonly "signatures": pt.Array<TTypeSignature<PAnnotation>>
    }]
    | ["return", null | TExpression<PAnnotation>]
    | ["switch", {
        readonly "expression": TExpression<PAnnotation>
        readonly "clauses": pt.Array<TSwitchClause<PAnnotation>>
    }]
    | ["typeAlias", TTypeAlias<PAnnotation>]
    | ["variable", {
        readonly "modifiers": TModifiers<PAnnotation>
        readonly "list": TVariableDeclarationList<PAnnotation>
    }]
}

export type TStatements<PAnnotation> = pt.Array<TStatement<PAnnotation>>

export type TBlock<PAnnotation> = {
    readonly "statements": TStatements<PAnnotation>
}

export type TTypeParameters<PAnnotation> = pt.Array<TIdentifier<PAnnotation>>

export type TParameter<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "name": TIdentifier<PAnnotation>
    readonly "optional": boolean
    readonly "type": null | TType<PAnnotation>
}

export type TLiteral<PAnnotation> =
    | ["null", {}]
    | ["string", TStringLiteral<PAnnotation>]

export type TType<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["array", TType<PAnnotation>]
    | ["booleanKeyword", {}]
    | ["function", TFunctionDefinition<PAnnotation>]
    | ["literal", TLiteral<PAnnotation>]
    | ["numberKeyword", {}]
    | ["optional", TType<PAnnotation>]
    | ["parenthesized", TType<PAnnotation>]
    | ["stringKeyword", {}]
    | ["tuple", pt.Array<TType<PAnnotation>>]
    | ["typeLiteral", pt.Array<TTypeSignature<PAnnotation>>]
    | ["typeReference", {
        readonly "identification":
        | ["identifier", TIdentifier<PAnnotation>]
        | ["qualifiedName", {
            readonly "context": TIdentifier<PAnnotation>
            readonly "type": TIdentifier<PAnnotation>
        }]
        readonly "parameters": pt.Array<TType<PAnnotation>>
    }]
    | ["undefinedKeyword", {}]
    | ["union", pt.Array<TType<PAnnotation>>]
    | ["voidKeyword", {}]
}

export type TIdentifier<PAnnotation> = TAnnotatedString<PAnnotation>
export type TStringLiteral<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "strippedValue": string
    readonly "wrapper": string
}

export type TNumericLiteral<PAnnotation> = TAnnotatedString<PAnnotation>
export type TPropertyAssignment<PAnnotation> = {
    readonly "name": TIdentifierOrStringLiteral<PAnnotation>
    readonly "expression": TExpression<PAnnotation>
}

export type TIdentifierOrStringLiteral<PAnnotation> =
    | ["identifier", TIdentifier<PAnnotation>]
    | ["stringLiteral", TStringLiteral<PAnnotation>]

export type TSpan<PAnnotation> = {
    readonly "expression": TExpression<PAnnotation>
    readonly "suffix":
    | ["middle", TAnnotatedString<PAnnotation>]
    | ["tail", TAnnotatedString<PAnnotation>]
}

export type TExpression<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["arrayLiteral", {
        readonly "expressions": pt.Array<TExpression<PAnnotation>>
    }]
    | ["arrowFunction", {
        readonly "definition": TFunctionDefinition<PAnnotation>
        readonly "implementation":
        | ["block", TBlock<PAnnotation>]
        | ["expression", TExpression<PAnnotation>]
    }]
    | ["binary", {
        readonly "leftHandSide": TExpression<PAnnotation>
        readonly "operator":
        | ["equals", {}]
        | ["equalsEqualsEquals", {}]
        | ["exclamationEqualsEqualsEquals", {}]
        readonly "rightHandSide": TExpression<PAnnotation>
    }]
    | ["call", {
        readonly "function": TExpression<PAnnotation>
        readonly "typeArguments": pt.Array<TType<PAnnotation>>
        readonly "arguments": pt.Array<TExpression<PAnnotation>>
    }]
    | ["conditional", {
        readonly "test": TExpression<PAnnotation>
        readonly "ifExpression": TExpression<PAnnotation>
        readonly "elseExpression": TExpression<PAnnotation>
    }]
    | ["elementAccess", {
        readonly "array": TExpression<PAnnotation>
        readonly "element": TExpression<PAnnotation>
    }]
    | ["false", {}]
    | ["identifier", TIdentifier<PAnnotation>]
    | ["noSubstitutionTemplateLiteral", {}]
    | ["nullKeyword", {}]
    | ["numericLiteral", TNumericLiteral<PAnnotation>]
    | ["objectLiteral", {
        readonly "properties": pt.Array<TPropertyAssignment<PAnnotation>>
    }]
    | ["parenthesizedExpression", TExpression<PAnnotation>]
    | ["prefixUnary", TExpression<PAnnotation>]
    | ["propertyAccess", {
        readonly "object": TExpression<PAnnotation>
        readonly "property": TExpression<PAnnotation>
    }]
    | ["stringLiteral", TStringLiteral<PAnnotation>]
    | ["template", {
        readonly "head": TAnnotatedString<PAnnotation>
        readonly "spans": pt.Array<TSpan<PAnnotation>>
    }]
    | ["true", {}]
}

export type TFunctionDefinition<PAnnotation> = {
    readonly "typeParameters": TTypeParameters<PAnnotation>
    readonly "parameters": pt.Array<TParameter<PAnnotation>>
    readonly "returnType": null | TType<PAnnotation>
}

export type TModifier =
    | ["export", {}]
    | ["readonly", {}]

export type TModifiers<PAnnotation> = pt.Array<TModifier>

export type TSourceFile<PAnnotation> = {
    readonly "statements": TStatements<PAnnotation>
}

export type TTypeSignature<PAnnotation> = {
    readonly "annotation": Annotation
    readonly "type":
    | ["index", {
        readonly "modifiers": TModifiers<PAnnotation>
        readonly "parameter": TParameter<PAnnotation>
        readonly "type": null | TType<PAnnotation>
    }]
    // | ["method", {
    //     readonly "name": TIdentifier<PAnnotation>,
    //     readonly "definition": TFunctionDefinition<PAnnotation>
    // }]
    | ["property", {
        readonly "modifiers": TModifiers<PAnnotation>
        readonly "name": TIdentifierOrStringLiteral<PAnnotation>
        readonly "optional": boolean
        readonly "type": null | TType<PAnnotation>
    }]
}
export type TVariableDeclaration<PAnnotation> = {
    readonly "name": TIdentifier<PAnnotation>
    readonly "type": null | TType<PAnnotation>
    readonly "expression": null | TExpression<PAnnotation>
}
export type TVariableDeclarationList<PAnnotation> = {
    readonly "declarations": pt.Array<TVariableDeclaration<PAnnotation>>
}