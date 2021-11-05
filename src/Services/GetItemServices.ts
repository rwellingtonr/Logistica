import prismaClient from "../../prisma"

class GetItemServices {
  async execute(item: string) {
    const itemProcurado = prismaClient.produto.findFirst({
      where: { item },
    })

    return itemProcurado
  }
}
export { GetItemServices }
