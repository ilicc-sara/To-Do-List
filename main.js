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
  const newToDo = { id: crypto.randomUUID(), name: inputName, isDone: false };
  toDo.push(newToDo);

  const newInput = document.createElement("div");
  newInput.classList.add("input-item");

  newInput.setAttribute("data-id", newToDo.id);

  newInput.innerHTML = `${inputName} <button class="btn-done">DONE</button>`;
  // container.append(newInput);
  // container.insertAdjacentElement("beforeend", newInput);
  container.insertAdjacentElement("afterend", newInput);
  inputItem.value = "";

  // toDo.forEach(function (item, i) {
  //   item.id = i + 1;
  // });
  // console.log(toDo);

  const btnDoneEl = document.querySelectorAll(".btn-done");

  btnDoneEl.forEach(function (btn, i) {
    btn.addEventListener("click", function (e) {
      // console.log(e.target.getAttribute(id));
      // console.log(e.target.parentElement.dataset.id);
      // console.log(newToDo.id);

      if (e.target.parentElement.dataset.id === newToDo.id) {
        newToDo.isDone = true;
        console.log(newToDo);
        console.log(toDo);
      }
      e.currentTarget.parentElement.style.backgroundColor = "green";
    });
  });
});
