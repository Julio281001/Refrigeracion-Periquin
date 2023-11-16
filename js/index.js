"use strict";

//Btns
const toggleNavBtn = document.querySelector(".mobile-nav-btn");

//Header
const header = document.querySelector(".main-header");
toggleNavBtn.addEventListener("click", () => {
  header.classList.toggle("mobile-nav-open");
});
