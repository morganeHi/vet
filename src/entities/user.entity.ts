import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Owner } from "./owner.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, default: ''})
    email: string

    @Column({nullable: false, default: ''})
    password: string

    @OneToOne(()=> Owner)
    @JoinColumn()
    own_id: Owner
}
