import express from 'express';
import session from 'express-session';
import autenticar, { verificaAutenticacao } from './segurança/autenticar.js';

const host = '127.0.0.1';
const porta = 4000;
const app = express();


app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'segredo',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 30 } 
}));


app.use(express.static('./Publico'));


app.get('/login', (req, res) => {
    res.redirect('/login.html');
});


app.post('/login', autenticar);


app.use('/Privado', verificaAutenticacao, express.static('./Privado'));


app.listen(porta, host, () => {
    console.log(`Servidor iniciado em http://${host}:${porta}`);
});
