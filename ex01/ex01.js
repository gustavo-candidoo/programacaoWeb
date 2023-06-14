let listaReal = [1, 2, 3, 4, 5, 6]
let lista = []

let valorA 
let valorB 
let valorC 
let valorD 
let valorE 
let msg = document.getElementById("mensagem")

function verificar(){
    valorA = Number(document.getElementById("inValorA").value)
    valorB = Number(document.getElementById("inValorB").value)
    valorC = Number(document.getElementById("inValorC").value)
    valorD = Number(document.getElementById("inValorD").value)
    valorE = Number(document.getElementById("inValorE").value)

    lista.push(valorA, valorB, valorC, valorD, valorE)

    for(let i = 0; i < lista.length; i++){
        if(lista[i] >= 1 && lista[i] <= 6){
            continue;
        }   
        return msg.innerHTML = "Valor inválido."
        
    }

    let aux 
    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista.length - 1; j++){
            if(lista[j] > lista[j+1]){
                aux = lista[j]
                lista[j] = lista[j+1]
                lista[j+1] = aux
            }
        }
    }

    for(let i = 0; i < listaReal.length; i++){
        if(lista[i] != listaReal[i]){
            Swal.fire({
                title: 'Sweet!',
                text: 'O card faltante é o de número ' +listaReal[i],
                imageUrl: "https://s2-ge.glbimg.com/eOPlCxKR6D-9GLK-o02y_4TR0TA=/0x0:770x429/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/D/A/IDxL9pQ3i3TB6D5uwCKA/yu-gi-oh-cards-cartas-imagem-destaque-v1.jpg",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            break
        }
    }

}
