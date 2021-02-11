import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuoteSelection {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    quote: string;

    @Column()
    author: string;
}