// storage.js
// Students will implement saving and loading tasks using localStorage.
// Use the key below to store the array of tasks as a JSON string.
//
// Official documentation for localStorage:
// MDN Web Docs – localStorage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
//
// MDN Web Docs – JSON.stringify / JSON.parse (you will need both):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
//
// You may open these links to understand how to:
// - Save a string in localStorage
// - Read a string from localStorage
// - Convert arrays/objects to JSON strings
// - Convert JSON strings back to arrays/objects
// This function should:
// - Read the stored JSON string from localStorage
// - Convert it back into an array
// - Return an empty array if nothing is stored yet
// TODO: Return parsed tasks from localStorage
// This function should:
// - Convert the array of tasks into a JSON string
// - Save it to localStorage using STORAGE_KEY
  // TODO: Save tasks to localStorage

const STORAGE_KEY = "vault_scholars_todo_tasks";

function loadTasks(){
  const savedTasks = localStorage.getItem(STORAGE_KEY)

if (savedTasks){
  return JSON.parse(savedTasks)
}
return[];
}

function saveTasks(tasks){
  const taskString = JSON.stringify(tasks);
  localStorage.setItem(STORAGE_KEY, taskString)
}
