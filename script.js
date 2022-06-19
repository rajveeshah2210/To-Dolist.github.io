document.querySelector("#input").addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    const input = document.querySelector("#input");
    addItem(input.value);
  }
    
});

document.querySelector("#add_item").addEventListener("click", () => {
  const input = document.querySelector("#input");
  addItem(input.value);
});

addItem = (input) => {
  const item = document.createElement("div");
  const div = document.createElement("div");
  const checkIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const text = document.createElement("p");

  item.className = "item";
  text.textContent = input;

  checkIcon.className = "fas fa-check-square";
  checkIcon.style.color = "black";
  checkIcon.addEventListener("click", () => {
    if (checkIcon.style.color == "limegreen") {
      checkIcon.style.color = "black"
    } else {
    checkIcon.style.color = "limegreen";
    }
  })
  div.appendChild(checkIcon);

  trashIcon.className = "fas fa-trash";
  trashIcon.style.color = "black";
  trashIcon.addEventListener("click", () => {
    item.remove();
  })
  div.appendChild(trashIcon);

  item.appendChild(text);
  item.appendChild(div);

  document.querySelector("#to_do_list").appendChild(item);
  document.querySelector("#input").value = "";
}
