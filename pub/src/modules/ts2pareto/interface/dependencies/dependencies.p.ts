
import * as path from "api-pareto-path"
import * as paretores from "../../../parserRes"


export type FFirstCharacter = ($: string) => string

export type DTS2ParetoDependencies = {
    //readonly firstCharacter: FFirstCharacter
    //readonly startsWith: uglyStuff.FStartsWith
    readonly basename: path.Basename
    readonly analyseAlgorithmDefinitionName: paretores.FAnalyseName
    readonly analyseAlgorithmName: paretores.FAnalyseAlgorithmName
    readonly analyseDependencyName: paretores.FAnalyseName
    readonly analyseInterfaceName: paretores.FAnalyseName
    readonly analyseImportFile: paretores.FAnalyseImportFile
    readonly analyseTypeName: paretores.FAnalyseName
    readonly splitLastElement: paretores.FSplitLastElement
}