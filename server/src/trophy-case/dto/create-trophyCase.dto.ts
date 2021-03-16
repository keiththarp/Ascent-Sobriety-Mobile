import { ApiProperty } from '@nestjs/swagger';
import { User } from "src/user/user.entity";

export class CreateTrophyCaseDTO {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    daysSober: number;

    @ApiProperty()
    startDate: Date;

    @ApiProperty()
    endDate: Date;

    @ApiProperty({ type: () => User })
    user: User;
}