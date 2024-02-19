import { Service } from "typedi";
import { HistoryDto } from "../dto/historyDto";
import History from "../models/history.model";

// import "reflect-metadata"
@Service()
class HistoryService{
    constructor(private readonly model = History){}

    async create(data: HistoryDto){
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

    async update(id: string, data: HistoryDto){
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
            let result = await this.model.find({userId})
            return result;
        }
        catch(err: any){

        }
    }

}

export default HistoryService