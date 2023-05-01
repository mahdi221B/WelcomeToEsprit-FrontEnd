import { User } from "./user.model";

export class Profil {
    id!: number;
    education!: string;
    diplomas!: string;
    certification!: string;
    workExperience!: string;
    studentLevel!: string;
    interest: string="";
    teamCaptain!: boolean;
    user!: User;
  }
  
