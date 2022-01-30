type SellItems = {
	custo_final: number
	lucro: Number
}

export interface ICheckItems {
	checkItemToSell(): Promise<SellItems>
	checkItemToUpdate(): Promise<number>
}
