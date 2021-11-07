/*
 * Realiza a venda de derminado item existente
 */

import prismaClient from "../../prisma"

interface Ia {
  client_name: string
  item: string
  entradeQtdProduto: number
  receita_bruta: number
  receita_liquida: number
}

class SoldItemService {
  async execute(
    client_name: string,
    item: string,
    entradeQtdProduto: number,
    receita_bruta: number,
    receita_liquida: number
  ) {
    const sellItem = await prismaClient.produto.update({
      where: { item },
      data: {
        quantidade: { decrement: entradeQtdProduto },
        vendas: {
          create: {
            cliente: client_name,
            item,
            receita_bruta,
            receita_liquida,
          },
        },
      },
      include: { vendas: true },
    })

    return sellItem
  }
}

export { SoldItemService }
