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

//Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
  const lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

//Función para sortear un amigo secreto
function sortearAmigo() {
  const respuesta = document.getElementById("resultado");

  if (amigos.length === 0) {
    respuesta.innerHTML =
      "<li>No hay nombres de amigos en la lista para sortear</li>";
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  respuesta.innerHTML = `<li>El amigo secreto es:<strong>${amigoSorteado}</strong></li>`;
}
