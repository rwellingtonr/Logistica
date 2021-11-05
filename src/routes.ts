import { Router } from "express"
import { EntryNewProductController } from "./Controller/EntryNewProductController"
import { GetItemController } from "./Controller/GetItemController"

const router = Router()

router.post("/cadastro-de-produto", new EntryNewProductController().handle)

router.get("procura", new GetItemController().handle)

// router.post("venda", new SoldItemsController().handle)

// router.update("")

export { router }
