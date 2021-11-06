/*
 * Encrementa em X quantidades o produto selecionado
 * O valor de X pode ser positivo ou negativo
 */

import prismaClient from "../../prisma"

class UpdateProductServices {
  async execute(item: string, entry: number) {
    const itemAtualizado = await prismaClient.produto.update({
      where: { item },
      data: {
        quantidade: {
          increment: entry,
        },
      },
    })

    return itemAtualizado
  }
}
export { UpdateProductServices }
