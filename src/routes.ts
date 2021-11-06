import { Router } from "express"
import { EntryNewProductController } from "./Controller/EntryNewProductController"
import { GetProductToSellController } from "./Controller/GetProductToSellController"
import { UpdateProductController } from "./Controller/UpdateProductController"
// import { DeleteProductController } from "./Controller/DeleteProductController"
import { SoldItemController } from "./Controller/SoldItemController"
import CheckItems from "./middleware/CheckItems"

const router = Router()

/*GET*/
router.get("/itens-cadastrados", new GetProductToSellController().handle)

/*POST*/
router.post("/cadastro-de-produto", new EntryNewProductController().handle)

router.post("/venda", CheckItems, new SoldItemController().handle)
/*PUT*/

router.put("/update-quantidade", new UpdateProductController().handle)

/*DELETE*/
// route.delete("/deletar-item", new DeleteProductController().handle)

export { router }
