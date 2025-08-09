// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//document.addEventListener("DOMContentLoaded", () => {
//const btnAñadir = document.getElementById
//});

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("escribe un nombre:");
        return;
    }
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        alert("!primero debes agregar amigos!.");
        return;
    }
    let indiceAzar = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAzar];
    
    resultado.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `Nombre seleccionado: ${amigoSecreto}`;
    //document.getElementById("nombreAzar").textContent = `Nombre seleccionado: ${amigoSecreto}`;
    resultado.appendChild(li);
}