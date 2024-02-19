import { Request, Response } from "express";
import ResponseHandler from "../utils/responseHandler";
import PointService from "../services/points.service";
import "reflect-metadata"
import { Service } from "typedi";
@Service()
class PointsController{
    constructor(private readonly service : PointService,
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
            let {userId} = request.params;
            let result = await this.service.getByUser(userId);
            this.responseHandler.success(response, result, "Listed Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }


    // async update(request: Request, response: Response){
    //     try{
    //         let {gameId} = request.params;
    //         let payload = request.body;
    //         let result = await this.service.update(gameId, payload);
    //         this.responseHandler.success(response, result, "Updated Successfully", 200)
    //     }
    //     catch(err: any){
    //         this.responseHandler.error(response, err.message, err.status)
    //     }
    // }
}

export default PointsController