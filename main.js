const tema1 = document.querySelector('#tema1');
const tema2 = document.querySelector('#tema2');
const colores1 = document.querySelector('#colores1');
const colores2 = document.querySelector('#colores2');
const colores3 = document.querySelector('#colores3');


tema1.addEventListener('click', e => {
    var tema = document.getElementById("forma");
    tema.className = "forma1";
});

tema2.addEventListener('click', e => {
    var tema = document.getElementById("forma");
    tema.className = "forma2";
    
});

colores1.addEventListener('click', e => {
    var color = document.getElementById("colores");
    color.className = "color1";
});

colores2.addEventListener('click', e => {
    var color = document.getElementById("colores");
    color.className = "color2";
});

colores3.addEventListener('click', e => {
    var color = document.getElementById("colores");
    color.className = "color3";
});
