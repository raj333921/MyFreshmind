import { AppDataSource } from "../data-source"
import {NextFunction, Request, Response} from "express";
import {Category} from "../entity/Category";

export class CategoryController {

   private categoryRepository = AppDataSource.getRepository(Category);

   async all(request: Request, response: Response, next: NextFunction) { 
      return this.categoryRepository.createQueryBuilder("category").innerJoinAndSelect("category.indexes", "indexes").getMany();
   } 


   async allCat(request: Request, response: Response, next: NextFunction) {
    return this.categoryRepository.find();
   }

   async one(request: Request, response: Response, next: NextFunction) { 
      return this.categoryRepository.findOneBy({categoryId:request.params.id});
   } 
   
   async save(request: Request, response: Response, next: NextFunction) { 
      return this.categoryRepository.save(request.body);
   } 
   
   async remove(request: Request, response: Response, next: NextFunction) { 
      let userToRemove = await this.categoryRepository.findOneBy({categoryId:request.params.id});
      await this.categoryRepository.remove(userToRemove);
   } 
}