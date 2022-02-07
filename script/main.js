import { mostrarPerros, mostrarGatos } from "./menu-principal.js";
import { obtenerDatos } from "./obtenerDatos.js";
import { urlGatos, urlPerros } from "./url.js";

const contenedor = document.getElementById("main-cards");

const botonUno = document.getElementById("boton-one");
const botonDos = document.getElementById("boton-two");

function mostrar(url) {
   contenedor.addEventListener("click", async (e) => {
      e.preventDefault();

      const buscado = e.target.classList.contains("card");
      const idBuscado = e.target.id;

      if (buscado) {
         const data = await obtenerDatos(url);

         let resultado = data.find((element) => element.id === idBuscado);

         localStorage.setItem("Animal", JSON.stringify(resultado));
         window.location.href = "detail.html";
      }
   });
}

botonUno.addEventListener("click", (e) => {
   e.preventDefault();
   contenedor.innerHTML = "";
   mostrarPerros();
   botonUno.style.opacity = "1";
   botonDos.style.opacity = "0.4";

   localStorage.clear();
   mostrar(urlPerros);
});

botonDos.addEventListener("click", (e) => {
   e.preventDefault();
   contenedor.innerHTML = "";
   mostrarGatos();
   botonUno.style.opacity = "0.4";
   botonDos.style.opacity = "1";

   localStorage.clear();
   mostrar(urlGatos);
});
