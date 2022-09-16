import * as pt from "pareto-core-types"
import * as api from "../../../../interface"

export function createDefaultVisistor(
    $i: {
        log: ($: string) => void
    }
): api.IVisitor {
    return {
        "$block/*Block": {
            begin: ($) => { $i.log("$block/*Block begin") },
            end: ($) => { $i.log("$block/*Block end") },
        },
        "$expression/?arrayLiteral/*ArrayLiteralExpression": {
            begin: ($) => { $i.log("$expression/?arrayLiteral/*ArrayLiteralExpression begin") },
            end: ($) => { $i.log("$expression/?arrayLiteral/*ArrayLiteralExpression end") },
        },
        "$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken": ($) => { $i.log("$expression/?arrowFunction/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken") },
        "$expression/?arrowFunction/*ArrowFunction": {
            begin: ($) => { $i.log("$expression/?arrowFunction/*ArrowFunction begin") },
            end: ($) => { $i.log("$expression/?arrowFunction/*ArrowFunction end") },
        },
        "$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken": ($) => { $i.log("$expression/?binary/*BinaryExpression/.operator/?equals/*EqualsToken") },
        "$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken": ($) => { $i.log("$expression/?binary/*BinaryExpression/.operator/?equalsEqualsEquals/*EqualsEqualsEqualsToken") },
        "$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken": ($) => { $i.log("$expression/?binary/*BinaryExpression/.operator/?exclamationEqualsEquals/*ExclamationEqualsEqualsToken") },
        "$expression/?binary/*BinaryExpression": {
            begin: ($) => { $i.log("$expression/?binary/*BinaryExpression begin") },
            end: ($) => { $i.log("$expression/?binary/*BinaryExpression end") },
        },
        "$expression/?call/*CallExpression": {
            begin: ($) => { $i.log("$expression/?call/*CallExpression begin") },
            end: ($) => { $i.log("$expression/?call/*CallExpression end") },
        },
        "$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken": ($) => { $i.log("$expression/?conditional/*ConditionalExpression/.questionToken/*QuestionToken") },
        "$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken": ($) => { $i.log("$expression/?conditional/*ConditionalExpression/.colonToken/*ColonToken") },
        "$expression/?conditional/*ConditionalExpression": {
            begin: ($) => { $i.log("$expression/?conditional/*ConditionalExpression begin") },
            end: ($) => { $i.log("$expression/?conditional/*ConditionalExpression end") },
        },
        "$expression/?elementAccess/*ElementAccessExpression": {
            begin: ($) => { $i.log("$expression/?elementAccess/*ElementAccessExpression begin") },
            end: ($) => { $i.log("$expression/?elementAccess/*ElementAccessExpression end") },
        },
        "$expression/?false/*FalseKeyword": ($) => { $i.log("$expression/?false/*FalseKeyword") },
        "$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral": ($) => { $i.log("$expression/?noSubstitutionTemplateLiteral/*NoSubstitutionTemplateLiteral") },
        "$expression/?nullKeyword/*NullKeyword": ($) => { $i.log("$expression/?nullKeyword/*NullKeyword") },
        "$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment": {
            begin: ($) => { $i.log("$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment begin") },
            end: ($) => { $i.log("$expression/?objectLiteral/*ObjectLiteralExpression/?propertyAssignment/*PropertyAssignment end") },
        },
        "$expression/?objectLiteral/*ObjectLiteralExpression": {
            begin: ($) => { $i.log("$expression/?objectLiteral/*ObjectLiteralExpression begin") },
            end: ($) => { $i.log("$expression/?objectLiteral/*ObjectLiteralExpression end") },
        },
        "$expression/?parenthesizedExpression/*ParenthesizedExpression": {
            begin: ($) => { $i.log("$expression/?parenthesizedExpression/*ParenthesizedExpression begin") },
            end: ($) => { $i.log("$expression/?parenthesizedExpression/*ParenthesizedExpression end") },
        },
        "$expression/?prefixUnary/*PrefixUnaryExpression": {
            begin: ($) => { $i.log("$expression/?prefixUnary/*PrefixUnaryExpression begin") },
            end: ($) => { $i.log("$expression/?prefixUnary/*PrefixUnaryExpression end") },
        },
        "$expression/?propertyAccess/*PropertyAccessExpression": {
            begin: ($) => { $i.log("$expression/?propertyAccess/*PropertyAccessExpression begin") },
            end: ($) => { $i.log("$expression/?propertyAccess/*PropertyAccessExpression end") },
        },
        "$expression/?template/*TemplateExpression/.head/*TemplateHead": ($) => { $i.log("$expression/?template/*TemplateExpression/.head/*TemplateHead") },
        "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle": ($) => { $i.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?middle/*TemplateMiddle") },
        "$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail": ($) => { $i.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan/.x/?tail/*TemplateTail") },
        "$expression/?template/*TemplateExpression/.spans/*TemplateSpan": {
            begin: ($) => { $i.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan begin") },
            end: ($) => { $i.log("$expression/?template/*TemplateExpression/.spans/*TemplateSpan end") },
        },
        "$expression/?template/*TemplateExpression": {
            begin: ($) => { $i.log("$expression/?template/*TemplateExpression begin") },
            end: ($) => { $i.log("$expression/?template/*TemplateExpression end") },
        },
        "$expression/?true/*TrueKeyword": ($) => { $i.log("$expression/?true/*TrueKeyword") },
        "$identifier/*Identifier": ($) => { $i.log("$identifier/*Identifier") },
        "$modifiers/.modifiers/?export/*ExportKeyword": ($) => { $i.log("$modifiers/.modifiers/?export/*ExportKeyword") },
        "$modifiers/.modifiers/?readonly/*ReadonlyKeyword": ($) => { $i.log("$modifiers/.modifiers/?readonly/*ReadonlyKeyword") },
        "$numericLiteral/*NumericLiteral": ($) => { $i.log("$numericLiteral/*NumericLiteral") },
        "$parameter/*Parameter/.questionToken/*QuestionToken": ($) => { $i.log("$parameter/*Parameter/.questionToken/*QuestionToken") },
        "$parameter/*Parameter": {
            begin: ($) => { $i.log("$parameter/*Parameter begin") },
            end: ($) => { $i.log("$parameter/*Parameter end") },
        },
        "$statement/?break/*BreakStatement": ($) => { $i.log("$statement/?break/*BreakStatement") },
        "$statement/?export/*ExportDeclaration": {
            begin: ($) => { $i.log("$statement/?export/*ExportDeclaration begin") },
            end: ($) => { $i.log("$statement/?export/*ExportDeclaration end") },
        },
        "$statement/?expression/*ExpressionStatement": {
            begin: ($) => { $i.log("$statement/?expression/*ExpressionStatement begin") },
            end: ($) => { $i.log("$statement/?expression/*ExpressionStatement end") },
        },
        "$statement/?function/*FunctionDeclaration": {
            begin: ($) => { $i.log("$statement/?function/*FunctionDeclaration begin") },
            end: ($) => { $i.log("$statement/?function/*FunctionDeclaration end") },
        },
        "$statement/?if/*IfStatement": {
            begin: ($) => { $i.log("$statement/?if/*IfStatement begin") },
            end: ($) => { $i.log("$statement/?if/*IfStatement end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier": {
            begin: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier begin") },
            end: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports": {
            begin: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports begin") },
            end: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport": {
            begin: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport begin") },
            end: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport end") },
        },
        "$statement/?import/*ImportDeclaration/.clause/*ImportClause": {
            begin: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause begin") },
            end: ($) => { $i.log("$statement/?import/*ImportDeclaration/.clause/*ImportClause end") },
        },
        "$statement/?import/*ImportDeclaration": {
            begin: ($) => { $i.log("$statement/?import/*ImportDeclaration begin") },
            end: ($) => { $i.log("$statement/?import/*ImportDeclaration end") },
        },
        "$statement/?interface/*InterfaceDeclaration": {
            begin: ($) => { $i.log("$statement/?interface/*InterfaceDeclaration begin") },
            end: ($) => { $i.log("$statement/?interface/*InterfaceDeclaration end") },
        },
        "$statement/?return/*ReturnStatement": {
            begin: ($) => { $i.log("$statement/?return/*ReturnStatement begin") },
            end: ($) => { $i.log("$statement/?return/*ReturnStatement end") },
        },
        "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause": {
            begin: ($) => { $i.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause begin") },
            end: ($) => { $i.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?case/*CaseClause end") },
        },
        "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause": {
            begin: ($) => { $i.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause begin") },
            end: ($) => { $i.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock/?default/*DefaultClause end") },
        },
        "$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock": {
            begin: ($) => { $i.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock begin") },
            end: ($) => { $i.log("$statement/?switch/*SwitchStatement/.caseBlock/*CaseBlock end") },
        },
        "$statement/?switch/*SwitchStatement": {
            begin: ($) => { $i.log("$statement/?switch/*SwitchStatement begin") },
            end: ($) => { $i.log("$statement/?switch/*SwitchStatement end") },
        },
        "$statement/?typeAlias/*TypeAliasDeclaration": {
            begin: ($) => { $i.log("$statement/?typeAlias/*TypeAliasDeclaration begin") },
            end: ($) => { $i.log("$statement/?typeAlias/*TypeAliasDeclaration end") },
        },
        "$statement/?variable/*VariableStatement": {
            begin: ($) => { $i.log("$statement/?variable/*VariableStatement begin") },
            end: ($) => { $i.log("$statement/?variable/*VariableStatement end") },
        },
        "$stringLiteral/*StringLiteral": ($) => { $i.log("$stringLiteral/*StringLiteral") },
        "$type/?array/*ArrayType": {
            begin: ($) => { $i.log("$type/?array/*ArrayType begin") },
            end: ($) => { $i.log("$type/?array/*ArrayType end") },
        },
        "$type/?booleanKeyword/*BooleanKeyword": ($) => { $i.log("$type/?booleanKeyword/*BooleanKeyword") },
        "$type/?function/*FunctionType": {
            begin: ($) => { $i.log("$type/?function/*FunctionType begin") },
            end: ($) => { $i.log("$type/?function/*FunctionType end") },
        },
        "$type/?literal/*LiteralType/?null/*NullKeyword": ($) => { $i.log("$type/?literal/*LiteralType/?null/*NullKeyword") },
        "$type/?literal/*LiteralType": {
            begin: ($) => { $i.log("$type/?literal/*LiteralType begin") },
            end: ($) => { $i.log("$type/?literal/*LiteralType end") },
        },
        "$type/?numberKeyword/*NumberKeyword": ($) => { $i.log("$type/?numberKeyword/*NumberKeyword") },
        "$type/?optional/*OptionalType": {
            begin: ($) => { $i.log("$type/?optional/*OptionalType begin") },
            end: ($) => { $i.log("$type/?optional/*OptionalType end") },
        },
        "$type/?parenthesized/*ParenthesizedType": {
            begin: ($) => { $i.log("$type/?parenthesized/*ParenthesizedType begin") },
            end: ($) => { $i.log("$type/?parenthesized/*ParenthesizedType end") },
        },
        "$type/?stringKeyword/*StringKeyword": ($) => { $i.log("$type/?stringKeyword/*StringKeyword") },
        "$type/?tuple/*TupleType": {
            begin: ($) => { $i.log("$type/?tuple/*TupleType begin") },
            end: ($) => { $i.log("$type/?tuple/*TupleType end") },
        },
        "$type/?typeLiteral/*TypeLiteral": {
            begin: ($) => { $i.log("$type/?typeLiteral/*TypeLiteral begin") },
            end: ($) => { $i.log("$type/?typeLiteral/*TypeLiteral end") },
        },
        "$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName": {
            begin: ($) => { $i.log("$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName begin") },
            end: ($) => { $i.log("$type/?typeReference/*TypeReference/.x/?qualifiedName/*QualifiedName end") },
        },
        "$type/?typeReference/*TypeReference": {
            begin: ($) => { $i.log("$type/?typeReference/*TypeReference begin") },
            end: ($) => { $i.log("$type/?typeReference/*TypeReference end") },
        },
        "$type/?undefinedKeyword/*UndefinedKeyword": ($) => { $i.log("$type/?undefinedKeyword/*UndefinedKeyword") },
        "$type/?union/*UnionType": {
            begin: ($) => { $i.log("$type/?union/*UnionType begin") },
            end: ($) => { $i.log("$type/?union/*UnionType end") },
        },
        "$type/?voidKeyword/*VoidKeyword": ($) => { $i.log("$type/?voidKeyword/*VoidKeyword") },
        "$typeParameters/.typeParameters/*TypeParameter": {
            begin: ($) => { $i.log("$typeParameters/.typeParameters/*TypeParameter begin") },
            end: ($) => { $i.log("$typeParameters/.typeParameters/*TypeParameter end") },
        },
        "$typeSignature/?index/*IndexSignature": {
            begin: ($) => { $i.log("$typeSignature/?index/*IndexSignature begin") },
            end: ($) => { $i.log("$typeSignature/?index/*IndexSignature end") },
        },
        "$typeSignature/?property/*PropertySignature/.questionToken/*QuestionToken": ($) => { $i.log("$typeSignature/?property/*PropertySignature/.questionToken/*QuestionToken") },
        "$typeSignature/?property/*PropertySignature": {
            begin: ($) => { $i.log("$typeSignature/?property/*PropertySignature begin") },
            end: ($) => { $i.log("$typeSignature/?property/*PropertySignature end") },
        },
        "$variableDeclaration/*VariableDeclaration": {
            begin: ($) => { $i.log("$variableDeclaration/*VariableDeclaration begin") },
            end: ($) => { $i.log("$variableDeclaration/*VariableDeclaration end") },
        },
        "$variableDeclarationList/*VariableDeclarationList": {
            begin: ($) => { $i.log("$variableDeclarationList/*VariableDeclarationList begin") },
            end: ($) => { $i.log("$variableDeclarationList/*VariableDeclarationList end") },
        },
        "/.endOfFile/*EndOfFileToken": ($) => { $i.log("/.endOfFile/*EndOfFileToken") },
        "": {
            begin: ($) => { $i.log(" begin") },
            end: ($) => { $i.log(" end") },
        },
    }
}