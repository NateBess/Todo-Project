const addButton = document.getElementById("add-button");
const inputTextbox = document.getElementById("textbox");
const listContainer = document.getElementById("list-container");

let deleteArray = [];

const getUniqueID = () => {
  return Math.random();
};

const addItem = () => {
  if (!inputTextbox.value) return;
  const uniqueID = getUniqueID();
  const inputText = inputTextbox.value;
  inputTextbox.value = "";
  const newListItem = createItem(inputText, uniqueID);
  listContainer.appendChild(newListItem);
};

const createItem = (inputText, uniqueID) => {
  const listItem = document.createElement("div");
  listItem.classList.add("list-item");
  listItem.setAttribute("id", `${uniqueID}`);

  const checkbox = document.createElement("input");
  checkbox.classList.add("item-checkbox");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", `${uniqueID}`);
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      if (!deleteArray.includes(listItem.id)) {
        deleteArray.push(listItem.id);
        listItem.classList.add("strike-text");
      }
    } else {
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
  itemText.textContent = inputText;
  listItem.appendChild(itemText);

  // Creates and modifies delete buttons
  const deleteButton = document.createElement("input");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "X");
  deleteButton.addEventListener("click", () => {
    if (deleteArray.includes(listItem.id)) listItem.remove();
  });
  listItem.appendChild(deleteButton);
  return listItem;
};

addButton.onclick = () => addItem();

document.getElementById("textbox").addEventListener("keypress", (event) => {
  if (event.key === "Enter") addItem();
});
