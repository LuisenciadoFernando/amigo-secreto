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


function sortearAmigo() {
    // 1. Verifica si el array "listadoAmigos" está vacío
if (listadoAmigos.length == 0) {
    // 2. Si el array está vacío (no hay amigos en la lista), muestra un mensaje de alerta
    alert('No hay amigos por sortear. Ingresa algunos nombres');
} else {
    // 3. Si hay amigos en la lista (el array no está vacío), entra en este bloque de código

    // 4. Genera un índice aleatorio entre 0 y listadoAmigos.length - 1
    // Math.random() genera un número decimal entre 0 y 1 (sin incluir 1).
    // Luego, multiplicamos por el tamaño del array "listadoAmigos" para obtener un número en el rango adecuado.
    // Math.floor() redondea hacia abajo, asegurando que el índice sea un número entero dentro del rango del array.
    let indiceAleatorio = Math.floor(Math.random() * listadoAmigos.length);

    // 5. Usa el índice aleatorio generado para acceder al nombre del amigo sorteado
    // Accede al valor de "listadoAmigos" en el índice generado aleatoriamente y lo asigna a "amigoSorteado".
    let amigoSorteado = listadoAmigos[indiceAleatorio];

    // 6. Muestra el amigo sorteado en un elemento HTML con id "resultado"
    // Usamos "document.querySelector('#resultado')" para obtener el elemento en el DOM con el id "resultado".
    // Luego, usamos ".innerHTML" para cambiar el contenido de ese elemento, mostrando el mensaje con el amigo sorteado.
    document.querySelector('#resultado').innerHTML = 'El amigo sorteado fue ' + amigoSorteado;
}

}