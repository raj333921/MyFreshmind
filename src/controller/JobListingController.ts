import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {JobListing} from "../entity/JobListing";

export class JobListingController {

   private jobListingRepository = AppDataSource.getRepository(JobListing);

   async all(request: Request, response: Response, next: NextFunction) {
      return this.jobListingRepository.find();
   }

   async one(request: Request, response: Response, next: NextFunction) {
      return this.jobListingRepository.findOneBy({id:parseInt(request.params.id)});
   }

   async save(request: Request, response: Response, next: NextFunction) {
      return this.jobListingRepository.save(request.body);
   }

   async remove(request: Request, response: Response, next: NextFunction) {
      let jobListingToRemove = await this.jobListingRepository.findOneBy({id:parseInt(request.params.id)});
      await this.jobListingRepository.remove(jobListingToRemove);
   }
}