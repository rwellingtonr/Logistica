/*
 * Recebe as informações do produto a ser inspecionado
 */
import prismaClient from "../../prisma"
import { IQtd } from "./Interface"

export async function Getter(item: string) {
  const { quantidade } = (await prismaClient.produto.findFirst({
    where: { item },
    select: { quantidade: true },
  })) as IQtd

  return quantidade
}
