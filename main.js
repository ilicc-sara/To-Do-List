"use strict";
import "./style.css";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inputItem = document.querySelector(".input-name");
const addBtn = document.querySelector(".add-item");
let inputName;

inputItem.addEventListener("input", function (e) {
  inputName = e.target.value;
  // console.log(inputName);
});

const toDo = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newInput = document.createElement("div");
  newInput.classList.add("input-item");
  newInput.innerHTML = `${inputName} <button class="btn-done">DONE</button>`;
  // container.append(newInput);
  container.insertAdjacentElement("afterend", newInput);
  inputItem.value = "";
  toDo.push({ name: inputName, isDone: false });
  console.log(toDo);

  const btnDoneEl = document.querySelectorAll(".btn-done");

  btnDoneEl.forEach(function (btn, i) {
    btn.addEventListener("click", function (e) {
      // console.log(e.target);
      e.currentTarget.parentElement.style.backgroundColor = "green";
    });
  });
});
