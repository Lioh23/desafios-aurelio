
let redLevel = document.getElementById('range-r');
let greenLevel = document.getElementById('range-g');
let blueLevel = document.getElementById('range-b');

let redLabel = document.getElementById('label-r');
let greenLabel = document.getElementById('label-g');
let blueLabel = document.getElementById('label-b');

let square = document.getElementById('square');

let rgb = {
    red: 0,
    green: 0,
    blue: 0
}

square.style = `background-color:rgb(0, 0, 0);`


function mudarCor() {
    for (let cor in rgb) {
        document.getElementById('square').style = `background-color:rgb(${rgb.red}, ${rgb.green}, ${rgb.blue});`
    }
}

//define a cor padrão do quadrado
mudarCor();

//evento para alterar o vermelho
redLevel.addEventListener("mousemove", (event) => {
    redLabel.innerHTML = `${event.target.value}`;
    rgb.red = `${event.target.value}`;
    mudarCor();
});

//evento para alterar o verde
greenLevel.addEventListener("mousemove", (event) => {
    greenLabel.innerHTML = `${event.target.value}`;
    rgb.green = `${event.target.value}`;
    mudarCor();
});

//evento para alterar o azul
blueLevel.addEventListener("mousemove", (event) => {
    blueLabel.innerHTML = `${event.target.value}`;
    rgb.blue = `${event.target.value}`
    mudarCor();
});