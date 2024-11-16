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

  const newInput = document.createElement("div");
  newInput.classList.add("input-item");
  newInput.innerHTML = `${inputName} <button class="btn-done">DONE</button>`;
  container.append(newInput);
  inputItem.value = "";
});

const btnDoneEl = document.querySelector(".btn-done");

btnDoneEl.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "green";
  // newInput.style.backgroundColor = "green";
});
