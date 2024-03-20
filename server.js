import express from "express"
import cors from "cors"
import * as emailController from "./src/controllers/emailController.js"

const app = express()

//Middleware Json
app.use(express.json())

//Middleware Cors
app.use(cors())

// ROTAS
app.get("/", (req, res) => res.send("NODE.JS: backend email"))

app.post("/send-doubt", emailController.validateBody, emailController.sendDoubt)

const porta = process.env.PORT ?? 3003
app.listen(porta, () => console.log(`Servidor no ar, porta ${porta}`))
