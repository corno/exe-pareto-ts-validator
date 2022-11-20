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
exports.createGetTestset = void 0;
const pa = __importStar(require("pareto-core-async"));
const pm = __importStar(require("pareto-core-state"));
const pl = __importStar(require("pareto-core-lib"));
const createGetTestset = ($d) => {
    return () => {
        const builder = pm.createDictionaryBuilder(["ignore", {}], () => {
            pl.panic("duplicate key");
        });
        function createTest(name, actual, expected) {
            builder.add(name, {
                type: ["test", {
                        type: ["simple string", {
                                actual: actual,
                                expected: expected
                            }]
                    }]
            });
        }
        return pa.value({
            elements: builder.getDictionary()
        });
    };
};
exports.createGetTestset = createGetTestset;
