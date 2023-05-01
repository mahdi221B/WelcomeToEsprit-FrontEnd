import { classroom } from './classroom';



export class Equipement {
  id!: number;
  type!: string;
  name!: string;
  description!: string;
  status!: string;
  quantity!: number;
  purshaseDate!: Date;
  cost!: number;
  classroom!: classroom;
}
