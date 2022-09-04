import * as pt from "pareto-core-types"
import * as types from "../types/ts_api"

export type IVisitor = {
    readonly "$block/*Block"?: {
        readonly "begin": ($: types.TNGblock$) => void,
        readonly "end": ($: types.TNGblock$) => void,
    }
    readonly "$expression/?arrayLiteral/*ArrayLiteralExpression"?: {
        readonly "begin": ($: types.TNGexpression_arrayLiteral$) => void,
        readonly "end": ($: types.TNGexpression_arrayLiteral$) => void,
    }
    readonly "$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"?: ($: types.TNGexpression_arrowFunction$_equalsGreaterThan$) => void
    readonly "$expression/?arrowFunction/*ArrowFunction"?: {
        readonly "begin": ($: types.TNGexpression_arrowFunction$) => void,
        readonly "end": ($: types.TNGexpression_arrowFunction$) => void,
    }
    readonly "$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"?: ($: types.TNGexpression_binary$_operator_equals$) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken"?: ($: types.TNGexpression_binary$_operator_equalsEqualsEquals$) => void
    readonly "$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken"?: ($: types.TNGexpression_binary$_operator_exclamationEqualsEquals$) => void
    readonly "$expression/?binary/*BinaryExpression"?: {
        readonly "begin": ($: types.TNGexpression_binary$) => void,
        readonly "end": ($: types.TNGexpression_binary$) => void,
    }
    readonly "$expression/?call/*CallExpression"?: {
        readonly "begin": ($: types.TNGexpression_call$) => void,
        readonly "end": ($: types.TNGexpression_call$) => void,
    }
    readonly "$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"?: ($: types.TNGexpression_conditional$_questionToken$) => void
    readonly "$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"?: ($: types.TNGexpression_conditional$_colonToken$) => void
    readonly "$expression/?conditional/*ConditionalExpression"?: {
        readonly "begin": ($: types.TNGexpression_conditional$) => void,
        readonly "end": ($: types.TNGexpression_conditional$) => void,
    }
    readonly "$expression/?elementAccess/*ElementAccessExpression"?: {
        readonly "begin": ($: types.TNGexpression_elementAccess$) => void,
        readonly "end": ($: types.TNGexpression_elementAccess$) => void,
    }
    readonly "$expression/?false/*FalseKeyword"?: ($: types.TNGexpression_false$) => void
    readonly "$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"?: ($: types.TNGexpression_noSubstitutionTemplateLiteral$) => void
    readonly "$expression/?nullKeyword/*NullKeyword"?: ($: types.TNGexpression_nullKeyword$) => void
    readonly "$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment"?: {
        readonly "begin": ($: types.TNGexpression_objectLiteral$_propertyAssignment$) => void,
        readonly "end": ($: types.TNGexpression_objectLiteral$_propertyAssignment$) => void,
    }
    readonly "$expression/?objectLiteral/*ObjectLiteralExpression"?: {
        readonly "begin": ($: types.TNGexpression_objectLiteral$) => void,
        readonly "end": ($: types.TNGexpression_objectLiteral$) => void,
    }
    readonly "$expression/?parenthesizedExpression/*ParenthesizedExpression"?: {
        readonly "begin": ($: types.TNGexpression_parenthesizedExpression$) => void,
        readonly "end": ($: types.TNGexpression_parenthesizedExpression$) => void,
    }
    readonly "$expression/?prefixUnary/*PrefixUnaryExpression"?: {
        readonly "begin": ($: types.TNGexpression_prefixUnary$) => void,
        readonly "end": ($: types.TNGexpression_prefixUnary$) => void,
    }
    readonly "$expression/?propertyAccess/*PropertyAccessExpression"?: {
        readonly "begin": ($: types.TNGexpression_propertyAccess$) => void,
        readonly "end": ($: types.TNGexpression_propertyAccess$) => void,
    }
    readonly "$expression/?template/*TemplateExpression/.head/*TemplateHead"?: ($: types.TNGexpression_template$_head$) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"?: ($: types.TNGexpression_template$_spans$_x_middle$) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"?: ($: types.TNGexpression_template$_spans$_x_tail$) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan"?: {
        readonly "begin": ($: types.TNGexpression_template$_spans$) => void,
        readonly "end": ($: types.TNGexpression_template$_spans$) => void,
    }
    readonly "$expression/?template/*TemplateExpression"?: {
        readonly "begin": ($: types.TNGexpression_template$) => void,
        readonly "end": ($: types.TNGexpression_template$) => void,
    }
    readonly "$expression/?true/*TrueKeyword"?: ($: types.TNGexpression_true$) => void
    readonly "$identifier/*Identifier"?: ($: types.TNGidentifier$) => void
    readonly "$modifiers/.modifiers/?export/*ExportKeyword"?: ($: types.TNGmodifiers_modifiers_export$) => void
    readonly "$modifiers/.modifiers/?readonly/*ReadonlyKeyword"?: ($: types.TNGmodifiers_modifiers_readonly$) => void
    readonly "$numericLiteral/*NumericLiteral"?: ($: types.TNGnumericLiteral$) => void
    readonly "$parameter/*Parameter/.questionToken/*QuestionToken"?: ($: types.TNGparameter$_questionToken$) => void
    readonly "$parameter/*Parameter"?: {
        readonly "begin": ($: types.TNGparameter$) => void,
        readonly "end": ($: types.TNGparameter$) => void,
    }
    readonly "$statement/?break/*BreakStatement"?: ($: types.TNGstatement_break$) => void
    readonly "$statement/?export/*ExportDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_export$) => void,
        readonly "end": ($: types.TNGstatement_export$) => void,
    }
    readonly "$statement/?expression/*ExpressionStatement"?: {
        readonly "begin": ($: types.TNGstatement_expression$) => void,
        readonly "end": ($: types.TNGstatement_expression$) => void,
    }
    readonly "$statement/?function/*FunctionDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_function$) => void,
        readonly "end": ($: types.TNGstatement_function$) => void,
    }
    readonly "$statement/?if/*IfStatement"?: {
        readonly "begin": ($: types.TNGstatement_if$) => void,
        readonly "end": ($: types.TNGstatement_if$) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$_named$$) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$_named$$) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$_named$) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$_named$) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$_namespace$) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$_namespace$) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$) => void,
    }
    readonly "$statement/?import/*ImportDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_import$) => void,
        readonly "end": ($: types.TNGstatement_import$) => void,
    }
    readonly "$statement/?interface/*InterfaceDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_interface$) => void,
        readonly "end": ($: types.TNGstatement_interface$) => void,
    }
    readonly "$statement/?return/*ReturnStatement"?: {
        readonly "begin": ($: types.TNGstatement_return$) => void,
        readonly "end": ($: types.TNGstatement_return$) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"?: {
        readonly "begin": ($: types.TNGstatement_switch$_caseBlock$_case$) => void,
        readonly "end": ($: types.TNGstatement_switch$_caseBlock$_case$) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"?: {
        readonly "begin": ($: types.TNGstatement_switch$_caseBlock$_default$) => void,
        readonly "end": ($: types.TNGstatement_switch$_caseBlock$_default$) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"?: {
        readonly "begin": ($: types.TNGstatement_switch$_caseBlock$) => void,
        readonly "end": ($: types.TNGstatement_switch$_caseBlock$) => void,
    }
    readonly "$statement/?switch/*SwitchStatement"?: {
        readonly "begin": ($: types.TNGstatement_switch$) => void,
        readonly "end": ($: types.TNGstatement_switch$) => void,
    }
    readonly "$statement/?typeAlias/*TypeAliasDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_typeAlias$) => void,
        readonly "end": ($: types.TNGstatement_typeAlias$) => void,
    }
    readonly "$statement/?variable/*VariableStatement"?: {
        readonly "begin": ($: types.TNGstatement_variable$) => void,
        readonly "end": ($: types.TNGstatement_variable$) => void,
    }
    readonly "$stringLiteral/*StringLiteral"?: ($: types.TNGstringLiteral$) => void
    readonly "$type/?array/*ArrayType"?: {
        readonly "begin": ($: types.TNGtype_array$) => void,
        readonly "end": ($: types.TNGtype_array$) => void,
    }
    readonly "$type/?booleanKeyword/*BooleanKeyword"?: ($: types.TNGtype_booleanKeyword$) => void
    readonly "$type/?function/*FunctionType"?: {
        readonly "begin": ($: types.TNGtype_function$) => void,
        readonly "end": ($: types.TNGtype_function$) => void,
    }
    readonly "$type/?literal/*LiteralType/?null/*NullKeyword"?: ($: types.TNGtype_literal$_null$) => void
    readonly "$type/?literal/*LiteralType"?: {
        readonly "begin": ($: types.TNGtype_literal$) => void,
        readonly "end": ($: types.TNGtype_literal$) => void,
    }
    readonly "$type/?numberKeyword/*NumberKeyword"?: ($: types.TNGtype_numberKeyword$) => void
    readonly "$type/?optional/*OptionalType"?: {
        readonly "begin": ($: types.TNGtype_optional$) => void,
        readonly "end": ($: types.TNGtype_optional$) => void,
    }
    readonly "$type/?parenthesized/*ParenthesizedType"?: {
        readonly "begin": ($: types.TNGtype_parenthesized$) => void,
        readonly "end": ($: types.TNGtype_parenthesized$) => void,
    }
    readonly "$type/?stringKeyword/*StringKeyword"?: ($: types.TNGtype_stringKeyword$) => void
    readonly "$type/?tuple/*TupleType"?: {
        readonly "begin": ($: types.TNGtype_tuple$) => void,
        readonly "end": ($: types.TNGtype_tuple$) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: types.TNGtype_typeLiteral$) => void,
        readonly "end": ($: types.TNGtype_typeLiteral$) => void,
    }
    readonly "$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"?: {
        readonly "begin": ($: types.TNGtype_typeReference$_x_qualifiedName$) => void,
        readonly "end": ($: types.TNGtype_typeReference$_x_qualifiedName$) => void,
    }
    readonly "$type/?typeReference/*TypeReference"?: {
        readonly "begin": ($: types.TNGtype_typeReference$) => void,
        readonly "end": ($: types.TNGtype_typeReference$) => void,
    }
    readonly "$type/?undefinedKeyword/*UndefinedKeyword"?: ($: types.TNGtype_undefinedKeyword$) => void
    readonly "$type/?union/*UnionType"?: {
        readonly "begin": ($: types.TNGtype_union$) => void,
        readonly "end": ($: types.TNGtype_union$) => void,
    }
    readonly "$type/?voidKeyword/*VoidKeyword"?: ($: types.TNGtype_voidKeyword$) => void
    readonly "$typeParameters/.typeParameters/*TypeParameter"?: {
        readonly "begin": ($: types.TNGtypeParameters_typeParameters$) => void,
        readonly "end": ($: types.TNGtypeParameters_typeParameters$) => void,
    }
    readonly "$typeSignature/?index/*IndexSignature"?: {
        readonly "begin": ($: types.TNGtypeSignature_index$) => void,
        readonly "end": ($: types.TNGtypeSignature_index$) => void,
    }
    readonly "$typeSignature/?method/*MethodSignature"?: {
        readonly "begin": ($: types.TNGtypeSignature_method$) => void,
        readonly "end": ($: types.TNGtypeSignature_method$) => void,
    }
    readonly "$typeSignature/?property/*PropertySignature/.questionToken/*QuestionToken"?: ($: types.TNGtypeSignature_property$_questionToken$) => void
    readonly "$typeSignature/?property/*PropertySignature"?: {
        readonly "begin": ($: types.TNGtypeSignature_property$) => void,
        readonly "end": ($: types.TNGtypeSignature_property$) => void,
    }
    readonly "$variableDeclaration/*VariableDeclaration"?: {
        readonly "begin": ($: types.TNGvariableDeclaration$) => void,
        readonly "end": ($: types.TNGvariableDeclaration$) => void,
    }
    readonly "$variableDeclarationList/*VariableDeclarationList"?: {
        readonly "begin": ($: types.TNGvariableDeclarationList$) => void,
        readonly "end": ($: types.TNGvariableDeclarationList$) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: types.TNroot_endOfFile$) => void
    readonly ""?: {
        readonly "begin": ($: types.TNroot) => void,
        readonly "end": ($: types.TNroot) => void,
    }
}