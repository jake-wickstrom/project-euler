import { Problem, Strategy } from "../Problem";
const title: string = "Number Mind";
const description: string = "\nThe game Number Mind is a variant of the well known game Master Mind.\nInstead of coloured pegs, you have to guess a secret sequence of digits. After each guess you're only told in how many places you've guessed the correct digit. So, if the sequence was 1234 and you guessed 2036, you'd be told that you have one correct digit; however, you would NOT be told that you also have another digit in the wrong place.\n\nFor instance, given the following guesses for a 5-digit secret sequence,\n90342 ;2 correct\n70794 ;0 correct\n39458 ;2 correct\n34109 ;1 correct\n51545 ;2 correct\n12531 ;1 correct\nThe correct sequence 39542 is unique.\n\nBased on the following guesses,\n\n5616185650518293 ;2 correct\n3847439647293047 ;1 correct\n5855462940810587 ;3 correct\n9742855507068353 ;3 correct\n4296849643607543 ;3 correct\n3174248439465858 ;1 correct\n4513559094146117 ;2 correct\n7890971548908067 ;3 correct\n8157356344118483 ;1 correct\n2615250744386899 ;2 correct\n8690095851526254 ;3 correct\n6375711915077050 ;1 correct\n6913859173121360 ;1 correct\n6442889055042768 ;2 correct\n2321386104303845 ;0 correct\n2326509471271448 ;2 correct\n5251583379644322 ;2 correct\n1748270476758276 ;3 correct\n4895722652190306 ;1 correct\n3041631117224635 ;3 correct\n1841236454324589 ;3 correct\n2659862637316867 ;2 correct\n\nFind the unique 16-digit secret sequence.\n";
const index: number = 185;
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
