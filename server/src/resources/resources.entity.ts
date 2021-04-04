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

    @Column({
        nullable: true
    })
    imageLink: string;

    @Column({
        nullable: true
    })
    phoneNumber: number;

    @Column({
        nullable: true
    })
    category: number;
}