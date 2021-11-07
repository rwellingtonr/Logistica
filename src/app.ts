import "dotenv/config"
import express from "express"
import cors from "cors"
import http from "http"
import { router } from "./routes"

// Start the app
const app = express()

//Esbelece a conecção
app.use(cors())
app.use(express.json())
app.use(router)

/*Server gerenciado pelo método http*/
const serverHttp = http.createServer(app)

export { serverHttp }
