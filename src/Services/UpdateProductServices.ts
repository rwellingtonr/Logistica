import prismaClient from "../../prisma"

class UpdateProductServices {
  async execute(item: string) {
    const itemAtualizado = await prismaClient.produto.update({
      where: { item },
      data: {},
    })

    return itemAtualizado
  }
}
export { UpdateProductServices }
