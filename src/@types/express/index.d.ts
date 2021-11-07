//Adiciona tipagem ao express

declare namespace Express {
  export interface Request {
    custo_unitario: number
    margem_de_lucro: number
  }
}
