import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Indexes } from "./entity/Indexes"
import { AuditTrail } from "./entity/AuditTrail"
import { Event } from "./entity/Event"
import { Faq } from "./entity/Faq"
import { Amenities } from "./entity/Amenities"
import { JobListing } from "./entity/JobListing"
import { ApplyJob } from "./entity/ApplyJob"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "sachvkfl_bookmark1",
    password: "Rajesh@23242526",
    database: "sachvkfl_bookmark",
    synchronize: true,
    logging: false,
    entities: [User,Category,Indexes,AuditTrail,Event,Faq,Amenities,JobListing,ApplyJob],
    migrations: [],
    subscribers: [],
})



