import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {ApplyJob} from "../entity/ApplyJob";

export class ApplyJobController {

   private applyJobRepository = AppDataSource.getRepository(ApplyJob);

   async all(request: Request, response: Response, next: NextFunction) {
      return this.applyJobRepository.find();
   }

   async one(request: Request, response: Response, next: NextFunction) {
      return this.applyJobRepository.findOneBy({id:parseInt(request.params.id)});
   }

   async save(request: Request, response: Response, next: NextFunction) {
      return this.applyJobRepository.save(request.body);
   }

   async remove(request: Request, response: Response, next: NextFunction) {
      let applyJobToRemove = await this.applyJobRepository.findOneBy({id:parseInt(request.params.id)});
      await this.applyJobRepository.remove(applyJobToRemove);
   }
}