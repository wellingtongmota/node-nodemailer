# Servidor de Email com Nodemailer

## Dependências Instaladas

- cors
- dotenv
- express
- nodemailer

## Development

1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the development server with `npm run dev`

## Endpoints

`GET /`:
Retorna "NODE.JS: backend email"

```
POST /end-doubt

body: {
  name: string,
  email: string,
  subject: string,
  message: string
}
```

Valida o corpo da requisição e envia uma dúvida

## Author

[@wellingtongmota](https://github.com/wellingtongmota)

## License

[MIT](LICENSE)
