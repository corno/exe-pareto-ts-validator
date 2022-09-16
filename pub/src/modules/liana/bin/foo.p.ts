import * as mpareto from "../../pareto/index"

import { pareto } from "../data/pareto.p";
import { mapToPareto } from "../implementation/public/mapToPareto.p";



mpareto.serialize( 
    mapToPareto(pareto),
    {

    },
    {

    }
)