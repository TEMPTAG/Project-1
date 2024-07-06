const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const body = document.body;

menuButton.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
  body.classList.toggle("overlay-active");
});

overlay.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
  body.classList.remove("overlay-active");
});
