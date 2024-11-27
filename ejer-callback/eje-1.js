let entradaUsu = document.getElementsByName("datos")[0];
let add = document.getElementsByName("add")[0];
let pares = document.getElementsByName("pares")[0];
let impares = document.getElementsByName("impares")[0];

let arrNum = [];
let contador = 10; 

function addNumeros() {
    let valor = entradaUsu.value;
    
    if (isNaN(valor) || valor.trim() === "") {
        alert("Ingrese un número válido");
        return;
    }
    let numero = parseInt(valor);
    if(arrNum.includes(numero)){
        alert("Número ya ingresado");
        return;
    }
    arrNum.push(numero);

    contador--;
    document.getElementById("span").textContent = `Quedan ${contador} números por agregar`;

    entradaUsu.value="";
    
    if (contador === 0) {
        add.style.display = "none"; 
        span.textContent = "Ya has ingresado 10 números."; 
    }

}


function visualizar() {
    if (arrNum.length >= 10) {
       
        pares.value = arrNum.filter(n => n % 2 === 0).join(", ");
    impares.value = arrNum.filter(n => n % 2 !== 0).join(", ");
    }
    
}