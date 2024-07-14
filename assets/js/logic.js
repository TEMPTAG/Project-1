document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const body = document.body;
  const logo = document.getElementById("logo");

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

      // Add event listener for theme button inside menu
      const toggleTheme = document.getElementById("themeButton");

      function manageTheme(theme = null) {
        if (theme) {
          localStorage.setItem("theme", theme);
          document.documentElement.className = theme;
        } else {
          theme = localStorage.getItem("theme") || "light";
          document.documentElement.className = theme;
        }
        // Update the logo based on the theme
        if (theme === "dark") {
          logo.src = "./assets/logo/YesChefLogoWhite.svg";
        } else {
          logo.src = "./assets/logo/YesChefLogoBlack.svg";
        }
        return theme;
      }

      let theme = manageTheme();

      toggleTheme.addEventListener("click", () => {
        theme = theme === "light" ? "dark" : "light";
        manageTheme(theme);
      });
    });

  // Set the logo correctly on initial load
  if (localStorage.getItem("theme") === "dark") {
    logo.src = "./assets/logo/YesChefLogoWhite.svg";
  } else {
    logo.src = "./assets/logo/YesChefLogoBlack.svg";
  }
});
