import { Request, Response } from "express"
import { UpdateProductServices } from "../Services/UpdateProductServices"

class UpdateProductController {
  async handle(req: Request, resp: Response) {
    const { item } = req.body

    try {
      const service = new UpdateProductServices()
      const result = await service.execute(item)
      return resp.json(result)
    } catch (error) {
      return resp.status(401).json("Erro ao atualizar os dados")
    }
  }
}

export { UpdateProductController }