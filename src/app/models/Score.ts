import { User } from "../_model/User";
import { Criterion } from "./Criterion";

export class Score
{
    id!:number;
    score!: number;
    rank!: number;
    winner!:boolean;
    participant!:User;
    criterion!:Criterion;

}
