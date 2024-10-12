document.addEventListener('DOMContentLoaded', function(){

    const form = document.getElementById('cadastrarPessoaForm');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('Rsenha')
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');
    const nomeInput = document.getElementById('nome');
    const nomeError = document.getElementById('nomeError');
    const telefoneInput = document.getElementById('telefone');
    const telefoneError = document.getElementById('telefoneError');
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpfError');
    const confirmarSenhaError = document.getElementById('confirmarSenhaError');

    form.addEventListener('submit', function(event){
    event.preventDefault();
    
    emailError.textContent = '';
    senhaError.textContent = '';
    nomeError.textContent = '';
    telefoneError.textContent = '';
    cpfError.textContent = '';
    confirmarSenhaError.textContent = '';

    //validação do email
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, insira um e-mail válido.';
        return;
}
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//validar senha
    const senha = senhaInput.value.trim();
    if (senha.length < 6) {
    senhaError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
    return;
}
    const confirmarSenha = confirmarSenhaInput.value.trim();
    if (senha !== confirmarSenha) {
        confirmarSenhaError.textContent = 'As senhas não coincidem.';
        return;
    }
//validar nome
if (!nomeInput) {
    alert("Campo 'nome' não encontrado.");
    return false;
}

const nome = nomeInput.value; 


if (nome.trim() === "") {
    alert("O campo nome não pode estar vazio.");
    return false;
}


const regexNome = /^[a-zA-Zà-úÀ-Ú\s'-]+$/;
if (!regexNome.test(nome)) {
    alert("Nome inválido! Insira apenas letras e espaços.");
    return false;
}

// Valida telefone
const telefone = telefoneInput.value; 
const regexTelefone = /^\(\d{2}\)\d{5}-\d{4}$/;
if (!regexTelefone.test(telefone)) {
    alert("Telefone inválido! Use o formato (xx)xxxxx-xxxx.");
    return false;
}
//validar cpf
const cpf = cpfInput.value;
function formatarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}


function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    
 
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return "CPF inválido: o CPF deve ter 11 dígitos e não pode ser uma sequência repetitiva.";
    }

    let soma = 0;
    let resto;

    
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
        return "CPF inválido: o primeiro dígito verificador está incorreto.";
    }

    soma = 0;
   
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
        return "CPF inválido: o segundo dígito verificador está incorreto.";
    }

    return ""; 
}
const cpfMensagem = validarCPF(cpf);
if (cpfMensagem) {
    alert(cpfMensagem);
    return false;
}

 // Simula o cadastro bem-sucedido
 setTimeout(() => {
    alert('Cadastro realizado com sucesso!');
    form.reset(); 
    window.location.href = 'login.html';
}, 1000); 
});

});
