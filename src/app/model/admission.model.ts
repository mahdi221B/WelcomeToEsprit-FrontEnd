import { classroom } from "./classroom";
import { User } from "./user.model";

export class Admission {
    id!: number;
    student!: User;
    teacher!: User;
    classroom!: classroom;
    date!: Date; // Use Date type for LocalDateTime in TypeScript
    admissionResult!: string;
    admissionType!: string;
}
