import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"

import * as main from "api-pareto-main"

export type DDependencies = {
    readonly isYinBeforeYang: collation.IsYinBeforeYang
    readonly createWriteStream: fs.CreateWriteStream
    readonly startAsync: main.StartAsync
}
