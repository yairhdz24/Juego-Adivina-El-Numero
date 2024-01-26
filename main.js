const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);
let intentos = 10;

// Verifica que el elemento existe antes de intentar acceder a él
const numeroOcultoElement = document.getElementById("numeroOculto");
if (numeroOcultoElement) {
  numeroOcultoElement.textContent = "?";
} else {
  console.error("Error: El elemento numeroOculto no existe.");
}

function mostrarMensaje(mensaje) {
  const mensajeElement = document.getElementById("mensaje");
  if (mensajeElement) {
    mensajeElement.textContent = mensaje;
  } else {
    console.error("Error: El elemento mensaje no existe.");
  }
}

function mostrarNumeroOculto() {
  const numeroOcultoElement = document.getElementById("numeroOculto");
  if (numeroOcultoElement) {
    numeroOcultoElement.textContent = numeroAleatorio;
  }
}

function adivinarNumero() {
  const numeroUsuario = parseInt(
    document.getElementById("numeroUsuario").value
  );

  if (isNaN(numeroUsuario)) {
    mostrarMensaje("Ingresa un número válido.");
    return;
  }

  const numerosIntentadosElement = document.getElementById("numerosIntentados");
  const nuevoIntentoElement = document.createElement("span");
  nuevoIntentoElement.textContent = numeroUsuario;

  if (numerosIntentadosElement) {
    numerosIntentadosElement.appendChild(nuevoIntentoElement);
  } else {
    console.error("Error: El elemento numerosIntentados no existe.");
  }

  if (numeroUsuario === numeroAleatorio) {
    mostrarNumeroOculto();
    mostrarMensaje(
      `¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${
        10 - intentos
      } intentos.`
    );
    deshabilitarBotonEnviar();
  } else {
    const mensaje = numeroUsuario < numeroAleatorio ? "Más alto" : "Más bajo";
    mostrarMensaje(`${mensaje}. Te quedan ${Math.max(0, intentos)} intentos.`);
  }

  if (intentos === 0) {
    mostrarNumeroOculto();
    mostrarMensaje(
      `¡Se acabaron los intentos! El número era ${numeroAleatorio}.`
    );
    deshabilitarBotonEnviar();
  } else {
    intentos--; // Reduzco los intentos solo si no es el numero correcto
  }
}

function reiniciarJuego() {
  habilitarBotonEnviar();
  intentos = 10;
  document.getElementById("numeroUsuario").value = "";
  document.getElementById("numerosIntentados").innerHTML = "";
  document.getElementById("mensaje").textContent = "";
}

function deshabilitarBotonEnviar() {
  document.getElementById("numeroUsuario").disabled = true;
  document.querySelector('button[type="button"]').disabled = true;
}

function habilitarBotonEnviar() {
  document.getElementById("numeroUsuario").disabled = false;
  document.querySelector('button[type="button"]').disabled = false;
}
