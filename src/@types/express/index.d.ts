//Adiciona tipagem ao express

declare namespace Express {
  export interface Request {
    custo_final: number
    lucro: number
  }
}
