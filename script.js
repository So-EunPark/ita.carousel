"use strict";

// console.log(document.querySelector(".box").style.width);
let width = 405;
let count = 3;

let carousel = document.querySelector(".carousel");
let list = carousel.querySelector(".box>ul");
let listElems = list.querySelectorAll("li");

let position = 0;

carousel.querySelector(".button>ul>li").onclick = function () {
  position += width * count;
  position = Math.max(position, width * (listitems.length - count));
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".button>ul").children[2].onclick = function () {
  // shift right
  position -= width * count;
  // can only shift the ribbbon for (total ribbon length - visible count) images
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};
