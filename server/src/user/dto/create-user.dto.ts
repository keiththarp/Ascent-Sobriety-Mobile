import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDTO {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    initialSobrietyDate: Date;

    @ApiProperty()
    totalSoberDays: number;

    @ApiProperty()
    newSobrietyDate: Date;

    @ApiProperty()
    consecutiveSoberDays: number;

    @ApiProperty()
    profileImage: string;
}