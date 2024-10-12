document.getElementById("esqueciSenhaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const email = document.getElementById("email").value;
    const message = document.getElementById("message");
  
    if (validateEmail(email)) {
       
        sendResetLink(email);
        message.textContent = "Um link de redefinição foi enviado para o seu e-mail.";
        message.style.color = "green";
    } else {
        message.textContent = "Por favor, insira um e-mail válido.";
        message.style.color = "red";
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function sendResetLink(email) {
    console.log(`Enviando link de redefinição para ${email}...`);
  
}