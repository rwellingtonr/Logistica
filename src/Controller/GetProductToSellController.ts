import { Request, Response } from "express"
import { GetProductToSellService } from "../Services/GetProductToSellService"

class GetProductToSellController {
  async handle(req: Request, resp: Response) {
    try {
      const service = new GetProductToSellService()

      const result = await service.execute()

      return resp.json(result)
    } catch (error) {
      return resp.status(401).json("Erro ao exportar dados do banco de dados")
    }
  }
}
export { GetProductToSellController }
