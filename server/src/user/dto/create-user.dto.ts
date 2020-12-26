import { User } from '../user.entity';

export class CreateUserDTO {
    id: string;
    firstName: string;
    lastName: string;
    isActive: boolean;
}