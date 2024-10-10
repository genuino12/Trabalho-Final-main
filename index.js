import express from 'express';
import session from 'express-session';
import autenticar, { verificaAutenticacao } from './segurança/autenticar.js';

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

app.get('/login', (req, res) => {
    res.redirect('/login.html');
});

app.post('/login', autenticar);

app.listen(porta, host, () => {
    console.log(`Servidor iniciado em http://${host}:${porta}`);
});
