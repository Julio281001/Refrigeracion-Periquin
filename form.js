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
  const [nombre, telefono] = inputs;
  if (!/^[a-zA-Z]+$/.test(nombre.trim())) {
    //Validar Nombre
    alert("Nombre invalido");
    return false;
  }
  if (!/^\d{10}$/.test(telefono.trim())) {
    //Validar Télefono
    alert("Telefono invalido");
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
  if (!validInputs([nombreInput.value, telefonoInput.value])) {
    alert("invalid");
    return;
  }
  alert("Valid");
});
