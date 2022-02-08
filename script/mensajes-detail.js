import { obtenerDatos } from "./obtenerDatos.js";
import { urlMensajes } from "./url.js";
const body = document.querySelector("body");

export async function detallesMensaje() {
   const seleccion = JSON.parse(localStorage.getItem("Animal"));

   const { idPublicante } = seleccion;
   const data = await obtenerDatos(urlMensajes);

   body.innerHTML = `
    <div id="message-detail">
    <button class="detail-back"><i class="fas fa-arrow-left"></i></button>
    <div id="message-det-titulo">
       <img src="${data[idPublicante].imagen}" alt="" />
       <h2>${data[idPublicante].nombre}</h2>
       <div id="message-det">
          <div id="message-det-one">
             <span>${data[idPublicante].mensaje1[0]}</span>
             <div id="mensaje-one">${data[idPublicante].mensaje1[1]}</div>
          </div>
          <div id="message-det-two">
             <span>${data[idPublicante].mensaje2[0]}</span>
             <div id="mensaje-two">${data[idPublicante].mensaje2[1]}</div>
          </div>
          <div id="message-det-three">
             <span>${data[idPublicante].mensaje3[0]}</span>
             <div id="mensaje-three">${data[idPublicante].mensaje3[1]}</div>
          </div>
          <input type="text" name="" id="" />
       </div>
    </div>
 </div>

    `;
}

body.addEventListener("click", (e) => {
   e.preventDefault();

   const buscado = e.target.classList.contains("detail-back");
   if (buscado) {
      window.location.href = "detail.html";
   }
});

document.addEventListener("DOMContentLoaded", detallesMensaje);
