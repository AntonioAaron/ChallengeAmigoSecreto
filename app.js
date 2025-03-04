// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Referencias a los elementos del DOM
const addButton = document.getElementById("addButton");
const sortButton = document.getElementById("sortButton");
const nombreInput = document.getElementById("nombreInput");
const nombresList = document.getElementById("nombresList");
const resultado = document.getElementById("resultado");
const amigo = document.getElementById("amigo");

// Arreglo para almacenar los nombres de los amigos
let nombres = [];

addButton.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  
  // Validar si el campo está vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregar el nombre a la lista
  nombres.push(nombre);
  nombreInput.value = "";  // Limpiar el campo de entrada
  
  // Mostrar la lista de nombres en la página
  updateLista();
});

// Función para actualizar la lista de nombres
function updateLista() {
  nombresList.innerHTML = "";
  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    nombresList.appendChild(li);
  });
}

// Función para sortear un amigo secreto
sortButton.addEventListener("click", () => {
  if (nombres.length === 0) {
    alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
    return;
  }

  // Seleccionar un amigo aleatorio
  const amigoSorteado = nombres[Math.floor(Math.random() * nombres.length)];
  
  // Mostrar el resultado
  amigo.textContent = amigoSorteado;
  resultado.classList.remove("hidden");
});