interface IAddNewItem {
	tipo: string
	item: string
	descricao: string
	quantidade: number
	custo_unitario: number
	margem_de_lucro: number
}
export interface ICreateNewItem extends IAddNewItem {
	custo_final: number
}
