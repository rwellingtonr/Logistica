import prismaClient from "../../prisma"

class CheckItems {
  async verify(item: string, quantity: number) {
    const checkItem = await prismaClient.produto.findFirst({
      where: { item },
      select: { quantidade: true },
    })

    if (checkItem.quantidade >= quantity) {
      console.log(checkItem.quantidade)

      return true
    }

    return false
  }
}
export { CheckItems }
