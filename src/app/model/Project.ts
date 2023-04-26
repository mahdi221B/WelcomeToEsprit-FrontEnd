import { Note } from "./Note";
import { Team } from "./Team";
import { User } from "./User";

export class Project {
  id!:number;
  file!: File;
  description!: string;
  team!:Team;
  video!:string;
  presentation!:string;
  notes!:Note[];
  user!:User;
}