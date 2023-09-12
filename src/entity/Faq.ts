import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity("tb_faq")
export class Faq {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    question: string

    @Column()
    answer: string

    @Column()
    author: String

    @Column()
    category: String

    @Column()
    location: String

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
