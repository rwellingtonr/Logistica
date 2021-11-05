import { EntryNewProductServices } from "../Services/EntryNewProductServices"
import { Request, Response } from "express"

class EntryNewProductController {
  async handle(req: Request, resp: Response) {
    const {
      tipo,
      item,
      descricao,
      quantidade,
      custo_unitario,
      margem_de_lucro,
    } = req.body

    const service = new EntryNewProductServices()
    try {
      const result = await service.execute(
        tipo,
        item.toLowerCase(),
        descricao,
        quantidade,
        custo_unitario,
        margem_de_lucro
      )
      return resp.json(result)
    } catch (error) {
      return resp.status(401).json("Verifique as entradas")
    }
  }
}

export { EntryNewProductController }
