import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Event } from './Event'
@Entity("tb_joblisting")
export class JobListing {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    experience: string

    @Column()
    employeeType: string

    @Column()
    language: string

    @Column()
    jobRole: string

    @Column()
    commuteType: string

    @Column()
    location: string

    @Column()
    salary: string

    @Column()
    description: string

    @Column()
    techDetails: string

    @Column()
    client: string

    @CreateDateColumn()
    closeDate: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
