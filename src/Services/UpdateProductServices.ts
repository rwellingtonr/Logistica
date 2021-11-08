/*
 * Incrementa em X quantidades o produto selecionado
 * O valor de X pode ser positivo ou negativo
 */

import prismaClient from "../../prisma"

class UpdateProductServices {
  async execute(item: string, qtdProduto: number) {
    const itemAtualizado = await prismaClient.produto.update({
      where: { item },
      data: {
        quantidade: {
          increment: qtdProduto,
        },
      },
    })

    return itemAtualizado
  }
}
export { UpdateProductServices }
