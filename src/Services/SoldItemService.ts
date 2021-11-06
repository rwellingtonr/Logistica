import prismaClient from "../../prisma"

class SoldItemService {
  async execute(client_name: string, item: string, entry: number) {
    const sellItem = await prismaClient.produto.update({
      where: { item },
      data: {
        quantidade: { decrement: entry },
        vendas: {
          create: {
            cliente: client_name,
            item,
            receita_bruta: 50,
            receita_liquida: 100,
          },
        },
      },
      include: { vendas: true },
    })

    return sellItem
  }
}

export { SoldItemService }
