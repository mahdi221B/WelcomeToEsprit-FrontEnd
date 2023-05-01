import { User } from "./User";

export class Comments {
    id!:number;
    content!: string;
    createdAt!: Date;
    user!:User;
}  