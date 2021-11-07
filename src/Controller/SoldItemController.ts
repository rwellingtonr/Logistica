/* Vendas:
 * -> Produto (Item)
 * -> Quantidade
 * -> Cliente (nome)
 */

import { SoldItemService } from "../Services/SoldItemService"
import { Request, Response } from "express"
import { Receita } from "../Job/Seller"

interface IItemToSell {
  client_name: string
  item: string
  entradeQtdProduto: number
}

class SoldItemController {
  async handle(req: Request, resp: Response) {
    try {
      const { custo_unitario, margem_de_lucro } = req
      //Calcura a receita da venda
      const { receitaBruta, lucro } = Receita(custo_unitario, margem_de_lucro)

      let { client_name, item, entradeQtdProduto } = req.body as IItemToSell
      client_name = client_name.toLowerCase()
      item = item.toLowerCase()

      const service = new SoldItemService()
      const result = await service.execute(
        client_name,
        item,
        entradeQtdProduto,
        receitaBruta,
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
