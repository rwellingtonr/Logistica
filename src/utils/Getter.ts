/*
 * Recebe as informações do produto a ser inspecionado
 */
import prismaClient from "../../prisma"
type Custos = {
	custo_final: number
	lucro: number
}
type GetData = {
	quantidade: number
	custos: Custos[]
}

export async function Getter(item: string): Promise<GetData> {
	const dados = await prismaClient.produto.findFirst({
		where: { item },
		select: {
			quantidade: true,
			custos: { select: { custo_final: true, lucro: true } },
		},
	})

	return dados
}
