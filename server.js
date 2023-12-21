import express from "express";
import 'dotenv/config'
import * as nodemailer from 'nodemailer'

const app = express()

//Middleware Json
app.use(express.json())

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

app.get('/send', async (req, res) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "wellingtongalvao96@gmail.com",
    subject: "Hello ✔",
    text: "Hello world!",
  })
    .then(result => res.send(result))
    .catch(error => res.send(error))
})


const porta = process.env.PORT ?? 3003
app.listen(porta, () => console.log(`Servidor no ar, porta ${porta}`))