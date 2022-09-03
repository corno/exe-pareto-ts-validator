import * as pt from "pareto-core-types"

import * as uast from "api-untyped-ast"

export type TAnnotatedString = { readonly "tokenDetails": uast.TDetails; readonly "value": string }
export type TAnnotatedType<Type> = { readonly "tokenDetails": uast.TDetails; readonly "content": Type }
export type TVTGblock$ = TGstatements
export type TVGblock$ = TVTGblock$

export type TNGblock$ = TAnnotatedType<TVGblock$>
export type TVTGblock = TNGblock$
export type TGblock =  TVTGblock
export type TVTGexpression_arrayLiteral$ = TGexpression
export type TVGexpression_arrayLiteral$ = pt.Array<TVTGexpression_arrayLiteral$>

export type TNGexpression_arrayLiteral$ = TAnnotatedType<TVGexpression_arrayLiteral$>
export type TVTGexpression_arrayLiteral = TNGexpression_arrayLiteral$
export type TVGexpression_arrayLiteral = TVTGexpression_arrayLiteral
export type TVTGexpression_arrowFunction$_functionDefinition = TGfunctionDefinition
export type TVGexpression_arrowFunction$_functionDefinition = TVTGexpression_arrowFunction$_functionDefinition

export type TNGexpression_arrowFunction$_equalsGreaterThan$ = uast.TDetails
export type TVTGexpression_arrowFunction$_equalsGreaterThan = TNGexpression_arrowFunction$_equalsGreaterThan$
export type TVGexpression_arrowFunction$_equalsGreaterThan = TVTGexpression_arrowFunction$_equalsGreaterThan
export type TVTGexpression_arrowFunction$_implementation_block = TGblock
export type TVGexpression_arrowFunction$_implementation_block = TVTGexpression_arrowFunction$_implementation_block
export type TVTGexpression_arrowFunction$_implementation_expression = TGexpression
export type TVGexpression_arrowFunction$_implementation_expression = TVTGexpression_arrowFunction$_implementation_expression
export type TVTGexpression_arrowFunction$_implementation = 
    | [ "block", TVGexpression_arrowFunction$_implementation_block]
    | [ "expression", TVGexpression_arrowFunction$_implementation_expression]
export type TVGexpression_arrowFunction$_implementation = TVTGexpression_arrowFunction$_implementation
export type TVTGexpression_arrowFunction$ = {
    readonly "functionDefinition":  TVGexpression_arrowFunction$_functionDefinition
    readonly "equalsGreaterThan":  TVGexpression_arrowFunction$_equalsGreaterThan
    readonly "implementation":  TVGexpression_arrowFunction$_implementation
}
export type TVGexpression_arrowFunction$ = TVTGexpression_arrowFunction$

export type TNGexpression_arrowFunction$ = TAnnotatedType<TVGexpression_arrowFunction$>
export type TVTGexpression_arrowFunction = TNGexpression_arrowFunction$
export type TVGexpression_arrowFunction = TVTGexpression_arrowFunction
export type TVTGexpression_binary$_leftHandSide = TGexpression
export type TVGexpression_binary$_leftHandSide = TVTGexpression_binary$_leftHandSide

export type TNGexpression_binary$_operator_equals$ = uast.TDetails
export type TVTGexpression_binary$_operator_equals = TNGexpression_binary$_operator_equals$
export type TVGexpression_binary$_operator_equals = TVTGexpression_binary$_operator_equals

export type TNGexpression_binary$_operator_equalsEqualsEquals$ = uast.TDetails
export type TVTGexpression_binary$_operator_equalsEqualsEquals = TNGexpression_binary$_operator_equalsEqualsEquals$
export type TVGexpression_binary$_operator_equalsEqualsEquals = TVTGexpression_binary$_operator_equalsEqualsEquals
export type TVTGexpression_binary$_operator = 
    | [ "equals", TVGexpression_binary$_operator_equals]
    | [ "equalsEqualsEquals", TVGexpression_binary$_operator_equalsEqualsEquals]
export type TVGexpression_binary$_operator = TVTGexpression_binary$_operator
export type TVTGexpression_binary$_rightHandSide = TGexpression
export type TVGexpression_binary$_rightHandSide = TVTGexpression_binary$_rightHandSide
export type TVTGexpression_binary$ = {
    readonly "leftHandSide":  TVGexpression_binary$_leftHandSide
    readonly "operator":  TVGexpression_binary$_operator
    readonly "rightHandSide":  TVGexpression_binary$_rightHandSide
}
export type TVGexpression_binary$ = TVTGexpression_binary$

export type TNGexpression_binary$ = TAnnotatedType<TVGexpression_binary$>
export type TVTGexpression_binary = TNGexpression_binary$
export type TVGexpression_binary = TVTGexpression_binary
export type TVTGexpression_call$_function = TGexpression
export type TVGexpression_call$_function = TVTGexpression_call$_function
export type TVTGexpression_call$_typeArguments = TGtype
export type TVGexpression_call$_typeArguments = pt.Array<TVTGexpression_call$_typeArguments>
export type TVTGexpression_call$_arguments = TGexpression
export type TVGexpression_call$_arguments = pt.Array<TVTGexpression_call$_arguments>
export type TVTGexpression_call$ = {
    readonly "function":  TVGexpression_call$_function
    readonly "typeArguments":  TVGexpression_call$_typeArguments
    readonly "arguments":  TVGexpression_call$_arguments
}
export type TVGexpression_call$ = TVTGexpression_call$

export type TNGexpression_call$ = TAnnotatedType<TVGexpression_call$>
export type TVTGexpression_call = TNGexpression_call$
export type TVGexpression_call = TVTGexpression_call
export type TVTGexpression_conditional$_test = TGexpression
export type TVGexpression_conditional$_test = TVTGexpression_conditional$_test

export type TNGexpression_conditional$_questionToken$ = uast.TDetails
export type TVTGexpression_conditional$_questionToken = TNGexpression_conditional$_questionToken$
export type TVGexpression_conditional$_questionToken = TVTGexpression_conditional$_questionToken
export type TVTGexpression_conditional$_ifExpression = TGexpression
export type TVGexpression_conditional$_ifExpression = TVTGexpression_conditional$_ifExpression

export type TNGexpression_conditional$_colonToken$ = uast.TDetails
export type TVTGexpression_conditional$_colonToken = TNGexpression_conditional$_colonToken$
export type TVGexpression_conditional$_colonToken = TVTGexpression_conditional$_colonToken
export type TVTGexpression_conditional$_elseExpression = TGexpression
export type TVGexpression_conditional$_elseExpression = TVTGexpression_conditional$_elseExpression
export type TVTGexpression_conditional$ = {
    readonly "test":  TVGexpression_conditional$_test
    readonly "questionToken":  TVGexpression_conditional$_questionToken
    readonly "ifExpression":  TVGexpression_conditional$_ifExpression
    readonly "colonToken":  TVGexpression_conditional$_colonToken
    readonly "elseExpression":  TVGexpression_conditional$_elseExpression
}
export type TVGexpression_conditional$ = TVTGexpression_conditional$

export type TNGexpression_conditional$ = TAnnotatedType<TVGexpression_conditional$>
export type TVTGexpression_conditional = TNGexpression_conditional$
export type TVGexpression_conditional = TVTGexpression_conditional
export type TVTGexpression_elementAccess$_array = TGexpression
export type TVGexpression_elementAccess$_array = TVTGexpression_elementAccess$_array
export type TVTGexpression_elementAccess$_element = TGexpression
export type TVGexpression_elementAccess$_element = TVTGexpression_elementAccess$_element
export type TVTGexpression_elementAccess$ = {
    readonly "array":  TVGexpression_elementAccess$_array
    readonly "element":  TVGexpression_elementAccess$_element
}
export type TVGexpression_elementAccess$ = TVTGexpression_elementAccess$

export type TNGexpression_elementAccess$ = TAnnotatedType<TVGexpression_elementAccess$>
export type TVTGexpression_elementAccess = TNGexpression_elementAccess$
export type TVGexpression_elementAccess = TVTGexpression_elementAccess

export type TNGexpression_false$ = uast.TDetails
export type TVTGexpression_false = TNGexpression_false$
export type TVGexpression_false = TVTGexpression_false
export type TVTGexpression_identifier = TGidentifier
export type TVGexpression_identifier = TVTGexpression_identifier

export type TNGexpression_noSubstitutionTemplateLiteral$ = uast.TDetails
export type TVTGexpression_noSubstitutionTemplateLiteral = TNGexpression_noSubstitutionTemplateLiteral$
export type TVGexpression_noSubstitutionTemplateLiteral = TVTGexpression_noSubstitutionTemplateLiteral

export type TNGexpression_nullKeyword$ = uast.TDetails
export type TVTGexpression_nullKeyword = TNGexpression_nullKeyword$
export type TVGexpression_nullKeyword = TVTGexpression_nullKeyword
export type TVTGexpression_numericLiteral = TGnumericLiteral
export type TVGexpression_numericLiteral = TVTGexpression_numericLiteral
export type TVTGexpression_objectLiteral$_propertyAssignment$_name = TGidentifierOrStringLiteral
export type TVGexpression_objectLiteral$_propertyAssignment$_name = TVTGexpression_objectLiteral$_propertyAssignment$_name
export type TVTGexpression_objectLiteral$_propertyAssignment$_expression = TGexpression
export type TVGexpression_objectLiteral$_propertyAssignment$_expression = TVTGexpression_objectLiteral$_propertyAssignment$_expression
export type TVTGexpression_objectLiteral$_propertyAssignment$ = {
    readonly "name":  TVGexpression_objectLiteral$_propertyAssignment$_name
    readonly "expression":  TVGexpression_objectLiteral$_propertyAssignment$_expression
}
export type TVGexpression_objectLiteral$_propertyAssignment$ = TVTGexpression_objectLiteral$_propertyAssignment$

export type TNGexpression_objectLiteral$_propertyAssignment$ = TAnnotatedType<TVGexpression_objectLiteral$_propertyAssignment$>
export type TVTGexpression_objectLiteral$_propertyAssignment = TNGexpression_objectLiteral$_propertyAssignment$
export type TVGexpression_objectLiteral$_propertyAssignment = TVTGexpression_objectLiteral$_propertyAssignment
export type TVTGexpression_objectLiteral$ = 
    | [ "propertyAssignment", TVGexpression_objectLiteral$_propertyAssignment]
export type TVGexpression_objectLiteral$ = pt.Array<TVTGexpression_objectLiteral$>

export type TNGexpression_objectLiteral$ = TAnnotatedType<TVGexpression_objectLiteral$>
export type TVTGexpression_objectLiteral = TNGexpression_objectLiteral$
export type TVGexpression_objectLiteral = TVTGexpression_objectLiteral
export type TVTGexpression_parenthesizedExpression$ = TGexpression
export type TVGexpression_parenthesizedExpression$ = TVTGexpression_parenthesizedExpression$

export type TNGexpression_parenthesizedExpression$ = TAnnotatedType<TVGexpression_parenthesizedExpression$>
export type TVTGexpression_parenthesizedExpression = TNGexpression_parenthesizedExpression$
export type TVGexpression_parenthesizedExpression = TVTGexpression_parenthesizedExpression
export type TVTGexpression_prefixUnary$ = TGexpression
export type TVGexpression_prefixUnary$ = TVTGexpression_prefixUnary$

export type TNGexpression_prefixUnary$ = TAnnotatedType<TVGexpression_prefixUnary$>
export type TVTGexpression_prefixUnary = TNGexpression_prefixUnary$
export type TVGexpression_prefixUnary = TVTGexpression_prefixUnary
export type TVTGexpression_propertyAccess$_object = TGexpression
export type TVGexpression_propertyAccess$_object = TVTGexpression_propertyAccess$_object
export type TVTGexpression_propertyAccess$_property = TGexpression
export type TVGexpression_propertyAccess$_property = TVTGexpression_propertyAccess$_property
export type TVTGexpression_propertyAccess$ = {
    readonly "object":  TVGexpression_propertyAccess$_object
    readonly "property":  TVGexpression_propertyAccess$_property
}
export type TVGexpression_propertyAccess$ = TVTGexpression_propertyAccess$

export type TNGexpression_propertyAccess$ = TAnnotatedType<TVGexpression_propertyAccess$>
export type TVTGexpression_propertyAccess = TNGexpression_propertyAccess$
export type TVGexpression_propertyAccess = TVTGexpression_propertyAccess
export type TVTGexpression_stringLiteral = TGstringLiteral
export type TVGexpression_stringLiteral = TVTGexpression_stringLiteral

export type TNGexpression_template$_head$ = TAnnotatedString
export type TVTGexpression_template$_head = TNGexpression_template$_head$
export type TVGexpression_template$_head = TVTGexpression_template$_head
export type TVTGexpression_template$_spans$_expression = TGexpression
export type TVGexpression_template$_spans$_expression = TVTGexpression_template$_spans$_expression

export type TNGexpression_template$_spans$_x_middle$ = TAnnotatedString
export type TVTGexpression_template$_spans$_x_middle = TNGexpression_template$_spans$_x_middle$
export type TVGexpression_template$_spans$_x_middle = TVTGexpression_template$_spans$_x_middle

export type TNGexpression_template$_spans$_x_tail$ = TAnnotatedString
export type TVTGexpression_template$_spans$_x_tail = TNGexpression_template$_spans$_x_tail$
export type TVGexpression_template$_spans$_x_tail = TVTGexpression_template$_spans$_x_tail
export type TVTGexpression_template$_spans$_x = 
    | [ "middle", TVGexpression_template$_spans$_x_middle]
    | [ "tail", TVGexpression_template$_spans$_x_tail]
export type TVGexpression_template$_spans$_x = TVTGexpression_template$_spans$_x
export type TVTGexpression_template$_spans$ = {
    readonly "expression":  TVGexpression_template$_spans$_expression
    readonly "x":  TVGexpression_template$_spans$_x
}
export type TVGexpression_template$_spans$ = TVTGexpression_template$_spans$

export type TNGexpression_template$_spans$ = TAnnotatedType<TVGexpression_template$_spans$>
export type TVTGexpression_template$_spans = TNGexpression_template$_spans$
export type TVGexpression_template$_spans = pt.Array<TVTGexpression_template$_spans>
export type TVTGexpression_template$ = {
    readonly "head":  TVGexpression_template$_head
    readonly "spans":  TVGexpression_template$_spans
}
export type TVGexpression_template$ = TVTGexpression_template$

export type TNGexpression_template$ = TAnnotatedType<TVGexpression_template$>
export type TVTGexpression_template = TNGexpression_template$
export type TVGexpression_template = TVTGexpression_template

export type TNGexpression_true$ = uast.TDetails
export type TVTGexpression_true = TNGexpression_true$
export type TVGexpression_true = TVTGexpression_true
export type TVTGexpression = 
    | [ "arrayLiteral", TVGexpression_arrayLiteral]
    | [ "arrowFunction", TVGexpression_arrowFunction]
    | [ "binary", TVGexpression_binary]
    | [ "call", TVGexpression_call]
    | [ "conditional", TVGexpression_conditional]
    | [ "elementAccess", TVGexpression_elementAccess]
    | [ "false", TVGexpression_false]
    | [ "identifier", TVGexpression_identifier]
    | [ "noSubstitutionTemplateLiteral", TVGexpression_noSubstitutionTemplateLiteral]
    | [ "nullKeyword", TVGexpression_nullKeyword]
    | [ "numericLiteral", TVGexpression_numericLiteral]
    | [ "objectLiteral", TVGexpression_objectLiteral]
    | [ "parenthesizedExpression", TVGexpression_parenthesizedExpression]
    | [ "prefixUnary", TVGexpression_prefixUnary]
    | [ "propertyAccess", TVGexpression_propertyAccess]
    | [ "stringLiteral", TVGexpression_stringLiteral]
    | [ "template", TVGexpression_template]
    | [ "true", TVGexpression_true]
export type TGexpression =  TVTGexpression
export type TVTGfunctionDefinition_typeParameters = TGtypeParameters
export type TVGfunctionDefinition_typeParameters = TVTGfunctionDefinition_typeParameters
export type TVTGfunctionDefinition_parameters = TGparameter
export type TVGfunctionDefinition_parameters = pt.Array<TVTGfunctionDefinition_parameters>
export type TVTGfunctionDefinition_returnType = TGtype
export type TVGfunctionDefinition_returnType = null | TVTGfunctionDefinition_returnType
export type TVTGfunctionDefinition = {
    readonly "typeParameters":  TVGfunctionDefinition_typeParameters
    readonly "parameters":  TVGfunctionDefinition_parameters
    readonly "returnType":  TVGfunctionDefinition_returnType
}
export type TGfunctionDefinition =  TVTGfunctionDefinition

export type TNGidentifier$ = TAnnotatedString
export type TVTGidentifier = TNGidentifier$
export type TGidentifier =  TVTGidentifier
export type TVTGidentifierOrStringLiteral_identifier = TGidentifier
export type TVGidentifierOrStringLiteral_identifier = TVTGidentifierOrStringLiteral_identifier
export type TVTGidentifierOrStringLiteral_stringLiteral = TGstringLiteral
export type TVGidentifierOrStringLiteral_stringLiteral = TVTGidentifierOrStringLiteral_stringLiteral
export type TVTGidentifierOrStringLiteral = 
    | [ "identifier", TVGidentifierOrStringLiteral_identifier]
    | [ "stringLiteral", TVGidentifierOrStringLiteral_stringLiteral]
export type TGidentifierOrStringLiteral =  TVTGidentifierOrStringLiteral

export type TNGmodifiers_modifiers_export$ = uast.TDetails
export type TVTGmodifiers_modifiers_export = TNGmodifiers_modifiers_export$
export type TVGmodifiers_modifiers_export = TVTGmodifiers_modifiers_export

export type TNGmodifiers_modifiers_readonly$ = uast.TDetails
export type TVTGmodifiers_modifiers_readonly = TNGmodifiers_modifiers_readonly$
export type TVGmodifiers_modifiers_readonly = TVTGmodifiers_modifiers_readonly
export type TVTGmodifiers_modifiers = 
    | [ "export", TVGmodifiers_modifiers_export]
    | [ "readonly", TVGmodifiers_modifiers_readonly]
export type TVGmodifiers_modifiers = pt.Array<TVTGmodifiers_modifiers>
export type TVTGmodifiers = {
    readonly "modifiers":  TVGmodifiers_modifiers
}
export type TGmodifiers =  TVTGmodifiers

export type TNGnumericLiteral$ = TAnnotatedString
export type TVTGnumericLiteral = TNGnumericLiteral$
export type TGnumericLiteral =  TVTGnumericLiteral
export type TVTGparameter$_name = TGidentifier
export type TVGparameter$_name = TVTGparameter$_name

export type TNGparameter$_questionToken$ = uast.TDetails
export type TVTGparameter$_questionToken = TNGparameter$_questionToken$
export type TVGparameter$_questionToken = null | TVTGparameter$_questionToken
export type TVTGparameter$_type = TGtype
export type TVGparameter$_type = null | TVTGparameter$_type
export type TVTGparameter$ = {
    readonly "name":  TVGparameter$_name
    readonly "questionToken":  TVGparameter$_questionToken
    readonly "type":  TVGparameter$_type
}
export type TVGparameter$ = TVTGparameter$

export type TNGparameter$ = TAnnotatedType<TVGparameter$>
export type TVTGparameter = TNGparameter$
export type TGparameter =  TVTGparameter
export type TVTGstatement_block = TGblock
export type TVGstatement_block = TVTGstatement_block

export type TNGstatement_break$ = uast.TDetails
export type TVTGstatement_break = TNGstatement_break$
export type TVGstatement_break = TVTGstatement_break
export type TVTGstatement_export$ = TGstringLiteral
export type TVGstatement_export$ = TVTGstatement_export$

export type TNGstatement_export$ = TAnnotatedType<TVGstatement_export$>
export type TVTGstatement_export = TNGstatement_export$
export type TVGstatement_export = TVTGstatement_export
export type TVTGstatement_expression$ = TGexpression
export type TVGstatement_expression$ = TVTGstatement_expression$

export type TNGstatement_expression$ = TAnnotatedType<TVGstatement_expression$>
export type TVTGstatement_expression = TNGstatement_expression$
export type TVGstatement_expression = TVTGstatement_expression
export type TVTGstatement_function$_modifiers = TGmodifiers
export type TVGstatement_function$_modifiers = TVTGstatement_function$_modifiers
export type TVTGstatement_function$_name = TGidentifier
export type TVGstatement_function$_name = TVTGstatement_function$_name
export type TVTGstatement_function$_definition = TGfunctionDefinition
export type TVGstatement_function$_definition = TVTGstatement_function$_definition
export type TVTGstatement_function$_block = TGblock
export type TVGstatement_function$_block = null | TVTGstatement_function$_block
export type TVTGstatement_function$ = {
    readonly "modifiers":  TVGstatement_function$_modifiers
    readonly "name":  TVGstatement_function$_name
    readonly "definition":  TVGstatement_function$_definition
    readonly "block":  TVGstatement_function$_block
}
export type TVGstatement_function$ = TVTGstatement_function$

export type TNGstatement_function$ = TAnnotatedType<TVGstatement_function$>
export type TVTGstatement_function = TNGstatement_function$
export type TVGstatement_function = TVTGstatement_function
export type TVTGstatement_if$_expression = TGexpression
export type TVGstatement_if$_expression = TVTGstatement_if$_expression
export type TVTGstatement_if$_thenStatement = TGstatement
export type TVGstatement_if$_thenStatement = TVTGstatement_if$_thenStatement
export type TVTGstatement_if$_elseStatement = TGstatement
export type TVGstatement_if$_elseStatement = null | TVTGstatement_if$_elseStatement
export type TVTGstatement_if$ = {
    readonly "expression":  TVGstatement_if$_expression
    readonly "thenStatement":  TVGstatement_if$_thenStatement
    readonly "elseStatement":  TVGstatement_if$_elseStatement
}
export type TVGstatement_if$ = TVTGstatement_if$

export type TNGstatement_if$ = TAnnotatedType<TVGstatement_if$>
export type TVTGstatement_if = TNGstatement_if$
export type TVGstatement_if = TVTGstatement_if
export type TVTGstatement_import$_clause$_named$$_name = TGidentifier
export type TVGstatement_import$_clause$_named$$_name = TVTGstatement_import$_clause$_named$$_name
export type TVTGstatement_import$_clause$_named$$_as = TGidentifier
export type TVGstatement_import$_clause$_named$$_as = null | TVTGstatement_import$_clause$_named$$_as
export type TVTGstatement_import$_clause$_named$$ = {
    readonly "name":  TVGstatement_import$_clause$_named$$_name
    readonly "as":  TVGstatement_import$_clause$_named$$_as
}
export type TVGstatement_import$_clause$_named$$ = TVTGstatement_import$_clause$_named$$

export type TNGstatement_import$_clause$_named$$ = TAnnotatedType<TVGstatement_import$_clause$_named$$>
export type TVTGstatement_import$_clause$_named$ = TNGstatement_import$_clause$_named$$
export type TVGstatement_import$_clause$_named$ = pt.Array<TVTGstatement_import$_clause$_named$>

export type TNGstatement_import$_clause$_named$ = TAnnotatedType<TVGstatement_import$_clause$_named$>
export type TVTGstatement_import$_clause$_named = TNGstatement_import$_clause$_named$
export type TVGstatement_import$_clause$_named = TVTGstatement_import$_clause$_named
export type TVTGstatement_import$_clause$_namespace$ = TGidentifier
export type TVGstatement_import$_clause$_namespace$ = TVTGstatement_import$_clause$_namespace$

export type TNGstatement_import$_clause$_namespace$ = TAnnotatedType<TVGstatement_import$_clause$_namespace$>
export type TVTGstatement_import$_clause$_namespace = TNGstatement_import$_clause$_namespace$
export type TVGstatement_import$_clause$_namespace = TVTGstatement_import$_clause$_namespace
export type TVTGstatement_import$_clause$ = 
    | [ "named", TVGstatement_import$_clause$_named]
    | [ "namespace", TVGstatement_import$_clause$_namespace]
export type TVGstatement_import$_clause$ = TVTGstatement_import$_clause$

export type TNGstatement_import$_clause$ = TAnnotatedType<TVGstatement_import$_clause$>
export type TVTGstatement_import$_clause = TNGstatement_import$_clause$
export type TVGstatement_import$_clause = TVTGstatement_import$_clause
export type TVTGstatement_import$_file = TGstringLiteral
export type TVGstatement_import$_file = TVTGstatement_import$_file
export type TVTGstatement_import$ = {
    readonly "clause":  TVGstatement_import$_clause
    readonly "file":  TVGstatement_import$_file
}
export type TVGstatement_import$ = TVTGstatement_import$

export type TNGstatement_import$ = TAnnotatedType<TVGstatement_import$>
export type TVTGstatement_import = TNGstatement_import$
export type TVGstatement_import = TVTGstatement_import
export type TVTGstatement_interface$_modifiers = TGmodifiers
export type TVGstatement_interface$_modifiers = TVTGstatement_interface$_modifiers
export type TVTGstatement_interface$_name = TGidentifier
export type TVGstatement_interface$_name = TVTGstatement_interface$_name
export type TVTGstatement_interface$_typeParameters = TGtypeParameters
export type TVGstatement_interface$_typeParameters = TVTGstatement_interface$_typeParameters
export type TVTGstatement_interface$_signature = TGtypeSignature
export type TVGstatement_interface$_signature = pt.Array<TVTGstatement_interface$_signature>
export type TVTGstatement_interface$ = {
    readonly "modifiers":  TVGstatement_interface$_modifiers
    readonly "name":  TVGstatement_interface$_name
    readonly "typeParameters":  TVGstatement_interface$_typeParameters
    readonly "signature":  TVGstatement_interface$_signature
}
export type TVGstatement_interface$ = TVTGstatement_interface$

export type TNGstatement_interface$ = TAnnotatedType<TVGstatement_interface$>
export type TVTGstatement_interface = TNGstatement_interface$
export type TVGstatement_interface = TVTGstatement_interface
export type TVTGstatement_return$ = TGexpression
export type TVGstatement_return$ = null | TVTGstatement_return$

export type TNGstatement_return$ = TAnnotatedType<TVGstatement_return$>
export type TVTGstatement_return = TNGstatement_return$
export type TVGstatement_return = TVTGstatement_return
export type TVTGstatement_switch$_expression = TGexpression
export type TVGstatement_switch$_expression = TVTGstatement_switch$_expression
export type TVTGstatement_switch$_caseBlock$_case$_case = TGexpression
export type TVGstatement_switch$_caseBlock$_case$_case = TVTGstatement_switch$_caseBlock$_case$_case
export type TVTGstatement_switch$_caseBlock$_case$_statements = TGstatements
export type TVGstatement_switch$_caseBlock$_case$_statements = TVTGstatement_switch$_caseBlock$_case$_statements
export type TVTGstatement_switch$_caseBlock$_case$ = {
    readonly "case":  TVGstatement_switch$_caseBlock$_case$_case
    readonly "statements":  TVGstatement_switch$_caseBlock$_case$_statements
}
export type TVGstatement_switch$_caseBlock$_case$ = TVTGstatement_switch$_caseBlock$_case$

export type TNGstatement_switch$_caseBlock$_case$ = TAnnotatedType<TVGstatement_switch$_caseBlock$_case$>
export type TVTGstatement_switch$_caseBlock$_case = TNGstatement_switch$_caseBlock$_case$
export type TVGstatement_switch$_caseBlock$_case = TVTGstatement_switch$_caseBlock$_case
export type TVTGstatement_switch$_caseBlock$_default$ = TGstatements
export type TVGstatement_switch$_caseBlock$_default$ = TVTGstatement_switch$_caseBlock$_default$

export type TNGstatement_switch$_caseBlock$_default$ = TAnnotatedType<TVGstatement_switch$_caseBlock$_default$>
export type TVTGstatement_switch$_caseBlock$_default = TNGstatement_switch$_caseBlock$_default$
export type TVGstatement_switch$_caseBlock$_default = TVTGstatement_switch$_caseBlock$_default
export type TVTGstatement_switch$_caseBlock$ = 
    | [ "case", TVGstatement_switch$_caseBlock$_case]
    | [ "default", TVGstatement_switch$_caseBlock$_default]
export type TVGstatement_switch$_caseBlock$ = pt.Array<TVTGstatement_switch$_caseBlock$>

export type TNGstatement_switch$_caseBlock$ = TAnnotatedType<TVGstatement_switch$_caseBlock$>
export type TVTGstatement_switch$_caseBlock = TNGstatement_switch$_caseBlock$
export type TVGstatement_switch$_caseBlock = TVTGstatement_switch$_caseBlock
export type TVTGstatement_switch$ = {
    readonly "expression":  TVGstatement_switch$_expression
    readonly "caseBlock":  TVGstatement_switch$_caseBlock
}
export type TVGstatement_switch$ = TVTGstatement_switch$

export type TNGstatement_switch$ = TAnnotatedType<TVGstatement_switch$>
export type TVTGstatement_switch = TNGstatement_switch$
export type TVGstatement_switch = TVTGstatement_switch
export type TVTGstatement_typeAlias$_modifiers = TGmodifiers
export type TVGstatement_typeAlias$_modifiers = TVTGstatement_typeAlias$_modifiers
export type TVTGstatement_typeAlias$_name = TGidentifier
export type TVGstatement_typeAlias$_name = TVTGstatement_typeAlias$_name
export type TVTGstatement_typeAlias$_typeParameters = TGtypeParameters
export type TVGstatement_typeAlias$_typeParameters = TVTGstatement_typeAlias$_typeParameters
export type TVTGstatement_typeAlias$_type = TGtype
export type TVGstatement_typeAlias$_type = TVTGstatement_typeAlias$_type
export type TVTGstatement_typeAlias$ = {
    readonly "modifiers":  TVGstatement_typeAlias$_modifiers
    readonly "name":  TVGstatement_typeAlias$_name
    readonly "typeParameters":  TVGstatement_typeAlias$_typeParameters
    readonly "type":  TVGstatement_typeAlias$_type
}
export type TVGstatement_typeAlias$ = TVTGstatement_typeAlias$

export type TNGstatement_typeAlias$ = TAnnotatedType<TVGstatement_typeAlias$>
export type TVTGstatement_typeAlias = TNGstatement_typeAlias$
export type TVGstatement_typeAlias = TVTGstatement_typeAlias
export type TVTGstatement_variable$_modifiers = TGmodifiers
export type TVGstatement_variable$_modifiers = TVTGstatement_variable$_modifiers
export type TVTGstatement_variable$_variableDeclarationList = TGvariableDeclarationList
export type TVGstatement_variable$_variableDeclarationList = TVTGstatement_variable$_variableDeclarationList
export type TVTGstatement_variable$ = {
    readonly "modifiers":  TVGstatement_variable$_modifiers
    readonly "variableDeclarationList":  TVGstatement_variable$_variableDeclarationList
}
export type TVGstatement_variable$ = TVTGstatement_variable$

export type TNGstatement_variable$ = TAnnotatedType<TVGstatement_variable$>
export type TVTGstatement_variable = TNGstatement_variable$
export type TVGstatement_variable = TVTGstatement_variable
export type TVTGstatement = 
    | [ "block", TVGstatement_block]
    | [ "break", TVGstatement_break]
    | [ "export", TVGstatement_export]
    | [ "expression", TVGstatement_expression]
    | [ "function", TVGstatement_function]
    | [ "if", TVGstatement_if]
    | [ "import", TVGstatement_import]
    | [ "interface", TVGstatement_interface]
    | [ "return", TVGstatement_return]
    | [ "switch", TVGstatement_switch]
    | [ "typeAlias", TVGstatement_typeAlias]
    | [ "variable", TVGstatement_variable]
export type TGstatement =  TVTGstatement
export type TVTGstatements_statements = TGstatement
export type TVGstatements_statements = pt.Array<TVTGstatements_statements>
export type TVTGstatements = {
    readonly "statements":  TVGstatements_statements
}
export type TGstatements =  TVTGstatements

export type TNGstringLiteral$ = TAnnotatedString
export type TVTGstringLiteral = TNGstringLiteral$
export type TGstringLiteral =  TVTGstringLiteral
export type TVTGtype_array$ = TGtype
export type TVGtype_array$ = TVTGtype_array$

export type TNGtype_array$ = TAnnotatedType<TVGtype_array$>
export type TVTGtype_array = TNGtype_array$
export type TVGtype_array = TVTGtype_array

export type TNGtype_booleanKeyword$ = uast.TDetails
export type TVTGtype_booleanKeyword = TNGtype_booleanKeyword$
export type TVGtype_booleanKeyword = TVTGtype_booleanKeyword
export type TVTGtype_function$ = TGfunctionDefinition
export type TVGtype_function$ = TVTGtype_function$

export type TNGtype_function$ = TAnnotatedType<TVGtype_function$>
export type TVTGtype_function = TNGtype_function$
export type TVGtype_function = TVTGtype_function

export type TNGtype_literal$_null$ = uast.TDetails
export type TVTGtype_literal$_null = TNGtype_literal$_null$
export type TVGtype_literal$_null = TVTGtype_literal$_null
export type TVTGtype_literal$_string = TGstringLiteral
export type TVGtype_literal$_string = TVTGtype_literal$_string
export type TVTGtype_literal$ = 
    | [ "null", TVGtype_literal$_null]
    | [ "string", TVGtype_literal$_string]
export type TVGtype_literal$ = TVTGtype_literal$

export type TNGtype_literal$ = TAnnotatedType<TVGtype_literal$>
export type TVTGtype_literal = TNGtype_literal$
export type TVGtype_literal = TVTGtype_literal

export type TNGtype_numberKeyword$ = uast.TDetails
export type TVTGtype_numberKeyword = TNGtype_numberKeyword$
export type TVGtype_numberKeyword = TVTGtype_numberKeyword
export type TVTGtype_optional$ = TGtype
export type TVGtype_optional$ = TVTGtype_optional$

export type TNGtype_optional$ = TAnnotatedType<TVGtype_optional$>
export type TVTGtype_optional = TNGtype_optional$
export type TVGtype_optional = TVTGtype_optional
export type TVTGtype_parenthesized$ = TGtype
export type TVGtype_parenthesized$ = TVTGtype_parenthesized$

export type TNGtype_parenthesized$ = TAnnotatedType<TVGtype_parenthesized$>
export type TVTGtype_parenthesized = TNGtype_parenthesized$
export type TVGtype_parenthesized = TVTGtype_parenthesized

export type TNGtype_stringKeyword$ = uast.TDetails
export type TVTGtype_stringKeyword = TNGtype_stringKeyword$
export type TVGtype_stringKeyword = TVTGtype_stringKeyword
export type TVTGtype_tuple$ = TGtype
export type TVGtype_tuple$ = pt.Array<TVTGtype_tuple$>

export type TNGtype_tuple$ = TAnnotatedType<TVGtype_tuple$>
export type TVTGtype_tuple = TNGtype_tuple$
export type TVGtype_tuple = TVTGtype_tuple
export type TVTGtype_typeLiteral$ = TGtypeSignature
export type TVGtype_typeLiteral$ = pt.Array<TVTGtype_typeLiteral$>

export type TNGtype_typeLiteral$ = TAnnotatedType<TVGtype_typeLiteral$>
export type TVTGtype_typeLiteral = TNGtype_typeLiteral$
export type TVGtype_typeLiteral = TVTGtype_typeLiteral
export type TVTGtype_typeReference$_x_identifier = TGidentifier
export type TVGtype_typeReference$_x_identifier = TVTGtype_typeReference$_x_identifier
export type TVTGtype_typeReference$_x_qualifiedName$_context = TGidentifier
export type TVGtype_typeReference$_x_qualifiedName$_context = TVTGtype_typeReference$_x_qualifiedName$_context
export type TVTGtype_typeReference$_x_qualifiedName$_type = TGidentifier
export type TVGtype_typeReference$_x_qualifiedName$_type = TVTGtype_typeReference$_x_qualifiedName$_type
export type TVTGtype_typeReference$_x_qualifiedName$ = {
    readonly "context":  TVGtype_typeReference$_x_qualifiedName$_context
    readonly "type":  TVGtype_typeReference$_x_qualifiedName$_type
}
export type TVGtype_typeReference$_x_qualifiedName$ = TVTGtype_typeReference$_x_qualifiedName$

export type TNGtype_typeReference$_x_qualifiedName$ = TAnnotatedType<TVGtype_typeReference$_x_qualifiedName$>
export type TVTGtype_typeReference$_x_qualifiedName = TNGtype_typeReference$_x_qualifiedName$
export type TVGtype_typeReference$_x_qualifiedName = TVTGtype_typeReference$_x_qualifiedName
export type TVTGtype_typeReference$_x = 
    | [ "identifier", TVGtype_typeReference$_x_identifier]
    | [ "qualifiedName", TVGtype_typeReference$_x_qualifiedName]
export type TVGtype_typeReference$_x = TVTGtype_typeReference$_x
export type TVTGtype_typeReference$_parameters = TGtype
export type TVGtype_typeReference$_parameters = pt.Array<TVTGtype_typeReference$_parameters>
export type TVTGtype_typeReference$ = {
    readonly "x":  TVGtype_typeReference$_x
    readonly "parameters":  TVGtype_typeReference$_parameters
}
export type TVGtype_typeReference$ = TVTGtype_typeReference$

export type TNGtype_typeReference$ = TAnnotatedType<TVGtype_typeReference$>
export type TVTGtype_typeReference = TNGtype_typeReference$
export type TVGtype_typeReference = TVTGtype_typeReference

export type TNGtype_undefinedKeyword$ = uast.TDetails
export type TVTGtype_undefinedKeyword = TNGtype_undefinedKeyword$
export type TVGtype_undefinedKeyword = TVTGtype_undefinedKeyword
export type TVTGtype_union$ = TGtype
export type TVGtype_union$ = pt.Array<TVTGtype_union$>

export type TNGtype_union$ = TAnnotatedType<TVGtype_union$>
export type TVTGtype_union = TNGtype_union$
export type TVGtype_union = TVTGtype_union

export type TNGtype_voidKeyword$ = uast.TDetails
export type TVTGtype_voidKeyword = TNGtype_voidKeyword$
export type TVGtype_voidKeyword = TVTGtype_voidKeyword
export type TVTGtype = 
    | [ "array", TVGtype_array]
    | [ "booleanKeyword", TVGtype_booleanKeyword]
    | [ "function", TVGtype_function]
    | [ "literal", TVGtype_literal]
    | [ "numberKeyword", TVGtype_numberKeyword]
    | [ "optional", TVGtype_optional]
    | [ "parenthesized", TVGtype_parenthesized]
    | [ "stringKeyword", TVGtype_stringKeyword]
    | [ "tuple", TVGtype_tuple]
    | [ "typeLiteral", TVGtype_typeLiteral]
    | [ "typeReference", TVGtype_typeReference]
    | [ "undefinedKeyword", TVGtype_undefinedKeyword]
    | [ "union", TVGtype_union]
    | [ "voidKeyword", TVGtype_voidKeyword]
export type TGtype =  TVTGtype
export type TVTGtypeParameters_typeParameters$ = TGidentifier
export type TVGtypeParameters_typeParameters$ = TVTGtypeParameters_typeParameters$

export type TNGtypeParameters_typeParameters$ = TAnnotatedType<TVGtypeParameters_typeParameters$>
export type TVTGtypeParameters_typeParameters = TNGtypeParameters_typeParameters$
export type TVGtypeParameters_typeParameters = pt.Array<TVTGtypeParameters_typeParameters>
export type TVTGtypeParameters = {
    readonly "typeParameters":  TVGtypeParameters_typeParameters
}
export type TGtypeParameters =  TVTGtypeParameters
export type TVTGtypeSignature_index$_modifiers = TGmodifiers
export type TVGtypeSignature_index$_modifiers = TVTGtypeSignature_index$_modifiers
export type TVTGtypeSignature_index$_parameter = TGparameter
export type TVGtypeSignature_index$_parameter = TVTGtypeSignature_index$_parameter
export type TVTGtypeSignature_index$_type = TGtype
export type TVGtypeSignature_index$_type = null | TVTGtypeSignature_index$_type
export type TVTGtypeSignature_index$ = {
    readonly "modifiers":  TVGtypeSignature_index$_modifiers
    readonly "parameter":  TVGtypeSignature_index$_parameter
    readonly "type":  TVGtypeSignature_index$_type
}
export type TVGtypeSignature_index$ = TVTGtypeSignature_index$

export type TNGtypeSignature_index$ = TAnnotatedType<TVGtypeSignature_index$>
export type TVTGtypeSignature_index = TNGtypeSignature_index$
export type TVGtypeSignature_index = TVTGtypeSignature_index
export type TVTGtypeSignature_method$_name = TGidentifier
export type TVGtypeSignature_method$_name = TVTGtypeSignature_method$_name
export type TVTGtypeSignature_method$_definition = TGfunctionDefinition
export type TVGtypeSignature_method$_definition = TVTGtypeSignature_method$_definition
export type TVTGtypeSignature_method$ = {
    readonly "name":  TVGtypeSignature_method$_name
    readonly "definition":  TVGtypeSignature_method$_definition
}
export type TVGtypeSignature_method$ = TVTGtypeSignature_method$

export type TNGtypeSignature_method$ = TAnnotatedType<TVGtypeSignature_method$>
export type TVTGtypeSignature_method = TNGtypeSignature_method$
export type TVGtypeSignature_method = TVTGtypeSignature_method
export type TVTGtypeSignature_property$_modifiers = TGmodifiers
export type TVGtypeSignature_property$_modifiers = TVTGtypeSignature_property$_modifiers
export type TVTGtypeSignature_property$_name = TGidentifierOrStringLiteral
export type TVGtypeSignature_property$_name = TVTGtypeSignature_property$_name

export type TNGtypeSignature_property$_questionToken$ = uast.TDetails
export type TVTGtypeSignature_property$_questionToken = TNGtypeSignature_property$_questionToken$
export type TVGtypeSignature_property$_questionToken = null | TVTGtypeSignature_property$_questionToken
export type TVTGtypeSignature_property$_type = TGtype
export type TVGtypeSignature_property$_type = null | TVTGtypeSignature_property$_type
export type TVTGtypeSignature_property$ = {
    readonly "modifiers":  TVGtypeSignature_property$_modifiers
    readonly "name":  TVGtypeSignature_property$_name
    readonly "questionToken":  TVGtypeSignature_property$_questionToken
    readonly "type":  TVGtypeSignature_property$_type
}
export type TVGtypeSignature_property$ = TVTGtypeSignature_property$

export type TNGtypeSignature_property$ = TAnnotatedType<TVGtypeSignature_property$>
export type TVTGtypeSignature_property = TNGtypeSignature_property$
export type TVGtypeSignature_property = TVTGtypeSignature_property
export type TVTGtypeSignature = 
    | [ "index", TVGtypeSignature_index]
    | [ "method", TVGtypeSignature_method]
    | [ "property", TVGtypeSignature_property]
export type TGtypeSignature =  TVTGtypeSignature
export type TVTGvariableDeclaration$_identifier = TGidentifier
export type TVGvariableDeclaration$_identifier = TVTGvariableDeclaration$_identifier
export type TVTGvariableDeclaration$_type = TGtype
export type TVGvariableDeclaration$_type = null | TVTGvariableDeclaration$_type
export type TVTGvariableDeclaration$_expression = TGexpression
export type TVGvariableDeclaration$_expression = null | TVTGvariableDeclaration$_expression
export type TVTGvariableDeclaration$ = {
    readonly "identifier":  TVGvariableDeclaration$_identifier
    readonly "type":  TVGvariableDeclaration$_type
    readonly "expression":  TVGvariableDeclaration$_expression
}
export type TVGvariableDeclaration$ = TVTGvariableDeclaration$

export type TNGvariableDeclaration$ = TAnnotatedType<TVGvariableDeclaration$>
export type TVTGvariableDeclaration = TNGvariableDeclaration$
export type TGvariableDeclaration =  TVTGvariableDeclaration
export type TVTGvariableDeclarationList$ = TGvariableDeclaration
export type TVGvariableDeclarationList$ = pt.Array<TVTGvariableDeclarationList$>

export type TNGvariableDeclarationList$ = TAnnotatedType<TVGvariableDeclarationList$>
export type TVTGvariableDeclarationList = TNGvariableDeclarationList$
export type TGvariableDeclarationList =  TVTGvariableDeclarationList
export type TVTroot_statements = TGstatements
export type TVroot_statements = TVTroot_statements

export type TNroot_endOfFile$ = uast.TDetails
export type TVTroot_endOfFile = TNroot_endOfFile$
export type TVroot_endOfFile = TVTroot_endOfFile
export type TVTroot = {
    readonly "statements":  TVroot_statements
    readonly "endOfFile":  TVroot_endOfFile
}
export type TVroot = TVTroot

export type TNroot = TAnnotatedType<TVroot>
export type TRoot = TNroot