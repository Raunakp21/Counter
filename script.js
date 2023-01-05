"use strict";

/*
use same styling for the text
as before 
-*/

const countNumber = document.querySelector("#number");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

minus.addEventListener("click", function () {
  countNumber.textContent = countNumber.textContent - 1;
});

plus.addEventListener("click", function () {
  countNumber.textContent = Number(countNumber.textContent) + 1;
});
