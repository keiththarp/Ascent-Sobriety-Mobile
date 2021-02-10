import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}