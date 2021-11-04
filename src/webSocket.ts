/*Connection with the server in both directions*/

import { Server } from "socket.io"
import { serverHttp } from "./app"

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
})

export { io }
