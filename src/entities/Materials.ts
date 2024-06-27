import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('materials') //define entidade e referencia com o banco de dados
export class Materials {
    @PrimaryGeneratedColumn()  //define as colunas e tipos para a criação do banco de dados
    id: number

    @Column({ type: 'varchar' })
    nome: string

    @Column({ type: 'varchar' })
    descricao: string

    @Column({ type: 'int' })
    quantidade: number
}