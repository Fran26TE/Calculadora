var operar;
var signo;
var resultadoFinal;
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
        operacion.textContent = operacion.textContent + "1";
    }
    dos.onclick = function (e) {
        operacion.textContent = operacion.textContent + "2";
    }
    tres.onclick = function (e) {
        operacion.textContent = operacion.textContent + "3";
    }
    cuatro.onclick = function (e) {
        operacion.textContent = operacion.textContent + "4";
    }
    cinco.onclick = function (e) {
        operacion.textContent = operacion.textContent + "5";
    }
    seis.onclick = function (e) {
        operacion.textContent = operacion.textContent + "6";
    }
    siete.onclick = function (e) {
        operacion.textContent = operacion.textContent + "7";
    }
    ocho.onclick = function (e) {
        operacion.textContent = operacion.textContent + "8";
    }
    nueve.onclick = function (e) {
        operacion.textContent = operacion.textContent + "9";
    }
    cero.onclick = function (e) {
        operacion.textContent = operacion.textContent + "0";
    }
    decimal.onclick = function (e) {
        operacion.textContent = operacion.textContent + ".";
    }

    suma.onclick = function (e) {
   
        operar = operacion.textContent;
        signo = "+";
        
    }
    resta.onclick = function (e) {
        operar = operacion.textContent;
        signo = "-";
    }
    multiplica.onclick = function (e) {
        operar = operacion.textContent;
        signo = "*";
    }
    divide.onclick = function (e) {
        operar = operacion.textContent;
        signo = "/";
    }

    raiz.onclick = function (e) {
        operar = operacion.textContent;
        signo = "√";
    }
    eleva.onclick = function (e) {
        operar = operacion.textContent;
        signo = "^";
    }
    igual.onclick = function (e) {
        resultadoFinal = resultado.textContent;
        resolver();
    }

    c.onclick = function (e) {
        resetear();
    }
    borra.onclick = function (e) {
        borraUltimo();
    }
}

function resetear(){
    resultado.textContent = "";
    operacion.textContent = "";
}

function resolver(){
    var res = 0;
    switch(resultadoFinal){
      case "+":
        res = parseFloat(operar) + parseFloat(signo);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
   
    resultado.textContent = res;
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



