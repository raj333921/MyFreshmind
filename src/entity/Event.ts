import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"

@Entity()
export class Event {

    @PrimaryGeneratedColumn()
    eventId: number

    @Column()
    eventName: string

    @Column()
    eventStartDate: string

    @Column()
    eventEndDate: string

    @Column()
    location: string

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

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
