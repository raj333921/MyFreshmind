import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Indexes } from "./entity/Indexes"
import { AuditTrail } from "./entity/AuditTrail"
import { Event } from "./entity/Event"
import { Faq } from "./entity/Faq"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "FreshMind",
    password: "P@ssword12",
    database: "FreshMind",
    synchronize: true,
    logging: false,
    entities: [User,Category,Indexes,AuditTrail,Event,Faq],
    migrations: [],
    subscribers: [],
})



