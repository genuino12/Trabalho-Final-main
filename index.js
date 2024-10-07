import express from 'express';

const host = '127.0.0.1';
const porta = 3000;
const app = express();

app.use(express.static('./Publico'));
app.use(express.static('./Privado'));

app.listen(porta, host, () => {
    console.log(`servidor iniciando em http://${host}:${porta}`)
});