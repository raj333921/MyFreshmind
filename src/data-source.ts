import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Category } from "./entity/Category"
import { Indexes } from "./entity/Indexes"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User,Category,Indexes],
    migrations: [],
    subscribers: [],
})
