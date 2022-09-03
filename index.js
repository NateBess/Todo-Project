/* TO-DO APP RULES
-Project will be written in: HTML, CSS, JavaScript
-No Javascript libraries or frameworks are allowed
-No following tutorials of todo apps/projects
-No copying code of other existing todo apps/projects
*/

// Below are the elements from the page
const addButton = document.getElementById("add-button");
let uniqueID = 0;

const addItem = () => {
  const inputTextbox = document.getElementById("textbox");
  console.log(inputTextbox.value);

  const listContainer = document.getElementById("list-container");

  // Creates and modifies list-item containers
  const listItem = document.createElement("div");
  listItem.classList.add("list-item");
  listItem.setAttribute("id", `list-item-${uniqueID}`);

  // Creates and modifies checkbox's
  const checkbox = document.createElement("input");
  checkbox.classList.add("item-checkbox");
  checkbox.setAttribute("type", "checkbox");

  // Creates and modifies item-text containers
  const itemText = document.createElement("div");
  itemText.classList.add("item-text");
  itemText.setAttribute("id", "list-item");
  itemText.textContent = inputTextbox.value;

  // Creates and modifies delete buttons
  const deleteButton = document.createElement("input");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "X");
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });
  // add an event listner to delete by id when clicked...

  // Combines them together to add the element
  listItem.appendChild(checkbox);
  listItem.appendChild(itemText);
  listItem.appendChild(deleteButton);
  listContainer.appendChild(listItem);
  uniqueID += 1;
};

addButton.onclick = () => {
  addItem();
};

document.getElementById("textbox").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem();
    docu;
  }
});
