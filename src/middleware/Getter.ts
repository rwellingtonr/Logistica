/*
 * Recebe as informações do produto a ser inspecionado
 */
import prismaClient from "../../prisma"

export async function Getter(item: string) {
  const dados = await prismaClient.produto.findFirst({
    where: { item },
    select: {
      quantidade: true,
      custos: { select: { custo_unitario: true, margem_de_lucro: true } },
    },
  })

  return dados
}
