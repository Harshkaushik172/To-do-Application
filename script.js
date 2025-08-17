let input = document.getElementById("inputfield");
let button = document.getElementById("addbtn");
let list = document.getElementById("tasklist");
let counter = document.getElementById("taskCounter");

let updatecounter = () => {
  let tasks = list.querySelectorAll("li");
  let remaining = 0;
  tasks.forEach((task) => {
    let checkbox = task.querySelector("input[type='checkbox']");
    if (!checkbox.checked) remaining++;
  });
  counter.textContent = `Task left: ${remaining}`;
};

button.addEventListener("click", () => {
  let inputvalue = input.value;
  if (inputvalue === "") {
    alert("Enter the value");
    return;
  }

  let li = document.createElement("li");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let span = document.createElement("span");
  let delbtn = document.createElement("button");
  delbtn.textContent = "Delete Task";
  let editbtn = document.createElement("button");
  editbtn.textContent = "Edit Task";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
    updatecounter();
  });

  delbtn.addEventListener("click", () => {
    li.remove();
    updatecounter();
  });

  editbtn.addEventListener("click", () => {
    let newText = prompt("Edit your task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText;
    }
  });

  span.textContent = inputvalue;
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delbtn);
  li.appendChild(editbtn);

  list.appendChild(li);
  updatecounter();
  input.value = "";
});
