import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Event} from "../entity/Event";
import * as ip from "ip";
import {AuditController} from "./AuditController";

export class EventController {

   private eventRepository = AppDataSource.getRepository(Event);
     private auditController:AuditController = new AuditController();
   
   async all(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("EVENTS ALL REQUEST",ip.address(),"SELECT");
      return this.eventRepository.find();
   } 
   
   async one(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("EVENTS ONE REQUEST",ip.address(),"SELECT");
      return this.eventRepository.findOneBy({eventId:request.params.id});
   } 
   
   async save(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("Events SAVE",ip.address(),"INSERT");
      return this.eventRepository.save(request.body);
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) {
     this.auditController.saveAudit("EVENTS ONE REMOVE",ip.address(),"REMOVE");
      let userToRemove = await this.eventRepository.findOneBy({eventId:request.params.id});
      await this.eventRepository.remove(userToRemove);
   } 
}