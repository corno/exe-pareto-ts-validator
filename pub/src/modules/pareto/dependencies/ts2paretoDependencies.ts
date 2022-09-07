import * as path from "res-pareto-path"
import * as parserRes from "../../parserRes"
import { DTS2ParetoDependencies } from "../interface/dependencies/dependencies"


export const ts2ParetoDependencies: DTS2ParetoDependencies = {
    //startsWith: uglyStuff.startsWIth,
    // firstCharacter: ($) => uglyStuff.substr({
    //     value: $,
    //     begin: 0,
    //     length: 1,
    // }),
    basename: path.basename,
    analyseAlgorithmDefinitionName: parserRes.analyseAlgorithmDefinitionName,
    analyseAlgorithmName: parserRes.analyseAlgorithmName,
    analyseDependencyName: parserRes.analyseDependencyName,
    analyseInterfaceName: parserRes.analyseInterfaceName,
    analyseImportFile: parserRes.analyseImportFile,
    analyseTypeName: parserRes.analyseTypeName,
    splitLastElement: parserRes.f_splitLastElement,
}