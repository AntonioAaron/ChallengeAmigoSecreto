const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const amigoInput = document.getElementById("amigo");

let amigos = [];

function agregarAmigo() {
    const nombre = amigoInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    amigoInput.value = "";  

    actualizarLista();
}

function actualizarLista() {

    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    resultado.innerHTML = `El amigo secreto sorteado es: <span>${amigoSorteado}</span>`;
}