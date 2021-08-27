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



