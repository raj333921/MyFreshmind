import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Indexes} from "../entity/Indexes";

export class IndexesController {

   private indexRepository = AppDataSource.getRepository(Indexes);
   
   async all(request: Request, response: Response, next: NextFunction) { 
      return this.indexRepository.find();
   } 

   async one(request: Request, response: Response, next: NextFunction) { 
      return this.indexRepository.findOneBy({indexesId:request.params.id});
   } 
   
   async save(request: Request, response: Response, next: NextFunction) { 
      return this.indexRepository.save(request.body);
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) { 
      let userToRemove = await this.indexRepository.findOneBy({indexesId:request.params.id});
      await this.indexRepository.remove(userToRemove);
   } 
}