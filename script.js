"use strict";

// console.log(document.querySelector(".box").style.width);
let width = 405;
let count = 3;

let carousel = document.querySelector(".carousel");
let list = carousel.querySelector(".box>ul");

carousel.querySelector(".button>ul").children[0].onclick = function () {
  list.style.marginLeft = 0 + "px";
};

carousel.querySelector(".button>ul").children[1].onclick = function () {
  list.style.marginLeft = -width * count + "px";
};

carousel.querySelector(".button>ul").children[2].onclick = function () {
  list.style.marginLeft = -width * count * 2 + "px";
};
