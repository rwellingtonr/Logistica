import { Router } from "express"
import { EntryNewProductController } from "./Controller/EntryNewProductController"

const router = Router()

router.post('/cadastro-de-produto', new EntryNewProductController().handle)

// router.get('search', new SearchItemController().handle)

// router.post("venda", new SoldItemsController().handle)

// router.update("")


export { router }
