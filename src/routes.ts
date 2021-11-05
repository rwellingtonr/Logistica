import { Router } from "express"
import { EntryNewProductController } from "./Controller/EntryNewProductController"
import { GetProductToSellController } from "./Controller/GetProductToSellController"
import { UpdateProductController } from "./Controller/UpdateProductController"
// import { DeleteProductController } from "./Controller/DeleteProductController"
import { SoldItemController } from "./Controller/SoldItemController"

const router = Router()

router.post("/cadastro-de-produto", new EntryNewProductController().handle)

router.get("/itens-cadastrados", new GetProductToSellController().handle)

router.post("/venda", new SoldItemController().handle)

router.put("/update-quantidade", new UpdateProductController().handle)

// route.delete("/deletar-item", new DeleteProductController().handle)

export { router }
