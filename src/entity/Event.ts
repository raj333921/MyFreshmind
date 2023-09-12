import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"

@Entity("tb_event")
export class Event {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    startDate: Date

    @Column()
    endDate: Date

    @Column()
    mapLocation: string

    @Column()
    website: string

    @Column()
    facebook: string

    @Column()
    banner: string

    @Column()
    whatsapp: string

    @Column()
    type: string

    @Column()
    location: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
