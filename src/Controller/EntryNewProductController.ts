/*
 * Cadastra novos itens
 */

import { EntryNewProductServices } from "../Services/EntryNewProductServices"
import { Request, Response } from "express"

interface IAddNewItem {
  tipo: string
  item: string
  descricao: string
  quantidade: number
  custo_unitario: number
  margem_de_lucro: number
}

class EntryNewProductController {
  async handle(req: Request, resp: Response) {
    try {
      //Recebe as variáveis do Request body
      let {
        tipo,
        item,
        descricao,
        quantidade,
        custo_unitario,
        margem_de_lucro,
      } = req.body as IAddNewItem
      //Deixa as strings em caixa baixa
      tipo = tipo.toLowerCase()
      item = item.toLowerCase()
      descricao = descricao.toLowerCase()

      const service = new EntryNewProductServices()
      const result = await service.execute(
        tipo,
        item,
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
