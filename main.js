var num1;
var num2;
var signo;
var operacion = document.getElementById("valor-operacion");
var resultado = document.getElementById("valor-resultado");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");
var decimal = document.getElementById("decimal");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplica = document.getElementById("multiplica");
var divide = document.getElementById("divide");
var raiz = document.getElementById("raiz");
var eleva = document.getElementById("eleva");
var igual = document.getElementById("igual");
var borra = document.getElementById("borra");
var c = document.getElementById("c");

function iniciaCalculadora() {

    //Eventos de click
    uno.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "1";
        } else {
            operacion.textContent = "1";
        }
    }
    dos.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "2";
        } else {
            operacion.textContent = "2";
        }
    }
    tres.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "3";
        } else {
            operacion.textContent = "3";
        }
    }
    cuatro.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "4";
        } else {
            operacion.textContent = "4";
        }
    }
    cinco.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "5";
        } else {
            operacion.textContent = "5";
        }
    }
    seis.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "6";
        } else {
            operacion.textContent = "6";
        }
    }
    siete.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "7";
        } else {
            operacion.textContent = "7";
        }
    }
    ocho.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "8";
        } else {
            operacion.textContent = "8";
        }
    }
    nueve.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "9";
        } else {
            operacion.textContent = "9";
        }
    }
    cero.onclick = function (e) {
        if (operacion.textContent == "0." || operacion.textContent != "0") {
            operacion.textContent = operacion.textContent + "0";
        }
    }
    decimal.onclick = function (e) {
        if(operacion.textContent.includes(".")){
        operacion.textContent = operacion.textContent;
        }else{
            operacion.textContent = operacion.textContent + ".";
        }
    }

    suma.onclick = function (e) {
        resultado.textContent = operacion.textContent + "+";
        num1 = operacion.textContent;
        signo = "+";
        limpiaOperacion();
    }
    resta.onclick = function (e) {
        resultado.textContent = operacion.textContent + "-";
        num1 = operacion.textContent;
        signo = "-";
        limpiaOperacion();
    }
    multiplica.onclick = function (e) {
        resultado.textContent = operacion.textContent + "*";
        num1 = operacion.textContent;
        signo = "*";
        limpiaOperacion();
    }
    divide.onclick = function (e) {
        resultado.textContent = operacion.textContent + "/";
        num1 = operacion.textContent;
        signo = "/";
        limpiaOperacion();
    }
    raiz.onclick = function (e) {
        if (operacion.textContent == "" || operacion.textContent == "0") {
            resultado.textContent = "√";
            num1 = operacion.textContent;
            signo = "√";
            limpiaOperacion();
        } else {
            alert("Error. Para realizar raíz cuadrada, hacer click primero en el operador.");
            resetear();
        }
    }
    eleva.onclick = function (e) {
        resultado.textContent = operacion.textContent + "^";
        num1 = operacion.textContent;
        signo = "^";
        limpiaOperacion();
    }
    igual.onclick = function (e) {
        limpiaResultado();
        num2 = operacion.textContent;
        resolver();
        limpiaOperacion();
    }
    c.onclick = function (e) {
        resetear();
    }
    borra.onclick = function (e) {
        borraUltimo();
    }
}

// Funciones para limpieza de campos
function limpiaOperacion() {
    operacion.textContent = "0";
}
function limpiaResultado() {
    resultado.textContent = "0";
}
function borraUltimo(){
    if(operacion.textContent != "0"){
        operacion.textContent = operacion.textContent.toString().slice(0,-1);
        if (operacion.textContent == ""){
            operacion.textContent = "0";
        }
    }
}
function resetear() {
    resultado.textContent = "0";
    operacion.textContent = "0";
    num1 = "0";
    num2 = "0";
    signo = "";
}

// Función para resolver las operaciones con un switch
function resolver() {
    var resul = 0;
    switch (signo) {
        case "+":
            resul = parseFloat(num1) + parseFloat(num2);
            // resulta = resul.toFixed(2);
            break;
        case "-":
            resul = parseFloat(num1) - parseFloat(num2);
            // resulta = resul.toFixed(2);
            break;
        case "*":
            resul = parseFloat(num1) * parseFloat(num2);
            // resulta = resul.toFixed(2);
            break;
        case "/":
            resul = parseFloat(num1) / parseFloat(num2);
            // resulta = resul.toFixed(2);
            break;
        case "√":
            resul = Math.sqrt(parseFloat(num2));
            // resulta = resul.toFixed(2);
            break;
        case "^":
            resul = Math.pow(parseFloat(num1), parseFloat(num2));
            // resulta = resul.toFixed(2);
            break;
    }

    resultado.textContent = resul;
}


/* Cambio de apariencia */

const skin = document.querySelector('#skin');
const apariencia = document.querySelector('#calculadora');

load();

skin.addEventListener('click', e => {
    body.classList.toggle('aspecto');
    calculadora.classList.toggle('aspecto');

    store(body.classList.contains('aspecto'));
});

function load() {
    const aspecto = localStorage.getItem('aspecto');

    if (!aspecto) {
        store('aspecto');
    } else if (aspecto == 'true') {
        body.classList.add('aspecto');
        apariencia.classList.add('aspecto');
    }
}

function store(value) {
    localStorage.setItem('aspecto', value);
}



