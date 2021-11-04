import { Request, Response } from "express"
import { EntryNewProductServices } from "../Services/EntryNewProductServices"

class EntryNewProductController {
    async handle(req:Request, resp:Response) {
        
        const service = new EntryNewProductServices()
        
        const  result = await service.execute()

        return resp.json(result)
    }

}

export {EntryNewProductController}