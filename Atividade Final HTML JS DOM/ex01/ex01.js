async function pesquisar(){
    let html = ""

    let response = await fetch('https://academico.espm.br/testeapi/jogo/criar')

    let armazenar = await response.json()

    for(let i = 0; i < armazenar.length; i++){
        let jogo = armazenar[i]

        html += `
            <p>${jogo.nome}</p>
            <p>${jogo.descricao}</p>
            <p>${jogo.produtora}</p>
            <p>${jogo.ano}</p>
            <p>${jogo.idadeMinima}</p>
        `

        let div = document.getElementById("divJogos")
        div.innerHTML = html
    }
}

async function criar(){

    let jogo = {
        "nome": "The Last of Us",
        "descricao": "Zombie Game",
        "produtora": "Naughty Dog",
        "ano": "2013",
        "idadeMinima": "18"
    }

    let response = await fetch ("https://academico.espm.br/testeapi/jogo/criar", {
        method: "post",
        body: JSON.stringify(jogo),
        headers: {
            "content-type": "application/json"
        }
    })

    if(response.ok){
        alert("OK")
    }
    else{
        alert("Erro")
    }
}

async function excluir(jogoId) {
    let url = `https://academico.espm.br/testeapi/jogo/${jogoId}`;
  
    let response = await fetch(url, {
      method: "DELETE"
    });
  
    if (response.ok) {
      alert("Jogo excluído com sucesso");
    } else {
      alert("Erro ao excluir o jogo");
    }
  }
  