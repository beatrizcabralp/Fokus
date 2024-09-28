const html = document.querySelector('html')  //Seleciona o primeiro elemento que corresponde a um seletor CSS

const focoBt = document.querySelector('.app__card-button--foco') //Seleciona o primeiro elemento que corresponde a um seletor CSS
const curtoBt = document.querySelector('.app__card-button--curto') //Seleciona o primeiro elemento que corresponde a um seletor CSS
const longoBt = document.querySelector('.app__card-button--longo') //Seleciona o primeiro elemento que corresponde a um seletor CSS
const banner = document.querySelector('.app__image')//Seleciona o primeiro elemento que corresponde a um seletor CSS
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const iniciaroupausarBt = document.querySelector('#start-pause span')
const tempoNaTela = document.querySelector('#Timer')

const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true

let tempoDecorridoemSegundos = 1500
let intervaloId = null

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) 
    {
        musica.play()
    }
    else
    {
        musica.pause()
    }
})

/*
focoBt.addEventListener('click', () => {            //adiciona um evento: quando eu fiz isso, causará isso (ação e consequência)
    html.setAttribute('data-contexto', 'foco')      // Define um valor para um atributo de um elemento
    banner.setAttribute('src', 'imagens/foco.png')  //definir a imagem
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', 'imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src','imagens/descanso-longo.png')
})*/

//podemos fazer a opção acima ou uma função, como a seguir:

focoBt.addEventListener('click', () => {            
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto)
{
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`imagens/${contexto}.png`)
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active')
    })
    switch (contexto)
    {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <br>
                 <strong class="app__title-strong">Faça uma pausa</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa</strong>
            `
        default:
            break;
            
    }

}

const contagemRegressiva = () => {
    if(tempoDecorridoemSegundos <= 0)
    {
        zerar()
        alert('Tempo finalizado!')
        return
    }
    tempoDecorridoemSegundos -= 1
    mostrarTempo()
}

startPauseBt.addEventListener('click', iniciaroupausar)

function iniciaroupausar () {
    if(intervaloId)
    {
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciaroupausarBt.textContent = "Pausar"
}

function zerar()
{
    clearInterval(intervaloId)
    iniciaroupausarBt.textContent = "Começar"
    intervaloId = null
}

function mostrarTempo() 
{
    const tempo = tempoDecorridoemSegundos
    tempoNaTela.innerHTML = `${tempo}`
}

mostrarTempo()