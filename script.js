'use strict';

var links = document.querySelectorAll(".tablink");
var contents = document.querySelectorAll(".tabcontent");


var removeActiveClass = () => {
   links.forEach((t, i) => {
     t.classList.remove("active");
   });

   contents.forEach((c) => {
     c.classList.remove("active");
   });
};

links.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");
  });
});
