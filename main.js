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

const toDoCreator = function () {
  const toDo = { id: crypto.randomUUID(), name: "", isDone: false };

  const getToDo = () => toDo;
  const editToDoName = (newName) => (toDo.name = newName);
  const editIsDone = (newStatus) => (toDo.isDone = newStatus);

  return { getToDo, editToDoName, editIsDone };
};

const toDoManagerCreator = function () {
  const toDos = [];

  const getToDos = () => toDos;
  const addToDo = (toDo) => toDos.push(toDo);
  return { addToDo, getToDos };
};

const toDoManager = toDoManagerCreator();
// console.log(toDoManager);
// console.log(toDoManager.getToDos());
// toDoManager.addToDo({ name: "Sara" });
// console.log(toDoManager.getToDos());

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!inputItem.value) return;
  // newToDo = { id: crypto.randomUUID(), name: inputName, isDone: false };
  const newToDo = toDoCreator();
  toDoManager.addToDo(newToDo);

  toDoManager.getToDos().forEach((toDo) => console.log(toDo.getToDo().id));

  const newInput = document.createElement("li");
  newInput.classList.add("input-item");

  newInput.setAttribute("data-id", newToDo.getToDo().id);

  newInput.innerHTML = `${inputName} <button class="btn-done">DONE</button>
  <btn id="close" class="close"
    ><ion-icon id="close" class="x-icon" name="close-outline"></ion-icon
  ></btn>`;

  // container.insertAdjacentElement("afterbegin", newInput);
  toDoList.appendChild(newInput);

  inputItem.value = "";
});

toDoList.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-done")) {
    // console.log(e.target.closest(".input-item").dataset.id);

    // let targetEl = toDo.find(
    //   (x) => x.id === e.target.closest(".input-item").dataset.id
    // );
    // targetEl.isDone = true;
    const parentToDoId = e.target.closest(".input-item").dataset.id;
    const currentToDo = toDoManager
      .getToDos()
      .find((toDo) => toDo.getToDo().id === parentToDoId);
    console.log("current to do", currentToDo.getToDo());
    console.log("parent to do", parentToDoId);

    currentToDo.editIsDone(true);
    console.log("current to do", currentToDo.getToDo());

    e.target.closest(".input-item").style.backgroundColor = "green";

    // e.target.closest(".input-item").querySelector(".btn-done").remove();
  } else if (e.target.id === "close") {
    let indexEl = toDo.findIndex(
      (x) => x.id === e.target.closest(".input-item").dataset.id
    );
    toDo.splice(indexEl, 1);
    console.log(toDo);

    let deleteEL = e.target.closest(".input-item");
    deleteEL.remove();
  }
});

// napravi tri countera svaki counter neka bude iniciran sa 0
// na ekranu neka budu dva btn izmedju kojih ce biti vrednost countera
// pritiskom na levo povecava se , a na desno
