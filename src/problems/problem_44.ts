import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Pentagon numbers";
const description: string = "\nPentagonal numbers are generated by the formula, Pn=n(3n\u22121)/2. The first ten pentagonal numbers are:\n1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...\nIt can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 \u2212 22 = 48, is not pentagonal.\nFind the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk \u2212 Pj| is minimised; what is the value of D?\n";
const index: number = 44;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
const ProblemImplementation = new Problem(title, description, solution);
ProblemManager.register(index, ProblemImplementation);
