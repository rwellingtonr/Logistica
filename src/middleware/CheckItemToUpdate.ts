import { NextFunction, Response, Request } from "express"
import { Getter } from "./Getter"
import { IData } from "./Interface"

const CheckItemToUpdate = async (
  req: Request,
  resp: Response,
  next: NextFunction
) => {
  const { item, entry } = req.body as IData
  const quantidade = await Getter(item.toLowerCase())

  const valor = quantidade + entry //Entry pode assumir valor negativo

  if ((quantidade && valor) > 0) {
    //retorna a próxima função
    return next()
  }

  return resp.status(401).json({ error: "Erro! quantidade insuficiente" })
}

export default CheckItemToUpdate
