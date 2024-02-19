import { Service } from "typedi";
import { CreateGame } from "../dto/gamesDto";
import { upload } from "../helpers/upload";
import Games from "../models/games.model";
import "reflect-metadata"
@Service()
class GameService{
    constructor(private readonly model = Games){}

    async create(data: CreateGame){
        try{
            data.cover = await upload(data.cover);
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

    async update(id: string, data: CreateGame){
        try{
            if(data.cover){
                data.cover = await upload(data.cover);
            }
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

}

export default GameService