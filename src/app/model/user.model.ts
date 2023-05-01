import { Profil } from "./profil.model";

export class User {
    lastName!: string;
    firstName!: string;
    emailAddress!: string;
    birthDate!: Date;
    password!: string;
    picture!: string;
    availability!: string;
    profil!:Profil;
  }