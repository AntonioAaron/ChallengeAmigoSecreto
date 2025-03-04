// Obtener los elementos del DOM
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const amigoInput = document.getElementById("amigo");

// Crear un arreglo para almacenar los nombres
let amigos = [];

// Función para agregar un nombre
function agregarAmigo() {
    const nombre = amigoInput.value.trim();

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al arreglo y actualizar la lista visible
    amigos.push(nombre);
    amigoInput.value = "";  // Limpiar el campo de texto

    // Actualizar la lista de amigos
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";

    // Crear un nuevo elemento de lista por cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Seleccionar un amigo aleatorio
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado
    resultado.innerHTML = `El amigo secreto sorteado es: <span>${amigoSorteado}</span>`;
}