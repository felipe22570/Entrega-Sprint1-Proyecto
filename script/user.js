import { urlUser } from "./url.js";

const form = document.getElementById("boton");
const inputId = document.getElementById("form-id");
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

      const { id, nombre, apellido, correo } = element;

      inputId.value = id;
      inputNombre.value = nombre;
      inputApellido.value = apellido;
      inputCorreo.value = correo;
   });
};

document.addEventListener("DOMContentLoaded", getData);

const capturarDatos = () => {
   const id = document.getElementById("form-id").value;
   const nombre = document.getElementById("form-nombre").value;
   const apellido = document.getElementById("form-apellido").value;
   const correo = document.getElementById("form-email").value;

   const user = {
      id,
      nombre,
      apellido,
      correo,
   };

   return user;
};

form.addEventListener("click", async (e) => {
   e.preventDefault();
   const data = capturarDatos();

   const { id } = data;

   await fetch(urlUser + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
         "Content-Type": "application/json; charset=utf-8",
      },
   });
});

editar.addEventListener("click", (e) => {
   e.preventDefault();
   inputNombre.removeAttribute("readonly");
   inputApellido.removeAttribute("readonly");
   inputCorreo.removeAttribute("readonly");
});
