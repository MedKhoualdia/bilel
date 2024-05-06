import { Competition } from "../_model/Competition";
import { User } from "../_model/User";
import { Score } from "./Score";

export class Evaluation
{
  id!:number;
  evaluationDate!: Date;
  judge!:User;
  scores!:Score[];
  competition!:Competition;

}
