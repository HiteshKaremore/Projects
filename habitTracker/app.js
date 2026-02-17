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
  renderHabits();
});

function renderHabits() {
  displayContainer.innerHTML = "";
  for (let i = 0; i < habits.length; i++) {
    console.log(habits[i]);
    let habitElement = document.createElement("p");
    let capitalizedFormat = habits[i][0].toUpperCase() + habits[i].slice(1);
    habitElement.textContent = capitalizedFormat;
    let deleteHabit = document.createElement("button");
    deleteHabit.addEventListener("click", function () {
      habits.splice(i, 1);
      renderHabits();
    });
    deleteHabit.textContent = "Delete";
    habitElement.append(deleteHabit);
    displayContainer.append(habitElement);
  }
}
