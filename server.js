import express from "express";
import cors from "cors";
import 'dotenv/config'
import * as nodemailer from 'nodemailer'

const app = express()

//Middleware Json
app.use(express.json())

//Middleware Cors
app.use(cors())

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ROTAS
app.get('/', (req, res) => res.send('NODE.JS: backend email'))

app.post('/send', async (req, res) => {

  const { from, to, subject, text } = req.body

  await transporter.sendMail({
    from,
    to,
    subject,
    text,
  })
    .then(() => res.status(200).send())
    .catch(() => res.status(400).send())
})


const porta = process.env.PORT ?? 3003
app.listen(porta, () => console.log(`Servidor no ar, porta ${porta}`))