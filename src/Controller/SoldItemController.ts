/* Vendas:
* -> Produto ou Item
* -> Quantidade
* -> Cliente (nome)
*/

import { EntryNewProductServices } from "../Services/EntryNewProductServices"
import { Request, Response } from "express"


class SoldItemController {
  async handle(req: Request, resp: Response) {


    const {cliente_name, item, quantity} = req.body

    try {
        
    } catch (error) {
        resp.status(401).json("Erro ao tentar vender o item, verifique os dados")
    }

  }
}

export { SoldItemController}