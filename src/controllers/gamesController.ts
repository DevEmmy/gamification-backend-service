import { Request, Response } from "express";
import GameService from "../services/games.service";
import ResponseHandler from "../utils/responseHandler";

import "reflect-metadata"
import { Service } from "typedi";
@Service()
class GamesController{
    constructor(private readonly service : GameService,
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
            let {gameId} = request.params;
            let result = await this.service.getOneById(gameId);
            this.responseHandler.success(response, result, "Listed Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }

    async delete(request: Request, response: Response){
        try{
            let {gameId} = request.params;
            let result = await this.service.delete(gameId);
            this.responseHandler.success(response, result, "Deleted Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }


    async update(request: Request, response: Response){
        try{
            let {gameId} = request.params;
            let payload = request.body;
            let result = await this.service.update(gameId, payload);
            this.responseHandler.success(response, result, "Updated Successfully", 200)
        }
        catch(err: any){
            this.responseHandler.error(response, err.message, err.status)
        }
    }
}

export default GamesController