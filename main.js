"use strict";
import "./style.css";

const inputItem = document.querySelector(".input-name");
let inputName;

inputItem.addEventListener("input", function (e) {
  inputName = e.target.value;
  console.log(inputName);
});
