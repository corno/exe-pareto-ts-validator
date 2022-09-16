import * as pt from "pareto-core-types"
import { DDependencies } from "../dependencies/dependencies.p"

import { IWriter } from "../interfaces/interfaces.p"
import { TModule } from "../types/types.p"

export type FSerialize = <PAnnotation>(
    $: TModule<PAnnotation>,
    $i: IWriter,
    $d: DDependencies
) => null