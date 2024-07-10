// Read Local Storage
function readLocalStorage() {
  return JSON.parse(localStorage.getItem("ingredients") || "[]");
}

// Store to local storage
function storeToLocalStorage(ingredient) {
  const ingredients = readLocalStorage();
  ingredients.push(ingredient);
  localStorage.setItem("ingredients", JSON.stringify(ingredients));
}

// Clear Local Storage
function clearLocalStorage() {
  localStorage.removeItem("ingredients");
}

// Generate shopping list
function addIngredients(event) {
  event.preventDefault();

  clearLocalStorage();

  const checkboxes = document.querySelectorAll(".ingredient-checkbox");
  let hasChecked = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      hasChecked = true;
      const ingredient = checkbox.parentElement.textContent.trim();
      storeToLocalStorage(ingredient);
    }
  });

  if (!hasChecked) {
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.textContent =
      "Please check items to add to your shopping list";
    return;
  }

  showShoppingListModal();
}

// Shopping List Pop-Up Modal
function showShoppingListModal() {
  const shoppingListModal = document.querySelector("#shoppingListModal");
  const shoppingList = document.querySelector("#shoppingList");
  shoppingList.innerHTML = "";

  const ingredients = readLocalStorage();
  ingredients.forEach((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    shoppingList.appendChild(listItem);
  });

  shoppingListModal.classList.remove("hidden");
}

// Redirect to cooking page when done shopping
function closeShoppingListModal() {
  const shoppingListModal = document.querySelector("#shoppingListModal");
  shoppingListModal.classList.add("hidden");
  window.location.href = "AlPastor.html";
}

const generateShoppingListButton = document.querySelector(
  "#generateShoppingList"
);
generateShoppingListButton.addEventListener("click", addIngredients);

const closeModalButton = document.querySelector("#closeModal");
closeModalButton.addEventListener("click", closeShoppingListModal);

