import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class JournalEntry {
    @PrimaryGeneratedColumn("uuid")
    _id: string;

    @Column()
    title: string;

    @Column()
    date: Date;

    @Column()
    journalEntry: string;

    @Column()
    sobrietyMaintained: boolean;

    @Column()
    vibeCheck: number;

    @Column()
    currentDayOfSobriety: number;

    @ManyToOne(() => User, user => user.journalEntries)
    user: User;
}