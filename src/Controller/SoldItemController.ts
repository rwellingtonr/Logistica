/* Vendas:
 * -> Produto ou Item
 * -> Quantidade
 * -> Cliente (nome)
 */

import { SoldItemService } from "../Services/SoldItemService"
import { Request, Response } from "express"

class SoldItemController {
  async handle(req: Request, resp: Response) {
    try {
      const { client_name, item, quantity } = req.body

      const service = new SoldItemService()
      const result = await service.execute(
        client_name,
        item,
        quantity,
       
      )
      resp.json(result)
    } catch (error) {
      resp.status(401).json("Erro ao tentar vender o item, verifique os dados")
    }
  }
}

export { SoldItemController }
