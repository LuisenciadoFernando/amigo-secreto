let listadoAmigos = [];

function agregarAmigo() {

    let nombreIngresado = document.querySelector('#amigo').value; // seleccionamos el valor del input

    if(nombreIngresado == '') {
        alert('Ingresa un nombre para continuar')
    } else {
    listadoAmigos.push(nombreIngresado); // ingresamos el valor a la lista
    mostrarLista();
    console.log(listadoAmigos);
    vaciarInput();
    }
}


function vaciarInput() {
    document.querySelector('#amigo').value = ''; // colocar valor del input a vacío
}


function mostrarLista() {
    let listaUL = document.querySelector('#listaAmigos'); // seleccionar el listado
    listaUL.innerHTML = ''; // borrar datos previos antes de empezar
    listadoAmigos.forEach(function(amigo) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}