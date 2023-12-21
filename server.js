import express from "express";
import 'dotenv/config'

const app = express()

//Middleware Json
app.use(express.json())

// ROTAS
app.get('/', (req, res) => res.send('NODE.JS: backend email'))


const porta = process.env.PORT ?? 3003
app.listen(porta, () => console.log(`Servidor no ar, porta ${porta}`))