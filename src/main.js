 //Obtener elementos/nodos
const inputNombre = document.getElementById('nombre-input');
const parrafo = document.getElementById('texto');
const parrafo2 = document.querySelector('.texto');
const parrafos = document.querySelectorAll('.texto');

// console.log(inputNombre);
// console.log(inputNombre.id);
// console.log(inputNombre.getAttribute('id')); 
// console.log(parrafo);
// console.log(parrafo2);

//Manipulación del DOM
// inputNombre.value="soy un input";
// document.getElementById('texto').innerHTML = 'modificado'

// inputNombre.addEventListener('input',actualizarTexto);

// function actualizarTexto(e){
//     parrafo.textContent= e.target.value;
// }

inputNombre.addEventListener('input',
    e=>{
        parrafo.textContent= e.target.value;
    }
);

//Creamos elemento
const divParrafo=document.getElementById('section1')

const p = document.createElement('p');

p.textContent='Mucho texto agregado desde JS';

//Insertamos elemento
//document.body.appendChild(p);
divParrafo.appendChild(p);

//////
