import { IsNotEmpty, isNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hero extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @IsNotEmpty()
    @Column()
    name: string

    @Column()
    position: string

    @Column()
    power: number
}