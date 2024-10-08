export default function autenticar(requisacao,resposta){
    const usuario = requisacao.body.usuario;
    const senha = requisacao.body.senha;
    if (usuario == 'admin' && senha == 'admin'){
        requisacao.session.autenticado = true;
        resposta.redirect('/login.html');
    }
    else {
        resposta.write('<p> Usuario ou Senha Invalida </p>');
        resposta.write('<a href="/login.html"> voltar para login </a>');
        resposta.end();
    }
}

export function verificaAutenticacao(requisacao, resposta, next){
    if (requisacao.session.autenticado != undefined && requisacao.session.autenticado == true){
        next();
    }
    else {
        resposta.redirect('/login.html');
    }
};