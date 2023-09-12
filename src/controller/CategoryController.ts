import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Category} from "../entity/Category";
import {AuditController} from "./AuditController";
import * as ip from "ip";

export class CategoryController {

   private categoryRepository = AppDataSource.getRepository(Category);
   private auditController:AuditController = new AuditController();
   async all(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("CATEGORY & INDEX REQUEST",ip.address(),"REQUEST");
      return this.categoryRepository.createQueryBuilder("category").innerJoinAndSelect("category.indexes", "indexes").getMany();
   } 


   async allCat(request: Request, response: Response, next: NextFunction) {
    this.auditController.saveAudit("ALL CATEGORY",ip.address(),"SELECT");
    return this.categoryRepository.find();
   }

   async one(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("CATEGORY ONE REQUEST",ip.address(),"SELECT");
       return this.categoryRepository.findOneBy({id:parseInt(request.params.id)});
   }
   
   async save(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("CATEGORY SAVE REQUEST",ip.address(),"INSERT");
      return this.categoryRepository.save(request.body);
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) {
       this.auditController.saveAudit("CATEGORY REMOVE",ip.address(),"DELETE");
       let userToRemove = await this.categoryRepository.findOneBy({id:parseInt(request.params.id)});
       return this.categoryRepository.remove(userToRemove);
   }

   async bulksave(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("CATEGORY BULK REQUEST",ip.address(),"INSERT");
      return this.categoryRepository.createQueryBuilder().insert().into(Category).values(request.body).execute();
   }
}