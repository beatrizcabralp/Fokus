const html = document.querySelector('html')  //Seleciona o primeiro elemento que corresponde a um seletor CSS

const focoBt = document.querySelector('.app__card-button--foco') //Seleciona o primeiro elemento que corresponde a um seletor CSS
const curtoBt = document.querySelector('.app__card-button--curto') //Seleciona o primeiro elemento que corresponde a um seletor CSS
const longoBt = document.querySelector('.app__card-button--longo') //Seleciona o primeiro elemento que corresponde a um seletor CSS

focoBt.addEventListener('click', () => {            //adiciona um evento: quando eu fiz isso, causará isso (ação e consequência)
    html.setAttribute('data-contexto', 'foco')      // Define um valor para um atributo de um elemento
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})