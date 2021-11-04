import prismaClient from "../../prisma"
import { io } from "../webSocket"

class EntryNewProductServices{
    async execute (custo_unitario: number, margem_de_lucro: number, produto_id: string, colaborador_id:string) {
        const produto = await prismaClient.custoProduto.create({
            data:{custo_unitario, margem_de_lucro, produto_id, colaborador_id},
        include:{produto: true, colaborador: true}})


        const infoProd = {
            produto: {
                item: produto.produto.item,
                tipo: produto.produto.tipo,
                descricao: produto.produto.descricao,
                quantidade:produto.produto.quantidade,
                entrada: produto.produto.entrada,
            },
            colaborador: produto.colaborador.nome,
            custo_unitario: produto.custo_unitario,
            margem_de_lucro: produto.margem_de_lucro,
            produto_id: produto.produto_id,
        }


        io.emit("novo_produto", infoProd)

        return produto

    }

}


export {EntryNewProductServices}