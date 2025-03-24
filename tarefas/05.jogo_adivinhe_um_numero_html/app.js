let inputNumero = document.getElementById('numero');
let btnCalcular = document.getElementById('btn-jogar');

let palpiteMin = 1;
let palpiteMax = 10;

let numeroAleatorio = gerarNumeroAleatorio(palpiteMin, palpiteMax);

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function palpitar() {
    if (isNaN(inputNumero.value) || inputNumero.value == '' || inputNumero.value < palpiteMin || inputNumero.value > palpiteMax) {
        alert('O número inserido não é válido!')
        return;
    }

    let palpite = inputNumero.value;

    if (palpite == numeroAleatorio) {
        alert('Parabéns, você acertou!');
        reiniciarJogo();
    } else {
        alert(`Que pena, você errou! O número sorteado foi ${numeroAleatorio}`);
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    inputNumero.value = '';
    return numeroAleatorio = gerarNumeroAleatorio(palpiteMin, palpiteMax);    
}