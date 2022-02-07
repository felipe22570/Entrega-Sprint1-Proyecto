import { obtenerDatos } from "./obtenerDatos.js";
import { urlPerros, urlGatos } from "./url.js";

const contenedor = document.getElementById("main-cards");

function pintar(data) {
   data.forEach((element) => {
      const { id, imagen, nombre, raza } = element;

      contenedor.innerHTML += `
        <div
        id="${id}"
        class="card"
        style="
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%),
            url(${imagen});
        background-size: cover;
        background-position: 60%;
        "
    >
        <div id="card-texto">
        <span style="font-weight: bolder">${nombre}</span>
        <span>${raza}</span>
        </div>
    </div>
          `;
   });
}

export const mostrarPerros = async () => {
   const data = await obtenerDatos(urlPerros);

   pintar(data);
};

export const mostrarGatos = async () => {
   const data = await obtenerDatos(urlGatos);

   pintar(data);
};
