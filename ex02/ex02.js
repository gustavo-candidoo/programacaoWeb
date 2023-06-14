let msg = document.getElementById("mensagem")
let senha = ""
let campoSenha = document.getElementById("senha")

function adicionarNumero(num){
    senha += num
    passwordField.value = "*".repeat(password.length);
}

function validar(){
    if(senha === "1234"){
        msg.innerHTML = "Senha correta! Acesso permitido."
    }
    return msg.innerHTML = "Senha incorreta! Acesso negado."
}

document.addEventListener("keydown", function(event) {
    const num = event.key;
    if (/[0-9]/.test(num)) {
      adicionarNumero(num);
    }
  })