/*
 * Atualiza a quantidade em estoque do determinado item
 */

import { Request, Response } from "express"
import { CheckItems } from "../Job/CheckItems/CheckItems"
import { UpdateProductServices } from "../Services/UpdateProductServices"

interface IUpdateQuantity {
	item: string
	qtdProduto: number
}

class UpdateProductController {
	async handle(req: Request, resp: Response): Promise<Response> {
		try {
			const { item, qtdProduto }: IUpdateQuantity = req.body

			const checkItems = new CheckItems(item, qtdProduto)
			await checkItems.checkItemToUpdate()

			const updateItem = new UpdateProductServices()
			const result = await updateItem.execute(item.toLowerCase(), qtdProduto)
			return resp.json(result)
		} catch (error) {
			console.error(error)
			return resp.status(401).json(`Erro ao atualizar os dados...`)
		}
	}
}

export { UpdateProductController }
