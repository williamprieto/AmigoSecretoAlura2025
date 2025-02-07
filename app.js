// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
// Expresión regular para solo permitir letras y espacios (si deseas permitir nombres compuestos)
let regex = /^[A-Za-záéíóúÁÉÍÓÚüÜ\s]+$/;

//let amigos = ['Daniela', 'Juan', 'Pedro', 'Ana'];
//console.log(amigos.length);

function agregarAmigo() {
    /*opcion 1*/
    let addAmigos = document.getElementById('amigo').value;
    //console.log(addAmigos);
    // 
    // Verificamos si el campo es diferente de vacío
    if (addAmigos.trim() !== '' && regex.test(addAmigos)) {
        //agregamos los amigos
        amigos.push(addAmigos);
        //Mensajes de verificacion en consola
        console.log(`se agrego a: ${amigos[amigos.length - 1]}`);
        console.log(`tamaño del array: ${amigos.length}`);
        limpiarCaja();
        //recorreAmigos(amigos[amigos.length - 1]);
        recorreAmigos(amigos);
    } else {
        console.log("Por favor, ingrese un nombre válido (solo letras).");
        alert("Por favor, ingrese un nombre válido (solo letras).");

    }
    return;
    /*
    //opcion 2
    let amigo = document.querySelector('#amigo');
    let nombreAmigo = amigo.value;
    console.log(nombreAmigo);
    */
}

function limpiarCaja() {
    //Limpiando <input>
    document.querySelector('#amigo').value = '';
    //Limpiando <ul>
    document.querySelector('#listaAmigos').innerHTML = '';
    return;
}

function recorreAmigos(arrayAmigos) {
    //asignarTextoElemento('#listaAmigos',amigos);
    let listaAmigos = document.querySelector('#listaAmigos');
    //ciclo que muestra en la etiqueta <li> el resultado
    for (let i = 0; i < arrayAmigos.length; i++) {
        // Crear un nuevo elemento <li>
        let nuevoElemento = document.createElement('li');
        // Asignar el nombre del amigo como texto dentro del <li>
        nuevoElemento.textContent = arrayAmigos[i];
        // Agregar el nuevo <li> al <ul> correspondiente
        listaAmigos.appendChild(nuevoElemento);
        //(Opcional) 
        //console.log(`El li "${nuevoElemento.textContent}" `);
    }

    return;
}

function sortearAmigo() {
    let tamañoArray = amigos.length;
    console.log(`Tamaño del array: ${tamañoArray}`);
    let indiceAleatorio =  Math.floor(Math.random()*tamañoArray);
    console.log(`indice aleatorio: ${indiceAleatorio}`);
    if (tamañoArray !== 0 && tamañoArray >= 2) {
        console.log("Procesando nombre.....");
        console.log(`El nombre sorteado fue: ${amigos[indiceAleatorio]}`);
        limpiarCaja();
        asignarTextoElemento('#resultado',`El amigo secreto sorteado es: ${amigos[indiceAleatorio]}`);
    } else {    
        console.log(`${(tamañoArray == 0) ? 'No existen amigos para sortear, ingrese por lo menos 2 amigos' : 'Por favor ingrese por lo menos 2 amigos'}`);
        alert(`${(tamañoArray == 0) ? 'No existen amigos para sortear, ingrese por lo menos 2 amigos' : 'Por favor ingrese por lo menos 2 amigos'}`);
        document.querySelector('#amigo').value = '';
    }
   
      
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}