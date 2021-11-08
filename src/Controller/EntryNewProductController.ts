/*
 * Cadastra novos itens
 */

import { EntryNewProductServices } from "../Services/EntryNewProductServices"
import { Request, Response } from "express"
import { Receita } from "../Job/Seller"

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
      //Caso a quantidade seja inferior a 0, retorna um erro
      if (quantidade >= 0 && custo_unitario >= 0 && margem_de_lucro >= 0) {
        //Deixa as strings em caixa baixa
        tipo = tipo.toLowerCase()
        item = item.toLowerCase()
        descricao = descricao.toLowerCase()

        //Calcura a receita para venda
        const { receitaBruta, lucro } = Receita(custo_unitario, margem_de_lucro)

        const service = new EntryNewProductServices()
        const result = await service.execute(
          tipo,
          item,
          descricao,
          quantidade,
          custo_unitario,
          margem_de_lucro,
          receitaBruta,
          lucro
        )
        return resp.json(result)
      } else {
        return resp.status(401).json("Proibido cadastro negativo")
      }
    } catch (error) {
      console.error(error)
      return resp.status(401).json("Produto já cadastrado")
    }
  }
}

export { EntryNewProductController }
