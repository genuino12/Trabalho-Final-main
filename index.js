import express from 'express';
import autenticar, { verificaAutenticacao } from './segurança/autenticar.js';
import session from 'express-session';

const host = '127.0.0.1';
const porta = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'segredo',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 30 
    }
}));

app.use(express.static('./Publico'));
app.use(verificaAutenticacao, express.static('./Privado'));

app.get('/login', (requisacao, resposta) => {
    resposta.redirect('/login.html');
});

app.post('/login', autenticar); 

app.listen(porta, host, () => {
    console.log(`Servidor iniciando em http://${host}:${porta}`);
});
