const tema1 = document.querySelector('#tema1');
const tema2 = document.querySelector('#tema2');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const color3 = document.querySelector('#color3');


tema1.addEventListener('click', e => {
    var elemento = document.getElementById("calculadora");
    elemento.className = "calculadora";
});

tema2.addEventListener('click', e => {
    var elemento = document.getElementById("calculadora");
    elemento.className = "tema2";
});


