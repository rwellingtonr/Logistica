import { Request, Response } from "express"
import { GetItemServices } from "../Services/GetItemServices"

class GetItemController {
  async handle(req: Request, resp: Response) {
    const { item } = req.body
    try {
      const service = new GetItemServices()

      const result = await service.execute(item)

      return resp.json(result)
    } catch (error) {
      return resp.status(401).json("Produto não encontrado")
    }
  }
}
export { GetItemController }
