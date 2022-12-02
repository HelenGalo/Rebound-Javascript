// Crear funcion para cambiar clase
function cambiarClase() {
    const titulo = document.getElementById("titulo");
  
    const parrafo1 = document.querySelector("p");
  
    parrafo1.classList.add("blue");
    titulo.classList.add("red");
  }
  
  // Llamar funcion para cambiar la clase en un evento dentro de un boton
  const button = document.getElementById("button");
  
  button.addEventListener('click', cambiarClase);
  
  // Obtener informacion de la forma
  const nombre = document.getElementById("name");
  const correo = document.getElementById("email");
  
  // Llamamos a la forma 
  const form = document.getElementById("form");
  
  // Constante de contenedor del contenido inyectado con JS
  const contenedor = document.getElementById("contenedor");
  
  // Crear event listener para la forma
  form.addEventListener('submit', (e) => {
    // Evitar la accion por defecto
    e.preventDefault();
  
    // Crear un objeto que tenga los valores de la forma
    const formulario = {
      name: nombre.value,
      email: correo.value,
    }
  
    const { name, email } = formulario;
  
    const cuadroHtmlConInfo = crearCuadroDeForma(name, email);
  
    contenedor.insertAdjacentHTML('beforeend', cuadroHtmlConInfo);
  
    // Dar la orden de submit
    // event.submit();
  
  });
  
  // Crear una funcion que nos retorne contenido HTML dinamicamente
  function crearCuadroDeForma(name, email) {
    const cuadroHtml = `
    <div class="contenido">
      <h2 class="contenido__titulo">${name}</h2>
      <p class="contenido__p">${email}</p>
    </div>
    `
  
    return cuadroHtml;
  }
  
  // const cuadroHtmlConInfo = crearCuadroDeForma("Ulises", "email@test.com");
  
  // Llamar al button submit
  const submit = document.getElementById("submit");
  
  submit.addEventListener("click", (e) => {
    console.log(e.target)
  });
  
  // Validar nombre
  function validarNombre(nombre) {
    if (nombre != " ") {
      return true;
    }
  }