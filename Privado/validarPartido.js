document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('partidoForm');
    const nomeInput = document.getElementById('nome');
    const siglaInput = document.getElementById('sigla');
    const numeroRegistroInput = document.getElementById('numeroRegistro');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let valid = true;
        const erroElements = form.querySelectorAll('.erro');

        // Limpa todas as mensagens de erro
        erroElements.forEach(function(erro) {
            erro.textContent = '';
        });

        // Validação do nome do partido
        const nome = nomeInput.value.trim();
        if (nome === '') {
            nomeInput.nextElementSibling.textContent = 'O nome do partido é obrigatório.';
            valid = false;
        } else if (nome.length < 3) {
            nomeInput.nextElementSibling.textContent = 'O nome do partido deve ter no mínimo 3 caracteres.';
            valid = false;
        }

        // Validação da sigla do partido
        const sigla = siglaInput.value.trim();
        if (sigla === '') {
            siglaInput.nextElementSibling.textContent = 'A sigla é obrigatória.';
            valid = false;
        } else if (sigla.length > 5) {
            siglaInput.nextElementSibling.textContent = 'A sigla deve ter no máximo 5 caracteres.';
            valid = false;
        }

        // Validação do número de registro
        const numeroRegistro = numeroRegistroInput.value.trim();
        if (numeroRegistro === '' || isNaN(numeroRegistro)) {
            numeroRegistroInput.nextElementSibling.textContent = 'O número de registro é obrigatório e deve ser um número válido.';
            valid = false;
        } else if (numeroRegistro.length > 6) {
            numeroRegistroInput.nextElementSibling.textContent = 'O número de registro deve ter no máximo 6 dígitos.';
            valid = false;
        }

        // Se tudo estiver válido, exibe uma mensagem de sucesso
        if (valid) {
            alert('Partido cadastrado com sucesso!');
            form.reset();
            window.location.href = 'index.html'; 
        }
    });
});
