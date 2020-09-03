import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Email {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    to: string

    @Column()
    from: string

    @Column()
    content: string
}
