export class CreateUserDTO {
    _id: string;
    email: string;
    password: string;
    name: string;
    initialSobrietyDate: Date;
    totalSoberDays: number;
    newSobrietyDate: Date;
    consecutiveSoberDays: number;
    profileImage: string;
}