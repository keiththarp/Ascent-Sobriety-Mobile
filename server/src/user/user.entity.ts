import { JournalEntry } from 'src/journal-entry/journal-entry.entity';
import { TrophyCase } from 'src/trophy-case/trophy-case.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  _id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  initialSobrietyDate: Date;

  @Column()
  totalSoberDays: number;

  @Column()
  newSobrietyDate: Date;

  @Column()
  consecutiveSoberDays: number;

  @Column()
  profileImage: string;

  @OneToMany(() => JournalEntry, journalEntry => journalEntry.user)
  journalEntries: JournalEntry;

  @OneToMany(() => TrophyCase, trophycase => trophycase.user)
  trophyCases: TrophyCase;
}