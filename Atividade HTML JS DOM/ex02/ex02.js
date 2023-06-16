let msg = document.getElementById("mensagem")
let senha = ""
let inSenha = document.getElementById("inSenha")
let humberto = document.getElementById("telaHumberto")

function adicionarNumero(num){
    senha += num
    inSenha.value = "*".repeat(senha.length)
}

function validar(){
    if(senha === "1234"){
        mostrarTelaHumberto()
    }
    else{
        msg.innerHTML = "Senha incorreta! Tente novamente."
    }
}

function mostrarTelaHumberto() {
    humberto.style.display = "block";
}

function limparSenha() {
    senha = ""
    inSenha.value = ""
  }

document.addEventListener("keydown", function(event) {
    const num = event.key;
    if (/[0-9]/.test(num)) {
      adicionarNumero(num)
    }
  })

document.addEventListener("keyup", function(event) {
    const key = event.key;
    if (key === "Enter") {
        validar();
    }
    })