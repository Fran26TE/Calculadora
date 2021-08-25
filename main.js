const aspecto1 = document.querySelector('#aspectos1');
const aspecto2 = document.querySelector('#aspectos2');

aspecto1.addEventListener('click', e => {
    var aspecto = document.getElementById("calculadora");
    aspecto.className = "aspecto1";
});

aspecto2.addEventListener('click', e => {
    var aspecto = document.getElementById("calculadora");
    aspecto.className = "aspecto2";
});


