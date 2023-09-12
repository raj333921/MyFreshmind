import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Indexes} from "../entity/Indexes";
import * as ip from "ip";
import {AuditController} from "./AuditController";

export class IndexesController {

   private indexRepository = AppDataSource.getRepository(Indexes);
     private auditController:AuditController = new AuditController();
   async all(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("INDEXES ALL REQUEST",ip.address(),"SELECT");
      return this.indexRepository.find();
   } 

   async one(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("INDEXES ONE REQUEST",ip.address(),"SELECT");
       return this.indexRepository.findOneBy({id:parseInt(request.params.id)});
   }
   
   async save(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("INDEXES SAVE",ip.address(),"INSERT");
      return this.indexRepository.save(request.body);
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("INDEXES REMOVE",ip.address(),"DELETE");
       let userToRemove = await this.indexRepository.findOneBy({id:parseInt(request.params.id)});
       return this.indexRepository.remove(userToRemove);
   }

   async bulksave(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("FAQ BULK REQUEST",ip.address(),"INSERT");
      return this.indexRepository.createQueryBuilder().insert().into(Indexes).values(request.body).execute();
   }
}