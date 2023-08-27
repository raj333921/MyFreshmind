import { AppDataSource } from "./data-source"
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";

 const app = express();
 app.use(bodyParser.json());
 app.listen(3143)

   Routes.forEach(route => {
      (app as any)[route.method](route.route, (req:   Request, res: Response, next: Function) => {
         const result = (new (route.controller as any))[route.action](req, res, next);
         if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
         } else if (result !== null && result !== undefined) {
            result.json(result);
         }
      });
   });
AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)
    // await AppDataSource.manager.save(AppDataSource.manager.create(User, {
       //   firstName: "Phantom",
       //   lastName: "Assassin",
      //    age: 24
    //   }));
   // console.log("Loaded users: ", users)
    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))



