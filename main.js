const skin = document.querySelector('#skin');
const apariencia = document.querySelector('#calculadora');


load();

skin.addEventListener('click', e => {
	calculadora.classList.toggle('aspecto');
    store(body.classList.contains('aspecto'));

});

function load() {
	const aspecto = localStorage.getItem('aspecto');

	if (!aspecto) {
		store('false');
	} else if (aspecto == 'true') {
		apariencia.classList.add('aspecto');
	}
}

function store(value) {
	localStorage.setItem('aspecto', value);
}


