import { Request, Response } from "express";
import ResponseHandler from "../utils/responseHandler";
import HistoryService from "../services/history.service";

import "reflect-metadata"
import { Service } from "typedi";
@Service()
class HistoryController{
    constructor(private readonly service : HistoryService,
        private readonly responseHandler: ResponseHandler
        ){
    }

    async create(request: Request, response: Response){
        try{
            let data = request.body;
            let result = await this.service.create(data)
            this.responseHandler.success(response, result, "Successfull", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }

    async getAll(request: Request, response: Response){
        try{
            let result = await this.service.getAll();
            this.responseHandler.success(response, result, "Listed Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }

    async getOne(request: Request, response: Response){
        try{
            let {historyId} = request.params;
            let result = await this.service.getOneById(historyId);
            this.responseHandler.success(response, result, "Listed Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }

    async delete(request: Request, response: Response){
        try{
            let {historyId} = request.params;
            let result = await this.service.delete(historyId);
            this.responseHandler.success(response, result, "Deleted Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }

    async getByUser(request: Request, response: Response){
        try{
            let {userId} = request.params;
            let result = await this.service.getByUser(userId)
            this.responseHandler.success(response, result, "Deleted Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }
}

export default HistoryController