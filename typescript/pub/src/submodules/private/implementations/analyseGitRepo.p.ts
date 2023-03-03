// import * as pr from 'pareto-core-lib'
// import { readGitRepoWithLineCounts } from "../../modules/git/esc/implementation/readGitRepoWithLineCounts"
// import * as ap from "analyse-path-lib"
// import { _paretoProject } from "../../data/paretoProject"

// export function analyseGitRepo(
//     repoPath: string,
//     callback: (
//         repoPath: string,
//         filePath: string,
//         analysis: ap.TAnalysisResult,
//         lineCount: number,
//     ) => void,
// ) {

//     readGitRepoWithLineCounts(
//         repoPath,
//         ($) => {
//             const analysis = ap.analysePath(
//                 _paretoProject,
//                 ap.parseFilePath($.filePath),
//             )
//             callback(
//                 repoPath,
//                 $.filePath,
//                 analysis,
//                 $.lineCount,
//             )
//             if (analysis.error !== null) {
//                 console.error(`${repoPath}: ${analysis.error}`)
//             }
//         }
//     )
// }
