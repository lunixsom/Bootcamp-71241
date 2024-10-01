const diccionarioNombres = {
	mario: 'Mario',
	luigi: 'Luigi',
	bowser: 'Bowser Morton Koopa',
	peach: 'Princesa Peach Toadstool',
	yoshi: 'T. Yoshisaur Munchakoopas',
	toad: 'Toad',
	toadette: 'Toadette',
	daisy: 'Princesa Daisy',
};

const presentarConBoton = () => {
    const personaje = prompt(
		'¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)'
	);
    presentar(personaje);
}

const presentar = (personaje) => {
	
	// document.getElementById('presentar-boton').style.display = 'none'; // Punto 6

	//Bonus 1
	
	const normalizado = personaje.toLowerCase().trim();
	const nombre = diccionarioNombres[normalizado] || '(desconocido)';
	document.getElementById('nombre').innerText = nombre;

	let divPersonaje = document.getElementById(normalizado)

	if(divPersonaje.title !== "Presentado"){
		document.getElementById('cajas').childNodes.forEach((element) => {
			element.title = undefined;
		});
		document.getElementById(normalizado).title = 'Presentado';
	} else {
		document.getElementById(normalizado).title = undefined;
	}
};
