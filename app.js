let listadoAmigos = [];

function agregarAmigo() {

    let nombreIngresado = document.querySelector('#amigo').value; // seleccionamos el valor del input

    if(nombreIngresado == '') {
        alert('Ingresa un nombre para continuar')
    } else {
    listadoAmigos.push(nombreIngresado); // ingresamos el valor a la lista
    console.log(listadoAmigos);
    vaciarInput();
    }
}


function vaciarInput() {
    document.querySelector('#amigo').value = '';
}