import * as pt from 'pareto-core-types';
import * as mmain from "res-pareto-main";
export type CgenerateImplementation = pt.Procedure<mmain.T.MainData>;
export type CgenerateInterface = pt.Procedure<mmain.T.MainData>;
export type API = {
    generateImplementation: CgenerateImplementation;
    generateInterface: CgenerateInterface;
};
