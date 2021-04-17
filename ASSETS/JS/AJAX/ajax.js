let contenidoGeneral = [];

$(document).ready(() => {
  $("#grillaDeViajes").show("slow", () => {
    $.getJSON("ASSETS/JS/AJAX/viajes.json", (response, status) => {
      if (status === "success") {
        let contenido = response;
        contenidoGeneral = contenido;
        for (const destino of contenido) {
          $("#contenido").append(cargoDestino(destino));
        }
      } else {
        $("#contenido").html(contenidoError);
      }
      $("#contenido").fadeIn("slow");
    });
  });
});

const contenidoError = `<div>
                            <h4 >No se pudo recuperar el contenido</h4>
                            <h5>Intente nuevamente en unos segundos...</h5>
                        </div>`;

// const verDetalle = (id) => {
//   const destino = contenidoGeneral.find((c) => c.id == id);
//   localStorage.detalleFilm = JSON.stringify(destino);
//   location.target = "_self";
//   location.href = "detalle.html";
// };

const cargoDestino = (destino) => {
  let streaming = JSON.stringify(destino);
  if (destino != undefined) {
    const cargoViajes = `
    
  <li class="opcionDestino">
    <img src="ASSETS/IMG/DESTINOS/unnamed(${destino.img}).jpg">
    <div>
      <h1>${destino.nombre}</h1>
      <span class="contViaje">
          <p>Departamento: ${destino.departamento}</p>
          <p>Precio por noche: ${destino.costo}</p>
          <p>${destino.info}</p>
      </span>
      </div>
      </li>
                    `;
      return cargoViajes;
      //   <button onclick="agregoViajeAlCarrito(${destino.id})">Agregar</button>
  }
};
