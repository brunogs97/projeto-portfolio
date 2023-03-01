//referênciar com o gif do mario
const imgMario = document.querySelector('.mario')
const bloco = document.querySelector('.block')
const contentAbout = document.querySelector('.containerHome')

//função para adicionar uma class 'jump' css no HTML
const jump = () => {
    imgMario.classList.add('jump');

    /*funcao para remover a class*/
    setTimeout(() => {
        imgMario.classList.remove('jump');
    }, 500) 

}

// loop para verificar se a caixa chegou até o mario
const loop = setInterval(() => {
    
    // verificar as posicoes
    const blockPosition = bloco.offsetLeft;
    const marioPosition = +window.getComputedStyle(imgMario).bottom.replace('px', '');

    //config quando tocar na caixa
    if(blockPosition <= 385 && blockPosition >= 310 && marioPosition >= 85) {
        bloco.style.animation = 'none'
        bloco.style.left = `${blockPosition}px`

        imgMario.src = 'img/mario-win.jpg'
        imgMario.style.width = '120px'
        imgMario.style.marginLeft = '0'

        // conteudo sobre
        contentAbout.style.display = 'block'

        clearInterval(loop);
    }
}, 10);

//clicando em qualquer teclado irá acionar a funcao jump
document.addEventListener('keydown', jump)

/*Evitar o comportamento padrao de rolagem com space*/
window.onkeydown = function(e) {
    return e.keyCode !== 32;
};