import { urlUser } from "./url.js";

const inputNombre = document.getElementById("form-nombre");
const inputApellido = document.getElementById("form-apellido");
const inputCorreo = document.getElementById("form-email");
const editar = document.getElementById("editar");

export const getData = async (e) => {
   e.preventDefault();
   const res = await fetch(urlUser);
   const data = await res.json();

   data.forEach((element) => {
      console.log(element);

      const { nombre, apellido, correo } = element;

      inputNombre.value = nombre;
      inputNombre.setAttribute("readonly", "true");
      inputApellido.value = apellido;
      inputApellido.setAttribute("readonly", "true");
      inputCorreo.value = correo;
      inputCorreo.setAttribute("readonly", "true");
   });
};

document.addEventListener("DOMContentLoaded", getData);

const capturarDatos = () => {
   const nombre = document.getElementById("form-nombre").value;
   const apellido = document.getElementById("form-apellido").value;
   const correo = document.getElementById("form-email").value;

   const user = {
      nombre,
      apellido,
      correo,
   };

   return user;
};

editar.addEventListener("click", (e) => {
   e.preventDefault();
   console.log("Hola");
   inputNombre.setAttribute("readonly", "false");
   inputApellido.setAttribute("readonly", "false");
   inputCorreo.setAttribute("readonly", "false");
});
