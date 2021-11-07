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
  const { item, entry } = req.body as IData
  const quantidade = await Getter(item.toLowerCase())

  if (quantidade >= entry) {
    //retorna a próxima função
    return next()
  }
  // Se a quantidade solicita para vendar for maior que a em estoque,
  // Então, retorna uma mensagem de erro
  return resp.status(401).json({ error: "Erro! quantidade insuficiente" })
}

export default CheckItemsToSell
