/*
 * Cadastra um novo produto no banco de dados
 */

import prismaClient from "../../prisma"
import { ICreateNewItem } from "../Interface"
import { profit } from "../Job/Seller"

class EntryNewProductServices {
	async execute(newProduct: ICreateNewItem) {
		const { tipo, item, descricao, quantidade, custo_unitario, margem_de_lucro, custo_final } =
			newProduct

		//Calcula a receita para venda
		const { lucro } = profit(custo_unitario, margem_de_lucro)

		const novoProduto = await prismaClient.produto.create({
			data: {
				tipo,
				item,
				descricao,
				quantidade,
				custos: {
					create: [
						{
							custo_unitario,
							margem_de_lucro,
							custo_final,
							lucro,
						},
					],
				},
			},
			include: { custos: true },
		})

		return novoProduto
	}
}

export { EntryNewProductServices }
