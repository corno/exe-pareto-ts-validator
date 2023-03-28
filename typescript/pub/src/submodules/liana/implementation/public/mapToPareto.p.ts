import * as pw from 'pareto-core-raw'

import * as pareto from "../../../pareto"

import * as api from "../../interface"

export const mapToPareto: api.FMapToPareto = () => {

    function foo<PAnnotation>(): pareto.TModule<null | PAnnotation> {
        type POptionalAnnotation = null | PAnnotation
        return {
            'interface': {
                'imports': pw.wrapRawDictionary({}),
                'root': {
                    'namespaces': pw.wrapRawDictionary({}),
                    'types': pw.wrapRawDictionary({}),
                },
                'interfaces': pw.wrapRawDictionary({}),
                'dependencies': pw.wrapRawDictionary({}),
                'functions': pw.wrapRawDictionary<pareto.TFunctionDefinition<PAnnotation | null>>({
                    "Resolve": {
                        'type parameters': pw.wrapRawDictionary({ "PAnnotation": null }),
                        'type': {
                            'annotation': null,
                            'optional': false,
                            'type': ["null", {}],
                        },
                        'interface': {
                            'annotation': null,
                            'type': ["group", {
                                'properties': pw.wrapRawDictionary<pareto.TLocalInterface<PAnnotation | null>>({
                                    "onError": {
                                        'annotation': null,
                                        'type': ["group", {
                                            'properties': pw.wrapRawDictionary<pareto.TLocalInterface<PAnnotation | null>>({})
                                        }]
                                    }
                                })
                            }]
                        },
                        'return type': ["unmanaged", {
                            'type': ["type", {
                                'async': false,
                                'type': {
                                    'annotation': null,
                                    'optional': false,
                                    'type': ["boolean", {}]
                                }
                            }]
                        }],
                    }
                }),
            },
            'implementation': {
                'public functions': pw.wrapRawDictionary<pareto.TPublicFunctionImplementation<PAnnotation | null>>({
                    "resolve": {
                        'definition': {
                            'annotation': null,
                            'name': "Resolve",

                        },
                        'implementation': {
                            'statement': {
                                'type': ["return", {}]
                            }
                        },
                    },
                }),
                'private functions': pw.wrapRawDictionary({}),
            },
        }

    }
    return foo()
}