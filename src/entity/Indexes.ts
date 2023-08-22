import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Category } from "./Category"

@Entity()
export class Indexes {

    @PrimaryGeneratedColumn()
    indexesId: number

    @Column()
    indexesName: string

    @Column()
    indexesDesc: string

    @Column()
    indexesURL: string

    @Column()
    indexesType: string

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
