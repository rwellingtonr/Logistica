/*
 * Encrementa em X quantidades o produto selecionado
 */

import prismaClient from "../../prisma"

class UpdateProductServices {
  async execute(item: string, quantity: number) {
    const itemAtualizado = await prismaClient.produto.update({
      where: { item },
      data: {
        quantidade: {
          increment: quantity,
        },
      },
    })

    return itemAtualizado
  }
}
export { UpdateProductServices }
