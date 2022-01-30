import { Router } from "express"
import { DeleteProductController } from "../Controller/DeleteProductController"
import { EntryNewProductController } from "../Controller/EntryNewProductController"
import { GetProductToSellController } from "../Controller/GetProductToSellController"
import { SoldItemController } from "../Controller/SoldItemController"
import { UpdateProductController } from "../Controller/UpdateProductController"

const router = Router()

/*GET*/
router.get("/itens-cadastrados", new GetProductToSellController().handle)

/*POST*/
router.post("/cadastro-de-produto", new EntryNewProductController().handle)

router.post("/venda", new SoldItemController().handle)

/*PUT*/
router.put("/update-quantidade", new UpdateProductController().handle)

/*DELETE*/
router.delete("/deletar-item", new DeleteProductController().handle)

export { router }
