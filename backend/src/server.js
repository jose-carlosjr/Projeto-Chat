const { WebSocketServer } = require("ws")
const dotenv = require("dotenv")

dotenv.config()

// wss RECEBE O SERVIDOR
const wss = new WebSocketServer({ port: process.env.PORT || 8080 })

wss.on("connection", (ws) => {
    ws.on("error", console.error)

    // ENVIA A MENSAGEM PARA TODOS OS CLIENTES
    ws.on("message", (data) => {
        wss.clients.forEach((client) => {client.send(data.toString())})
    })

    console.log("Client connected")
})