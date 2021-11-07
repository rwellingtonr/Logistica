import { Request, Response } from "express"
import { DeleteProductService } from "../Services/DeleteProductService"

interface IItemToDelete {
  item: string
}

class DeleteProductController {
  async handle(req: Request, resp: Response) {
    try {
      const { item } = req.body as IItemToDelete
      const service = new DeleteProductService()
      const result = await service.execute(item.toLowerCase())

      return resp.json(result)
    } catch (error) {
      console.error(error)
      return resp.status(401).json(`Erro ao deletar item.`)
    }
  }
}

export { DeleteProductController }
