const galeria = [
    {foto: 'Dia de graduacion', year: 2019},
    {foto: 'Paseo en la playa', year: 2019},
    {foto: 'Nieve en invierno', year: 2020},
    {foto: 'Dia de gracia', year: 2022},
    {foto: 'Tercer guerra mundial', year: 2030}
]
// Para ver solo el nombre de las imagenes
const galeriaFotos = galeria.map((galeria) =>{
    return galeria.foto;
})
console.log (galeriaFotos);

// Para saber si una imagen es posterior a 2019 :'v
const galeriaDecada = galeria.filter((galeria) =>{
    return galeria.year <= 2020;
})
console.log(galeriaDecada);



const mangas = [
	{name: 'bokuben', year: 2015},
	{name: 'One piece', year: 1997},
	{name: "JOJO'S", year: 1988}
]

const namgassiglopasado = mangas.filter((mangas)=>{
	return mangas.year <=2000;
});
console.log(namgassiglopasado);

const mangasnames = mangas.map((mangas)=>{
	return mangas.name;
});
console.log(mangasnames);

document.write('<br><br><h2>Practica map, filter (16-10-2019)</h2>');

const animes = [
	{name:'Boku no hero', year: 2015},
	{name: 'Evangelion', year: 1997},
	{name: 'Dr. Stone', year: 2019},
	//ya tengo el codigo listo, me dice el anime y el año de salida
	//ademas me dice cuales salieron antes de 2010,joder que util
	//y aplicar map a filter fue obra mia jeje xD
	{name: 'Monster mususme', year: 2015}
]

const animesName = animes.map((animes) =>{
	return animes.name;
});
const animesYear = animes.map((animes) => {
	return animes.year;
});
for (var i = 0; i < animes.length;i++){
	document.write(animesName[i] );
	document.write(' salio en el año '+animesYear[i]+ '<br>');
};
console.log(animes.length);
// ahora filter, primero filtro los objetos y luego les hago map jeje

const animesRecientes = animes.filter((animes) =>{
	return animes.year > 2010;
});
const animesRecientesName = animesRecientes.map((animesRecientes)=>{
	return animesRecientes.name;
});

document.write('<br><br>' + 'Estos animes salieron despues de 2010: <br>');

console.log(animesRecientesName);
for (var i = 0; i < animesRecientesName.length; i++){
	document.write(animesRecientesName[i] + '<br>');
};

document.write('<br><br> <h2>Capitulos de one piece, practica de map, filter y for (18-10-2019)</h2>')
const onePieceCap = [
	{capitulo: 1, nombre: 'Yo sere el rey de los piratas'},
	{capitulo: 2, nombre: 'El east blue'},
	{capitulo: 3, nombre: 'Zoro el cazador de piratas'},
	{capitulo: 4, nombre: 'Luffy vs Zoro'}
]

const capitulos = onePieceCap.map((onePieceCap) => {
	return onePieceCap.capitulo
})

console.log(capitulos)


const primerosCap = onePieceCap.filter((onePieceCap) =>{
	return onePieceCap.capitulo <= 7
})
console.log(primerosCap)

	const nombresCap = primerosCap.map((primerosCap) =>{
		return primerosCap.nombre
	})



for(var i = 0; i<nombresCap.length; i++){
	cap = i+1
	document.write('Capitulo ' + cap +': '+nombresCap[i] + '<br>')
}

console.log(nombresCap)






















