import { obtenerDatos } from "./obtenerDatos.js";
import { urlGatos, urlPerros } from "./url.js";

const contenedor = document.getElementById("main-cards");

export const favPerros = async () => {
   const data = await obtenerDatos(urlPerros);

   let resultado = data.filter((u) => u.favorito === "true");

   resultado.forEach((element) => {
      const { id, imagen, nombre, raza } = element;

      contenedor.innerHTML += `
             <div
                 id="${id}"
                 class="card"
                 style="
                 background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%),
                     url(${imagen});
                 background-size: cover;
                 background-position: 80%;
                 "
             >
                 <div id="card-texto">
                 <span style="font-weight: bolder">${nombre}</span>
                 <span>${raza}</span>
                 </div>
             </div>
         `;
   });

   mostrar(urlPerros);
};

export const favGatos = async () => {
   const data = await obtenerDatos(urlGatos);

   let resultado = data.filter((u) => u.favorito === "true");

   resultado.forEach((element) => {
      const { id, imagen, nombre, raza } = element;

      contenedor.innerHTML += `
              <div
                  id="${id}"
                  class="card"
                  style="
                  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%),
                      url(${imagen});
                  background-size: cover;
                  background-position: 80%;
                  "
              >
                  <div id="card-texto">
                  <span style="font-weight: bolder">${nombre}</span>
                  <span>${raza}</span>
                  </div>
              </div>
          `;
   });

   mostrar(urlGatos);
};

export const mostrarFavoritos = () => {
   favPerros();
   favGatos();
};

document.addEventListener("DOMContentLoaded", mostrarFavoritos);

function mostrar(url) {
   contenedor.addEventListener("click", async (e) => {
      e.preventDefault();

      const buscado = e.target.classList.contains("card");
      const idBuscado = e.target.id;
      localStorage.clear();

      if (buscado) {
         const res = await fetch(url);
         const data = await res.json();

         let resultado = data.find((element) => element.id === idBuscado);

         localStorage.setItem("Animal", JSON.stringify(resultado));
         window.location.href = "detail.html";
      }
   });
}
