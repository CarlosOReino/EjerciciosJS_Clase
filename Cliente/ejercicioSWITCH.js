function verinfo(){
switch(document.getElementById('entrada').value){
    case "C.Madrid":
        document.getElementsByName('salida')[0].value = "La capital de la provincia es Madrid" ;
        break;
    case "Galicia":
        document.getElementsByName('salida')[0].value ="La capital de la provincia es Santiago de Compostela";
        break;
    case "Cataluña":
        document.getElementsByName('salida')[0].value ="La capital de la provincia es Barcelona";
        break;
    case "Andalucía":
        document.getElementsByName('salida')[0].value="La capital de la provincia es Sevilla";
        break;
}
}