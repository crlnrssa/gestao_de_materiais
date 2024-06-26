import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar' })
    nome: string

    @Column({ type: 'varchar', unique: true })
    email: string

    @Column({ type: 'varchar'})
    senha: string
}