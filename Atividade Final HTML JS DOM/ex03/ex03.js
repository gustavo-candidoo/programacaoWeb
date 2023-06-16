let inputPontuacao 
let pontuacao 
let prova1 = []
let prova2 = []
let inputProva1 = []
let inputProva2 = []
let aprovados = 0

function pegarNotas(){
    for (let i = 1; i <= 8; i++) {
        inputProva1[i-1] = document.getElementById("inProva1Comp" + i)
        inputProva2[i-1] = document.getElementById("inProva2Comp" + i)
        prova1[i-1] = Number(document.getElementById("inProva1Comp" + i).value)
        prova2[i-1] = Number(document.getElementById("inProva2Comp" + i).value)
    }
}

function verificar(){
    inputPontuacao = document.getElementById("inPontuacao");
    pontuacao =  Number(inputPontuacao.value)

    for(let i = 0; i < 8; i++){
        if(prova1[i] + prova2[i] >= pontuacao){
            aprovados++
        }
    }
}

function saida(){
    if(aprovados == 0){
        Swal.fire({
            icon: 'error',
            title: 'Que chato!',
            text: 'Infelizmente ninguém passou!',
          })
    }
    else if(aprovados == 1){
        Swal.fire({
            icon: 'success',
            title: 'Boa!',
            text: aprovados+ ' pessoa passou.',
          })
    }
    else{
        Swal.fire({
            icon: 'success',
            title: 'Boooa!',
            text: aprovados+ ' pessoas passaram.',
          })
    }
}

function limpar(){
    prova1.splice(0)
    prova2.splice(0)
    inputPontuacao.value = ''
    for(let i = inputProva1.length - 1; i >= 0; i--){
        inputProva1[i].value = ''
        inputProva2[i].value = ''
    }
}

function teste(){
   pegarNotas()
   verificar()
   saida()
   limpar()
   inputPontuacao.focus()
}