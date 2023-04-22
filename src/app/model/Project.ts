import { Note } from "./Note";
import { Team } from "./Team";

export class Project {
  id!:number;
  file!: File;
  desc!: string;
  team!:Team;
}