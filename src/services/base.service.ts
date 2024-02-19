import { Document, Model } from "mongoose";
import "reflect-metadata"
import { Service } from "typedi";
@Service()
class BaseService{
    protected model : Model<Document>;

    constructor(model : Model<Document> ){
        this.model = model
    }

    async create<Model>(data:any){
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

    async update(id: string, data: any){
        try{
            let result = await this.model.findByIdAndUpdate(id, data, {new: true})
            return result;
        }
        catch(err: any){
            
        }
    }
    
    async getOneById(id: string){
        try{
            let result = await this.model.findById(id);
            return result;
        }
        catch(err: any){

        }
    }

    async getByUser(userId: string){
        try{
            let result = await this.model.find({user: userId})
            return result;
        }
        catch(err: any){

        }
    }
}

export default BaseService