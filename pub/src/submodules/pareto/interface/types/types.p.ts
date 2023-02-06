import * as pt from "pareto-core-types"

export type Reference<PAnnotation, PType> = {
    readonly "name": string
    readonly "annotation": PAnnotation
    //readonly "type": PType
}

export type SiblingReference<PAnnotation, PType> = {
    readonly "name": string
    readonly "annotation": PAnnotation
    //readonly "type": () => PType
}

export type TTypeParameter<PAnnotation> = null

export type TGlobalType<PAnnotation> = {
    readonly "parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "details": TLocalType<PAnnotation>
}

export type TImport<PAnnotation> = string

export type TLocalType<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "optional": boolean
    readonly "type":
    | ["null", {}]
    | ["boolean", {}]
    | ["string", {}]
    | ["undefined", {}]
    | ["dictionary", {
        readonly "properties": pt.Dictionary<TLocalType<PAnnotation>>
    }]
    | ["list", {
        readonly "properties": pt.Array<TLocalType<PAnnotation>>
    }]
    | ["reference", {
        readonly "type":
        | ["parameter", {
            readonly "parameter": Reference<PAnnotation, TTypeParameter<PAnnotation>>
        }]
        | ["type", {
            readonly "type":
            | ["sibling", {
                readonly "global type": SiblingReference<PAnnotation, TGlobalType<PAnnotation>>
            }]
            | ["import", {
                readonly "import": Reference<PAnnotation, TImport<PAnnotation>>
                readonly "global type": Reference<PAnnotation, TGlobalType<PAnnotation>>
            }]
            readonly "arguments": pt.Dictionary<TLocalType<PAnnotation>>
        }]
    }]
    | ["tagged union", {
        readonly "options": pt.Dictionary<TLocalType<PAnnotation>>
    }]
}

export type TLocalInterface<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "type":
    | ["reference", {
        readonly "type":
        | ["type", {
            readonly "type":
            | ["sibling", {
                readonly "global interface": SiblingReference<PAnnotation, TGlobalInterface<PAnnotation>>
            }]
            | ["import", {
                readonly "import": Reference<PAnnotation, TImport<PAnnotation>>
                readonly "global interface": Reference<PAnnotation, TGlobalInterface<PAnnotation>>
            }]
            readonly "arguments": pt.Dictionary<TLocalType<PAnnotation>>
        }]

    }]
    | ["group", {
        readonly "properties": pt.Dictionary<TLocalInterface<PAnnotation>>
    }]
    | ["method", {
        readonly "type": TLocalType<PAnnotation>
        readonly "callback": null | {
            readonly "interface": TLocalInterface<PAnnotation>
            readonly "type":
            | ["managed", {}]
            | ["unmanaged", {}]
        }
    }]
}

export type TGlobalInterface<PAnnotation> = {
    readonly "parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "details": TLocalInterface<PAnnotation>
}

export type TFunctionDefinition<PAnnotation> = {

    readonly "type parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "type": TLocalType<PAnnotation>
    readonly "interface": null | TLocalInterface<PAnnotation>

    readonly "return type":
    | ["managed", {
        readonly "interface": TLocalInterface<PAnnotation>
    }]
    | ["unmanaged", {
        readonly "type":
        | ["interface", {
            readonly "interface": TLocalInterface<PAnnotation>
        }]
        | ["type", {
            readonly "type": TLocalType<PAnnotation>
            readonly "async": boolean
        }]
        | ["function", {
            readonly "function": Reference<PAnnotation, TFunctionDefinition<PAnnotation>>
        }]
    }]
}

export type TDependencyDefinition<PAnnotation> = {
    readonly "functions": pt.Dictionary<TExternalFunctionReference<PAnnotation>>
}

export type TExternalFunctionReference<PAnnotation> = {
    readonly "import": Reference<PAnnotation, TImport<PAnnotation>>
    readonly "function": Reference<PAnnotation, TFunctionDefinition<PAnnotation>>
}

export type TInterface<PAnnotation> = {
    readonly "imports": pt.Dictionary<TImport<PAnnotation>>
    readonly "types": pt.Dictionary<TGlobalType<PAnnotation>>
    readonly "interfaces": pt.Dictionary<TGlobalInterface<PAnnotation>>
    readonly "dependencies": pt.Dictionary<TDependencyDefinition<PAnnotation>>
    readonly "functions": pt.Dictionary<TFunctionDefinition<PAnnotation>>
}

export type TExpression<PAnnotation> = {
    readonly "type":
    | ["foo", {}]
}

export type TStatement<PAnnotation> = {
    readonly "type":
    | ["return", {}]
    | ["if", {
        readonly "expression": TExpression<PAnnotation>
        readonly "then": TStatement<PAnnotation>
        readonly "else": TStatement<PAnnotation>
    }]
    | ["switch", {
        readonly "type":
        | ["exhaustive", {

            readonly "options": pt.Dictionary<TBlock<PAnnotation>>
        }]
        | ["partial", {
            readonly "options": pt.Dictionary<TBlock<PAnnotation>>
            readonly "leftover": TBlock<PAnnotation>
        }]
    }]
}

export type TBlock<PAnnotation> = {
    readonly "statement": TStatement<PAnnotation>
}

export type TPrivateFunctionImplementation<PAnnotation> = {
    readonly "definition": TFunctionDefinition<PAnnotation>
    readonly "implementation": TBlock<PAnnotation>
}
export type TPublicFunctionImplementation<PAnnotation> = {
    readonly "definition": Reference<PAnnotation, TFunctionDefinition<PAnnotation>>
    readonly "implementation": TBlock<PAnnotation>
}

export type TImplementation<PAnnotation> = {
    readonly "public functions": pt.Dictionary<TPublicFunctionImplementation<PAnnotation>>
    readonly "private functions": pt.Dictionary<TPrivateFunctionImplementation<PAnnotation>>
}

export type TModule<PAnnotation> = {
    readonly "implementation": null | TImplementation<PAnnotation>
    readonly "interface": null | TInterface<PAnnotation>
}