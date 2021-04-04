import { ApiProperty } from '@nestjs/swagger';
import { User } from "src/user/user.entity";

export class CreateJournalEntryDTO {
    @ApiProperty()
    _id: string;

    @ApiProperty()
    date: Date;

    @ApiProperty()
    journalEntry: string;

    @ApiProperty()
    sobrietyMaintained: boolean;

    @ApiProperty()
    vibeCheck: number;

    @ApiProperty()
    currentDayOfSobriety: number;

    @ApiProperty({ type: () => User })
    user: User;
}