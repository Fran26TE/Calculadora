const aspecto1 = document.querySelector('#aspectos1');
const aspecto2 = document.querySelector('#aspectos2');
const aspecto3 = document.querySelector('#aspectos3');



aspecto1.addEventListener('click', e => {
    var aspecto = document.getElementById("calculadora");
    aspecto.className = "aspecto1";
});

aspecto2.addEventListener('click', e => {
    var aspecto = document.getElementById("calculadora");
    aspecto.className = "aspecto2";
});

aspecto3.addEventListener('click', e => {
    var aspecto = document.getElementById("calculadora");
    aspecto.className = "aspecto3";
});

