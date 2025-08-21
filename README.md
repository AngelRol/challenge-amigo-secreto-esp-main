Aplicación: Amigo secreto

Tipo de lenguaje trabajado: JavaScript

Pasos:

1. Se inicializa proyecto let amigos declarando el arreglo vacío.
2. Se desarrolla un función (function AgregarAmigo), permitiendo al usuario ingresar un nombre en el campo texto y añadirlo a la lista de amigos creada.
  2.1 Se crea las variables const de input y nombre.
  2.2 Se utiliza document.querySelector para obtener el texto ingresado por el usuario.
  2.3 Obtiene el valor del input con el id="amigo".
  2.4 Se hace la validación para asegurarse que el campo no está vacío. Si está vacío, se muestra un alert con un mensaje de error que diga: "Por favor, inserte un nombre". Y termina la función con return.
  2.5 Se verifica si el valor es valido y se añade al arreglo almacenando los nombres usando el método .push().
  2.6 Limpiar el campo de entrada.
3. Desarrollo de la función actualizar (function actualizar) para lista de amigos en pantalla.
  3.1 Creación de la variable lista, la cual se llama const lista.
  3.2 Se obtiene el elemento de la lista utilizando document.querySelector().
  3.3 Se limpia la lista existente con lista.innerHTML = ""
  3.4 Se hace la iteración con for para recorrer el arreglo amigos y crear elementos de lista(<li>).
4. Desarrollo de la función sortear los amigos(function sortearAmigo).
  4.1 Se crea la variable respuesta.
  4.2 Se utiliza document.getElementById() para seleccionar la lista donde se mostrarán los amigos sorteados.
  4.3 Se hace la validación de amigos disponibles comprobando si el array amigos no está vacío.
  4.4 Si no hay nombres en la lista, muestra un mensaje de advencia.
  4.5 Se genera un índice aleatorio usando Math.random() y Math.floor().
  4.6 Una vez obtenido el índice aleatorio se accede al nombre correspondiente en el arreglo.
  4.7 Al actualizar el contenido del elemento de resultado se utiliza document.getElementById() e innerHTML para mostrar el amigo sorteado.

Código elaborado por: Ángel Rolando Rincón Hernández
   
