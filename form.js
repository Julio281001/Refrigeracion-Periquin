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

class Message {
  constructor(body) {
    this.body = body;
  }

  sendEmail() {
    Email.send({
      SecureToken: "6bb7878d-a8b4-4fc5-8578-389bcbc1c405",
      To: "julio.estrada9216@alumnos.udg.mx",
      From: "julio.estrada9216@alumnos.udg.mx",
      Subject: "Contacto de cliente",
      Body: this.body,
    }).then((message) => console.log(message));
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validInputs(inputs)) {
    return;
  }
  nombreInput.classList.remove("invalid-input");
  telefonoInput.classList.remove("invalid-input");
  const message = new Message(
    `${nombreInput.value}${
      apellidosInput.value ? " " + apellidosInput.value : ""
    } quiere que lo contactes.\nAquí está su información:\nDirección: ${
      direccionInput.value
    }\nEmail: ${emailInput.value}\nTélefono: ${
      telefonoInput.value
    }\nInformación adicional: ${infoAdicionalInput.value}`
  );
  resetInputValues(inputs);
  message.sendEmail();
  Swal.fire({
    title: "¡Gracias por contactarnos!",
    text: "Uno de nuestros tecnicos se pondrá en contacto con usted lo mas pronto posible.",
    icon: "success", // Puedes usar 'success', 'error', 'info', 'warning', etc.
    confirmButtonText: "¡Entendido!",
  });
});
