
var menuBar = document.getElementsByClassName("sandwich")[0];
var options = document.querySelector(".menu-options");
var smooth = document.querySelector(".smoothscroll");

menuBar.addEventListener("click", function(){
    options.classList.toggle("change");
}, false);

options.addEventListener("click", function(){
    this.classList.toggle("change");
}, false);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    smooth.style.display = "block";
  } else {
    smooth.style.display = "none";
  }
}