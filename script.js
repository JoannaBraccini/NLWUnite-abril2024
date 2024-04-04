let participantes = [
    {
      nome: "Fernanda Oliveira",
      email: "fernanda@gmail.com",
      dataInscricao: new Date(2, 2, 2024, 18, 45),
      dataCheckIn: new Date(2, 2, 2024, 19, 50)
    },
    {
      nome: "Rafaela Silva",
      email: "rafaela@gmail.com",
      dataInscricao: new Date(25, 1, 2024, 19, 10),
      dataCheckIn: new Date(25, 1, 2024, 0, 15)
    },
    {
      nome: "Mariana Santos",
      email: "mariana@gmail.com",
      dataInscricao: new Date(4, 0, 2024, 18, 30),
      dataCheckIn: new Date(4, 0, 2024, 19, 35)
    },
    {
      nome: "Bruno Costa",
      email: "bruno@gmail.com",
      dataInscricao: new Date(5, 11, 2023, 19, 15),
      dataCheckIn: new Date(5, 11, 2023, 20, 20)
    },
    {
      nome: "André Almeida",
      email: "andre@gmail.com",
      dataInscricao: new Date(6, 10, 2023, 18, 20),
      dataCheckIn: new Date(6, 10, 2023, 19, 25)
    },
    {
      nome: "Isabela Lima",
      email: "isabela@gmail.com",
      dataInscricao: new Date(7, 9, 2023, 19, 40),
      dataCheckIn: new Date(7, 9, 2023, 20, 45)
    },
    {
      nome: "Rodrigo Sousa",
      email: "rodrigo@gmail.com",
      dataInscricao: new Date(8, 8, 2023, 18, 55),
      dataCheckIn: new Date(8, 8, 2023, 20, 0)
    },
    {
      nome: "Camila Costa",
      email: "camila@gmail.com",
      dataInscricao: new Date(9, 7, 2023, 19, 5),
      dataCheckIn: new Date(9, 7, 2023, 20, 10)
    },
    {
      nome: "Luciana Fernandes",
      email: "luciana@gmail.com",
      dataInscricao: new Date(10, 6, 2023, 18, 15),
      dataCheckIn: new Date(10, 6, 2023, 19, 20)
    },
    {
      nome: "Thiago Brito",
      email: "thiago@gmail.com",
      dataInscricao: new Date(11, 5, 2023, 19, 30),
      dataCheckIn: new Date(11, 5, 2023, 20, 35)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

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