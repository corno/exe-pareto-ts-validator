import * as ap from "lib-analyse-path"

export const _typescriptProject: ap.TDirectory = {
    'type': ["type", {
        'nodes': {
            "index.ts": {
                'type': ["file", {}]
            },
            "interface": {
                'type': ["directory", {
                    'type': ["files dictionary", {
                        'allow missing extension': false,
                        'extensions': ([
                            `ts`,
                        ]),
                        'recursive': true
                    }]

                }]
            },
            "imp": {
                'type': ["directory", {
                    'type': ["files dictionary", {
                        'allow missing extension': false,
                        'extensions': ([
                            `ts`,
                        ]),
                        'recursive': true
                    }]

                }]
            },
        }
    }]
}