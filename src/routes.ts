import { Router } from "express"
import { EntryNewProductController } from "./Controller/EntryNewProductController"
import { GetProductToSellController } from "./Controller/GetProductToSellController"
import { UpdateProductController } from "./Controller/UpdateProductController"
import { SoldItemController } from "./Controller/SoldItemController"
import { DeleteProductController } from "./Controller/DeleteProductController"

/* Middleware */
import CheckItemsToSell from "./middleware/CheckItemsToSell"
import CheckItemToUpdate from "./middleware/CheckItemToUpdate"

const router = Router()

/*GET*/
router.get("/itens-cadastrados", new GetProductToSellController().handle)

/*POST*/
router.post("/cadastro-de-produto", new EntryNewProductController().handle)

router.post("/venda", CheckItemsToSell, new SoldItemController().handle)

/*PUT*/
router.put(
  "/update-quantidade",
  CheckItemToUpdate,
  new UpdateProductController().handle
)

/*DELETE*/
router.delete("/deletar-item", new DeleteProductController().handle)

export { router }
