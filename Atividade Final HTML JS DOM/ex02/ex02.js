let div = document.getElementById("cards")

async function puxarJogos(){
    let response = await fetch("https://academico.espm.br/testeapi/jogo/listar")

    let jogos = await response.json()

    let html = ""

    for(let i = 0; i < jogos.length; i++){
        let jogo = jogos[i] 
        html += `
        <div class="card border-primary">
            <div class="card-body">
            <h5 class="card-title">${jogo.nome}</h5>
            <p class="card-text">${jogo.descricao}</p>
            <p class="card-text">Produtora: ${jogo.produtora}</p>
            <p class="card-text">Ano: ${jogo.ano}</p>
            <p class="card-text">Idade Mínima: ${jogo.idadeMinima}</p>
            </div>
        </div>
        `

    }

    div.innerHTML = html;
}

