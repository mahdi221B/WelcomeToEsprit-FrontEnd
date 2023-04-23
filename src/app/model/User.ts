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
  