import { Team } from "./Team";
import { User } from "./User";

export class Note {
  id!: number;
  comment!: string;
  softSkils!: number;
  hardSkils!: number;
  user!: User;
} 