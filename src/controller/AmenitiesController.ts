import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Amenities} from "../entity/Amenities";
import * as ip from "ip";
import {AuditController} from "./AuditController";

export class AmenitiesController {

   private amenitiesRepository = AppDataSource.getRepository(Amenities);
     private auditController:AuditController = new AuditController();
   
   async all(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("Amenities ALL REQUEST",ip.address(),"SELECT");
      return this.amenitiesRepository.find();
   } 
   
   async one(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("Amenities ONE REQUEST",ip.address(),"SELECT");
       return this.amenitiesRepository.findOneBy({id:parseInt(request.params.id)});
   }
   
   async save(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("Amenities SAVE",ip.address(),"INSERT");
      return this.amenitiesRepository.save(request.body);
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("Amenities ONE REMOVE",ip.address(),"REMOVE");
       let userToRemove = await this.amenitiesRepository.findOneBy({id:parseInt(request.params.id)});
       return this.amenitiesRepository.remove(userToRemove);
   }

   async bulksave(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("Amenities BULK REQUEST",ip.address(),"INSERT");
      return this.amenitiesRepository.createQueryBuilder().insert().into(Amenities).values(request.body).execute();
   }
}