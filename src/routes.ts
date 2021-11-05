import { Router } from "express"
import { EntryNewProductController } from "./Controller/EntryNewProductController"
import { GetItemController } from "./Controller/GetItemController"
import { UpdateProductController } from "./Controller/UpdateProductController"

const router = Router()

router.post("/cadastro-de-produto", new EntryNewProductController().handle)

router.get("/itens-cadastrados", new GetItemController().handle)

// router.post("venda", new SoldItemsController().handle)

router.put("/update-quantidade", new UpdateProductController().handle)

export { router }
