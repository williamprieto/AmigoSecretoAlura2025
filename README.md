### Índice


- [Descripción](#Descripción)
- [Características principales](#Características-principales)
- [Tecnologías](#Tecnologías)
- [Funcionalidades](#Funcionalidades)
- [Instrucciones de Uso](#Instrucciones-de-Uso)
- [Estructura del Proyecto](#Estructura-del-Proyecto)

# Proyecto: Sorteo de Amigo Secreto

Este proyecto tiene como objetivo fortalecer las habilidades de programación.

## Descripción  🚀

Este proyecto implementa una página web que permite agregar nombres de amigos a una lista y realizar un sorteo de **Amigo Secreto** el cual es mostrado en pantalla.

## Características principales

1. **Agregar Amigos**: Los usuarios pueden agregar los nombres de sus amigos a la lista. Se realiza una validación para asegurarse de que no se ingrese un campo vacío.
2. **Mostrar Amigos**: Los nombres de los amigos agregados se muestran dinámicamente en una lista `<ul>` en la interfaz.
3. **Sorteo de Amigo Secreto**: Una vez que se hayan agregado al menos dos amigos, se puede hacer el sorteo. El sistema elige un amigo al azar y muestra el nombre del amigo secreto en la pantalla.
4. **Interacción de Usuario**: El sistema ofrece mensajes de verificación y advertencias según sea necesario, como cuando se intenta realizar un sorteo sin tener suficientes amigos en la lista.

## Tecnologías

- **HTML**: Estructura de la página web.
- **CSS**: Estilos básicos para la presentación.
- **JavaScript**: Lógica de programación para manejar la interacción con el DOM y realizar el sorteo.
- **DOM**: Manipulación del DOM para actualizar dinámicamente la lista de amigos y mostrar el resultado del sorteo.

## Funcionalidades

### 1. **Agregar un Amigo**

Al escribir un nombre en el campo de texto y presionar el botón de agregar, el nombre del amigo es añadido al arreglo de amigos y aparece en la lista. Si el campo está vacío, se muestra una alerta pidiendo que se ingrese un nombre.

- **Función**: `agregarAmigo()`
- **Descripción**: Obtiene el valor del input, valida si no está vacío, agrega el nombre al array `amigos`, y luego muestra el nombre en la lista.

### 2. **Mostrar Lista de Amigos**

La función `recorreAmigos()` recorre el array de amigos y agrega un `<li>` por cada amigo al contenedor `<ul>` en el HTML. Cada amigo agregado aparece de forma dinámica en la página.

- **Función**: `recorreAmigos()`
- **Descripción**: Recorre el array de amigos y agrega cada nombre como un elemento `<li>` al contenedor `#listaAmigos`.

### 3. **Realizar Sorteo de Amigo Secreto**

Cuando se tiene al menos dos amigos en la lista, el usuario puede hacer clic en el botón para realizar el sorteo. Se selecciona un amigo al azar y el nombre del amigo secreto es mostrado en pantalla.

- **Función**: `sortearAmigo()`
- **Descripción**: Realiza el sorteo seleccionando un índice aleatorio del array de amigos. Si el número de amigos es suficiente (al menos 2), se muestra el nombre sorteado.

### 4. **Limpiar Caja de Entrada**

Después de agregar un amigo o realizar un sorteo, la caja de entrada (input) se limpia para permitir al usuario agregar otro nombre o realizar un nuevo sorteo.

- **Función**: `limpiarCaja()`
- **Descripción**: Limpia el campo de texto donde el usuario ingresa el nombre del amigo y la lista de amigos mostrada en la página.

### 5. **Asignar Texto a un Elemento HTML**

La función `asignarTextoElemento()` es utilizada para actualizar el contenido de cualquier elemento HTML especificado. Esta función es especialmente útil para mostrar el resultado del sorteo o cualquier otro mensaje en la interfaz.

- **Función**: `asignarTextoElemento()`
- **Descripción**: Actualiza el contenido del elemento HTML indicado con el texto que se pasa como parámetro.

## Instrucciones de Uso

1. Abre el archivo HTML en un navegador web.
2. Ingresa los nombres de tus amigos en el campo de texto y presiona el botón "Agregar Amigo" para agregarlos a la lista.
3. Una vez que tengas al menos dos amigos en la lista, presiona el botón "Sortear Amigo Secreto" para realizar el sorteo.
4. El nombre del amigo secreto será mostrado en la pantalla.
5. Para volver a jugar es necesario recargar la página.

## Estructura del Proyecto


## Función Principal

- **agregarAmigo()**: Permite agregar un amigo a la lista si el campo de texto no está vacío.
- **limpiarCaja()**: Limpia el campo de texto y la lista de amigos.
- **recorreAmigos()**: Recorre la lista de amigos y agrega cada uno a la interfaz.
- **sortearAmigo()**: Realiza el sorteo de amigo secreto si hay al menos dos amigos en la lista.
- **asignarTextoElemento()**: Actualiza el contenido de un elemento HTML con el texto proporcionado.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacerlo un fork, enviar pull requests, o reportar problemas en el repositorio. Asegúrate de seguir las mejores prácticas de código y de escribir comentarios cuando sea necesario.


