/*
 * Encrementa em X quantidades o produto selecionado
 * O valor de X pode ser positivo ou negativo
 */

import prismaClient from "../../prisma"

class UpdateProductServices {
  async execute(item: string, entradeQtdProduto: number) {
    const itemAtualizado = await prismaClient.produto.update({
      where: { item },
      data: {
        quantidade: {
          increment: entradeQtdProduto,
        },
      },
    })

    return itemAtualizado
  }
}
export { UpdateProductServices }
