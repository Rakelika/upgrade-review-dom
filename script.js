//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulCountries$$ = document.createElement('ul');
document.body.append(ulCountries$$);
for (let i = 0; i < countries.length; i++) {
	const liCountries$$ = document.createElement('li');
    ulCountries$$.append(liCountries$$);
	liCountries$$.innerText = countries[i];
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar$$ = document.querySelector('.fn-remove-me');
eliminar$$.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere$$ = document.querySelector('[data-function="printHere"]');

const ulCars$$ = document.createElement('ul');
printHere$$.append(ulCars$$);
for (let i = 0; i < cars.length; i++) {
	const liCars$$ = document.createElement('li');
    ulCars$$.append(liCars$$);
	liCars$$.innerText = cars[i];
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const ulCountries2$$ = document.createElement('ul');

for (let country of countries2) {
	const liCountries2$$ = document.createElement('li');

	const titleCountries2$$ = document.createElement('h4');
	titleCountries2$$.innerText = country.title;

	const imgCountries2$$ = document.createElement('img');
	imgCountries2$$.setAttribute("src", country.imgUrl);

	const btnCountries2$$ = document.createElement("button");
    btnCountries2$$.innerText = "X";

	liCountries2$$.append(titleCountries2$$)
	liCountries2$$.append(imgCountries2$$)
	liCountries2$$.append(btnCountries2$$)
    ulCountries2$$.append(liCountries2$$);

	btnCountries2$$.addEventListener("click", deleteOne);
    function deleteOne () {
        liCountries2$$.remove()
    }
}

document.body.append(ulCountries2$$);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la lista.

const deleteButton$$ = document.createElement('button');
deleteButton$$.innerText = "eliminar el último"
document.body.appendChild(deleteButton$$);

deleteButton$$.addEventListener("click", function () {
	const allLi$$ = document.querySelectorAll('li');
	allLi$$[allLi$$.length-1].remove()
}) 


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

