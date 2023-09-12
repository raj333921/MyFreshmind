import { Entity, PrimaryGeneratedColumn, Column,OneToMany,CreateDateColumn,UpdateDateColumn } from "typeorm"
import { Indexes } from "./Indexes"

@Entity("tb_category")
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    type: string

    @Column()
    location: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Indexes, (indexes) => indexes.category)
        indexes: Indexes[]

}
