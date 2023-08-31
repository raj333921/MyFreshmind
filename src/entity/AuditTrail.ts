import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Category } from "./Category"

@Entity()
export class AuditTrail {

    @PrimaryGeneratedColumn()
    auditId: number

    @Column()
    auditName: string

    @Column()
    auditIp: string

    @Column()
    auditDesc: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
