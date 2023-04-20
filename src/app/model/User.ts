import { Profil } from "./Profil";
import { Role } from "./Role";
import { Team } from "./Team";

export class User {
  id!: number;
  firstName!: string;
roles!: any[];
team!:Team;
profil!:Profil;

}

