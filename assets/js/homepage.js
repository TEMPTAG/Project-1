document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const body = document.body;

  // Fetch and load menu
  fetch("menu.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("menuContainer").innerHTML = data;

      // After menu is loaded, add event listeners
      const menu = document.getElementById("menu");
      const overlay = document.getElementById("overlay");

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
    });
});
