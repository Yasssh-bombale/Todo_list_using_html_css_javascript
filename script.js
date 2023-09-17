let input = document.getElementById("input-text");
let listcontainer = document.getElementById("list-container");
let addbtn = document.getElementById("addbtn");

function addtask() {
  if (input.value === "") {
    alert("you must write something !");
  } else {
    let list = document.createElement("li");
    list.innerHTML = input.value;
    listcontainer.appendChild(list);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
  }
  input.value = "";
  saveData();
}

listcontainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listcontainer.innerHTML);
}
function showData() {
  listcontainer.innerHTML = localStorage.getItem("data");
}
showData();
