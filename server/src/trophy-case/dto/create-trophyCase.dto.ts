import { User } from "src/user/user.entity";

export class CreateTrophyCaseDTO {
    _id: string;
    daysSober: number;
    startDate: Date;
    endDate: Date;
    user: User;
}