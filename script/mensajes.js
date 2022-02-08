import { obtenerDatos } from "./obtenerDatos.js";
import { urlMensajes } from "./url.js";

document.addEventListener("DOMContentLoaded", async () => {
   const data = await obtenerDatos(urlMensajes);
   console.log(data[0].imagen);
});
