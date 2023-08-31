import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {AuditTrail} from "../entity/AuditTrail";

export class AuditController {

   private auditRepository = AppDataSource.getRepository(AuditTrail);
   
   async all(request: Request, response: Response, next: NextFunction) { 
      return this.auditRepository.find();
   } 
   
   async one(request: Request, response: Response, next: NextFunction) { 
      return this.auditRepository.findOneBy({auditId:request.params.id});
   } 

   async save(request: Request, response: Response, next: NextFunction) {

      return this.auditRepository.save(request.body);
   }

   async remove(request: Request, response: Response, next: NextFunction) { 
      let userToRemove = await this.auditRepository.findOneBy({auditId:request.params.id});
      await this.auditRepository.remove(userToRemove);
   }


  saveAudit(name: string,ip: string,desc: string): boolean{
    this.auditRepository.save({
               auditName: name,
               auditIp: ip,
               auditDesc: desc
            });
            return true;
            }
}