/*
 * Cadastra um novo produto no banco de dados
 */

import prismaClient from "../../prisma"

class EntryNewProductServices {
  async execute(
    tipo: string,
    item: string,
    descricao: string,
    quantidade: number,
    custo_unitario: number,
    margem_de_lucro: number
  ) {
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
