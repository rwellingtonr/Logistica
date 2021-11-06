/* Vendas:
 * -> Produto ou Item
 * -> Quantidade
 * -> Cliente (nome)
 */

import { SoldItemService } from "../Services/SoldItemService"
import { Request, Response } from "express"
// import { CheckItems } from "../middleware/CheckItems"
class SoldItemController {
  async handle(req: Request, resp: Response) {
    try {
      const { client_name, item, quantity } = req.body

      // const checkItems = new CheckItems()
      const service = new SoldItemService()

      // const checkedOut = await checkItems.verify(item, quantity)
      // if (checkedOut) {
      const result = await service.execute(client_name, item, quantity)
      resp.json(result)
      // } else {
      //   console.log("Error")
      //   return resp
      //     .status(401)
      //     .json("Quantidade insuficiente para finalizar a compra!")
      // }
    } catch (error) {
      return resp
        .status(401)
        .json("Erro ao tentar vender o item, verifique os dados")
    }
  }
}

export { SoldItemController }
