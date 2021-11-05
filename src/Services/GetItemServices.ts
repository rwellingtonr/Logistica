import prismaClient from "../../prisma"

class GetItemServices {
  async execute(item: string) {
    const procurarItem = await prismaClient.produto.findFirst({
      where: { item },
    })

    return procurarItem
  }
}
export { GetItemServices }
