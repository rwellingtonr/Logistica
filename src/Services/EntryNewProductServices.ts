import prismaClient from "../../prisma"
import { io } from "../webSocket"

class EntryNewProductServices {
  async execute(
    tipo: string,
    item: string,
    descricao: string,
    quantidade: number,
    custo_unitario: number,
    margem_de_lucro: number
  ) {
    const novoProduto = await prismaClient.produto.create({
      data: {
        tipo,
        item,
        descricao,
        quantidade,
        custos: {
          create: [
            {
              custo_unitario,
              margem_de_lucro,
            },
          ],
        },
      },
      include: { custos: true },
    })

    // const infoProd = {
    //   tipo,
    //     item,
    //     descricao,
    //     quantidade,

    // }

    // io.emit("novo_produto", infoProd)

    return novoProduto
  }
}

export { EntryNewProductServices }
