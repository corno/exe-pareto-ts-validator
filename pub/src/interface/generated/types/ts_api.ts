import * as pt from "pareto-core-types"

export type TAnnotatedString<Annotation> = { readonly "annotation": Annotation; readonly "value": string }
export type TAnnotatedType<Annotation, Type> = { readonly "annotation": Annotation; readonly "content": Type }
export type TVTGvariableDeclarationList$<Annotation> = TGvariableDeclaration<Annotation>
export type TVGvariableDeclarationList$<Annotation> = pt.Array<TVTGvariableDeclarationList$<Annotation>>

export type TNGvariableDeclarationList$<Annotation> = TAnnotatedType<Annotation, TVGvariableDeclarationList$<Annotation>>
export type TVTGvariableDeclarationList<Annotation> = TNGvariableDeclarationList$<Annotation>
export type TGvariableDeclarationList<Annotation> =  TVTGvariableDeclarationList<Annotation>
export type TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation> = TGidentifier<Annotation>
export type TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation> = TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>

export type TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation> = TAnnotatedType<Annotation, TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>>
export type TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement<Annotation> = TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement$<Annotation>
export type TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement<Annotation> = TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement<Annotation>

export type TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$<Annotation> = Annotation
export type TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted<Annotation> = TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted$<Annotation>
export type TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted<Annotation> = TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted<Annotation>
export type TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation> = 
    | [ "bindingElement", TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_bindingElement<Annotation>]
    | [ "omitted", TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$_omitted<Annotation>]
export type TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation> = pt.Array<TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>>

export type TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation> = TAnnotatedType<Annotation, TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>>
export type TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern<Annotation> = TNGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern$<Annotation>
export type TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern<Annotation> = TVTGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern<Annotation>
export type TVTGvariableDeclaration$_nameOrArrayBinding_identifier<Annotation> = TGidentifier<Annotation>
export type TVGvariableDeclaration$_nameOrArrayBinding_identifier<Annotation> = TVTGvariableDeclaration$_nameOrArrayBinding_identifier<Annotation>
export type TVTGvariableDeclaration$_nameOrArrayBinding<Annotation> = 
    | [ "arrayBindingPattern", TVGvariableDeclaration$_nameOrArrayBinding_arrayBindingPattern<Annotation>]
    | [ "identifier", TVGvariableDeclaration$_nameOrArrayBinding_identifier<Annotation>]
export type TVGvariableDeclaration$_nameOrArrayBinding<Annotation> = TVTGvariableDeclaration$_nameOrArrayBinding<Annotation>
export type TVTGvariableDeclaration$_type<Annotation> = TGtype<Annotation>
export type TVGvariableDeclaration$_type<Annotation> = null | TVTGvariableDeclaration$_type<Annotation>
export type TVTGvariableDeclaration$_expression<Annotation> = TGexpression<Annotation>
export type TVGvariableDeclaration$_expression<Annotation> = null | TVTGvariableDeclaration$_expression<Annotation>
export type TVTGvariableDeclaration$<Annotation> = {
    readonly "nameOrArrayBinding":  TVGvariableDeclaration$_nameOrArrayBinding<Annotation>
    readonly "type":  TVGvariableDeclaration$_type<Annotation>
    readonly "expression":  TVGvariableDeclaration$_expression<Annotation>
}
export type TVGvariableDeclaration$<Annotation> = TVTGvariableDeclaration$<Annotation>

export type TNGvariableDeclaration$<Annotation> = TAnnotatedType<Annotation, TVGvariableDeclaration$<Annotation>>
export type TVTGvariableDeclaration<Annotation> = TNGvariableDeclaration$<Annotation>
export type TGvariableDeclaration<Annotation> =  TVTGvariableDeclaration<Annotation>
export type TVTGtypeSignature_property$_modifiers<Annotation> = TGmodifier<Annotation>
export type TVGtypeSignature_property$_modifiers<Annotation> = pt.Array<TVTGtypeSignature_property$_modifiers<Annotation>>
export type TVTGtypeSignature_property$_name<Annotation> = TGidentifierOrStringLiteral<Annotation>
export type TVGtypeSignature_property$_name<Annotation> = TVTGtypeSignature_property$_name<Annotation>

export type TNGtypeSignature_property$_quesionToken$<Annotation> = Annotation
export type TVTGtypeSignature_property$_quesionToken<Annotation> = TNGtypeSignature_property$_quesionToken$<Annotation>
export type TVGtypeSignature_property$_quesionToken<Annotation> = null | TVTGtypeSignature_property$_quesionToken<Annotation>
export type TVTGtypeSignature_property$_type<Annotation> = TGtype<Annotation>
export type TVGtypeSignature_property$_type<Annotation> = null | TVTGtypeSignature_property$_type<Annotation>
export type TVTGtypeSignature_property$<Annotation> = {
    readonly "modifiers":  TVGtypeSignature_property$_modifiers<Annotation>
    readonly "name":  TVGtypeSignature_property$_name<Annotation>
    readonly "quesionToken":  TVGtypeSignature_property$_quesionToken<Annotation>
    readonly "type":  TVGtypeSignature_property$_type<Annotation>
}
export type TVGtypeSignature_property$<Annotation> = TVTGtypeSignature_property$<Annotation>

export type TNGtypeSignature_property$<Annotation> = TAnnotatedType<Annotation, TVGtypeSignature_property$<Annotation>>
export type TVTGtypeSignature_property<Annotation> = TNGtypeSignature_property$<Annotation>
export type TVGtypeSignature_property<Annotation> = TVTGtypeSignature_property<Annotation>
export type TVTGtypeSignature_method$_name<Annotation> = TGidentifier<Annotation>
export type TVGtypeSignature_method$_name<Annotation> = TVTGtypeSignature_method$_name<Annotation>
export type TVTGtypeSignature_method$_definition<Annotation> = TGfunctionDefinition<Annotation>
export type TVGtypeSignature_method$_definition<Annotation> = TVTGtypeSignature_method$_definition<Annotation>
export type TVTGtypeSignature_method$<Annotation> = {
    readonly "name":  TVGtypeSignature_method$_name<Annotation>
    readonly "definition":  TVGtypeSignature_method$_definition<Annotation>
}
export type TVGtypeSignature_method$<Annotation> = TVTGtypeSignature_method$<Annotation>

export type TNGtypeSignature_method$<Annotation> = TAnnotatedType<Annotation, TVGtypeSignature_method$<Annotation>>
export type TVTGtypeSignature_method<Annotation> = TNGtypeSignature_method$<Annotation>
export type TVGtypeSignature_method<Annotation> = TVTGtypeSignature_method<Annotation>
export type TVTGtypeSignature<Annotation> = 
    | [ "property", TVGtypeSignature_property<Annotation>]
    | [ "method", TVGtypeSignature_method<Annotation>]
export type TGtypeSignature<Annotation> =  TVTGtypeSignature<Annotation>
export type TVTGtypeParameter$<Annotation> = TGidentifier<Annotation>
export type TVGtypeParameter$<Annotation> = TVTGtypeParameter$<Annotation>

export type TNGtypeParameter$<Annotation> = TAnnotatedType<Annotation, TVGtypeParameter$<Annotation>>
export type TVTGtypeParameter<Annotation> = TNGtypeParameter$<Annotation>
export type TGtypeParameter<Annotation> =  TVTGtypeParameter<Annotation>

export type TNGtype_void$<Annotation> = Annotation
export type TVTGtype_void<Annotation> = TNGtype_void$<Annotation>
export type TVGtype_void<Annotation> = TVTGtype_void<Annotation>
export type TVTGtype_union$<Annotation> = TGtype<Annotation>
export type TVGtype_union$<Annotation> = pt.Array<TVTGtype_union$<Annotation>>

export type TNGtype_union$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$<Annotation>>
export type TVTGtype_union<Annotation> = TNGtype_union$<Annotation>
export type TVGtype_union<Annotation> = TVTGtype_union<Annotation>

export type TNGtype_undefined$<Annotation> = Annotation
export type TVTGtype_undefined<Annotation> = TNGtype_undefined$<Annotation>
export type TVGtype_undefined<Annotation> = TVTGtype_undefined<Annotation>
export type TVTGtype_typeReference$_x_qualifiedName$_context<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_x_qualifiedName$_context<Annotation> = TVTGtype_typeReference$_x_qualifiedName$_context<Annotation>
export type TVTGtype_typeReference$_x_qualifiedName$_type<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_x_qualifiedName$_type<Annotation> = TVTGtype_typeReference$_x_qualifiedName$_type<Annotation>
export type TVTGtype_typeReference$_x_qualifiedName$<Annotation> = {
    readonly "context":  TVGtype_typeReference$_x_qualifiedName$_context<Annotation>
    readonly "type":  TVGtype_typeReference$_x_qualifiedName$_type<Annotation>
}
export type TVGtype_typeReference$_x_qualifiedName$<Annotation> = TVTGtype_typeReference$_x_qualifiedName$<Annotation>

export type TNGtype_typeReference$_x_qualifiedName$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeReference$_x_qualifiedName$<Annotation>>
export type TVTGtype_typeReference$_x_qualifiedName<Annotation> = TNGtype_typeReference$_x_qualifiedName$<Annotation>
export type TVGtype_typeReference$_x_qualifiedName<Annotation> = TVTGtype_typeReference$_x_qualifiedName<Annotation>
export type TVTGtype_typeReference$_x_identifier<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_x_identifier<Annotation> = TVTGtype_typeReference$_x_identifier<Annotation>
export type TVTGtype_typeReference$_x<Annotation> = 
    | [ "qualifiedName", TVGtype_typeReference$_x_qualifiedName<Annotation>]
    | [ "identifier", TVGtype_typeReference$_x_identifier<Annotation>]
export type TVGtype_typeReference$_x<Annotation> = TVTGtype_typeReference$_x<Annotation>
export type TVTGtype_typeReference$_parameters<Annotation> = TGtype<Annotation>
export type TVGtype_typeReference$_parameters<Annotation> = pt.Array<TVTGtype_typeReference$_parameters<Annotation>>
export type TVTGtype_typeReference$<Annotation> = {
    readonly "x":  TVGtype_typeReference$_x<Annotation>
    readonly "parameters":  TVGtype_typeReference$_parameters<Annotation>
}
export type TVGtype_typeReference$<Annotation> = TVTGtype_typeReference$<Annotation>

export type TNGtype_typeReference$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeReference$<Annotation>>
export type TVTGtype_typeReference<Annotation> = TNGtype_typeReference$<Annotation>
export type TVGtype_typeReference<Annotation> = TVTGtype_typeReference<Annotation>

export type TNGtype_string$<Annotation> = Annotation
export type TVTGtype_string<Annotation> = TNGtype_string$<Annotation>
export type TVGtype_string<Annotation> = TVTGtype_string<Annotation>
export type TVTGtype_typeLiteral$<Annotation> = TGtypeSignature<Annotation>
export type TVGtype_typeLiteral$<Annotation> = pt.Array<TVTGtype_typeLiteral$<Annotation>>

export type TNGtype_typeLiteral$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$<Annotation>>
export type TVTGtype_typeLiteral<Annotation> = TNGtype_typeLiteral$<Annotation>
export type TVGtype_typeLiteral<Annotation> = TVTGtype_typeLiteral<Annotation>
export type TVTGtype_tuple$<Annotation> = TGtype<Annotation>
export type TVGtype_tuple$<Annotation> = pt.Array<TVTGtype_tuple$<Annotation>>

export type TNGtype_tuple$<Annotation> = TAnnotatedType<Annotation, TVGtype_tuple$<Annotation>>
export type TVTGtype_tuple<Annotation> = TNGtype_tuple$<Annotation>
export type TVGtype_tuple<Annotation> = TVTGtype_tuple<Annotation>
export type TVTGtype_optional$<Annotation> = TGtype<Annotation>
export type TVGtype_optional$<Annotation> = TVTGtype_optional$<Annotation>

export type TNGtype_optional$<Annotation> = TAnnotatedType<Annotation, TVGtype_optional$<Annotation>>
export type TVTGtype_optional<Annotation> = TNGtype_optional$<Annotation>
export type TVGtype_optional<Annotation> = TVTGtype_optional<Annotation>

export type TNGtype_number$<Annotation> = Annotation
export type TVTGtype_number<Annotation> = TNGtype_number$<Annotation>
export type TVGtype_number<Annotation> = TVTGtype_number<Annotation>
export type TVTGtype_parenthesized$<Annotation> = TGtype<Annotation>
export type TVGtype_parenthesized$<Annotation> = TVTGtype_parenthesized$<Annotation>

export type TNGtype_parenthesized$<Annotation> = TAnnotatedType<Annotation, TVGtype_parenthesized$<Annotation>>
export type TVTGtype_parenthesized<Annotation> = TNGtype_parenthesized$<Annotation>
export type TVGtype_parenthesized<Annotation> = TVTGtype_parenthesized<Annotation>
export type TVTGtype_literal$_string<Annotation> = TGstringLiteral<Annotation>
export type TVGtype_literal$_string<Annotation> = TVTGtype_literal$_string<Annotation>

export type TNGtype_literal$_null$<Annotation> = Annotation
export type TVTGtype_literal$_null<Annotation> = TNGtype_literal$_null$<Annotation>
export type TVGtype_literal$_null<Annotation> = TVTGtype_literal$_null<Annotation>
export type TVTGtype_literal$<Annotation> = 
    | [ "string", TVGtype_literal$_string<Annotation>]
    | [ "null", TVGtype_literal$_null<Annotation>]
export type TVGtype_literal$<Annotation> = TVTGtype_literal$<Annotation>

export type TNGtype_literal$<Annotation> = TAnnotatedType<Annotation, TVGtype_literal$<Annotation>>
export type TVTGtype_literal<Annotation> = TNGtype_literal$<Annotation>
export type TVGtype_literal<Annotation> = TVTGtype_literal<Annotation>
export type TVTGtype_function$_typeParameters<Annotation> = TGtypeParameter<Annotation>
export type TVGtype_function$_typeParameters<Annotation> = pt.Array<TVTGtype_function$_typeParameters<Annotation>>
export type TVTGtype_function$_parameters<Annotation> = TGparameter<Annotation>
export type TVGtype_function$_parameters<Annotation> = pt.Array<TVTGtype_function$_parameters<Annotation>>
export type TVTGtype_function$_returnType<Annotation> = TGtype<Annotation>
export type TVGtype_function$_returnType<Annotation> = null | TVTGtype_function$_returnType<Annotation>
export type TVTGtype_function$<Annotation> = {
    readonly "typeParameters":  TVGtype_function$_typeParameters<Annotation>
    readonly "parameters":  TVGtype_function$_parameters<Annotation>
    readonly "returnType":  TVGtype_function$_returnType<Annotation>
}
export type TVGtype_function$<Annotation> = TVTGtype_function$<Annotation>

export type TNGtype_function$<Annotation> = TAnnotatedType<Annotation, TVGtype_function$<Annotation>>
export type TVTGtype_function<Annotation> = TNGtype_function$<Annotation>
export type TVGtype_function<Annotation> = TVTGtype_function<Annotation>

export type TNGtype_boolean$<Annotation> = Annotation
export type TVTGtype_boolean<Annotation> = TNGtype_boolean$<Annotation>
export type TVGtype_boolean<Annotation> = TVTGtype_boolean<Annotation>
export type TVTGtype_array$<Annotation> = TGtype<Annotation>
export type TVGtype_array$<Annotation> = TVTGtype_array$<Annotation>

export type TNGtype_array$<Annotation> = TAnnotatedType<Annotation, TVGtype_array$<Annotation>>
export type TVTGtype_array<Annotation> = TNGtype_array$<Annotation>
export type TVGtype_array<Annotation> = TVTGtype_array<Annotation>
export type TVTGtype<Annotation> = 
    | [ "void", TVGtype_void<Annotation>]
    | [ "union", TVGtype_union<Annotation>]
    | [ "undefined", TVGtype_undefined<Annotation>]
    | [ "typeReference", TVGtype_typeReference<Annotation>]
    | [ "string", TVGtype_string<Annotation>]
    | [ "typeLiteral", TVGtype_typeLiteral<Annotation>]
    | [ "tuple", TVGtype_tuple<Annotation>]
    | [ "optional", TVGtype_optional<Annotation>]
    | [ "number", TVGtype_number<Annotation>]
    | [ "parenthesized", TVGtype_parenthesized<Annotation>]
    | [ "literal", TVGtype_literal<Annotation>]
    | [ "function", TVGtype_function<Annotation>]
    | [ "boolean", TVGtype_boolean<Annotation>]
    | [ "array", TVGtype_array<Annotation>]
export type TGtype<Annotation> =  TVTGtype<Annotation>

export type TNGstringLiteral$<Annotation> = TAnnotatedString<Annotation>
export type TVTGstringLiteral<Annotation> = TNGstringLiteral$<Annotation>
export type TGstringLiteral<Annotation> =  TVTGstringLiteral<Annotation>
export type TVTGstatement_variable$_modifiers<Annotation> = TGmodifier<Annotation>
export type TVGstatement_variable$_modifiers<Annotation> = pt.Array<TVTGstatement_variable$_modifiers<Annotation>>
export type TVTGstatement_variable$_variableDeclarationList<Annotation> = TGvariableDeclarationList<Annotation>
export type TVGstatement_variable$_variableDeclarationList<Annotation> = TVTGstatement_variable$_variableDeclarationList<Annotation>
export type TVTGstatement_variable$<Annotation> = {
    readonly "modifiers":  TVGstatement_variable$_modifiers<Annotation>
    readonly "variableDeclarationList":  TVGstatement_variable$_variableDeclarationList<Annotation>
}
export type TVGstatement_variable$<Annotation> = TVTGstatement_variable$<Annotation>

export type TNGstatement_variable$<Annotation> = TAnnotatedType<Annotation, TVGstatement_variable$<Annotation>>
export type TVTGstatement_variable<Annotation> = TNGstatement_variable$<Annotation>
export type TVGstatement_variable<Annotation> = TVTGstatement_variable<Annotation>
export type TVTGstatement_typeAlias$_modifiers<Annotation> = TGmodifier<Annotation>
export type TVGstatement_typeAlias$_modifiers<Annotation> = pt.Array<TVTGstatement_typeAlias$_modifiers<Annotation>>
export type TVTGstatement_typeAlias$_name<Annotation> = TGidentifier<Annotation>
export type TVGstatement_typeAlias$_name<Annotation> = TVTGstatement_typeAlias$_name<Annotation>
export type TVTGstatement_typeAlias$_typeParameters<Annotation> = TGtypeParameter<Annotation>
export type TVGstatement_typeAlias$_typeParameters<Annotation> = pt.Array<TVTGstatement_typeAlias$_typeParameters<Annotation>>
export type TVTGstatement_typeAlias$_type<Annotation> = TGtype<Annotation>
export type TVGstatement_typeAlias$_type<Annotation> = TVTGstatement_typeAlias$_type<Annotation>
export type TVTGstatement_typeAlias$<Annotation> = {
    readonly "modifiers":  TVGstatement_typeAlias$_modifiers<Annotation>
    readonly "name":  TVGstatement_typeAlias$_name<Annotation>
    readonly "typeParameters":  TVGstatement_typeAlias$_typeParameters<Annotation>
    readonly "type":  TVGstatement_typeAlias$_type<Annotation>
}
export type TVGstatement_typeAlias$<Annotation> = TVTGstatement_typeAlias$<Annotation>

export type TNGstatement_typeAlias$<Annotation> = TAnnotatedType<Annotation, TVGstatement_typeAlias$<Annotation>>
export type TVTGstatement_typeAlias<Annotation> = TNGstatement_typeAlias$<Annotation>
export type TVGstatement_typeAlias<Annotation> = TVTGstatement_typeAlias<Annotation>
export type TVTGstatement_switch$_expression<Annotation> = TGexpression<Annotation>
export type TVGstatement_switch$_expression<Annotation> = TVTGstatement_switch$_expression<Annotation>
export type TVTGstatement_switch$_caseBlock$_default$<Annotation> = TGstatement<Annotation>
export type TVGstatement_switch$_caseBlock$_default$<Annotation> = pt.Array<TVTGstatement_switch$_caseBlock$_default$<Annotation>>

export type TNGstatement_switch$_caseBlock$_default$<Annotation> = TAnnotatedType<Annotation, TVGstatement_switch$_caseBlock$_default$<Annotation>>
export type TVTGstatement_switch$_caseBlock$_default<Annotation> = TNGstatement_switch$_caseBlock$_default$<Annotation>
export type TVGstatement_switch$_caseBlock$_default<Annotation> = TVTGstatement_switch$_caseBlock$_default<Annotation>
export type TVTGstatement_switch$_caseBlock$_case$_case<Annotation> = TGexpression<Annotation>
export type TVGstatement_switch$_caseBlock$_case$_case<Annotation> = TVTGstatement_switch$_caseBlock$_case$_case<Annotation>
export type TVTGstatement_switch$_caseBlock$_case$_statements<Annotation> = TGstatement<Annotation>
export type TVGstatement_switch$_caseBlock$_case$_statements<Annotation> = pt.Array<TVTGstatement_switch$_caseBlock$_case$_statements<Annotation>>
export type TVTGstatement_switch$_caseBlock$_case$<Annotation> = {
    readonly "case":  TVGstatement_switch$_caseBlock$_case$_case<Annotation>
    readonly "statements":  TVGstatement_switch$_caseBlock$_case$_statements<Annotation>
}
export type TVGstatement_switch$_caseBlock$_case$<Annotation> = TVTGstatement_switch$_caseBlock$_case$<Annotation>

export type TNGstatement_switch$_caseBlock$_case$<Annotation> = TAnnotatedType<Annotation, TVGstatement_switch$_caseBlock$_case$<Annotation>>
export type TVTGstatement_switch$_caseBlock$_case<Annotation> = TNGstatement_switch$_caseBlock$_case$<Annotation>
export type TVGstatement_switch$_caseBlock$_case<Annotation> = TVTGstatement_switch$_caseBlock$_case<Annotation>
export type TVTGstatement_switch$_caseBlock$<Annotation> = 
    | [ "default", TVGstatement_switch$_caseBlock$_default<Annotation>]
    | [ "case", TVGstatement_switch$_caseBlock$_case<Annotation>]
export type TVGstatement_switch$_caseBlock$<Annotation> = pt.Array<TVTGstatement_switch$_caseBlock$<Annotation>>

export type TNGstatement_switch$_caseBlock$<Annotation> = TAnnotatedType<Annotation, TVGstatement_switch$_caseBlock$<Annotation>>
export type TVTGstatement_switch$_caseBlock<Annotation> = TNGstatement_switch$_caseBlock$<Annotation>
export type TVGstatement_switch$_caseBlock<Annotation> = TVTGstatement_switch$_caseBlock<Annotation>
export type TVTGstatement_switch$<Annotation> = {
    readonly "expression":  TVGstatement_switch$_expression<Annotation>
    readonly "caseBlock":  TVGstatement_switch$_caseBlock<Annotation>
}
export type TVGstatement_switch$<Annotation> = TVTGstatement_switch$<Annotation>

export type TNGstatement_switch$<Annotation> = TAnnotatedType<Annotation, TVGstatement_switch$<Annotation>>
export type TVTGstatement_switch<Annotation> = TNGstatement_switch$<Annotation>
export type TVGstatement_switch<Annotation> = TVTGstatement_switch<Annotation>
export type TVTGstatement_return$<Annotation> = TGexpression<Annotation>
export type TVGstatement_return$<Annotation> = null | TVTGstatement_return$<Annotation>

export type TNGstatement_return$<Annotation> = TAnnotatedType<Annotation, TVGstatement_return$<Annotation>>
export type TVTGstatement_return<Annotation> = TNGstatement_return$<Annotation>
export type TVGstatement_return<Annotation> = TVTGstatement_return<Annotation>
export type TVTGstatement_interface$_modifiers<Annotation> = TGmodifier<Annotation>
export type TVGstatement_interface$_modifiers<Annotation> = pt.Array<TVTGstatement_interface$_modifiers<Annotation>>
export type TVTGstatement_interface$_name<Annotation> = TGidentifier<Annotation>
export type TVGstatement_interface$_name<Annotation> = TVTGstatement_interface$_name<Annotation>
export type TVTGstatement_interface$_typeParameters<Annotation> = TGtypeParameter<Annotation>
export type TVGstatement_interface$_typeParameters<Annotation> = pt.Array<TVTGstatement_interface$_typeParameters<Annotation>>
export type TVTGstatement_interface$_signature<Annotation> = TGtypeSignature<Annotation>
export type TVGstatement_interface$_signature<Annotation> = pt.Array<TVTGstatement_interface$_signature<Annotation>>
export type TVTGstatement_interface$<Annotation> = {
    readonly "modifiers":  TVGstatement_interface$_modifiers<Annotation>
    readonly "name":  TVGstatement_interface$_name<Annotation>
    readonly "typeParameters":  TVGstatement_interface$_typeParameters<Annotation>
    readonly "signature":  TVGstatement_interface$_signature<Annotation>
}
export type TVGstatement_interface$<Annotation> = TVTGstatement_interface$<Annotation>

export type TNGstatement_interface$<Annotation> = TAnnotatedType<Annotation, TVGstatement_interface$<Annotation>>
export type TVTGstatement_interface<Annotation> = TNGstatement_interface$<Annotation>
export type TVGstatement_interface<Annotation> = TVTGstatement_interface<Annotation>
export type TVTGstatement_import$_clause$_named$$_name<Annotation> = TGidentifier<Annotation>
export type TVGstatement_import$_clause$_named$$_name<Annotation> = TVTGstatement_import$_clause$_named$$_name<Annotation>
export type TVTGstatement_import$_clause$_named$$_as<Annotation> = TGidentifier<Annotation>
export type TVGstatement_import$_clause$_named$$_as<Annotation> = null | TVTGstatement_import$_clause$_named$$_as<Annotation>
export type TVTGstatement_import$_clause$_named$$<Annotation> = {
    readonly "name":  TVGstatement_import$_clause$_named$$_name<Annotation>
    readonly "as":  TVGstatement_import$_clause$_named$$_as<Annotation>
}
export type TVGstatement_import$_clause$_named$$<Annotation> = TVTGstatement_import$_clause$_named$$<Annotation>

export type TNGstatement_import$_clause$_named$$<Annotation> = TAnnotatedType<Annotation, TVGstatement_import$_clause$_named$$<Annotation>>
export type TVTGstatement_import$_clause$_named$<Annotation> = TNGstatement_import$_clause$_named$$<Annotation>
export type TVGstatement_import$_clause$_named$<Annotation> = pt.Array<TVTGstatement_import$_clause$_named$<Annotation>>

export type TNGstatement_import$_clause$_named$<Annotation> = TAnnotatedType<Annotation, TVGstatement_import$_clause$_named$<Annotation>>
export type TVTGstatement_import$_clause$_named<Annotation> = TNGstatement_import$_clause$_named$<Annotation>
export type TVGstatement_import$_clause$_named<Annotation> = TVTGstatement_import$_clause$_named<Annotation>
export type TVTGstatement_import$_clause$_namespace$<Annotation> = TGidentifier<Annotation>
export type TVGstatement_import$_clause$_namespace$<Annotation> = TVTGstatement_import$_clause$_namespace$<Annotation>

export type TNGstatement_import$_clause$_namespace$<Annotation> = TAnnotatedType<Annotation, TVGstatement_import$_clause$_namespace$<Annotation>>
export type TVTGstatement_import$_clause$_namespace<Annotation> = TNGstatement_import$_clause$_namespace$<Annotation>
export type TVGstatement_import$_clause$_namespace<Annotation> = TVTGstatement_import$_clause$_namespace<Annotation>
export type TVTGstatement_import$_clause$<Annotation> = 
    | [ "named", TVGstatement_import$_clause$_named<Annotation>]
    | [ "namespace", TVGstatement_import$_clause$_namespace<Annotation>]
export type TVGstatement_import$_clause$<Annotation> = TVTGstatement_import$_clause$<Annotation>

export type TNGstatement_import$_clause$<Annotation> = TAnnotatedType<Annotation, TVGstatement_import$_clause$<Annotation>>
export type TVTGstatement_import$_clause<Annotation> = TNGstatement_import$_clause$<Annotation>
export type TVGstatement_import$_clause<Annotation> = TVTGstatement_import$_clause<Annotation>
export type TVTGstatement_import$_file<Annotation> = TGstringLiteral<Annotation>
export type TVGstatement_import$_file<Annotation> = TVTGstatement_import$_file<Annotation>
export type TVTGstatement_import$<Annotation> = {
    readonly "clause":  TVGstatement_import$_clause<Annotation>
    readonly "file":  TVGstatement_import$_file<Annotation>
}
export type TVGstatement_import$<Annotation> = TVTGstatement_import$<Annotation>

export type TNGstatement_import$<Annotation> = TAnnotatedType<Annotation, TVGstatement_import$<Annotation>>
export type TVTGstatement_import<Annotation> = TNGstatement_import$<Annotation>
export type TVGstatement_import<Annotation> = TVTGstatement_import<Annotation>
export type TVTGstatement_if$_expression<Annotation> = TGexpression<Annotation>
export type TVGstatement_if$_expression<Annotation> = TVTGstatement_if$_expression<Annotation>
export type TVTGstatement_if$_thenStatement<Annotation> = TGstatement<Annotation>
export type TVGstatement_if$_thenStatement<Annotation> = TVTGstatement_if$_thenStatement<Annotation>
export type TVTGstatement_if$_elseStatement<Annotation> = TGstatement<Annotation>
export type TVGstatement_if$_elseStatement<Annotation> = null | TVTGstatement_if$_elseStatement<Annotation>
export type TVTGstatement_if$<Annotation> = {
    readonly "expression":  TVGstatement_if$_expression<Annotation>
    readonly "thenStatement":  TVGstatement_if$_thenStatement<Annotation>
    readonly "elseStatement":  TVGstatement_if$_elseStatement<Annotation>
}
export type TVGstatement_if$<Annotation> = TVTGstatement_if$<Annotation>

export type TNGstatement_if$<Annotation> = TAnnotatedType<Annotation, TVGstatement_if$<Annotation>>
export type TVTGstatement_if<Annotation> = TNGstatement_if$<Annotation>
export type TVGstatement_if<Annotation> = TVTGstatement_if<Annotation>
export type TVTGstatement_function$_modifiers<Annotation> = TGmodifier<Annotation>
export type TVGstatement_function$_modifiers<Annotation> = pt.Array<TVTGstatement_function$_modifiers<Annotation>>
export type TVTGstatement_function$_name<Annotation> = TGidentifier<Annotation>
export type TVGstatement_function$_name<Annotation> = TVTGstatement_function$_name<Annotation>
export type TVTGstatement_function$_definition<Annotation> = TGfunctionDefinition<Annotation>
export type TVGstatement_function$_definition<Annotation> = TVTGstatement_function$_definition<Annotation>
export type TVTGstatement_function$_block<Annotation> = TGblock<Annotation>
export type TVGstatement_function$_block<Annotation> = null | TVTGstatement_function$_block<Annotation>
export type TVTGstatement_function$<Annotation> = {
    readonly "modifiers":  TVGstatement_function$_modifiers<Annotation>
    readonly "name":  TVGstatement_function$_name<Annotation>
    readonly "definition":  TVGstatement_function$_definition<Annotation>
    readonly "block":  TVGstatement_function$_block<Annotation>
}
export type TVGstatement_function$<Annotation> = TVTGstatement_function$<Annotation>

export type TNGstatement_function$<Annotation> = TAnnotatedType<Annotation, TVGstatement_function$<Annotation>>
export type TVTGstatement_function<Annotation> = TNGstatement_function$<Annotation>
export type TVGstatement_function<Annotation> = TVTGstatement_function<Annotation>
export type TVTGstatement_expression$<Annotation> = TGexpression<Annotation>
export type TVGstatement_expression$<Annotation> = TVTGstatement_expression$<Annotation>

export type TNGstatement_expression$<Annotation> = TAnnotatedType<Annotation, TVGstatement_expression$<Annotation>>
export type TVTGstatement_expression<Annotation> = TNGstatement_expression$<Annotation>
export type TVGstatement_expression<Annotation> = TVTGstatement_expression<Annotation>
export type TVTGstatement_export$<Annotation> = TGstringLiteral<Annotation>
export type TVGstatement_export$<Annotation> = TVTGstatement_export$<Annotation>

export type TNGstatement_export$<Annotation> = TAnnotatedType<Annotation, TVGstatement_export$<Annotation>>
export type TVTGstatement_export<Annotation> = TNGstatement_export$<Annotation>
export type TVGstatement_export<Annotation> = TVTGstatement_export<Annotation>
export type TVTGstatement_break$<Annotation> = TGidentifier<Annotation>
export type TVGstatement_break$<Annotation> = null | TVTGstatement_break$<Annotation>

export type TNGstatement_break$<Annotation> = TAnnotatedType<Annotation, TVGstatement_break$<Annotation>>
export type TVTGstatement_break<Annotation> = TNGstatement_break$<Annotation>
export type TVGstatement_break<Annotation> = TVTGstatement_break<Annotation>
export type TVTGstatement_block<Annotation> = TGblock<Annotation>
export type TVGstatement_block<Annotation> = TVTGstatement_block<Annotation>
export type TVTGstatement<Annotation> = 
    | [ "variable", TVGstatement_variable<Annotation>]
    | [ "typeAlias", TVGstatement_typeAlias<Annotation>]
    | [ "switch", TVGstatement_switch<Annotation>]
    | [ "return", TVGstatement_return<Annotation>]
    | [ "interface", TVGstatement_interface<Annotation>]
    | [ "import", TVGstatement_import<Annotation>]
    | [ "if", TVGstatement_if<Annotation>]
    | [ "function", TVGstatement_function<Annotation>]
    | [ "expression", TVGstatement_expression<Annotation>]
    | [ "export", TVGstatement_export<Annotation>]
    | [ "break", TVGstatement_break<Annotation>]
    | [ "block", TVGstatement_block<Annotation>]
export type TGstatement<Annotation> =  TVTGstatement<Annotation>
export type TVTGparameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGparameter$_name<Annotation> = TVTGparameter$_name<Annotation>

export type TNGparameter$_questionToken$<Annotation> = Annotation
export type TVTGparameter$_questionToken<Annotation> = TNGparameter$_questionToken$<Annotation>
export type TVGparameter$_questionToken<Annotation> = null | TVTGparameter$_questionToken<Annotation>
export type TVTGparameter$_type<Annotation> = TGtype<Annotation>
export type TVGparameter$_type<Annotation> = null | TVTGparameter$_type<Annotation>
export type TVTGparameter$<Annotation> = {
    readonly "name":  TVGparameter$_name<Annotation>
    readonly "questionToken":  TVGparameter$_questionToken<Annotation>
    readonly "type":  TVGparameter$_type<Annotation>
}
export type TVGparameter$<Annotation> = TVTGparameter$<Annotation>

export type TNGparameter$<Annotation> = TAnnotatedType<Annotation, TVGparameter$<Annotation>>
export type TVTGparameter<Annotation> = TNGparameter$<Annotation>
export type TGparameter<Annotation> =  TVTGparameter<Annotation>

export type TNGnumericLiteral$<Annotation> = TAnnotatedString<Annotation>
export type TVTGnumericLiteral<Annotation> = TNGnumericLiteral$<Annotation>
export type TGnumericLiteral<Annotation> =  TVTGnumericLiteral<Annotation>

export type TNGmodifier_readonly$<Annotation> = Annotation
export type TVTGmodifier_readonly<Annotation> = TNGmodifier_readonly$<Annotation>
export type TVGmodifier_readonly<Annotation> = TVTGmodifier_readonly<Annotation>

export type TNGmodifier_export$<Annotation> = Annotation
export type TVTGmodifier_export<Annotation> = TNGmodifier_export$<Annotation>
export type TVGmodifier_export<Annotation> = TVTGmodifier_export<Annotation>
export type TVTGmodifier<Annotation> = 
    | [ "readonly", TVGmodifier_readonly<Annotation>]
    | [ "export", TVGmodifier_export<Annotation>]
export type TGmodifier<Annotation> =  TVTGmodifier<Annotation>
export type TVTGidentifierOrStringLiteral_stringLiteral<Annotation> = TGstringLiteral<Annotation>
export type TVGidentifierOrStringLiteral_stringLiteral<Annotation> = TVTGidentifierOrStringLiteral_stringLiteral<Annotation>
export type TVTGidentifierOrStringLiteral_identifier<Annotation> = TGidentifier<Annotation>
export type TVGidentifierOrStringLiteral_identifier<Annotation> = TVTGidentifierOrStringLiteral_identifier<Annotation>
export type TVTGidentifierOrStringLiteral<Annotation> = 
    | [ "stringLiteral", TVGidentifierOrStringLiteral_stringLiteral<Annotation>]
    | [ "identifier", TVGidentifierOrStringLiteral_identifier<Annotation>]
export type TGidentifierOrStringLiteral<Annotation> =  TVTGidentifierOrStringLiteral<Annotation>

export type TNGidentifier$<Annotation> = TAnnotatedString<Annotation>
export type TVTGidentifier<Annotation> = TNGidentifier$<Annotation>
export type TGidentifier<Annotation> =  TVTGidentifier<Annotation>
export type TVTGfunctionDefinition_typeParameters<Annotation> = TGtypeParameter<Annotation>
export type TVGfunctionDefinition_typeParameters<Annotation> = pt.Array<TVTGfunctionDefinition_typeParameters<Annotation>>
export type TVTGfunctionDefinition_parameters<Annotation> = TGparameter<Annotation>
export type TVGfunctionDefinition_parameters<Annotation> = pt.Array<TVTGfunctionDefinition_parameters<Annotation>>
export type TVTGfunctionDefinition_returnType<Annotation> = TGtype<Annotation>
export type TVGfunctionDefinition_returnType<Annotation> = null | TVTGfunctionDefinition_returnType<Annotation>
export type TVTGfunctionDefinition<Annotation> = {
    readonly "typeParameters":  TVGfunctionDefinition_typeParameters<Annotation>
    readonly "parameters":  TVGfunctionDefinition_parameters<Annotation>
    readonly "returnType":  TVGfunctionDefinition_returnType<Annotation>
}
export type TGfunctionDefinition<Annotation> =  TVTGfunctionDefinition<Annotation>

export type TNGexpression_true$<Annotation> = Annotation
export type TVTGexpression_true<Annotation> = TNGexpression_true$<Annotation>
export type TVGexpression_true<Annotation> = TVTGexpression_true<Annotation>

export type TNGexpression_template$_head$<Annotation> = TAnnotatedString<Annotation>
export type TVTGexpression_template$_head<Annotation> = TNGexpression_template$_head$<Annotation>
export type TVGexpression_template$_head<Annotation> = TVTGexpression_template$_head<Annotation>
export type TVTGexpression_template$_spans$_expression<Annotation> = TGexpression<Annotation>
export type TVGexpression_template$_spans$_expression<Annotation> = TVTGexpression_template$_spans$_expression<Annotation>

export type TNGexpression_template$_spans$_x_tail$<Annotation> = TAnnotatedString<Annotation>
export type TVTGexpression_template$_spans$_x_tail<Annotation> = TNGexpression_template$_spans$_x_tail$<Annotation>
export type TVGexpression_template$_spans$_x_tail<Annotation> = TVTGexpression_template$_spans$_x_tail<Annotation>

export type TNGexpression_template$_spans$_x_middle$<Annotation> = TAnnotatedString<Annotation>
export type TVTGexpression_template$_spans$_x_middle<Annotation> = TNGexpression_template$_spans$_x_middle$<Annotation>
export type TVGexpression_template$_spans$_x_middle<Annotation> = TVTGexpression_template$_spans$_x_middle<Annotation>
export type TVTGexpression_template$_spans$_x<Annotation> = 
    | [ "tail", TVGexpression_template$_spans$_x_tail<Annotation>]
    | [ "middle", TVGexpression_template$_spans$_x_middle<Annotation>]
export type TVGexpression_template$_spans$_x<Annotation> = TVTGexpression_template$_spans$_x<Annotation>
export type TVTGexpression_template$_spans$<Annotation> = {
    readonly "expression":  TVGexpression_template$_spans$_expression<Annotation>
    readonly "x":  TVGexpression_template$_spans$_x<Annotation>
}
export type TVGexpression_template$_spans$<Annotation> = TVTGexpression_template$_spans$<Annotation>

export type TNGexpression_template$_spans$<Annotation> = TAnnotatedType<Annotation, TVGexpression_template$_spans$<Annotation>>
export type TVTGexpression_template$_spans<Annotation> = TNGexpression_template$_spans$<Annotation>
export type TVGexpression_template$_spans<Annotation> = pt.Array<TVTGexpression_template$_spans<Annotation>>
export type TVTGexpression_template$<Annotation> = {
    readonly "head":  TVGexpression_template$_head<Annotation>
    readonly "spans":  TVGexpression_template$_spans<Annotation>
}
export type TVGexpression_template$<Annotation> = TVTGexpression_template$<Annotation>

export type TNGexpression_template$<Annotation> = TAnnotatedType<Annotation, TVGexpression_template$<Annotation>>
export type TVTGexpression_template<Annotation> = TNGexpression_template$<Annotation>
export type TVGexpression_template<Annotation> = TVTGexpression_template<Annotation>
export type TVTGexpression_stringLiteral<Annotation> = TGstringLiteral<Annotation>
export type TVGexpression_stringLiteral<Annotation> = TVTGexpression_stringLiteral<Annotation>
export type TVTGexpression_propertyAccess$_object<Annotation> = TGexpression<Annotation>
export type TVGexpression_propertyAccess$_object<Annotation> = TVTGexpression_propertyAccess$_object<Annotation>
export type TVTGexpression_propertyAccess$_property<Annotation> = TGexpression<Annotation>
export type TVGexpression_propertyAccess$_property<Annotation> = TVTGexpression_propertyAccess$_property<Annotation>
export type TVTGexpression_propertyAccess$<Annotation> = {
    readonly "object":  TVGexpression_propertyAccess$_object<Annotation>
    readonly "property":  TVGexpression_propertyAccess$_property<Annotation>
}
export type TVGexpression_propertyAccess$<Annotation> = TVTGexpression_propertyAccess$<Annotation>

export type TNGexpression_propertyAccess$<Annotation> = TAnnotatedType<Annotation, TVGexpression_propertyAccess$<Annotation>>
export type TVTGexpression_propertyAccess<Annotation> = TNGexpression_propertyAccess$<Annotation>
export type TVGexpression_propertyAccess<Annotation> = TVTGexpression_propertyAccess<Annotation>
export type TVTGexpression_prefixUnary$<Annotation> = TGexpression<Annotation>
export type TVGexpression_prefixUnary$<Annotation> = TVTGexpression_prefixUnary$<Annotation>

export type TNGexpression_prefixUnary$<Annotation> = TAnnotatedType<Annotation, TVGexpression_prefixUnary$<Annotation>>
export type TVTGexpression_prefixUnary<Annotation> = TNGexpression_prefixUnary$<Annotation>
export type TVGexpression_prefixUnary<Annotation> = TVTGexpression_prefixUnary<Annotation>
export type TVTGexpression_parenthesizedExpression$<Annotation> = TGexpression<Annotation>
export type TVGexpression_parenthesizedExpression$<Annotation> = TVTGexpression_parenthesizedExpression$<Annotation>

export type TNGexpression_parenthesizedExpression$<Annotation> = TAnnotatedType<Annotation, TVGexpression_parenthesizedExpression$<Annotation>>
export type TVTGexpression_parenthesizedExpression<Annotation> = TNGexpression_parenthesizedExpression$<Annotation>
export type TVGexpression_parenthesizedExpression<Annotation> = TVTGexpression_parenthesizedExpression<Annotation>
export type TVTGexpression_objectLiteral$_propertyAssignment$_name_stringLiteral<Annotation> = TGstringLiteral<Annotation>
export type TVGexpression_objectLiteral$_propertyAssignment$_name_stringLiteral<Annotation> = TVTGexpression_objectLiteral$_propertyAssignment$_name_stringLiteral<Annotation>
export type TVTGexpression_objectLiteral$_propertyAssignment$_name_identifier<Annotation> = TGidentifier<Annotation>
export type TVGexpression_objectLiteral$_propertyAssignment$_name_identifier<Annotation> = TVTGexpression_objectLiteral$_propertyAssignment$_name_identifier<Annotation>
export type TVTGexpression_objectLiteral$_propertyAssignment$_name<Annotation> = 
    | [ "stringLiteral", TVGexpression_objectLiteral$_propertyAssignment$_name_stringLiteral<Annotation>]
    | [ "identifier", TVGexpression_objectLiteral$_propertyAssignment$_name_identifier<Annotation>]
export type TVGexpression_objectLiteral$_propertyAssignment$_name<Annotation> = TVTGexpression_objectLiteral$_propertyAssignment$_name<Annotation>
export type TVTGexpression_objectLiteral$_propertyAssignment$_expression<Annotation> = TGexpression<Annotation>
export type TVGexpression_objectLiteral$_propertyAssignment$_expression<Annotation> = TVTGexpression_objectLiteral$_propertyAssignment$_expression<Annotation>
export type TVTGexpression_objectLiteral$_propertyAssignment$<Annotation> = {
    readonly "name":  TVGexpression_objectLiteral$_propertyAssignment$_name<Annotation>
    readonly "expression":  TVGexpression_objectLiteral$_propertyAssignment$_expression<Annotation>
}
export type TVGexpression_objectLiteral$_propertyAssignment$<Annotation> = TVTGexpression_objectLiteral$_propertyAssignment$<Annotation>

export type TNGexpression_objectLiteral$_propertyAssignment$<Annotation> = TAnnotatedType<Annotation, TVGexpression_objectLiteral$_propertyAssignment$<Annotation>>
export type TVTGexpression_objectLiteral$_propertyAssignment<Annotation> = TNGexpression_objectLiteral$_propertyAssignment$<Annotation>
export type TVGexpression_objectLiteral$_propertyAssignment<Annotation> = TVTGexpression_objectLiteral$_propertyAssignment<Annotation>
export type TVTGexpression_objectLiteral$<Annotation> = 
    | [ "propertyAssignment", TVGexpression_objectLiteral$_propertyAssignment<Annotation>]
export type TVGexpression_objectLiteral$<Annotation> = pt.Array<TVTGexpression_objectLiteral$<Annotation>>

export type TNGexpression_objectLiteral$<Annotation> = TAnnotatedType<Annotation, TVGexpression_objectLiteral$<Annotation>>
export type TVTGexpression_objectLiteral<Annotation> = TNGexpression_objectLiteral$<Annotation>
export type TVGexpression_objectLiteral<Annotation> = TVTGexpression_objectLiteral<Annotation>

export type TNGexpression_nullKeyword$<Annotation> = Annotation
export type TVTGexpression_nullKeyword<Annotation> = TNGexpression_nullKeyword$<Annotation>
export type TVGexpression_nullKeyword<Annotation> = TVTGexpression_nullKeyword<Annotation>
export type TVTGexpression_numericLiteral<Annotation> = TGnumericLiteral<Annotation>
export type TVGexpression_numericLiteral<Annotation> = TVTGexpression_numericLiteral<Annotation>

export type TNGexpression_noSubstitutionTemplateLiteral$<Annotation> = Annotation
export type TVTGexpression_noSubstitutionTemplateLiteral<Annotation> = TNGexpression_noSubstitutionTemplateLiteral$<Annotation>
export type TVGexpression_noSubstitutionTemplateLiteral<Annotation> = TVTGexpression_noSubstitutionTemplateLiteral<Annotation>
export type TVTGexpression_identifier<Annotation> = TGidentifier<Annotation>
export type TVGexpression_identifier<Annotation> = TVTGexpression_identifier<Annotation>

export type TNGexpression_false$<Annotation> = Annotation
export type TVTGexpression_false<Annotation> = TNGexpression_false$<Annotation>
export type TVGexpression_false<Annotation> = TVTGexpression_false<Annotation>
export type TVTGexpression_elementAccess$_array<Annotation> = TGexpression<Annotation>
export type TVGexpression_elementAccess$_array<Annotation> = TVTGexpression_elementAccess$_array<Annotation>
export type TVTGexpression_elementAccess$_element<Annotation> = TGexpression<Annotation>
export type TVGexpression_elementAccess$_element<Annotation> = TVTGexpression_elementAccess$_element<Annotation>
export type TVTGexpression_elementAccess$<Annotation> = {
    readonly "array":  TVGexpression_elementAccess$_array<Annotation>
    readonly "element":  TVGexpression_elementAccess$_element<Annotation>
}
export type TVGexpression_elementAccess$<Annotation> = TVTGexpression_elementAccess$<Annotation>

export type TNGexpression_elementAccess$<Annotation> = TAnnotatedType<Annotation, TVGexpression_elementAccess$<Annotation>>
export type TVTGexpression_elementAccess<Annotation> = TNGexpression_elementAccess$<Annotation>
export type TVGexpression_elementAccess<Annotation> = TVTGexpression_elementAccess<Annotation>
export type TVTGexpression_conditional$_test<Annotation> = TGexpression<Annotation>
export type TVGexpression_conditional$_test<Annotation> = TVTGexpression_conditional$_test<Annotation>

export type TNGexpression_conditional$_questionToken$<Annotation> = Annotation
export type TVTGexpression_conditional$_questionToken<Annotation> = TNGexpression_conditional$_questionToken$<Annotation>
export type TVGexpression_conditional$_questionToken<Annotation> = TVTGexpression_conditional$_questionToken<Annotation>
export type TVTGexpression_conditional$_ifExpression<Annotation> = TGexpression<Annotation>
export type TVGexpression_conditional$_ifExpression<Annotation> = TVTGexpression_conditional$_ifExpression<Annotation>

export type TNGexpression_conditional$_colonToken$<Annotation> = Annotation
export type TVTGexpression_conditional$_colonToken<Annotation> = TNGexpression_conditional$_colonToken$<Annotation>
export type TVGexpression_conditional$_colonToken<Annotation> = TVTGexpression_conditional$_colonToken<Annotation>
export type TVTGexpression_conditional$_elseExpression<Annotation> = TGexpression<Annotation>
export type TVGexpression_conditional$_elseExpression<Annotation> = TVTGexpression_conditional$_elseExpression<Annotation>
export type TVTGexpression_conditional$<Annotation> = {
    readonly "test":  TVGexpression_conditional$_test<Annotation>
    readonly "questionToken":  TVGexpression_conditional$_questionToken<Annotation>
    readonly "ifExpression":  TVGexpression_conditional$_ifExpression<Annotation>
    readonly "colonToken":  TVGexpression_conditional$_colonToken<Annotation>
    readonly "elseExpression":  TVGexpression_conditional$_elseExpression<Annotation>
}
export type TVGexpression_conditional$<Annotation> = TVTGexpression_conditional$<Annotation>

export type TNGexpression_conditional$<Annotation> = TAnnotatedType<Annotation, TVGexpression_conditional$<Annotation>>
export type TVTGexpression_conditional<Annotation> = TNGexpression_conditional$<Annotation>
export type TVGexpression_conditional<Annotation> = TVTGexpression_conditional<Annotation>
export type TVTGexpression_call$_function<Annotation> = TGexpression<Annotation>
export type TVGexpression_call$_function<Annotation> = TVTGexpression_call$_function<Annotation>
export type TVTGexpression_call$_typeParameters<Annotation> = TGtype<Annotation>
export type TVGexpression_call$_typeParameters<Annotation> = pt.Array<TVTGexpression_call$_typeParameters<Annotation>>
export type TVTGexpression_call$_parameters<Annotation> = TGexpression<Annotation>
export type TVGexpression_call$_parameters<Annotation> = pt.Array<TVTGexpression_call$_parameters<Annotation>>
export type TVTGexpression_call$<Annotation> = {
    readonly "function":  TVGexpression_call$_function<Annotation>
    readonly "typeParameters":  TVGexpression_call$_typeParameters<Annotation>
    readonly "parameters":  TVGexpression_call$_parameters<Annotation>
}
export type TVGexpression_call$<Annotation> = TVTGexpression_call$<Annotation>

export type TNGexpression_call$<Annotation> = TAnnotatedType<Annotation, TVGexpression_call$<Annotation>>
export type TVTGexpression_call<Annotation> = TNGexpression_call$<Annotation>
export type TVGexpression_call<Annotation> = TVTGexpression_call<Annotation>
export type TVTGexpression_binary$_leftHandSide<Annotation> = TGexpression<Annotation>
export type TVGexpression_binary$_leftHandSide<Annotation> = TVTGexpression_binary$_leftHandSide<Annotation>

export type TNGexpression_binary$_operator_equals$<Annotation> = Annotation
export type TVTGexpression_binary$_operator_equals<Annotation> = TNGexpression_binary$_operator_equals$<Annotation>
export type TVGexpression_binary$_operator_equals<Annotation> = TVTGexpression_binary$_operator_equals<Annotation>
export type TVTGexpression_binary$_operator<Annotation> = 
    | [ "equals", TVGexpression_binary$_operator_equals<Annotation>]
export type TVGexpression_binary$_operator<Annotation> = TVTGexpression_binary$_operator<Annotation>
export type TVTGexpression_binary$_rightHandSide<Annotation> = TGexpression<Annotation>
export type TVGexpression_binary$_rightHandSide<Annotation> = TVTGexpression_binary$_rightHandSide<Annotation>
export type TVTGexpression_binary$<Annotation> = {
    readonly "leftHandSide":  TVGexpression_binary$_leftHandSide<Annotation>
    readonly "operator":  TVGexpression_binary$_operator<Annotation>
    readonly "rightHandSide":  TVGexpression_binary$_rightHandSide<Annotation>
}
export type TVGexpression_binary$<Annotation> = TVTGexpression_binary$<Annotation>

export type TNGexpression_binary$<Annotation> = TAnnotatedType<Annotation, TVGexpression_binary$<Annotation>>
export type TVTGexpression_binary<Annotation> = TNGexpression_binary$<Annotation>
export type TVGexpression_binary<Annotation> = TVTGexpression_binary<Annotation>
export type TVTGexpression_arrowFunction$_typeParameters<Annotation> = TGtypeParameter<Annotation>
export type TVGexpression_arrowFunction$_typeParameters<Annotation> = pt.Array<TVTGexpression_arrowFunction$_typeParameters<Annotation>>
export type TVTGexpression_arrowFunction$_parameters<Annotation> = TGparameter<Annotation>
export type TVGexpression_arrowFunction$_parameters<Annotation> = pt.Array<TVTGexpression_arrowFunction$_parameters<Annotation>>
export type TVTGexpression_arrowFunction$_returnType<Annotation> = TGtype<Annotation>
export type TVGexpression_arrowFunction$_returnType<Annotation> = null | TVTGexpression_arrowFunction$_returnType<Annotation>

export type TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation> = Annotation
export type TVTGexpression_arrowFunction$_equalsGreaterThan<Annotation> = TNGexpression_arrowFunction$_equalsGreaterThan$<Annotation>
export type TVGexpression_arrowFunction$_equalsGreaterThan<Annotation> = TVTGexpression_arrowFunction$_equalsGreaterThan<Annotation>
export type TVTGexpression_arrowFunction$_implementation_expression<Annotation> = TGexpression<Annotation>
export type TVGexpression_arrowFunction$_implementation_expression<Annotation> = TVTGexpression_arrowFunction$_implementation_expression<Annotation>
export type TVTGexpression_arrowFunction$_implementation_block<Annotation> = TGblock<Annotation>
export type TVGexpression_arrowFunction$_implementation_block<Annotation> = TVTGexpression_arrowFunction$_implementation_block<Annotation>
export type TVTGexpression_arrowFunction$_implementation<Annotation> = 
    | [ "expression", TVGexpression_arrowFunction$_implementation_expression<Annotation>]
    | [ "block", TVGexpression_arrowFunction$_implementation_block<Annotation>]
export type TVGexpression_arrowFunction$_implementation<Annotation> = TVTGexpression_arrowFunction$_implementation<Annotation>
export type TVTGexpression_arrowFunction$<Annotation> = {
    readonly "typeParameters":  TVGexpression_arrowFunction$_typeParameters<Annotation>
    readonly "parameters":  TVGexpression_arrowFunction$_parameters<Annotation>
    readonly "returnType":  TVGexpression_arrowFunction$_returnType<Annotation>
    readonly "equalsGreaterThan":  TVGexpression_arrowFunction$_equalsGreaterThan<Annotation>
    readonly "implementation":  TVGexpression_arrowFunction$_implementation<Annotation>
}
export type TVGexpression_arrowFunction$<Annotation> = TVTGexpression_arrowFunction$<Annotation>

export type TNGexpression_arrowFunction$<Annotation> = TAnnotatedType<Annotation, TVGexpression_arrowFunction$<Annotation>>
export type TVTGexpression_arrowFunction<Annotation> = TNGexpression_arrowFunction$<Annotation>
export type TVGexpression_arrowFunction<Annotation> = TVTGexpression_arrowFunction<Annotation>
export type TVTGexpression_arrayLiteral$<Annotation> = TGexpression<Annotation>
export type TVGexpression_arrayLiteral$<Annotation> = pt.Array<TVTGexpression_arrayLiteral$<Annotation>>

export type TNGexpression_arrayLiteral$<Annotation> = TAnnotatedType<Annotation, TVGexpression_arrayLiteral$<Annotation>>
export type TVTGexpression_arrayLiteral<Annotation> = TNGexpression_arrayLiteral$<Annotation>
export type TVGexpression_arrayLiteral<Annotation> = TVTGexpression_arrayLiteral<Annotation>
export type TVTGexpression<Annotation> = 
    | [ "true", TVGexpression_true<Annotation>]
    | [ "template", TVGexpression_template<Annotation>]
    | [ "stringLiteral", TVGexpression_stringLiteral<Annotation>]
    | [ "propertyAccess", TVGexpression_propertyAccess<Annotation>]
    | [ "prefixUnary", TVGexpression_prefixUnary<Annotation>]
    | [ "parenthesizedExpression", TVGexpression_parenthesizedExpression<Annotation>]
    | [ "objectLiteral", TVGexpression_objectLiteral<Annotation>]
    | [ "nullKeyword", TVGexpression_nullKeyword<Annotation>]
    | [ "numericLiteral", TVGexpression_numericLiteral<Annotation>]
    | [ "noSubstitutionTemplateLiteral", TVGexpression_noSubstitutionTemplateLiteral<Annotation>]
    | [ "identifier", TVGexpression_identifier<Annotation>]
    | [ "false", TVGexpression_false<Annotation>]
    | [ "elementAccess", TVGexpression_elementAccess<Annotation>]
    | [ "conditional", TVGexpression_conditional<Annotation>]
    | [ "call", TVGexpression_call<Annotation>]
    | [ "binary", TVGexpression_binary<Annotation>]
    | [ "arrowFunction", TVGexpression_arrowFunction<Annotation>]
    | [ "arrayLiteral", TVGexpression_arrayLiteral<Annotation>]
export type TGexpression<Annotation> =  TVTGexpression<Annotation>
export type TVTGblock$<Annotation> = TGstatement<Annotation>
export type TVGblock$<Annotation> = pt.Array<TVTGblock$<Annotation>>

export type TNGblock$<Annotation> = TAnnotatedType<Annotation, TVGblock$<Annotation>>
export type TVTGblock<Annotation> = TNGblock$<Annotation>
export type TGblock<Annotation> =  TVTGblock<Annotation>
export type TVTroot_statements<Annotation> = TGstatement<Annotation>
export type TVroot_statements<Annotation> = pt.Array<TVTroot_statements<Annotation>>

export type TNroot_endOfFile$<Annotation> = Annotation
export type TVTroot_endOfFile<Annotation> = TNroot_endOfFile$<Annotation>
export type TVroot_endOfFile<Annotation> = TVTroot_endOfFile<Annotation>
export type TVTroot<Annotation> = {
    readonly "statements":  TVroot_statements<Annotation>
    readonly "endOfFile":  TVroot_endOfFile<Annotation>
}
export type TVroot<Annotation> = TVTroot<Annotation>

export type TNroot<Annotation> = TAnnotatedType<Annotation, TVroot<Annotation>>
export type TRoot<Annotation> = TNroot<Annotation>