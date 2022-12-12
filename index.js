// Crear funcion para cambiar clase
function cambiarClase() {
  const titulo = document.getElementById("titulo");

  const parrafo1 = document.querySelector("p");

  parrafo1.classList.add("blue");
  titulo.classList.add("red");
}

// Llamar funcion para cambiar la clase en un evento dentro de un boton
// const button = document.getElementById("button");

// button.addEventListener('click', cambiarClase);

// Obtener informacion de la forma
const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const trabajo = document.getElementById("trabajo");
const telefono = document.getElementById("tel");
const descripcion = document.getElementById("about");

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
    work: trabajo.value,
    tel: telefono.value,
    descrip: descripcion.value,
  }

  const { name, email, work, tel, descrip } = formulario;
  console.log(formulario);

  const cuadroHtmlConInfo = crearCuadroDeForma(name, email, work, tel, descrip);

  contenedor.insertAdjacentHTML('beforeend', cuadroHtmlConInfo);

  // Dar la orden de submit
  // event.submit();

});

// Crear una funcion que nos retorne contenido HTML dinamicamente
function crearCuadroDeForma(name, email, work, tel, descrip) {
  const cuadroHtml = `
     <div class="card-group">
    <div class="card  col-4 " id="card-caja">
      <div class="card-img-top">
        <img class="card-img-top" src="/img/users.png" alt="Card image cap">
        <div class="card-body">

          <h5 class="card-title text-center text-light">${name}</h5>
          <p class="card-text text-center text-light">${work}</p>

        </div>

      </div>


    </div>
    <div class="card p-3 card-caja">
      <h5 class="card-header">Informacion</h5>
      <div class="form-row">
        <div class="form-group col-sm-6">
          <label for="email">Email</label>
          <p class="card-text text-muted">${email}</p>
        </div>
        <div class="form-group col-sm-6">
        <label for="tel">Telefono</label>
        <p class="card-text text-muted ">${tel}</p>

      </div>

      </div>
      <div class="form-group">
        <label for="about">Sobre Mi</label>
        <p class="card-text text-muted">${descrip}</p>
      </div>




    </div>

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