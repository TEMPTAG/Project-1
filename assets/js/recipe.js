/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="">
</head>
<body>

    <div id="mainList">
        <ul id="itemsList">
            <li>3lbs Boneless, Skinless Chicken Thighs<button onclick="addItemToList('3lbs Boneless, Skinless Chicken Thighs')">Add</button></li>
            <li>1 Red Onion<button onclick="addItemToList('1 Red Onion')">Add</button></li>
            <li>1 Can of Chipotle Chilis in Adobo Sauce<button onclick="addItemToList('1 Can of Chipotle Chilis in Adobo Sauce')">Add</button></li>
            <li>6 Cloves of Garlic<button onclick="addItemToList('6 Cloves of Garlic')">Add</button></li>
            <li>4 Tablespoons of Ancho Chili Powder<button onclick="addItemToList('4 Tablespoons of Ancho Chili Powder')">Add</button></li>
            <li>4 Teaspoons of Ground Cumin<button onclick="addItemToList('4 Teaspoons of Ground Cumin')">Add</button></li>
            <li>4 Teaspoons of Mexican Oregano<button onclick="addItemToList('4 Teaspoons of Mexican Oregano')">Add</button></li>
            <li>2 Teaspoons of Salt<button onclick="addItemToList('2 Teaspoons of Salt')">Add</button></li>
            <li>1 Teaspoon of Black Pepper<button onclick="addItemToList('1 Teaspoon of Black Pepper')">Add</button></li>
            <li>4 Tablespoons of Olive Oil<button onclick="addItemToList('4 Tablespoons of Olive Oil')">Add</button></li>
        </ul>
    </div>

    <div id="checklistContainer">
        <h2>Checklist</h2>
        <ul id="checklist"></ul>
    </div>

    <script src=""></script>
</body>
</html>


//checklist
function addItemToList(itemText) {
    const checklist = document.getElementById('checklist');
    const li = document.createElement('li');
    li.textContent = itemText;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        checklist.removeChild(li);
    });
    
    li.appendChild(removeButton);
    checklist.appendChild(li);
}



function addItemToList(itemText) {

let itemArray = [
    {item: itemText}
  ];

  if(!checkbox.checked) {
    itemArray.push("itemText");

    localStorage.storage.setItem('itemArray', JSON.stringify(itemArray));
  }


    const checklist = document.getElementById('checklist');
    const li = document.createElement('li');
    li.textContent = itemText;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
        checklist.removeChild(li);
    });
    
    li.appendChild(removeButton);
    checklist.appendChild(li);
}

const checkboxEl = document.

checkboxEl




*/

/*

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlayModal')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

*/

const checkboxEl = document.querySelectorAll('input[type="checkbox"]');

function addItemToList() {
  let itemArray = JSON.parse(localStorage.getItem('itemArray')) || [];

  checkboxEl.forEach((checkbox) => {
    if(!checkbox.checked) {
      const itemText = checkbox.getAttribute('data-item');
      itemArray.push(itemText);
    }
  });
  
    localStorage.setItem('itemArray', JSON.stringify(itemArray));
}

  



/*
const uncheckedItem = document.querySelectorAll('.checkItem');

function addItemToList(itemText) {
  let itemArray = [];



  uncheckedItem.forEach(checkbox => {
  
    if(!checkbox.checked) {
      itemArray.push(itemText);

    }
    
  });
  console.log(itemArray);
}
  */