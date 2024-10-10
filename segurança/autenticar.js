export default function autenticar(requisacao, resposta) {
    const usuario = requisacao.body.usuario;
    const senha = requisacao.body.senha;

    
    if (usuario === 'admin' && senha === 'admin') {
        requisacao.session.autenticado = true; 
        resposta.redirect('./login.html');
    } else {
        resposta.write('<p>Usuário ou Senha Inválida</p>');
        resposta.write('<a href="/login.html">Voltar para login</a>');
        resposta.end();
    }
}


export function verificaAutenticacao(requisacao, resposta, next) {
    if (requisacao.session.autenticado) {
        next(); 
    } else {
        resposta.redirect('./login.html'); 
    }
}
