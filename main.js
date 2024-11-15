"use strict";
import "./style.css";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inputItem = document.querySelector(".input-name");
const addBtn = document.querySelector(".add-item");
let inputName;

inputItem.addEventListener("input", function (e) {
  inputName = e.target.value;
  console.log(inputName);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // form.style.backgroundColor = "red";
});
