"use strict";
import "./style.css";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const inputItem = document.querySelector(".input-name");
const addBtn = document.querySelector(".add-item");
let inputName;

const toDoList = document.querySelector(".todo-list");

inputItem.addEventListener("input", function (e) {
  inputName = e.target.value;
  // console.log(inputName);
});

const toDo = [];
let newToDo;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!inputItem.value) return;
  newToDo = { id: crypto.randomUUID(), name: inputName, isDone: false };
  toDo.push(newToDo);

  const newInput = document.createElement("li");
  newInput.classList.add("input-item");

  newInput.setAttribute("data-id", newToDo.id);

  newInput.innerHTML = `${inputName} <button class="btn-done">DONE</button> <ion-icon class="close" name="close-outline"></ion-icon>`;

  // container.insertAdjacentElement("afterbegin", newInput);
  toDoList.appendChild(newInput);

  inputItem.value = "";

  const btnDoneEl = document.querySelectorAll(".btn-done");

  // btnDoneEl.forEach((btn) => {
  //   btn.addEventListener("click", function (e) {
  //     if (e.target.parentElement.dataset.id === newToDo.id) {
  //       newToDo.isDone = true;
  //       console.log(newToDo);
  //       console.log(toDo);
  //     }
  //     e.target.parentElement.style.backgroundColor = "green";
  //   });
  // });

  // container.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("input-item")) {
  //     console.log(e.target);
  //   }
  // });
});

toDoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-done")) {
    // console.log(e.target.closest(".input-item").dataset.id);
    console.log(toDo);
    let targetEl = toDo.find(
      (x) => x.id === e.target.closest(".input-item").dataset.id
    );
    targetEl.isDone = true;
    console.log(targetEl);
    e.target.closest(".input-item").style.backgroundColor = "green";

    e.target.closest(".input-item").querySelector(".close").remove();
  }
  // proveriti je li e.target dugme done
  // ako jeste, nadji najblizi to do (closest)
  // procitaj id sa to doa
  // update status
  //
  // dodaj da se to do moze obrisati
});
