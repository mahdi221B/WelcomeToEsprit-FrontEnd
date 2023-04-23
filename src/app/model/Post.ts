import { React } from "./React";

export class Post {
  id!:number;
    title!: string;
    content!: string;
    tags!: string;
    sentimentScore!: number;
    createdAt!: Date;
    locationName!: string;
    // location!: GeoPoint;
    // comments!: Comment[];
    reactions!: React[];
    // user!: User;
    // media!: PostMedia[];
  }  