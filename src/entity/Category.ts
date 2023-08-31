import { Entity, PrimaryGeneratedColumn, Column,OneToMany,CreateDateColumn,UpdateDateColumn } from "typeorm"
import { Indexes } from "./Indexes"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    categoryId: number

    @Column()
    categoryName: string

    @Column()
    categoryDesc: string

    @Column()
    categoryType: string

    @Column({
        nullable: true,
    })
    categoryLoc: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Indexes, (indexes) => indexes.category)
        indexes: Indexes[]

}
