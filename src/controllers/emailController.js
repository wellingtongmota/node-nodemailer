import "dotenv/config"
import { transporter } from "../api/nodemailer.js"

export const validateBody = (req, res, next) => {
  const { name, email, message } = req.body

  if (name === undefined || name === "") {
    return res.status(400).json({ message: "O campo name é requerido" })
  }

  if (email === undefined || email === "") {
    return res.status(400).json({ message: "O campo email é requerido" })
  }

  if (message === undefined || message === "") {
    return res.status(400).json({ message: "O campo message é requerido" })
  }

  next()
}

export const sendDoubt = async (req, res) => {
  const { name, email, subject, message } = req.body

  await transporter
    .sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: subject,
      html: `<!DOCTYPE html>
    <html lang="pt-BR">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Camping - canal de dúvidas</title>
      <style>
        body {
          font-family: Arial, sans-serif;
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
    
        header {
          text-align: center;
          border-bottom: 1px solid #666;
          margin-bottom: 20px;
        }
    
        h1,
        h2 {
          color: #333;
        }
    
        h1 {
          text-transform: uppercase;
        }
    
        p {
          color: #666;
          word-wrap: break-word;
        }
    
        .message {
          background-color: #f9f9f9;
          padding: 10px;
          border-radius: 5px;
          margin-top: 20px;
        }
    
        footer {
          margin-top: 20px;
          border-top: 1px solid #666;
          text-align: center;
          padding: 10px 0;
          border-radius: 0 0 8px 8px;
        }
      </style>
    </head>
    
    <body>
      <div class="container">
        <header>
          <h1>Camping</h1>
        </header>
    
        <h2>Canal de dúvidas</h2>
        <p>
          Nome: ${name}
          <br>
          Email: ${email}
        </p>
        <div class="message">
          <p>Mensagem deixada pelo usuário:</p>
          <p>${message}</p>
        </div>
    
        <footer>
          <p>&copy; 2024 Camping. Todos os direitos reservados.</p>
        </footer>
      </div>
    </body>
    
    </html>`
    })
    .then(() => res.status(200).send({ message: "Dados enviados!" }))
    .catch((error) =>
      res.status(400).send({
        message: "Erro ao enviar dados",
        error: error
      })
    )
}
