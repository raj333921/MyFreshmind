import { Entity, PrimaryGeneratedColumn, Column,OneToMany,JoinColumn,CreateDateColumn,UpdateDateColumn} from "typeorm"
import { Amenities } from "./Amenities"

@Entity("tb_event")
export class Event {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column()
    mapLocation: string;

    @Column()
    website: string;

    @Column()
    facebook: string;

    @Column()
    banner: string;

    @Column()
    whatsapp: string;

    @Column()
    type: string;

    @Column()
    location: string;

    @Column({
            nullable: true
        })
    price: string;

    @Column({
                nullable: true
            })
    timeSlot: string;

    @Column({
                nullable: true
            })
    desc: string;

    @Column({
                nullable: true
            })
    lang: string;

    @Column({
                nullable: true
            })
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Amenities, (amenities) => amenities.event)
    amenities: Amenities[]

}
