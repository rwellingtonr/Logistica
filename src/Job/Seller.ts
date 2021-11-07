/*
 * Calcula a Receita Bruta, Receita Líquida e Lucro
 */

export const Receita = (custoUnitario: number, margemDeLucro: number) => {
  const lucro = custoUnitario * (margemDeLucro / 100)
  const receitaBruta = custoUnitario + lucro

  const receita = {
    receitaBruta,
    lucro,
  }

  return receita
}
