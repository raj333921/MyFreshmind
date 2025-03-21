import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Faq} from "../entity/Faq";
import * as ip from "ip";
import {AuditController} from "./AuditController";

export class FAQController {

   private faqRepository = AppDataSource.getRepository(Faq);
     private auditController:AuditController = new AuditController();
   
   async all(request: Request, response: Response, next: NextFunction) {
     let loc = request.query.loc ? request.query.loc : "BE"
     this.auditController.saveAudit("FAQ ALL REQUEST",ip.address(),"SELECT");
      return this.faqRepository.createQueryBuilder("faq").where("faq.location = :location", { location: loc }).getMany();
   } 
   
   async one(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("FAQ ONE REQUEST",ip.address(),"SELECT");
       return this.faqRepository.findOneBy({ id:parseInt(request.params.id)});
   }
   
   async save(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("FAQ SAVE",ip.address(),"INSERT");
       return this.faqRepository.save(request.body);
   }
   
   async remove(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("FAQ ONE REMOVE",ip.address(),"REMOVE");
       let userToRemove = await this.faqRepository.findOneBy({id:parseInt(request.params.id)});
       return this.faqRepository.remove(userToRemove);
   }


   async bulksave(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("FAQ BULK REQUEST",ip.address(),"INSERT");
      return this.faqRepository.createQueryBuilder().insert().into(Faq).values(request.body).execute();
   }
}