import { Note } from "./Note";
import { Team } from "./Team";

export class Project {
  id!: number;
  video!: string;
  team!:Team;
  note!:Note[];
}