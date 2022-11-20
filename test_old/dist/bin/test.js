#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pe = __importStar(require("pareto-core-exe"));
const test = __importStar(require("lib-pareto-test"));
const diff = __importStar(require("res-pareto-diff"));
const fs = __importStar(require("res-pareto-filesystem"));
const imp_1 = require("../imp");
const dependencies_1 = require("./dependencies");
pe.runProgram(test.createTester({
    getTestSet: (0, imp_1.createGetTestSet)(dependencies_1.dependencies),
    diff: {
        diffData: diff.diffData,
        stringsAreEqual: diff.stringsAreEqual,
    },
    fs: {
        readFile: fs.readFile,
        writeFile: fs.writeFile,
        unlink: fs.unlink,
    },
}));
