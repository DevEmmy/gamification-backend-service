import { Service } from "typedi";
import { PointsDto } from "../dto/pointsDto";
import Points from "../models/points.model";

import "reflect-metadata"
@Service()
class PointService{
    constructor(private readonly model = Points){}

    async create(data: PointsDto){
        try{
            const result = await new this.model(data).save();
            return result
        }
        catch(err: any){
            
        }
    }

    async getAll(){
        try{
            let result = await this.model.find();
            return result
        }
        catch(err: any){
            
        }
    }

    async delete(id: string){
        try{
            let result = await this.model.findByIdAndDelete(id)
            return result
        }
        catch(err: any){
            
        }
    }

    async update(id: string, data: PointsDto){
        try{
            let result = await this.model.findByIdAndUpdate(id, data, {new: true})
            return result;
        }
        catch(err: any){
            
        }
    }
    
    async getOneById(id: string){
        try{
            let result = await this.model.findById(id)
        }
        catch(err: any){

        }
    }

    async getByUser(userId: string){
        try{
            let result = await this.model.findOne({userId})
            return result;
        }
        catch(err: any){

        }
    }

}

export default PointService