
export type TParetoType =
    | ["tagged union", {}]
    | ["string keyword", {}]
    | ["number keyword", {}]
    | ["boolean keyword", {}]
    | ["optional", TParetoType]
    | ["reference", {
        //steps
        //Type
    }]
    | ["tbd", {}]


export type TParetoTypeAlias =
    | ["type", TParetoType]
    | ["tbd", {}]


export type TParetoTypeSignature =
    | ["property", {
        readonly "type": TParetoType
    }]
