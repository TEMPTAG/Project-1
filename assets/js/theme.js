const toggleTheme = document.getElementById("themeButton");

let theme = readMode() || "light";

saveMode(theme);
writeMode(theme);

toggleTheme.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  saveMode(theme);
  writeMode(theme);
});

function saveMode(theme) {
  localStorage.setItem("theme", theme);
}

function readMode() {
  return localStorage.getItem("theme");
}

function writeMode(theme) {
  document.documentElement.className = theme;
}

// const applyDark = () => {
//   const theme = localStorage.getItem("theme");
//   if (theme === "dark") {
//     document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
// };

// themeButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   document.documentElement.classList.toggle("dark");
//   if (document.documentElement.classList.contains("dark")) {
//     localStorage.setItem("theme", "dark");
//   } else {
//     localStorage.setItem("theme", "light");
//   }
// });

// applyTheme();
