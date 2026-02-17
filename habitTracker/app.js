let habits = [];

let inputElement = document.getElementById("input-habit");
let addButton = document.getElementById("add-habit");
let displayContainer = document.getElementById("habit-display");

addButton.addEventListener("click", function () {
  let val = inputElement.value.trim();
  if (val === "") {
    return;
  }
  habits.push(val);
  console.log(habits);
  inputElement.value = "";
});
