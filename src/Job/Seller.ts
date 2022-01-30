/*
 * Calcula a Receita Bruta, Receita Líquida e Lucro
 */

export const profit = (custoUnitario: number, margemDeLucro: number) => {
	const lucro = custoUnitario * (margemDeLucro / 100)
	const receitaBruta = custoUnitario + lucro

	return { receitaBruta, lucro }
}
