function imc() {
	let peso = document.getElementById('peso').value;
	let altura = document.getElementById('altura').value;
	let calcimc = peso/(altura*altura);
	let r = calcimc.toFixed(2);

	if (!altura || !peso) {
		document.getElementById('resultado').innerHTML = 'Valor invalido';
	}
	else if (r < 17.00) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Muito abaixo do peso';
	}
	else if (r >= 17.00 && r <= 18.49) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Abaixo do peso';
	}
	else if (r >= 18.50 && r <= 24.99) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Peso normal';
	}
	else if (r >= 25.00 && r <= 29.99) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Acima do peso';
	}
	else if (r >= 30.00 && r <= 34.99) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Obesidade I';
	}
	else if (r >= 35.00 && r <= 39.99) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Obesidade II (severa)';
	}
	else if (r >= 40.00) {
		document.getElementById('resultado').innerHTML = 'IMC: ' + r + ', Obesidade III (mórbida)';
	}
}
document.getElementById('bt').addEventListener('click', imc);
