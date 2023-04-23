
export interface IJobOffer {
    specialty: string;
    title?: string;
    description: string;
    requirements: string;
    location: string;

    date_limite: Date;
}
export class JobOffer implements IJobOffer {

    specialty: string;
    title: string;
    description: string;
    requirements: string;
    location: string;

    date_limite!: Date;
   constructor(other?:Partial<IJobOffer>){
    this.specialty=other?.specialty||'';
    this.date_limite =other?.date_limite||new Date();
    this.description=other?.description||'';
    this.requirements=other?.requirements||'';
    this.location=other?.location||'';
    this.title=other?.title||''

   }
}
