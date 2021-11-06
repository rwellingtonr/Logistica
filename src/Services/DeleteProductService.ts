import prismaClient from "../../prisma"

class DeleteProductService {
  async execute(item: string) {
    const itemDeleted = await prismaClient.produto.delete({
      where: { item },
      select: { item: true },
    })

    return itemDeleted
  }
}
export { DeleteProductService }