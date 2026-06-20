// Get HTML elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");
const counter = document.getElementById("counter");

// Counter variable
let taskCount = 0;

// Colors for task cards
const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFD93D",
    "#6BCB77",
    "#4D96FF",
    "#C77DFF",
    "#F4A261"
];

// Function to create a task
function createTask() {

    // Increase task count
    taskCount++;

    // Update counter
    counter.textContent = `Tasks: ${taskCount}`;

    // Create a new div
    const task = document.createElement("div");

    // Add CSS class
    task.classList.add("task");

    // Set task text
    task.textContent = `Task ${taskCount}`;

    // Pick a random color
    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    task.style.backgroundColor = randomColor;

    // Add task to page
    taskContainer.appendChild(task);
}

// Button click
addTaskBtn.addEventListener("click", createTask);
