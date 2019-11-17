import { Problem, Strategy } from "../Problem";
import ProblemManager from "../ProblemManager";
const title: string = "Square root digital expansion";
const description: string = "\n\nIt is well known that if the square root of a natural number is not an integer, then it is irrational. The decimal expansion of such square roots is infinite without any repeating pattern at all.\nThe square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.\nFor the first one hundred natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.\n\n";
const index: number = 80;
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