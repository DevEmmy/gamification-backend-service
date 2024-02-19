import { Response } from "express";
import { Service } from "typedi";

import "reflect-metadata"
@Service()
class ResponseHandler{
    constructor(){}

    createObject(data: any, message: string = "Successful", status : number = 200){
        return {
            data, message, status
        }
    }

    success(response: Response, data: any, message: string = "Successful", status: number){
        let payload = this.createObject(data, message);
        return response.json(payload).status(payload.status)
    }

    error(response: Response, message: string = "An Error Occured", status: number = 400){
        let payload = this.createObject(null, message, status);
        return response.status(status).json(payload)
    }
}

export default ResponseHandler