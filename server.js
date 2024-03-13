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

app.get('/send', async (req, res) => {

  const { email, subject, message } = req.body

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: subject,
    html: `<!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Realizado com Sucesso</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #fff;
        margin: 0;
        padding: 10px;
      }
      .container {
        max-width: 580px;
        margin: 20px auto;
        padding: 20px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
      }
      h1 {
        color: #333;
      }
      p {
        color: #666;
      }
      .message {
        background-color: #f9f9f9;
        padding: 10px;
        border-radius: 5px;
        margin-top: 20px;
      }
    </style>
    </head>
    <body>
    
    <div class="container">
      <h1>Registro Realizado com Sucesso</h1>
      <p>Prezado(a),</p>
      <p>Obrigado por se registrar conosco. Seu registro foi realizado com sucesso!</p>
      <p>Nome: [Nome]</p>
      <p>Email: ${email}</p>
      <div class="message">
        <p>Mensagem deixada pelo usuário:</p>
        <p>${message}</p>
      </div>
      <p>Se tiver alguma dúvida, sinta-se à vontade para nos contatar.</p>
      <p>Atenciosamente,<br> [Sua Empresa]</p>
    </div>
    
    </body>
    </html>`
  })
    .then(() => res.status(200).send({message: 'Dados enviados!'}))
    .catch((error) => res.status(400).send({
      message: 'Erro ao enviar dados',
      error: error 
    }))
})


const porta = process.env.PORT ?? 3003
app.listen(porta, () => console.log(`Servidor no ar, porta ${porta}`))