import { NextFunction, Response, Request } from "express"
import prismaClient from "../../prisma"
import { IData, IQtd } from "./Interface"

const CheckItemsToSell = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const { item, quantity } = req.body as IData

  const { quantidade } = (await prismaClient.produto.findFirst({
    where: { item: item.toLowerCase() },
    select: { quantidade: true },
  })) as IQtd

  if (quantidade >= quantity) {
    //retorna a próxima função
    return next()
  }
  // Se a quantidade solicita para vendar for maior que a em estoque,
  // Então, retorna uma mensagem de erro
  return resp.status(401).json({ error: "Erro! quantidade insuficiente" })
}

export default CheckItemsToSell
