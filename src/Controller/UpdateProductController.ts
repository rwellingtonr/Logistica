/*
 * Atualiza a quantidade em estoque do determinado item
 */

import { Request, Response } from "express"
import { UpdateProductServices } from "../Services/UpdateProductServices"

interface IUpdateQuantity {
  item: string
  qtdProduto: number
}

class UpdateProductController {
  async handle(req: Request, resp: Response) {
    const { item, qtdProduto } = req.body as IUpdateQuantity
    try {
      const service = new UpdateProductServices()
      const result = await service.execute(item.toLowerCase(), qtdProduto)
      return resp.json(result)
    } catch (error) {
      console.error(error)
      return resp.status(401).json(`Erro ao atualizar os dados...`)
    }
  }
}

export { UpdateProductController }
