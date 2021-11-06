import { NextFunction, Response, Request } from "express"
import prismaClient from "../../prisma"

interface IQtd {
  quantidade: number
}

const CheckItems = async (req: Request, resp: Response, next: NextFunction) => {
  const { item, quantity } = req.body

  const { quantidade } = (await prismaClient.produto.findFirst({
    where: { item },
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

export default CheckItems
