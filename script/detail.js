import { obtenerDatos } from "./obtenerDatos.js";
import { urlGatos, urlPerros } from "./url.js";

const body = document.querySelector("body");

export const detalles = (e) => {
   e.preventDefault();

   const seleccion = JSON.parse(localStorage.getItem("Animal"));

   const {
      id,
      imagen,
      nombre,
      raza,
      imgSexo,
      edad,
      direccion,
      personalidad1,
      personalidad2,
      personalidad3,
      historia,
      publicante,
      imgPublicante,
   } = seleccion;

   body.innerHTML = `
   <main id="detail">
      <button class="detail-back"><i class="fas fa-arrow-left"></i></button>
    <img src="${imagen}" alt="" id="img-principal" />
    <div id="detalles">
       <div id="detalles-titulo">
          <h2 style="font-weight: bolder">${nombre}</h2>
          <img src="${imgSexo}" alt="" />
          <button id="${id}" class="btnFav"><i id="${id}" class="fas fa-heart btnFav"></i></button>
       </div>
       <div id="detalles-info">
          <div class="info">
             <img src="./images/raza.png" alt="" />
             <span>${raza}</span>
          </div>
          <div class="info">
             <img src="./images/edad.png" alt="" />
             <span>${edad}</span>
          </div>
       </div>
       <br />
       <div id="detalles-ubicacion">
          <i class="fas fa-map-marker-alt"></i>
          <span>${direccion}</span>
       </div>
       <h3 id="titulo-personalidad">Personalidad</h3>
       <div id="detalles-personalidad">
       <div class="personalidad">
          <img src="${personalidad1[0]}" alt="" />
          <span>${personalidad1[1]}</span>
       </div>
       <div class="personalidad">
          <img src="${personalidad2[0]}" alt="" />
          <span>${personalidad2[1]}</span>
       </div>
       <div class="personalidad">
          <img src="${personalidad3[0]}" alt="" />
          <span>${personalidad3[1]}</span>
       </div>
    </div>
       
       <div id="detalles-historia">
          <h4>Historia de ${nombre}</h4>
          <span>${historia}</span>
       </div>
       <br />
       <div id="detalles-contacto">
          <img src="${imgPublicante}" alt="" />
          <div id="detalles-contacto-text">
             <span style="font-size: 13px"> Publicado por</span>
             <span style="font-weight: bolder">${publicante}</span>
          </div>

          <button class="contactar">Contactar</button>
       </div>
       </div>
       </main>
    `;
};

document.addEventListener("DOMContentLoaded", detalles);

body.addEventListener("click", (e) => {
   const btnBack = e.target.classList.contains("detail-back");

   if (btnBack) {
      window.location.href = "main.html";
   }
});

body.addEventListener("click", (e) => {
   const contactar = e.target.classList.contains("contactar");

   if (contactar) {
      window.location.href = "message-detail.html";
   }
});

body.addEventListener("click", async (e) => {
   e.preventDefault();
   const btnDetalle = e.target.classList.contains("btnFav");
   const btnFav = document.querySelector(".fa-heart");
   const seleccion = JSON.parse(localStorage.getItem("Animal"));
   const idFav = e.target.id;

   if (btnDetalle) {
      if (idFav > 6) {
         const data = await obtenerDatos(urlGatos);

         let resultado = data.find((element) => element.id === idFav);

         if (resultado.favorito === "false") {
            resultado.favorito = "true";
            seleccion.favorito = "true";
            btnFav.style.color = "red";

            await fetch(urlGatos + resultado.id, {
               method: "PUT",
               body: JSON.stringify(resultado),
               headers: {
                  "Content-Type": "application/json; charset=utf-8",
               },
            });
         } else if (resultado.favorito === "true") {
            resultado.favorito = "false";
            seleccion.favorito = "false";
            btnFav.style.color = "red";
            await fetch(urlGatos + resultado.id, {
               method: "PUT",
               body: JSON.stringify(resultado),
               headers: {
                  "Content-Type": "application/json; charset=utf-8",
               },
            });
         }
      } else if (idFav < 7) {
         const data = await obtenerDatos(urlPerros);

         let resultado = data.find((element) => element.id === idFav);

         if (resultado.favorito === "false") {
            resultado.favorito = "true";
            seleccion.favorito = "true";
            btnFav.style.color = "red";
            await fetch(urlPerros + resultado.id, {
               method: "PUT",
               body: JSON.stringify(resultado),
               headers: {
                  "Content-Type": "application/json; charset=utf-8",
               },
            });
         } else if (resultado.favorito === "true") {
            resultado.favorito = "false";
            seleccion.favorito = "false";
            btnFav.style.color = "red";
            await fetch(urlPerros + resultado.id, {
               method: "PUT",
               body: JSON.stringify(resultado),
               headers: {
                  "Content-Type": "application/json; charset=utf-8",
               },
            });
         }
      }
   }
});
