import * as pt from "pareto-core-types"

export type TAnnotatedString = {
    myValue: string
}

export type ImportName = {
    name: Identifier
    as: null | Identifier
}

export type SwitchClause =
    | ["case", {
        expression: Expression
        statements: Statements
    }]
    | ["default", {
        statements: Statements
    }]

export type ImportClause =
    | ["named", pt.Array<ImportName>]
    | ["namespace", Identifier]

export type Statement =
    | ["block", Block]
    | ["break", {}]
    | ["export", {
        //??? WTF
        stringLiteral: StringLiteral
    }]
    | ["expression", Expression]
    | ["function", {
        modifiers: Modifiers
        name: Identifier
        definition: FunctionDefinition
        block: Block | null
    }]
    | ["if", {
        expression: Expression
        thenStatement: Statement
        elseStatement: null | Statement
    }]
    | ["import", {
        clause: ImportClause
        file: StringLiteral
    }]
    | ["interface", {
        modifiers: Modifiers
        name: Identifier
        typeParameters: TypeParameters
        signatures: pt.Array<TypeSignature>
    }]
    | ["return", null | Expression]
    | ["switch", {
        expression: Expression
        clauses: pt.Array<SwitchClause>
    }]
    | ["typeAlias", {
        modifiers: Modifiers
        name: Identifier
        typeParameters: TypeParameters
        type: Type

    }]
    | ["variable", {
        modifiers: Modifiers
        list: VariableDeclarationList
    }]

export type Statements = pt.Array<Statement>

export type Block = {
    statements: Statements
}

export type TypeParameters = pt.Array<Identifier>
export type Parameter = {
    name: Identifier
    optional: boolean
    type: Type | null
}

export type Literal =
    | ["null", {}]
    | ["string", StringLiteral]

export type Type =
    | ["array", Type]
    | ["booleanKeyword", {}]
    | ["function", FunctionDefinition]
    | ["literal", Literal]
    | ["numberKeyword", {}]
    | ["optional", Type]
    | ["parenthesized", Type]
    | ["stringKeyword", {}]
    | ["tuple", pt.Array<Type>]
    | ["typeLiteral", pt.Array<TypeSignature>]
    | ["typeReference", {
        "identification":
        | ["identifier", Identifier]
        | ["qualifiedName", {
            "context": Identifier
            "type": Identifier
        }]
        parameters: pt.Array<Type>
    }]
    | ["undefinedKeyword", {}]
    | ["union", pt.Array<Type>]
    | ["voidKeyword", {}]

export type Identifier = TAnnotatedString
export type StringLiteral = TAnnotatedString

export type NumericLiteral = TAnnotatedString
export type PropertyAssignment = {
    name: IdentifierOrStringLiteral
    expression: Expression
}

export type IdentifierOrStringLiteral =
    | ["identifier", Identifier]
    | ["stringLiteral", StringLiteral]

export type Span = {
    expression: Expression
    suffix:
    | ["middle", TAnnotatedString]
    | ["tail", TAnnotatedString]
}

export type Expression =
    | ["arrayLiteral", {
        expressions: pt.Array<Expression>
    }]
    | ["arrowFunction", {
        definition: FunctionDefinition
        implementation:
        | ["block", Block]
        | ["expression", Expression]
    }]
    | ["binary", {
        leftHandSide: Expression
        operator:
        | ["equals", {}]
        | ["equalsEqualsEquals", {}]
        rightHandSide: Expression
    }]
    | ["call", {
        "function": Expression
        typeArguments: pt.Array<Type>
        arguments: pt.Array<Expression>
    }]
    | ["conditional", {
        test: Expression
        ifExpression: Expression
        elseExpression: Expression
    }]
    | ["elementAccess", {
        array: Expression
        element: Expression
    }]
    | ["false", {}]
    | ["identifier", Identifier]
    | ["noSubstitutionTemplateLiteral", {}]
    | ["nullKeyword", {}]
    | ["numericLiteral", NumericLiteral]
    | ["objectLiteral", {
        properties: pt.Array<PropertyAssignment>
    }]
    | ["parenthesizedExpression", Expression]
    | ["prefixUnary", Expression]
    | ["propertyAccess", {
        object: Expression
        property: Expression
    }]
    | ["stringLiteral", StringLiteral]
    | ["template", {
        head: TAnnotatedString
        spans: pt.Array<Span>
    }]
    | ["true", {}]

export type FunctionDefinition = {
    typeParameters: TypeParameters
    parameters: pt.Array<Parameter>
    returnType: null | Type
}

export type Modifier =
    | ["export", {}]
    | ["readonly", {}]

export type Modifiers = pt.Array<Modifier>

export type SourceFile = {
    statements: Statements
}

export type TypeSignature =
    | ["index", {
        modifiers: Modifiers
        parameter: Parameter
        type: Type | null
    }]
    | ["method", {
        name: Identifier,
        definition: FunctionDefinition
    }]
    | ["property", {
        modifiers: Modifiers
        name: IdentifierOrStringLiteral
        optional: boolean
        type: Type | null
    }]
export type VariableDeclaration = {
    name: Identifier
    type: Type | null
    expression: Expression | null
}
export type VariableDeclarationList = {
    declarations: pt.Array<VariableDeclaration>
}