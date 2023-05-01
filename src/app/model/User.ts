<<<<<<< HEAD
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

=======
import { Post } from "./Post";

export class User {
    id!: number;
    lastName!: string;
    firstName!: string;
    emailAddress!: string;
    birthDate!: Date;
    password!: string;
    // address!: Address;
    picture!: string;
    // roles!: Role[];
    // comments!: Comment[];
    posts!: Post[];
    // reacts!: React[];
  }
  
>>>>>>> 966c8b2a04b91a797a2e0c0521fee62509342e90
