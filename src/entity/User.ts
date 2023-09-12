import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("tb_user")
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    dob: Date

    @Column()
    email: string

}
