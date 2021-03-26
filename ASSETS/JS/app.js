//Escucho cuando se hace click en el boton enviar y lo notifico con guardarnombre
document.getElementById("nombreboton").addEventListener("click", guardarnombre);

function guardarnombre() {
  //Guardo la informacion del imput en una variable
  var nombreUsuario = textonombre.value;
  //Creo un elemento H1
  var mostrar = document.createElement("h1");
  //Creo el mensaje que quiero mostrar
  var mostrartexto = document.createTextNode(
    `Bienvenido ${nombreUsuario} elige tu destino y nosotros por ti el camino!`
  );
  //Se lo adjudico como hijo al h1
  mostrar.appendChild(mostrartexto);

  //y vuelvo a adjudicar lo anterior como hijo al h1 que tengo como titulo
  let mensajeBienvenida = document
    .getElementById("formulario")
    .appendChild(mostrar);

  localStorage.setItem("User", nombreUsuario);
  localStorage.setItem("Bienvenida", mensajeBienvenida);
}

//Listar Departamentos
let depas = [
  "--Departamento--",
  "Artigas",
  "Canelones",
  "Cerrolargo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandu",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembo",
  "Treinta y Tres",
];
let depa = document.getElementById("depa");

let depasLength = depas.length; //Me calcula los elementos del array 
//asi en cada interaccion no me los tiene que caluclar y queda optimizado

for (i = 0; i < depasLength; i++) {
  depa.innerHTML += `<option id="${i}">${depas[i]}</option>`;
}

//Tipos de lugares
let tipo = [
  "--Elige una opción--",
  "Espacios Verdes",
  "Playas",
  "Aguas Termales",
  "Ciudades",
];
let tipos = document.getElementById("tipos");

let tipolength = tipo.length;
for (i = 0; i < tipolength; i++) {
  tipos.innerHTML += `<option id="${i}">${tipo[i]}</option>`;
}

