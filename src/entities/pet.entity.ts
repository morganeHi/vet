import { Owner, Type } from "src/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pets')
export class Pet {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false, default: ''})
    name: string

    @Column({nullable: false, default: ''})
    birthdate: string

    @ManyToOne(()=> Type, (type)=>type.id)
    type_id: Type

    @ManyToOne(()=> Owner, (owner)=>owner.id)
    own_id: Owner
}
