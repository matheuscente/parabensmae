function excluir() {
    lista.classList.remove('animar');
}

function opacidade () {
    botao.style.opacity ='1';
}

botao.addEventListener('click', function() {
    lista.classList.toggle('animar');
    botao.style.opacity = '0';
    setTimeout(excluir, 25000);
    setTimeout(opacidade, 26000);
});