/* Vendas:
 * -> Produto (Item)
 * -> Quantidade
 * -> Cliente (nome)
 */

import { SoldItemService } from "../Services/SoldItemService"
import { Request, Response } from "express"

interface IItemToSell {
  client_name: string
  item: string
  quantity: number
}

class SoldItemController {
  async handle(req: Request, resp: Response) {
    try {
      let { client_name, item, quantity } = req.body as IItemToSell

      const service = new SoldItemService()

      client_name = client_name.toLowerCase()
      item = item.toLowerCase()

      const result = await service.execute(client_name, item, quantity)
      resp.json(result)
    } catch (error) {
      return resp
        .status(401)
        .json(
          `Erro ao tentar vender o item, verifique os dados, Erro: ${error}`
        )
    }
  }
}

export { SoldItemController }
