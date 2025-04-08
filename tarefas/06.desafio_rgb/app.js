let red = document.getElementById('range-r').value;
let green = document.getElementById('range-g').value;
let blue = document.getElementById('range-b').value;
let square = document.getElementById('square');

function mudarCor(r, g, b) {
    square.style = `background-color:rgb(${r}, ${g}, ${b});`
}

mudarCor(red, blue, green);

console.log(square);