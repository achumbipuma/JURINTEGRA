// 1. Base de datos simulada con los 3 usuarios y sus respectivos planes
const usuariosDB = [
  { 
    email: "basico@jurintegra.com", 
    password: "123", 
    plan: "basico", 
    nombre: "Cliente Básico" 
  },
  { 
    email: "normal@jurintegra.com", 
    password: "123", 
    plan: "normal", 
    nombre: "Cliente Normal" 
  },
  { 
    email: "premium@jurintegra.com", 
    password: "123", 
    plan: "premium", 
    nombre: "Cliente Premium" 
  }
];

// 2. Capturamos el formulario por su ID
const formulario = document.getElementById("formulario-login");

// 3. Escuchamos el evento de envío
formulario.addEventListener("submit", function(evento) {
  // Evitamos que el formulario se envíe por "get" inmediatamente
  evento.preventDefault(); 

  // Obtenemos los valores que el usuario escribió
  const emailIngresado = document.getElementById("email").value.trim();
  const passwordIngresado = document.getElementById("password").value;

  // Buscamos si existe coincidencia en nuestra base de datos simulada
  const usuarioEncontrado = usuariosDB.find(
    user => user.email === emailIngresado && user.password === passwordIngresado
  );

  if (usuarioEncontrado) {
    // Guardamos los datos del usuario en la sesión del navegador
    localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));
    
    // Si las credenciales son correctas, ahora sí lo dejamos pasar al dashboard
    window.location.href = "dashboard.html"; 
  } else {
    // Si no coincide, mostramos un aviso sin recargar la página
    alert("El correo o la contraseña son incorrectos. Por favor, verifica tus datos.");
  }
});