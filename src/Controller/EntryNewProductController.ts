/*
 * Cadastra novos itens
 */

import { EntryNewProductServices } from "../Services/EntryNewProductServices"
import { Request, Response } from "express"
import { ICreateNewItem } from "../Interface"
import { CheckItems } from "../Job/CheckItems/CheckItems"

class EntryNewProductController {
	async handle(req: Request, resp: Response): Promise<Response> {
		try {
			//Recebe as variáveis do Request body
			const {
				tipo,
				item,
				descricao,
				quantidade,
				custo_unitario,
				margem_de_lucro,
			}: ICreateNewItem = req.body
			//Caso a quantidade seja inferior a 0, retorna um erro
			if (!(quantidade >= 0 && custo_unitario >= 0 && margem_de_lucro >= 0)) {
				return resp.status(401).json("Proibido cadastro negativo")
			}

			const checkToCreate = new CheckItems(item, quantidade)
			const { custo_final } = await checkToCreate.checkItemToSell()

			const newProduct: ICreateNewItem = {
				tipo: tipo.toLowerCase(),
				item: item.toLowerCase(),
				descricao: descricao.toLowerCase(),
				quantidade,
				custo_unitario,
				margem_de_lucro,
				custo_final,
			}

			const createNewItem = new EntryNewProductServices()
			const result = await createNewItem.execute(newProduct)
			return resp.status(201).json(result)
		} catch (error) {
			console.error(error)
			return resp.status(401).json("Produto já cadastrado")
		}
	}
}

export { EntryNewProductController }
