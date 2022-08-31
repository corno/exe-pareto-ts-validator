import * as pt from "pareto-core-types"
import * as types from "../types/ts_api"

export type IVisitor<Annotation> = {
    readonly "$variableDeclarationList/*VariableDeclarationList"?: {
        readonly "begin": ($: types.TNGvariableDeclarationList$<Annotation>) => void,
        readonly "end": ($: types.TNGvariableDeclarationList$<Annotation>) => void,
    }
    readonly "$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?bindingElement/*BindingElement"?: {
        readonly "begin": ($: types.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>) => void,
        readonly "end": ($: types.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>) => void,
    }
    readonly "$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern/?omitted/*OmittedExpression"?: ($: types.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$<Annotation>) => void
    readonly "$variableDeclaration/*VariableDeclaration/.nameOrArrayBinding/?arrayBindingPattern/*ArrayBindingPattern"?: {
        readonly "begin": ($: types.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>) => void,
        readonly "end": ($: types.TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>) => void,
    }
    readonly "$variableDeclaration/*VariableDeclaration"?: {
        readonly "begin": ($: types.TNGvariableDeclaration$<Annotation>) => void,
        readonly "end": ($: types.TNGvariableDeclaration$<Annotation>) => void,
    }
    readonly "$typeSignature/?property/*PropertySignature/.quesionToken/*QuestionToken"?: ($: types.TNGtypeSignature_property$_quesionToken$<Annotation>) => void
    readonly "$typeSignature/?property/*PropertySignature"?: {
        readonly "begin": ($: types.TNGtypeSignature_property$<Annotation>) => void,
        readonly "end": ($: types.TNGtypeSignature_property$<Annotation>) => void,
    }
    readonly "$typeSignature/?method/*MethodSignature"?: {
        readonly "begin": ($: types.TNGtypeSignature_method$<Annotation>) => void,
        readonly "end": ($: types.TNGtypeSignature_method$<Annotation>) => void,
    }
    readonly "$typeParameter/*TypeParameter"?: {
        readonly "begin": ($: types.TNGtypeParameter$<Annotation>) => void,
        readonly "end": ($: types.TNGtypeParameter$<Annotation>) => void,
    }
    readonly "$type/?void/*VoidKeyword"?: ($: types.TNGtype_void$<Annotation>) => void
    readonly "$type/?union/*UnionType"?: {
        readonly "begin": ($: types.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_union$<Annotation>) => void,
    }
    readonly "$type/?undefined/*UndefinedKeyword"?: ($: types.TNGtype_undefined$<Annotation>) => void
    readonly "$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName"?: {
        readonly "begin": ($: types.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_typeReference$_x_qualifiedName$<Annotation>) => void,
    }
    readonly "$type/?typeReference/*TypeReference"?: {
        readonly "begin": ($: types.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_typeReference$<Annotation>) => void,
    }
    readonly "$type/?string/*StringKeyword"?: ($: types.TNGtype_string$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: types.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_typeLiteral$<Annotation>) => void,
    }
    readonly "$type/?tuple/*TupleType"?: {
        readonly "begin": ($: types.TNGtype_tuple$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_tuple$<Annotation>) => void,
    }
    readonly "$type/?optional/*OptionalType"?: {
        readonly "begin": ($: types.TNGtype_optional$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_optional$<Annotation>) => void,
    }
    readonly "$type/?number/*NumberKeyword"?: ($: types.TNGtype_number$<Annotation>) => void
    readonly "$type/?parenthesized/*ParenthesizedType"?: {
        readonly "begin": ($: types.TNGtype_parenthesized$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_parenthesized$<Annotation>) => void,
    }
    readonly "$type/?literal/*LiteralType/?null/*NullKeyword"?: ($: types.TNGtype_literal$_null$<Annotation>) => void
    readonly "$type/?literal/*LiteralType"?: {
        readonly "begin": ($: types.TNGtype_literal$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_literal$<Annotation>) => void,
    }
    readonly "$type/?function/*FunctionType"?: {
        readonly "begin": ($: types.TNGtype_function$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_function$<Annotation>) => void,
    }
    readonly "$type/?boolean/*BooleanKeyword"?: ($: types.TNGtype_boolean$<Annotation>) => void
    readonly "$type/?array/*ArrayType"?: {
        readonly "begin": ($: types.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: types.TNGtype_array$<Annotation>) => void,
    }
    readonly "$stringLiteral/*StringLiteral"?: ($: types.TNGstringLiteral$<Annotation>) => void
    readonly "$statement/?variable/*VariableStatement"?: {
        readonly "begin": ($: types.TNGstatement_variable$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_variable$<Annotation>) => void,
    }
    readonly "$statement/?typeAlias/*TypeAliasDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_typeAlias$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_typeAlias$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause"?: {
        readonly "begin": ($: types.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_switch$_caseBlock$_default$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause"?: {
        readonly "begin": ($: types.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_switch$_caseBlock$_case$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock"?: {
        readonly "begin": ($: types.TNGstatement_switch$_caseBlock$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_switch$_caseBlock$<Annotation>) => void,
    }
    readonly "$statement/?switch/*SwitchStatement"?: {
        readonly "begin": ($: types.TNGstatement_switch$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_switch$<Annotation>) => void,
    }
    readonly "$statement/?return/*ReturnStatement"?: {
        readonly "begin": ($: types.TNGstatement_return$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_return$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$_named$$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$_named$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$_named$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$_namespace$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration/.clause/*ImportClause"?: {
        readonly "begin": ($: types.TNGstatement_import$_clause$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_import$_clause$<Annotation>) => void,
    }
    readonly "$statement/?import/*ImportDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_import$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_import$<Annotation>) => void,
    }
    readonly "$statement/?if/*IfStatement"?: {
        readonly "begin": ($: types.TNGstatement_if$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_if$<Annotation>) => void,
    }
    readonly "$statement/?function/*FunctionDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_function$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_function$<Annotation>) => void,
    }
    readonly "$statement/?expression/*ExpressionStatement"?: {
        readonly "begin": ($: types.TNGstatement_expression$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_expression$<Annotation>) => void,
    }
    readonly "$statement/?export/*ExportDeclaration"?: {
        readonly "begin": ($: types.TNGstatement_export$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_export$<Annotation>) => void,
    }
    readonly "$statement/?break/*BreakStatement"?: {
        readonly "begin": ($: types.TNGstatement_break$<Annotation>) => void,
        readonly "end": ($: types.TNGstatement_break$<Annotation>) => void,
    }
    readonly "$parameter/*Parameter/.questionToken/*QuestionToken"?: ($: types.TNGparameter$_questionToken$<Annotation>) => void
    readonly "$parameter/*Parameter"?: {
        readonly "begin": ($: types.TNGparameter$<Annotation>) => void,
        readonly "end": ($: types.TNGparameter$<Annotation>) => void,
    }
    readonly "$numericLiteral/*NumericLiteral"?: ($: types.TNGnumericLiteral$<Annotation>) => void
    readonly "$modifier/?readonly/*ReadonlyKeyword"?: ($: types.TNGmodifier_readonly$<Annotation>) => void
    readonly "$modifier/?export/*ExportKeyword"?: ($: types.TNGmodifier_export$<Annotation>) => void
    readonly "$identifier/*Identifier"?: ($: types.TNGidentifier$<Annotation>) => void
    readonly "$expression/?true/*TrueKeyword"?: ($: types.TNGexpression_true$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.head/*TemplateHead"?: ($: types.TNGexpression_template$_head$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail"?: ($: types.TNGexpression_template$_spans$_x_tail$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle"?: ($: types.TNGexpression_template$_spans$_x_middle$<Annotation>) => void
    readonly "$expression/?template/*TemplateExpression/.spans/*TemplateSpan"?: {
        readonly "begin": ($: types.TNGexpression_template$_spans$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_template$_spans$<Annotation>) => void,
    }
    readonly "$expression/?template/*TemplateExpression"?: {
        readonly "begin": ($: types.TNGexpression_template$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_template$<Annotation>) => void,
    }
    readonly "$expression/?propertyAccess/*PropertyAccessExpression"?: {
        readonly "begin": ($: types.TNGexpression_propertyAccess$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_propertyAccess$<Annotation>) => void,
    }
    readonly "$expression/?prefixUnary/*PrefixUnaryExpression"?: {
        readonly "begin": ($: types.TNGexpression_prefixUnary$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_prefixUnary$<Annotation>) => void,
    }
    readonly "$expression/?parenthesizedExpression/*ParenthesizedExpression"?: {
        readonly "begin": ($: types.TNGexpression_parenthesizedExpression$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_parenthesizedExpression$<Annotation>) => void,
    }
    readonly "$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment"?: {
        readonly "begin": ($: types.TNGexpression_objectLiteral$_propertyAssignment$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_objectLiteral$_propertyAssignment$<Annotation>) => void,
    }
    readonly "$expression/?objectLiteral/*ObjectLiteralExpression"?: {
        readonly "begin": ($: types.TNGexpression_objectLiteral$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_objectLiteral$<Annotation>) => void,
    }
    readonly "$expression/?nullKeyword/*NullKeyword"?: ($: types.TNGexpression_nullKeyword$<Annotation>) => void
    readonly "$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral"?: ($: types.TNGexpression_noSubstitutionTemplateLiteral$<Annotation>) => void
    readonly "$expression/?false/*FalseKeyword"?: ($: types.TNGexpression_false$<Annotation>) => void
    readonly "$expression/?elementAccess/*ElementAccessExpression"?: {
        readonly "begin": ($: types.TNGexpression_elementAccess$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_elementAccess$<Annotation>) => void,
    }
    readonly "$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken"?: ($: types.TNGexpression_conditional$_questionToken$<Annotation>) => void
    readonly "$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken"?: ($: types.TNGexpression_conditional$_colonToken$<Annotation>) => void
    readonly "$expression/?conditional/*ConditionalExpression"?: {
        readonly "begin": ($: types.TNGexpression_conditional$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_conditional$<Annotation>) => void,
    }
    readonly "$expression/?call/*CallExpression"?: {
        readonly "begin": ($: types.TNGexpression_call$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_call$<Annotation>) => void,
    }
    readonly "$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken"?: ($: types.TNGexpression_binary$_operator_equals$<Annotation>) => void
    readonly "$expression/?binary/*BinaryExpression"?: {
        readonly "begin": ($: types.TNGexpression_binary$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_binary$<Annotation>) => void,
    }
    readonly "$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"?: ($: types.TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>) => void
    readonly "$expression/?arrowFunction/*ArrowFunction"?: {
        readonly "begin": ($: types.TNGexpression_arrowFunction$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_arrowFunction$<Annotation>) => void,
    }
    readonly "$expression/?arrayLiteral/*ArrayLiteralExpression"?: {
        readonly "begin": ($: types.TNGexpression_arrayLiteral$<Annotation>) => void,
        readonly "end": ($: types.TNGexpression_arrayLiteral$<Annotation>) => void,
    }
    readonly "$block/*Block"?: {
        readonly "begin": ($: types.TNGblock$<Annotation>) => void,
        readonly "end": ($: types.TNGblock$<Annotation>) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: types.TNroot_endOfFile$<Annotation>) => void
    readonly ""?: {
        readonly "begin": ($: types.TNroot<Annotation>) => void,
        readonly "end": ($: types.TNroot<Annotation>) => void,
    }
}