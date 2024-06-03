const urlBase = 'https://apisunsale.azurewebsites.net/api/PublicQuestoes/GetTests'


const PuxarProvas = async () => {
    const response = await fetch(urlBase)
    const data = response.json()
    return data
}

const carregarTudo = async () => {
    const [provas] = await Promise.all([
        PuxarProvas(),
    ])
    console.log(provas.object)
    mostarProvas(provas.object)
} 

const mostarProvas = (provas) => {
    const provasDiv = document.querySelector('.provas')
    provas.map((prova) => {
        provasDiv.innerHTML += `
        <article class="prova-info">
        <h3>${prova.nomeProva}</h3>
        <h4>Tipo de Prova: ${prova.tipoProva}</h4>
        <a href=${prova.linkProva}>Prova</a>
        <a href=${prova.linkGabarito}>Gabarito</a>
    </article>`
    })
}
carregarTudo()