import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Faq {

    @PrimaryGeneratedColumn()
    faqId: number

    @Column()
    faqQuestion: string

    @Column()
    faqAnswer: string

    @Column()
    faqAuthor: String

    @Column()
    faqCategory: String

    @Column()
    faqLoc: String

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
