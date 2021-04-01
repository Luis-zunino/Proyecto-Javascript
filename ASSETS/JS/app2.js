//DECLARO VARIABLES
let viaje = "";
let carrito = []; //mi carrito de compras
const btnVerCarrito = document.querySelector("#btnVerCarrito");
const btnVolver = document.querySelector("#btnVolver");
const btnFinalizarCompra = document.querySelector("#btnFinalizarCompra");
const grillaDeViajes = document.querySelector("#grillaDeViajes");
const viajesEnCarrito = document.querySelector("#viajesEnCarrito");
const grillaDetalleCheckOut = document.querySelector("#grillaDetalleCheckOut");
const ofertaDeViajes = document.querySelector("#ofertaDeCursos");
const checkOut = document.querySelector("#checkOut");

viaje = new Viajes(carrito);

let cargoDestinos = () => {
  //función con la cual cargamos el array JSON de cursos, en la tabla principal
  grillaDeViajes.innerHTML = "";
  for (let viaje of MIJSON) {
    let fila = `
        <ul>
      <li  class="opcionDestino">
        <img src="ASSETS/IMG/DESTINOS/unnamed(${viaje.img}).jpg">
        <div> 
          <h1>${viaje.nombre}</h1>
          <span class="contViaje">
              <p>Departamento: ${viaje.departamento}</p>
              <p>Precio por noche: ${viaje.costo}</p>
              <p>${viaje.info}</p> 
          </span>
          <button onclick="agregoViajeAlCarrito(${viaje.id})">Agregar</button>
        </div>
      </li>
    </ul>               `;
    grillaDeViajes.innerHTML += fila;
  }
  //Si existe un localStorage con el carrito almacenado, lo recupero por aquí
  recuperoCarrito();
  //localStorage no me sirve para nada, dentro de la función cargoDestinos(), pero como esta última función
  //la llamo cuando se carga el documento HTML, allí es donde la lógica de recuperoCarrito() se aplica
  viaje = new Viajes(carrito);
  //También instancio viaje dentro de la función cargoCurso(), solo para que se instancie al momento de cargar,
  //o recargar el documento HTML.
};

//Función que se adjunta a cada botón CARRITO, contenido en la tabla de cursos
//Al pulsarla, busca el viaje que recibe como parámetro, lo agrega en el array carrito[],
//y llama a la función actualizarCarrito(), para que cambie en pantalla, el número de cursos comprados.
let agregoViajeAlCarrito = (id) => {
  let r = MIJSON.find((c) => c.id == id);
  carrito.push(r);
  //   console.log("Se agregó al carrito");
  //   console.table(r);
  actualizoCarrito();
  guardoCarrito(); //Me guarda en localStorage, el carrito parcial de la compra realizada
};

let actualizoCarrito = () => {
  //Me actualiza la leyenda de cantidad de cursos en el carrito
  let leyendaCarrito = `Viajes en el carrito: ${carrito.length}`;
  viajesEnCarrito.innerHTML = leyendaCarrito;
};

const armoCheckOut = () => {
  //Arma la grilla de CheckOut, para luego mostrarla en pantalla
  let fila = "";
  grillaDetalleCheckOut.innerHTML = "";
  if (carrito.length > 0) {
    //Este if() me mostrará la grilla, solo si hay cursos en el carrito
    for (let viaje of carrito) {
      //Itero sobre todos los cursos existentes en el carrito
      fila = `<div>
                    <div>${viaje.nombre}</div>
                    <div >$ ${viaje.costo}</div>
                </div>`;
      grillaDetalleCheckOut.innerHTML += fila;
    }
    //Creo una nueva fila con el importe total del carrito
    fila = `<div> 
                    <div>Total de la compra</div>
                    <td >$ ${viaje.calculoTotalCarrito()}</div>
            </div>`;
    grillaDetalleCheckOut.innerHTML += fila;
    //Creo una nueva fila con el descuento conseguido sobre el total de cursos comprados
    fila = `<tr class="orange lighten-4">
                    <div>Descuento conseguido</div>
                    <div>$ ${
                      viaje.calculoTotalCarrito() -
                      viaje.aplicoDescuentoAlTotalCarrito()
                    }</div>
                </div>`;
    grillaDetalleCheckOut.innerHTML += fila;
    //Creo una nueva fila con el importe que pagaré, el cual tiene el descuento conseguido, ya aplicado
    fila = `<div>
                    <div>Total a Pagar</div>
                    <div>$ ${viaje.aplicoDescuentoAlTotalCarrito()}</div>
            </div>`;
    grillaDetalleCheckOut.innerHTML += fila;
    //Terminé de generar la grilla checkOut, entonces la muestro
    alternarListadoViajesCheckout();
    //Al mostrar la grilla checkout, oculto la grilla de productos
  } else {
    alert("No hay elementos para mostrar."); //Si el carrito no tiene elementos, no muestro nada, y le aviso al usuario
  }
};

const alternarListadoViajesCheckout = () => {
  //Alterno la visualización del div cursos y el div checkout
  jQuery(document).on('click', '#btnVerCarrito', function() {
    jQuery('#ofertaDeCursos, #checkOut').toggle(500);
  });
  
  // ofertaDeViajes.classList.toggle("ocultar");
  // checkOut.classList.toggle("ocultar");
};

const finalizarCompra = () => {
  //Corro un proceso que simula la finalización de la compra
  alert("Muchas gracias por su compra!"); //Agradezco la compra realizada
  setTimeout(() => {
    //Espero dos y medio segundos, luego...
    carrito = []; //vaciamos el carrito
    localStorage.clear(); //limpiamos localStorage
    actualizoCarrito(); //actualizo carrito en pantalla
    alternarListadoViajesCheckout(); //restauramos la lista de cursos
  }, 2500);
};

//Cuando se carga o recarga el documento HTML, cargo los cursos e invoco el resto de las acciones
//contenidas anteriormente dentro de la función
document.addEventListener("DOMContentLoaded", cargoDestinos);

btnVerCarrito.addEventListener("click", armoCheckOut); //Escucho el clic en ver carrito y llamo la función armoCheckout
btnVolver.addEventListener("click", alternarListadoViajesCheckout); //Oculto la grilla checkout y muestro los cursos nuevamente
btnFinalizarCompra.addEventListener("click", finalizarCompra); //Llamo a la función que finaliza la compra

const guardoCarrito = () => {
  //Guardo el carrito en localStorage, solo si tiene viajes
  if (carrito.length > 0) {
    localStorage.carrito = JSON.stringify(carrito);
  }
};

const recuperoCarrito = () => {
  //Recupero el carrito de localStorage asignándole los viajes al array carrito[]
  if (localStorage.carrito != undefined) {
    carrito = JSON.parse(localStorage.carrito);
    actualizoCarrito(); //actualizo la leyenda de total de productos en carrito
  }
};
