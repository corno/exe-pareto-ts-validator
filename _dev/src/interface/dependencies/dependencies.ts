import * as collation from "api-pareto-collation"
import * as fs from "api-pareto-filesystem"

export type DDependencies = {
    readonly isYinBeforeYang: collation.FSortedForEach
    readonly createWriteStream: fs.CreateWriteStream
}
