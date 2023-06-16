let pessoas = [
    {
        ID: 1,
        Nome: 'Gustavo',
        Idade: 18,
        Email: "tiktok@gmail.com",
        Cargo: "Teacher"
    },
    {
        ID: 2,
        Nome: "Guilherme",
        Idade: 20,
        Email: "lg07@gmail.com",
        Cargo: "Professor"
    },
    {
        ID: 3,
        Nome: "Davi",
        Idade: 15,
        Email: "eueueu@gmail.com",
        Cargo: "Eu mesmo"
    },
    {
        ID: 4,
        Nome: "Rafael",
        Idade: 12,
        Email: "acad@gmail.com",
        Cargo: "Piloto"
    },
    {
        ID: 5,
        Nome: "Antonio",
        Idade: 30,
        Email: "selmini07@gmail.com",
        Cargo: "Aviador"
    },
    {
        ID: 6,
        Nome: "Luiz Gui",
        Idade: 22,
        Email: "lgbpm@gmail.com",
        Cargo: "Developer"
    },
    {
        ID: 7,
        Nome: "Selmini",
        Idade: 17,
        Email: "espm@gmail.com",
        Cargo: "Assistente"
    },
    {
        ID: 8,
        Nome: "Carlos",
        Idade: 27,
        Email: "carlos@gmail.com",
        Cargo: "Jogador"
    },
    {
        ID: 9,
        Nome: "Giovanna",
        Idade: 20,
        Email: "gihf@gmail.com",
        Cargo: "Analista"
    },
    {
        ID: 10,
        Nome: "Maria",
        Idade: 25,
        Email: "maria@gmail.com",
        Cargo: "Dançarina"
    }
]

function preencher(){



    let div = document.getElementById("divPessoas")

    let html = `
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Email</th>
                <th>Cargo</th>
            </tr>
        <thead>
        <tbody>

    `;
        


    for(let i = 0; i < pessoas.length; i++){
        let pessoa = pessoas[i]
        html += `
            <tr>
                <td>${pessoa.ID}</td>
                <td>${pessoa.Nome}</td>
                <td>${pessoa.Idade}</td>
                <td>${pessoa.Email}</td>
                <td>${pessoa.Cargo}</td>      
            </tr>
        `;
    }

    html += `
            </tbody>
        </table>
    `

    div.innerHTML = html;
}