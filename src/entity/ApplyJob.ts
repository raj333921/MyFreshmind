import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Event } from './Event'

export enum WP {
    WP_YES = "yes",
    WP_NO = "no",
}


@Entity("tb_applyjob")
export class ApplyJob {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    emailId: string

    @Column()
    jobRole: string

    @Column({
        type: "varchar",
        length: 150,
        unique: true
    })
    jobId: string

    @Column()
    country: string

    @Column({
            type: "enum",
            enum: WP,
            default: WP.WP_NO,
        })
    workPermit: WP

    @Column()
    salary: string

    @Column({
            type: "bytea",
            nullable: false
        })
    resume: Buffer

    @Column()
    remarks: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
