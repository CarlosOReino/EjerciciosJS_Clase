function validateEmail() {
  var emailField = document.getElementById("user-email");
  var emVal = document.getElementById("emVal");
  var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  if (validEmail.test(emailField.value)) {
    emVal.innerHTML = "Datos correctos!";
    emVal.style.color = "green";
  } else {
    emVal.innerHTML = "Datos no válidos!";
    emVal.style.color = "red";
  }
}
function validateEmail2() {
  var emailField = document.getElementById("user-email").value;
  var emailField2 = document.getElementById("user-email2");
  var ok = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  var emVal2 = document.getElementById("emVal2");
  if (ok.test(emailField2.value)) {
    emVal2.innerHTML = "Datos correctos!";
    emVal2.style.color = "green";
  } else {
    emVal2.innerHTML = "Datos no válidos!";
    emVal2.style.color = "red";
  }
  if (emailField === emailField2 ) {
    emVal2.innerHTML = "Datos correctos!";
    emVal2.style.color = "green";
  }
}
/*
function validateEmail2() {
  var emailField = document.getElementById("user-email").value;
  var emailField2 = document.getElementById("user-email2").value;
  var emVal2 = document.getElementById("emVal2");
  if (emailField === emailField2 ) {
    emVal2.innerHTML = "Datos correctos!";
    emVal2.style.color = "green";
  } else {
    emVal2.innerHTML = "Datos no válidos!";
    emVal2.style.color = "red";
  }
}
*/
function validacionNombre() {
  var nombre = document.getElementById("nombre").value;
  var valspan = document.getElementById("nomVal");
  var caracteres = /^[A-Za-z]+$/;
  if (
    nombre.charAt(0) === nombre.charAt(0).toUpperCase() &&
    caracteres.test(nombre)
  ) {
    valspan.innerHTML = "Nombre válido!";
    valspan.style.color = "green";
  } else {
    valspan.innerHTML = "Nombre no válido!";
    valspan.style.color = "red";
  }
}

function validarApellidos() {
  var apellidos = document.getElementById("apellidos").value;
  var apeVal = document.getElementById("apeVal");
  var caracteres = /^[A-Za-z\s]+$/;
  if (
    apellidos.charAt(0) === apellidos.charAt(0).toUpperCase() &&
    caracteres.test(apellidos)
  ) {
    apeVal.innerHTML = "Apellidos válidos!";
    apeVal.style.color = "green";
  } else {
    apeVal.innerHTML = "Apellidos no válidos!";
    apeVal.style.color = "red";
  }
}

/*---------------Código de Carlos----------------*/
//f. DNI: Debe ser un DNI válido. Se trata de un campo obligatorio.

function validarDNI() {
  const DNI = document.getElementById("DNI").value.trim(); //Trim borra los espacion del inicio y del final
  const resultadoDNI = document.getElementById("resultadoDNI");

  // Verificar longitud y formato del DNI (8 números + 1 letra)
  let esValido = DNI.length === 9;
  for (let i = 0; i < 8; i++) {
    //verificar si los 8 primeros carácteres son números
    if (isNaN(DNI[i])) {
      esValido = false;
      break;
    }
  }
  const ultimaLetra = DNI.charAt(8); //saber el índice
  if (
    !(ultimaLetra >= "A" && ultimaLetra <= "Z") &&
    !(ultimaLetra >= "a" && ultimaLetra <= "z")
  ) {
    esValido = false;
  }

  // Mostrar resultado
  if (esValido) {
    resultadoDNI.textContent = "DNI válido";
    resultadoDNI.style.color = "green";
  } else {
    resultadoDNI.textContent =
      "El DNI debe tener 8 números seguidos de 1 letra";
    resultadoDNI.style.color = "red";
  }
}

//g. Validación de Intereses
function validarIntereses() {
  const intereses = document.getElementById("Intereses").value.split(","); //separamos por comas
  const resultadoIntereses = document.getElementById("resultadoIntereses");
  const interesesValidos = [
    "mercado inmobiliario",
    "bolsa",
    "bienes estatales",
  ];
  let interesesSeleccionados = [];

  // Validar cada interés ingresado
  for (let i = 0; i < intereses.length; i++) {
    let interes = intereses[i].trim().toLowerCase();
    if (interesesValidos.includes(interes)) {
      interesesSeleccionados.push(interes);
    }
  }

  // Mostrar resultado
  if (interesesSeleccionados.length > 0) {
    resultadoIntereses.textContent =
      "Intereses válidos: " + interesesSeleccionados.join(", "); //separado por una coma
    resultadoIntereses.style.color = "green";
  } else {
    resultadoIntereses.textContent =
      "Debe incluir al menos uno de los intereses válidos: Mercado inmobiliario, Bolsa, Bienes estatales";
    resultadoIntereses.style.color = "red";
  }
}

//h. Validación de Contraseña
function validarPassword() {
  const password = document.getElementById("password").value;
  const resultadoPassword = document.getElementById("resultadoPassword");

  let tieneMayuscula = false;
  let tieneMinuscula = false;
  let contadorNumeros = 0;
  let tieneSimbolo = false;
  const simbolos = "!@#$%^&*()_+-={}[]|:;<>,.?/~`";

  // Validar cada carácter de la contraseña
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") {
      tieneMayuscula = true;
    } else if (char >= "a" && char <= "z") {
      tieneMinuscula = true;
    } else if (char >= "0" && char <= "9") {
      contadorNumeros++;
    } else if (simbolos.indexOf(char) !== -1) {
      tieneSimbolo = true;
    }
  }

  // Verificar que cumpla todas las condiciones
  if (
    password.length >= 8 &&
    password.length <= 20 &&
    tieneMayuscula &&
    tieneMinuscula &&
    contadorNumeros >= 2 &&
    tieneSimbolo
  ) {
    resultadoPassword.textContent = "Contraseña válida";
    resultadoPassword.style.color = "green";
  } else {
    resultadoPassword.textContent =
      "La contraseña debe tener entre 8 y 20 caracteres, una mayúscula, una minúscula, dos números y un símbolo";
    resultadoPassword.style.color = "red";
  }
}

/*---------------------FIN-----------------------*/
function validarFormulario() {
  if (validateEmail() == validateEmail2() && validateEmail() === validateEmail2()) {
    document.getElementById("demo").innerText = "Datos correctos!";
    document.getElementById("demo").style.color = "green";
  } else {
    document.getElementById("demo").innerText = "Tus emails no coinciden!";
    document.getElementById("demo").style.color = "red";
  }
}
