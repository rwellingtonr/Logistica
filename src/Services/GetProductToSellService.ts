/*
 * Retorna todos os produtos cadastrados
 * ordenados pelo item de forma crescente
 */

import prismaClient from "../../prisma"

class GetProductToSellService {
  async execute() {
    const procurarItem = await prismaClient.produto.findMany({
      include: {
        custos: {
          select: {
            custo_unitario: true,
          },
        },
      },
      orderBy: { item: "asc" },
    })

    return procurarItem
  }
}
export { GetProductToSellService }
