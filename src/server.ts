import { serverHttp } from "./app"

const port = process.env.PORT

serverHttp.listen(port, () => {
  console.log(`Running in the port: ${port}`)
})
