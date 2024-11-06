let numeros = []
function ponerNum() {
    
    while(true){
        let ingresa = parseInt(prompt("Ingresa números: "));
    if( ingresa === 0 || ingresa == NaN );
     numeros.push(ingresa);
    }
}
ponerNum();
alert(numeros);
/*OTRA MANERA*/
/*
let num = [];

function sumarNum() {
    let numIntroducido = parseInt(document.getElementById('num').value);

    if (isNaN(numIntroducido)) {
        document.getElementById('salida').value = "Introduce un número!";
    }else{
        if
    }
}
    */