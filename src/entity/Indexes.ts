import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Category } from "./Category"

@Entity("tb_indexes")
export class Indexes {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    url: string

    @Column()
    type: string

    @Column()
    location: string

    @Column()
    categoryId: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Category, (category) => category.indexes)
    @JoinColumn({name :'categoryId'})
        category: Category

}
