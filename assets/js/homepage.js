document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const themeButton = document.getElementById("themeButton");
  const logo = document.getElementById("logo");
  const body = document.body;

  // Change Theme
  function setTheme(theme) {
    localStorage.setItem("theme", theme);
    body.classList.remove("light", "dark");
    body.classList.add(theme);
    logo.src =
      theme === "dark"
        ? "./assets/logo/YesChefLogoWhite.svg"
        : "./assets/logo/YesChefLogoBlack.svg";
    console.log("Theme set to", theme);
  }

  // Load theme from local storage
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  // Theme button functionality
  themeButton.addEventListener("click", () => {
    const currentTheme = body.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  });

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
