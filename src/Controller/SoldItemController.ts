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
  entradeQtdProduto: number
}

class SoldItemController {
  async handle(req: Request, resp: Response) {
    try {
      let { client_name, item, entradeQtdProduto } = req.body as IItemToSell

      const service = new SoldItemService()

      client_name = client_name.toLowerCase()
      item = item.toLowerCase()

      const result = await service.execute(client_name, item, entradeQtdProduto)
      resp.json(result)
    } catch (error) {
      console.error(error)
      return resp
        .status(401)
        .json(`Erro ao tentar vender o item, verifique os dados...`)
    }
  }
}

export { SoldItemController }
