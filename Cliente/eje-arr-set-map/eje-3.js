// Función para generar una combinación única de 6 números del 1 al 49
function generarCombinacion() {
    const numeros = new Set();
    while (numeros.size < 6) {
        const numero = Math.floor(Math.random() * 49) + 1;
        numeros.add(numero);
    }
    //return Array.from(numeros)
}

// Función para generar múltiples combinaciones y mostrarlas en el DOM
function generarCombinaciones() {
    const combinacionesContainer = document.getElementById("combinaciones");
    combinacionesContainer.innerHTML = "";  // Limpia cualquier contenido previo
    const totalCombinaciones = 50;

    for (let i = 0; i < totalCombinaciones; i++) {
        const combinacion = generarCombinacion();
        const combinacionDiv = document.createElement("div");
        combinacionDiv.classList.add("combinacion");
        combinacionDiv.textContent = `Combinación ${i + 1}: ${combinacion.join(", ")}`;
        combinacionesContainer.appendChild(combinacionDiv);
    }
}

// Genera las combinaciones al cargar la página
window.onload = generarCombinaciones;
