
import * as path from "api-pareto-path"
import * as paretores from "../../../parserRes"


export type FFirstCharacter = ($: string) => string

export type DTS2ParetoDependencies = {
    //readonly firstCharacter: FFirstCharacter
    //readonly startsWith: uglyStuff.FStartsWith
    readonly basename: path.Basename
    readonly analyseAlgorithmDefinitionName: paretores.AnalyseName
    readonly analyseAlgorithmName: paretores.AnalyseAlgorithmName
    readonly analyseDependencyName: paretores.AnalyseName
    readonly analyseInterfaceName: paretores.AnalyseName
    readonly analyseImportFile: paretores.AnalyseImportFile
    readonly analyseTypeName: paretores.AnalyseName
    readonly splitLastElement: paretores.FSplitLastElement
}