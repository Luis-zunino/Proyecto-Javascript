const nombreUsuario = prompt("Por favor ingresar su nombre:");
document.getElementById("nombreDeUsuario").innerHTML = `${nombreUsuario}`;

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

for (i = 0; i < depas.length; i++) {
  depa.innerHTML += `<option id="${i}">${depas[i]}</option>`;
}
//Tipos de lugares
let tipo = ["--Elige una opción--", "Espacios Verdes", "Playas", "Ciudades"];
let tipos = document.getElementById("tipos");

for (i = 0; i < tipo.length; i++) {
  tipos.innerHTML += `<option id="${i}">${tipo[i]}</option>`;
}

//Calcula el precio segun la cantidad de dias

// const lugar = prompt(
//   `¡${nombreUsuario} bienvenido  al auomatizador de viajes! Elige el tipo de destino: Playa/Campo/Ciudad`
// ).toUpperCase();
// function contador() {
//   switch (lugar) {
//     case "PLAYA":
//       tiempo = prompt(
//         `Contamos con muchos lugares con acceso a playas ${nombreUsuario} ¿Cuantos dias desea hospedarte?`
//       );
//       break;
//     case "CAMPO":
//       tiempo = prompt(
//         `Contamos con muchos espacios verdes ${nombreUsuario} ¿Cuantos dias desea hospedarte?`
//       );
//       break;
//     case "CIUDAD":
//       tiempo = prompt(
//         `Contamos con grandes ciudades ${nombreUsuario} ¿Cuantos dias desea hospedarte?`
//       );
//       break;
//     default:
//       console.log(`${nombreUsuario} no has elegido un destino correcto`);
//       break;
//   }
//   let costo = tiempo * 500,
//     descuento = costo * 0.1,
//     descuento2 = costo * 0.2,
//     total = costo - descuento,
//     total2 = costo - descuento2;
//   if (tiempo > 0 && tiempo < 5) {
//     alert(
//       `Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días y su costo es de $${costo}`
//     );
//   } else if (tiempo > 5 && tiempo <= 7) {
//     alert(
//       `Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días y su costo es de $${total}`
//     );
//   } else {
//     alert(
//       `Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días y su costo es de $${total2}`
//     );
//   }
// }

// contador();
