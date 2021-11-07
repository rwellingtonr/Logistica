/*
 * Verifica se o item pode ser vendido
 * -> A quantidade a ser vendida não pode ser maior que a quantidade em estoque!
 */

import { NextFunction, Response, Request } from "express"
import { Getter } from "./Getter"
import { IData } from "./Interface"

const CheckItemsToSell = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  try {
    const { item, qtdProduto } = req.body as IData
    const dados = await Getter(item.toLowerCase())

    //Separa os dados recebidos do Getter
    const { quantidade } = dados
    const { custo_final, lucro } = dados.custos[0]

    if (quantidade >= qtdProduto) {
      //Adiciona metricas para futuros cálculos
      req.custo_final = custo_final
      req.lucro = lucro
      //retorna a próxima função
      return next()
    }
    // Se a quantidade solicita para vendar for maior que a em estoque,
    // Então, retorna uma mensagem de erro
    return resp.status(401).json({ error: "Erro! quantidade insuficiente" })
  } catch (error) {
    console.log(error)
    return resp.status(401).json("Item inexistente")
  }
}

export default CheckItemsToSell
