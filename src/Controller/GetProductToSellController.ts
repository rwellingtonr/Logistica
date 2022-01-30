/*
 * Retorna todos os itens presentes no banco de dados
 */

import { Request, Response } from "express"
import { GetProductToSellService } from "../Services/GetProductToSellService"

class GetProductToSellController {
	async handle(req: Request, resp: Response): Promise<Response> {
		try {
			const getAllProducts = new GetProductToSellService()

			const result = await getAllProducts.execute()

			return resp.json(result)
		} catch (error) {
			console.error(error)
			return resp.status(401).json("Erro ao exportar dados do banco de dados...")
		}
	}
}
export { GetProductToSellController }
