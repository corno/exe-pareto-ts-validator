import { TSchema } from "../types/types.p"

import * as pareto from "../../../pareto"

export type FMapToPareto = <PAnnotation>(
    $: TSchema<PAnnotation>,
) => pareto.TModule<null | PAnnotation>