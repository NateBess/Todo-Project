/* TO-DO APP RULES
-Project will be written in: HTML, CSS, JavaScript
-No Javascript libraries or frameworks are allowed
-No following tutorials of todo apps/projects
-No copying code of other existing todo apps/projects
*/

// Below are the elements from the page
const addButton = document.getElementById("add-button");
let uniqueID = 0;
let deleteArray = [];

const addItem = () => {
  const inputTextbox = document.getElementById("textbox");

  const listContainer = document.getElementById("list-container");

  // Creates and modifies list-item containers
  const listItem = document.createElement("div");
  listItem.classList.add("list-item");
  listItem.setAttribute("id", `list-item-${uniqueID}`);

  // Creates and modifies checkbox's
  const checkbox = document.createElement("input");
  checkbox.classList.add("item-checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `item-checkbox-${uniqueID}`);
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      //console.log(`${listItem.id} has been checked`);
      if (!deleteArray.includes(listItem.id)) {
        deleteArray.push(listItem.id);
        listItem.classList.add("strike-text");
      }
    } else {
      //console.log(`${listItem.id} has been un-checked`);
      if (deleteArray.includes(listItem.id)) {
        deleteArray = deleteArray.filter(
          (arrayItem) => arrayItem !== listItem.id
        );
      }
      listItem.classList.remove("strike-text");
    }
  });
  listItem.appendChild(checkbox);

  // Creates and modifies item-text containers
  const itemText = document.createElement("div");
  itemText.classList.add("item-text");
  itemText.setAttribute("id", "list-item");
  itemText.textContent = inputTextbox.value;
  listItem.appendChild(itemText);

  // Creates and modifies delete buttons
  const deleteButton = document.createElement("input");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "X");
  deleteButton.addEventListener("click", () => {
    if (deleteArray.includes(listItem.id)) {
      listItem.remove();
    } else {
      ("Can't delete item, has not been checked!");
    }
  });
  listItem.appendChild(deleteButton);
  // add an event listner to delete by id when clicked...

  listContainer.appendChild(listItem);
  uniqueID += 1;
  return uniqueID;
};

addButton.onclick = () => {
  addItem();
};

document.getElementById("textbox").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

/*
addButton.onclick = () => {
  addItem();
  for (let i = 0; i < queue.length; i++) {
    const checkboxStatus = document.getElementById(queue[i]);
    checkboxStatus.addEventListener("click", () => {
      if (checkboxStatus.checked === true) {
        console.log(checkboxStatus);
      }
      console.log(checkboxStatus);
    });
  }
};
*/
