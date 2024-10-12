export default function autenticar(requisicao, resposta) {
    const email = requisicao.body.usuario;
    const senha = requisicao.body.senha;
    console.log('Dados recebidos:', requisicao.body);
    console.log('Email:', email);  
    console.log('Senha:', senha);

    resposta.setHeader('Content-Type', 'text/html; charset=utf-8'); 

    if (email === 'admin@admin123.com' && senha === '123456') {
        requisicao.session.autenticado = true; 
        resposta.redirect('/Privado/index.html'); 
        
    } else {
        resposta.write('<p>Email ou Senha Inválida</p>');
        resposta.write('<a href="/login.html">Voltar para login</a>');
        resposta.end();
    }
}


export function verificaAutenticacao(requisicao, resposta, next) {
    if (requisicao.session.autenticado) {
        next(); 
    } else {
        resposta.redirect('/login.html');
    }
}
