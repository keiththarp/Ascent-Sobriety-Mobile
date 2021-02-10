import { User } from "src/user/user.entity";

export class CreateJournalEntryDTO {
    _id: string;
    title: string;
    date: Date;
    journalEntry: string;
    sobrietyMaintained: boolean;
    vibeCheck: number;
    currentDayOfSobriety: number;
    user: User;
}