# Email Server with Nodemailer

## Dependencies

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
Returns "NODE.JS: backend email"

```
POST /end-doubt

body: {
  name: string,
  email: string,
  subject: string,
  message: string
}
```

Validates the request body and sends a doubt

## Author

[@wellingtongmota](https://github.com/wellingtongmota)

## License

[MIT](LICENSE)
