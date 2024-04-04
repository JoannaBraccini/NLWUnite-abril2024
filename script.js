let participantes = [
    {
        nome: "Fernanda Oliveira",
        email: "fernanda@gmail.com",
        dataInscricao: new Date(2024, 3, 11, 19, 30),
        dataCheckIn: new Date(2024, 3, 11, 20, 35)
    },
    {
        nome: "Rafaela Silva",
        email: "rafaela@gmail.com",
        dataInscricao: new Date(2024, 1, 25, 19, 10),
        dataCheckIn: new Date(2024, 1, 25, 20, 15)
    },
    {
        nome: "Mariana Santos",
        email: "mariana@gmail.com",
        dataInscricao: new Date(2024, 0, 4, 18, 30),
        dataCheckIn: new Date(2024, 0, 4, 19, 35)
    },
    {
        nome: "Bruno Costa",
        email: "bruno@gmail.com",
        dataInscricao: new Date(2024, 1, 5, 19, 15),
        dataCheckIn: new Date(2024, 1, 5, 20, 20)
    },
    {
        nome: "André Almeida",
        email: "andre@gmail.com",
        dataInscricao: new Date(2024, 2, 6, 18, 20),
        dataCheckIn: new Date(2024, 2, 6, 19, 25)
    },
    {
        nome: "Isabela Lima",
        email: "isabela@gmail.com",
        dataInscricao: new Date(2024, 3, 7, 19, 40),
        dataCheckIn: new Date(2024, 3, 7, 20, 45)
    },
    {
        nome: "Rodrigo Sousa",
        email: "rodrigo@gmail.com",
        dataInscricao: new Date(2024, 2, 8, 18, 55),
        dataCheckIn: new Date(2024, 2, 8, 20, 0)
    },
    {
        nome: "Camila Costa",
        email: "camila@gmail.com",
        dataInscricao: new Date(2024, 3, 9, 19, 5),
        dataCheckIn: new Date(2024, 3, 9, 20, 10)
    },
    {
        nome: "Luciana Fernandes",
        email: "luciana@gmail.com",
        dataInscricao: new Date(2024, 2, 10, 18, 15),
        dataCheckIn: new Date(2024, 2, 10, 19, 20)
    },
    {
        nome: "Thiago Brito",
        email: "thiago@gmail.com",
        dataInscricao: new Date(2024, 1, 11, 19, 30),
        dataCheckIn: new Date(2024, 1, 11, 20, 35)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

    if(participante.dataCheckIn == null) {
        dataCheckIn = `
            <button data-email="${participante.email}" onclick="fazerCheckIn(event)">
                Confirmar check-in
            </button>
        `
    }

    return `
    <tr>
        <td>
            <strong>${participante.nome}</strong>
            <br>
            <small>${participante.email}</small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participantes) => { //pega info do HTML
    let output = ""
    for(let participante of participantes) {
        output = output + criarNovoParticipante(participante)
    }

    document.querySelector('tbody').innerHTML = output // substitui informação no HTML
}

atualizarLista(participantes)

const adicionarParticipante = (event) => {
    event.preventDefault()

    const dadosDoFormulario = new FormData(event.target) //target do evento é o form
    const participante = {
        nome: dadosDoFormulario.get('nome'),
        email: dadosDoFormulario.get('email'),
        dataInscricao: new Date(),
        dataCheckIn: null
    }

    const participanteExiste = participantes.find((p) => p.email == participante.email)

    if(participanteExiste) {
        alert('Email já cadastrado!')
        return
    }

    participantes = [participante, ...participantes] //spread aqui joga todos os objetos de volta para a lista junto com o novo objeto
    atualizarLista(participantes)

    event.target.querySelector('[name="nome"]').value = "" //limpar os campos após o cadastro
    event.target.querySelector('[name="email"]').value = ""
}

const fazerCheckIn = (event) => {
    if(confirm('Tem certeza que deseja fazer o check-in?') == false){
        return
    }

    const participante = participantes.find((p) => p.email == event.target.dataset.email) //encontra o participante na lista
    participante.dataCheckIn = new Date() // atualiza checkin do participante

    atualizarLista(participantes)
}