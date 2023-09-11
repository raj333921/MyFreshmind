import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Category } from "./Category"

@Entity()
export class AuditTrail {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    ip: string

    @Column()
    description: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
