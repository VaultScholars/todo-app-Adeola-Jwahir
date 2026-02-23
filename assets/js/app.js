// app.js
// This file controls what the app does.
// Students will fill in the logic for adding, updating, and deleting tasks.
// The array where all tasks will be stored
// ID counter for new tasks
// When starting the app:
  // - Load tasks from localStorage
  // - Update nextTaskId so it doesn't conflict
  // - Show tasks on the page
  // TODO: Load tasks and render them
// What should happen here:
    // - Read values from the form (title, category, due date)
    // - Validate that the title is not empty
    // - Create a new task object
    // - Add it to the tasks array
    // - Save updated tasks to localStorage
    // - Update the page to show the new task
    // - Clear the form
    // TODO: Add a new task
  // When the user submits the form to add a task:

// When clicking inside the task list (“event delegation”):
 // If the checkbox was clicked:
 // What should happen here:
      // - Remove the task from the tasks array
      // - Save updated tasks
      // - Update the page
      // TODO: Delete the task
// assets/js/app.js

let tasks = [];
let nextTaskId = 1;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-task-form");
    const taskList = document.getElementById("task-list");
    const emptyState = document.getElementById("empty-state");

    
    tasks = loadTasks(); 
    
    
    if (tasks.length > 0) {
        
        const maxId = Math.max(...tasks.map(task => task.id));
        nextTaskId = maxId + 1;
    }

    
    renderTasks(tasks, taskList, emptyState);


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        
        const titleInput = document.getElementById("task-title");
        const categoryInput = document.getElementById("task-category");
        const dueDateInput = document.getElementById("task-due-date");

        const title = titleInput.value.trim();
        const category = categoryInput.value.trim();
        const dueDate = dueDateInput.value;

        if (title === "") {
            alert("Please enter a task title");
            return;
        }

        const newTask = {
            id: nextTaskId,
            title: title,
            category: category,
            dueDate: dueDate,
            completed: false
        };

        tasks.push(newTask);
        nextTaskId++;
        saveTasks(tasks);
        renderTasks(tasks, taskList, emptyState);
        clearTaskForm(form); 
    });

    
    taskList.addEventListener("click", (event) => {
        const target = event.target;
        const listItem = target.closest(".task-item");
        if (!listItem) return;

        const taskId = Number(listItem.dataset.id);

        
        if (target.classList.contains("task-checkbox")) {
            for (let task of tasks) {
                if (task.id === taskId) {
                    task.completed = !task.completed; 
                    break;
                }
            }
            saveTasks(tasks);
            renderTasks(tasks, taskList, emptyState);
            return;
        }

        if (target.classList.contains("task-delete-btn")) {
            tasks = tasks.filter(task => task.id !== taskId); 
            saveTasks(tasks);
            renderTasks(tasks, taskList, emptyState);
            return;
        }
    });
});