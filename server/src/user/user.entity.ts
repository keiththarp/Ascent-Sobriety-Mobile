import { JournalEntry } from 'src/journal-entry/journal-entry.entity';
import { TrophyCase } from 'src/trophy-case/trophy-case.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  _id: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  initialSobrietyDate: Date;

  @Column({
    default: 0
  })
  totalSoberDays: number;

  @Column({
    nullable: true
  })
  newSobrietyDate: Date;

  @Column({
    default: 0
  })
  consecutiveSoberDays: number;

  @Column({
    nullable: true
  })
  profileImage: string;

  @OneToMany(() => JournalEntry, journalEntry => journalEntry.user)
  journalEntries: JournalEntry;

  @OneToMany(() => TrophyCase, trophycase => trophycase.user)
  trophyCases: TrophyCase;
}