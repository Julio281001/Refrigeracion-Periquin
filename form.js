"use strict";

//Inputs
const nombreInput = document.querySelector("#form6Example1");
const apellidosInput = document.querySelector("#form6Example2");
const direccionInput = document.querySelector("#form6Example4");
const emailInput = document.querySelector("#form6Example5");
const telefonoInput = document.querySelector("#form6Example6");
const infoAdicionalInput = document.querySelector("#form6Example7");
const inputs = [
  nombreInput,
  apellidosInput,
  direccionInput,
  emailInput,
  telefonoInput,
  infoAdicionalInput,
];

//Btns
const enviarBtn = document.querySelector(".enviar-btn");

//Form
const form = document.querySelector("form");

//Functions
function resetInputValues(inputs) {
  inputs.forEach((input) => (input.value = ""));
}

function validInputs(inputs) {
  const [nombre, , , , telefono] = inputs;
  let validNombre = true;
  let validTelefono = true;
  if (!/^[a-zA-Z]+$/.test(nombre.value.trim())) {
    nombre.classList.add("invalid-input");
    resetInputValues([nombre]);
    validNombre = false;
  }
  if (!/^\d{10}$/.test(telefono.value.trim())) {
    telefono.classList.add("invalid-input");
    resetInputValues([telefono]);
    validTelefono = false;
  }
  return validNombre && validTelefono ? true : false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validInputs(inputs)) {
    return;
  }
  nombreInput.classList.remove("invalid-input");
  telefonoInput.classList.remove("invalid-input");
  resetInputValues(inputs);
});
