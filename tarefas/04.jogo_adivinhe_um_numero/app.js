let min = 1;
let max = 10;
let numeroAleatorio = gerarNumeroAleatorio(min, max);
let mensagemAcerto = `Parabéns, você acertou! O Número Secreto era ${numeroAleatorio}`;
let mensagemErro = `Você não acertou dessa vez. Mas quem sabe da próxima? O número correto era ${numeroAleatorio}!`;
let numero = prompt(`Insira um número entre ${min} e ${max}: `);

function gerarNumeroAleatorio(min, max) {
  return n = Math.floor(Math.random() * (max - min + 1)) + min;
}

function checarPalpite(numero, numeroAleatorio) {
  if (numero == numeroAleatorio) {
    console.log(mensagemAcerto);
  } else {
    console.log(mensagemErro);
  }
}

checarPalpite(numero, numeroAleatorio);




