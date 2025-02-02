// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos.length);
/*

let frutas = ["Manzana", "Banana"];

console.log(frutas.length);
// 2
let primero = frutas[0];
// Manzana

let ultimo = frutas[frutas.length - 1];
// Banana

Recorrer un Array
frutas.forEach(function (elemento, indice, array) {
  console.log(elemento, indice);
});
// Manzana 0
// Banana 1

*/ 

function agregarAmigo() {
    /*opcion 1*/
    let addAmigos = document.getElementById('amigo').value;
    //console.log(addAmigos); 
    // Verificamos si el campo no está vacío y que sea
    if (addAmigos.trim() !== '') {
        //agregamos los amigos
        amigos.push(addAmigos);
        console.log(`se agrego a: ${amigos[amigos.length - 1]}`);
        console.log(`tamaño del array: ${amigos.length}`);
        limpiarCaja();
    //mejora utilizar validacion  de que no sea numeros
    } else {
        console.log("Por favor ingresa un nombre.");
        alert("Por favor, inserte un nombre.");

    }

    /*
    //opcion 2
    let amigo = document.querySelector('#amigo');
    let nombreAmigo = amigo.value;
    console.log(nombreAmigo);
    */
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


