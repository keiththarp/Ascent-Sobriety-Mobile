import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class TrophyCase {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    daysSober: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @ManyToOne(() => User, user => user.trophyCases)
    user: User;
}