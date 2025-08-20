// lógica para resolver el problema del amigo secreto
let amigos = [];

//Función para agregar amigos
function agregarAmigo() {
  const input = document.querySelector("#amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  actualizarLista();
}

