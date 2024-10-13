document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('candidatoForm');
    const nomeInput = document.getElementById('nomeCandidato');
    const partidoInput = document.getElementById('partido');
    const numeroInput = document.getElementById('numero');
    const erroNome = nomeInput.nextElementSibling;
    const erroPartido = partidoInput.nextElementSibling;
    const erroNumero = numeroInput.nextElementSibling;

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Limpar mensagens de erro
        erroNome.textContent = '';
        erroPartido.textContent = '';
        erroNumero.textContent = '';

        // Validação do nome do candidato
        const nomeCandidato = nomeInput.value.trim();
        if (nomeCandidato === '') {
            erroNome.textContent = 'Por favor, insira o nome do candidato.';
            return;
        }
        const regexNome = /^[a-zA-Zà-úÀ-Ú\s'-]+$/;
        if (!regexNome.test(nomeCandidato)) {
            erroNome.textContent = 'Nome inválido! Use apenas letras e espaços.';
            return;
        }

        // Validação do partido
        const partido = partidoInput.value.trim();
        if (partido === '') {
            erroPartido.textContent = 'Por favor, insira o nome do partido.';
            return;
        }
        const regexPartido = /^[a-zA-Zà-úÀ-Ú\s'-]+$/;
        if (!regexPartido.test(partido)) {
            erroPartido.textContent = 'Nome de partido inválido! Use apenas letras e espaços.';
            return;
        }

        // Validação do número do candidato
        const numero = numeroInput.value.trim();
        if (numero === '') {
            erroNumero.textContent = 'Por favor, insira o número do candidato.';
            return;
        }
        if (isNaN(numero) || numero <= 0) {
            erroNumero.textContent = 'Número inválido! Insira um número positivo.';
            return;
        }

        // Cadastro bem-sucedido simulado
        setTimeout(() => {
            alert('Cadastro de candidato realizado com sucesso!');
            form.reset();
        }, 500);
        window.location.href = 'index.html'; 
    });
    
});
