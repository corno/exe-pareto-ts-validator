import { API } from "./api"
import { $$ as igenerateImplementation } from "./implementations/generateImplementation.p"
import { $$ as igenerateInterface } from "./implementations/generateImplementation.p"

export const $a: API = {
    "generateImplementation": igenerateImplementation,
    "generateInterface": igenerateInterface,
}