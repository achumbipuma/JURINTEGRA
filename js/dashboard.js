// js/dashboard.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener los datos guardados
  const datosUsuario = JSON.parse(localStorage.getItem("usuarioActual"));

  // 2. Si no hay datos (alguien intentó entrar directo por la URL), lo regresamos al login
  if (!datosUsuario) {
    window.location.href = "login.html";
    return;
  }

  // 3. Personalizar la interfaz con los datos
  document.getElementById("mensaje-bienvenida").textContent = `Bienvenido, ${datosUsuario.nombre}`;
  document.getElementById("info-plan").textContent = `Tu plan actual es: ${datosUsuario.plan.toUpperCase()}`;

  // 4. Aplicar las limitaciones según el plan
  const moduloBlockchain = document.getElementById("modulo-blockchain");

  if (datosUsuario.plan === "basico") {
    // El básico no ve el módulo
    moduloBlockchain.style.display = "none";
  } else if (datosUsuario.plan === "normal" || datosUsuario.plan === "premium") {
    // Normal y Premium sí lo ven
    moduloBlockchain.style.display = "block";
  }
});

// Opcional: Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioActual");
  window.location.href = "login.html";
}