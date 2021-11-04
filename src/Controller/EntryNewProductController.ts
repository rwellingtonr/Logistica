import { Request, Response } from "express"
import { EntryNewProductServices } from "../Services/EntryNewProductServices"

class EntryNewProductController {
    async handle(req:Request, resp:Response) {
        
        const {custo_unitario, margem_de_lucro} = req.body

        const {produto_id, colaborador_id} = req

        const service = new EntryNewProductServices()
        
        const  result = await service.execute(custo_unitario, margem_de_lucro, produto_id, colaborador_id)

        return resp.json(result)
    }

}

export {EntryNewProductController}