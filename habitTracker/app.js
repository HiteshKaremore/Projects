let habits = [];

//DOM Reference
let inputElement = document.getElementById("input-habit");
let addButton = document.getElementById("add-habit");
let displayContainer = document.getElementById("habit-display");

//ADD HABIT
function addHabit() {
  let val = inputElement.value.trim();
  if (val === "") {
    return;
  }
  habits.push({ text: val, completed: false });
  console.log(habits);
  inputElement.value = "";
  renderHabits();
}
addButton.addEventListener("click", addHabit);
inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addHabit();
  }
});

//Render and Delete Habit
function renderHabits() {
  displayContainer.innerHTML = "";
  for (let i = 0; i < habits.length; i++) {
    console.log(habits[i]);
    let habitElement = document.createElement("p");
    let capitalizedFormat =
      habits[i].text[0].toUpperCase() + habits[i].text.slice(1);
    habitElement.textContent = capitalizedFormat;
    if (habits[i].completed) {
      habitElement.style.textDecoration = "line-through";
    }

    //Complete Button
    let completeHabit = document.createElement("button");
    completeHabit.addEventListener("click", function () {
      habits[i].completed = !habits[i].completed;
      renderHabits();
    });
    if (habits[i].completed) {
      completeHabit.textContent = "Undo";
    } else {
      completeHabit.textContent = "Complete";
    }
    habitElement.append(completeHabit);

    //Delete button
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

//Category Icon
const categoryIcons = {
  Fitness: "🏋️",
  Learning: "📚",
  Productivity: "⚡",
  Health: "💊",
  Other: "📌",
};
