import { Problem, Strategy } from "../Problem";
const title: string = "A Kempner-like series";
const description: string = "\nThe  harmonic series  $1 + \\dfrac{1}{2} + \\dfrac{1}{3} + \\dfrac{1}{4} + ...$ is well known to be divergent.\n\nIf we however omit from this series every term where the denominator has a 9 in it, the series remarkably enough converges to approximately 22.9206766193.\nThis modified harmonic series is called the Kempner series.\n\nLet us now consider another modified harmonic series by omitting from the harmonic series every term where the denominator has 3 or more equal consecutive digits.\nOne can verify that out of the first 1200 terms of the harmonic series, only 20 terms will be omitted.\nThese 20 omitted terms are:\n$$\\dfrac{1}{111}, \\dfrac{1}{222}, \\dfrac{1}{333}, \\dfrac{1}{444}, \\dfrac{1}{555}, \\dfrac{1}{666}, \\dfrac{1}{777}, \\dfrac{1}{888}, \\dfrac{1}{999}, \\dfrac{1}{1000}, \\dfrac{1}{1110}, \\\\\\ \\dfrac{1}{1111}, \\dfrac{1}{1112}, \\dfrac{1}{1113}, \\dfrac{1}{1114}, \\dfrac{1}{1115}, \\dfrac{1}{1116}, \\dfrac{1}{1117}, \\dfrac{1}{1118}, \\dfrac{1}{1119}$$\n\nThis series converges as well.\n\nFind the value the series converges to.\nGive your answer rounded to 10 digits behind the decimal point.\n";
const index: number = 368;
class Solution extends Strategy {
    public validateArgs(args: any[]) {
        throw new Error("Method not implemented.");
    }
    public solve(args: any[]) {
        throw new Error("Method not implemented.");
    }
}
const solution = new Solution();
export const ProblemImplementation = new Problem(index, title, description, solution);
