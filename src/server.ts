import { serverHttp } from "./app"

const { PORT } = process.env

serverHttp.listen(PORT, () => {
	console.log(`Running on port: ${PORT}`)
})
