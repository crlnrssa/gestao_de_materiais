import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('materials')
export class Materials {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar' })
    nome: string

    @Column({ type: 'varchar' })
    descricao: string

    @Column({ type: 'int' })
    quantidade: number
}