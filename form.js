"use strict";

//Inputs
const nombreInput = document.querySelector("#form6Example1");
const apellidosInput = document.querySelector("#form6Example2");
const direccionInput = document.querySelector("#form6Example4");
const emailInput = document.querySelector("#form6Example5");
const telefonoInput = document.querySelector("#form6Example6");
const infoAdicionalInput = document.querySelector("#form6Example7");

//Btns
const enviarBtn = document.querySelector(".enviar-btn");

//Form
const form = document.querySelector("form");

//Functions
function requiredFieldsAreFilled(nombre, telefono) {
  return nombre !== "" && telefono !== "" ? true : false;
}

function validInputs(inputs) {
  const [nombre, apellidos, direccion, telefono] = inputs;
  if (!/^[a-zA-Z]+$/.test(nombre.trim())) {
    //Validar Nombre
    alert("Nombre invalido");
    return false;
  }
  if (!/^[a-zA-Z\s]*$/.test(apellidos.trim())) {
    //Validar apellidos
    alert("Apellidos Invalido");
    return false;
  }
  if (!/^[\w\s]*(?:\s*#\s*\d+)?$/.test(direccion.trim())) {
    //Validar dirección
    alert("dirección invalida");
    return false;
  }
  if (!/^\d{10}$/.test(telefono.trim())) {
    //Validar Télefono
    return false;
  }

  return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!requiredFieldsAreFilled(nombreInput.value, telefonoInput.value)) {
    alert("Asegurate de llenar los campos requeridos");
    return;
  }
  if (
    !validInputs([
      nombreInput.value,
      apellidosInput.value,
      direccionInput.value,
      telefonoInput.value,
    ])
  ) {
    alert("invalid");
    return;
  }
  alert("Valid");
});
