import { Request, Response } from "express"
import { EntryNewProductServices } from "../Services/EntryNewProductServices"

class EntryNewProductController {
    async handle(req:Request, resp:Response) {
        
        const {colaborador_id} = req

        const service = new EntryNewProductServices()
        
        const  result = await service.execute(colaborador_id)

        return resp.json(result)
    }

}

export {EntryNewProductController}