import { Entity, PrimaryGeneratedColumn, Column,ManyToOne,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Event } from './Event'
@Entity("tb_amenities")
export class Amenities {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
            nullable: true
        })
    name: string

    @Column({
            nullable: true
        })
    @Column()
    desc: string

    @Column()
    type: string

    @Column()
    eventId: number

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Event, (event) => event.amenities)
    @JoinColumn({name :'eventId'})
    event: Event

}
