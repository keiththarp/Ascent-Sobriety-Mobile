import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Resource {
    @PrimaryGeneratedColumn('uuid')
    _id: string;

    @Column()
    title: string;

    @Column()
    introText: string;

    @Column()
    linkToResource: string;

    @Column()
    imageLink: string;

    @Column()
    phoneNumber: number;

    @Column()
    category: number;
}