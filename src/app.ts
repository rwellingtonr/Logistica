import "dotenv/config"
import express from 'express'
import cors from "cors"
import http from "http"
import { router } from "./routes"

// Start the app
const app = express()

app.use(cors()) //Connect the backend with the frontend
app.use(express.json()) // To work propelly with json
app.use(router) // web routes

/*Server managed by http*/
const serverHttp = http.createServer(app)

export {serverHttp}