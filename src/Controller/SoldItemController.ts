/* Vendas:
 * -> Produto (Item)
 * -> Quantidade
 * -> Cliente (nome)
 */

import { SoldItemService } from "../Services/SoldItemService"
import { Request, Response } from "express"
import { CheckItems } from "../Job/CheckItems/CheckItems"

interface IItemToSell {
	client_name: string
	item: string
	qtdProduto: number
}

class SoldItemController {
	async handle(req: Request, resp: Response): Promise<Response> {
		try {
			const { client_name, item, qtdProduto }: IItemToSell = req.body

			const checkItems = new CheckItems(item, qtdProduto)
			const { custo_final, lucro } = await checkItems.checkItemToSell()

			const service = new SoldItemService()
			const result = await service.execute(
				client_name.toLowerCase(),
				item.toLowerCase(),
				qtdProduto,
				custo_final,
				lucro
			)
			resp.status(200).json(result)
		} catch (error) {
			console.error(error)
			return resp.status(401).json(`Erro ao tentar vender o item, verifique os dados...`)
		}
	}
}

export { SoldItemController }
