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
  qtdProduto: number
}

class SoldItemController {
  async handle(req: Request, resp: Response) {
    try {
      const { custo_final, lucro } = req

      let { client_name, item, qtdProduto } = req.body as IItemToSell
      client_name = client_name.toLowerCase()
      item = item.toLowerCase()

      const service = new SoldItemService()
      const result = await service.execute(
        client_name,
        item,
        qtdProduto,
        custo_final,
        lucro
      )
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
