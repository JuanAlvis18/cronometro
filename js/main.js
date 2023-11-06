let countdownInterval;
let tiempoRestante;
const horasInput = document.getElementById("horas-input");
const minutosInput = document.getElementById("minutos-input");
const segundosInput = document.getElementById("segundos-input");
const nombreHabilidadInput = document.getElementById("habilidad-input");
const nombreModuloInput = document.getElementById("modulo-input");
const datos = document.querySelector(".datos");
const countDown = document.querySelector(".count-down");

function cronometro() {
    countDown.classList.remove("disabled");
    datos.classList.add("disabled");
  const horas = parseInt(horasInput.value) || 0;
  const minutos = parseInt(minutosInput.value) || 0;
  const segundos = parseInt(segundosInput.value) || 0;
  const totalSegundos = horas * 3600 + minutos * 60 + segundos;

  if (totalSegundos <= 0) {
    alert("Por favor, ingrese un tiempo válido.");
    return;
  }

  tiempoRestante = totalSegundos;

  nombreHabilidadInput.setAttribute("disabled", "true");
  nombreModuloInput.setAttribute("disabled", "true");
  horasInput.setAttribute("disabled", "true");
  minutosInput.setAttribute("disabled", "true");
  segundosInput.setAttribute("disabled", "true");

  document.getElementById("nombre-habilidad").textContent = nombreHabilidadInput.value;
  document.getElementById("nombre-modulo").textContent = nombreModuloInput.value;

  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdownInterval = setInterval(actualizarCuentaRegresiva, 1000);
  actualizarCuentaRegresiva();
}

function actualizarCuentaRegresiva() {
  if (tiempoRestante <= 0) {
    clearInterval(countdownInterval);
    alert("Cuenta regresiva terminada");
    resetearCronometro();
  } else {
    const horas = Math.floor(tiempoRestante / 3600);
    const minutos = Math.floor((tiempoRestante % 3600) / 60);
    const segundos = tiempoRestante % 60;

    document.getElementById("horas").textContent = formatTime(horas);
    document.getElementById("minutos").textContent = formatTime(minutos);
    document.getElementById("segundos").textContent = formatTime(segundos);

    tiempoRestante--;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time.toString();
}

function resetearCronometro() {
  clearInterval(countdownInterval);
  nombreHabilidadInput.removeAttribute("disabled");
  nombreModuloInput.removeAttribute("disabled");
  horasInput.removeAttribute("disabled");
  minutosInput.removeAttribute("disabled");
  segundosInput.removeAttribute("disabled");
  nombreHabilidadInput.value = "";
  nombreModuloInput.value = "";
  horasInput.value = "";
  minutosInput.value = "";
  segundosInput.value = "";
  document.getElementById("nombre-habilidad").textContent = "Nombre Habilidad";
  document.getElementById("nombre-modulo").textContent = "Nombre del Módulo";
  document.getElementById("horas").textContent = "00";
  document.getElementById("minutos").textContent = "00";
  document.getElementById("segundos").textContent = "00";
}

document.getElementById("startButton").addEventListener("click", cronometro);
