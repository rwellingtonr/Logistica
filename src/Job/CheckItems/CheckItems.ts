import { Getter } from "../../utils/Getter"
import { ICheckItems } from "./ICheckItems"

export class CheckItems implements ICheckItems {
	constructor(private readonly item: string, private readonly qtdProduto: number) {}

	async checkItemToSell() {
		const { quantidade, custos } = await Getter(this.item.toLowerCase())

		//Separa os dados recebidos do Getter
		const { custo_final, lucro } = custos[0]

		if (quantidade >= this.qtdProduto) {
			return { custo_final, lucro }
		}
		throw new Error("Erro! quantidade insuficiente")
	}

	async checkItemToUpdate() {
		const { quantidade } = await Getter(this.item.toLowerCase())

		const valor = quantidade + this.qtdProduto //Entry pode assumir valor negativo

		if ((quantidade && valor) > 0) {
			//retorna a próxima função
			return valor
		}
		throw new Error("Erro! quantidade insuficiente")
	}
}
