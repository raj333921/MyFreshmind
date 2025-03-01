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

   async save(req: Request, response: Response) {
      const applyJob = new ApplyJob();
      console.log(req.file);
      const { originalname, size, buffer } = req.file;
      applyJob.firstName = req.body.firstName;
      applyJob.resume = buffer;
      applyJob.fileName = originalname;
      applyJob.lastName = req.body.firstName;
      applyJob.jobId = req.body.jobId;
      applyJob.emailId = req.body.emailId;
      applyJob.jobRole = req.body.jobRole;
      applyJob.country = req.body.country;
      applyJob.workPermit = req.body.workPermit;
      applyJob.salary = req.body.salary;
      applyJob.remarks = req.body.remarks;
      return this.applyJobRepository.save(applyJob);
   }

   async remove(request: Request, response: Response, next: NextFunction) {
      let applyJobToRemove = await this.applyJobRepository.findOneBy({id:parseInt(request.params.id)});
      await this.applyJobRepository.remove(applyJobToRemove);
   }
}