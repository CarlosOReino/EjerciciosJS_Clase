// imágenes de los lados del dado
const dadoImages = [
    "Imágenes-para-dado/dado-1.png", 
    "Imágenes-para-dado/dado-2.png", 
    "Imágenes-para-dado/dado-3.png", 
    "Imágenes-para-dado/dado-4.png", 
    "Imágenes-para-dado/dado-5.png", 
    "Imágenes-para-dado/dado-6.png",
];

// Obtener elementos del DOM
const dado = document.getElementById("dado");


// Función para lanzar el dado
function lanzarDado() {
    const numeroRandom = Math.floor(Math.random() * 6); 
    dado.src = dadoImages[numeroRandom]; 
}

