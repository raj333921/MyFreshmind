import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Event } from './Event'

@Entity("tb_applyjobs")
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

    @Column()
    jobId: string

    @Column()
    country: string

    @Column()
    workPermit: string

    @Column()
    salary: string

    @Column({
            type: "bytea",
            nullable: false
        })
    resume: Buffer

    @Column()
    fileName: string

    @Column()
    remarks: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
