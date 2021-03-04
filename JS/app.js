const nombreUsuario = prompt("Por favor ingresar su nombre:");
const lugar = prompt(
  `¡Bienvenido ${nombreUsuario} al auomatizador de viajes! Elige el tipo de destino: Playa/Campo/Ciudad`
).toUpperCase();
const departamentos = [
  "Artigas",
  "Canelones",
  "Cerro Largo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandú",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembó",
  "Treinta y Tres",
];

function contador() {
  switch (lugar) {
    case "PLAYA":
      tiempo = prompt(
        `Contamos con muchos lugares con acceso a playas ${nombreUsuario} ¿Cuantos dias desea hospedarte?`
      );
      break;
    case "CAMPO":
      tiempo = prompt(
        `Contamos con muchos espacios verdes ${nombreUsuario} ¿Cuantos dias desea hospedarte?`
      );
      break;
    case "CIUDAD":
      tiempo = prompt(
        `Contamos con grandes ciudades ${nombreUsuario} ¿Cuantos dias desea hospedarte?`
      );
      break;
    default:
      console.log(`${nombreUsuario} no has elegido un destino correcto`);
      break;
  }

  if (tiempo > 0 && tiempo < 5) {
    alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);
  } else if (tiempo > 5 && tiempo <= 7) {
    alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);
  } else {
    alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);
  }
}
contador();
