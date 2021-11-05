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
    })

    return procurarItem
  }
}
export { GetProductToSellService }
