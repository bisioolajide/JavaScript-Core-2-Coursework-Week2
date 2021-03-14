// Each item in the list should have 2 buttons:

// - One to click when the ToDo has been completed - it will apply a line - through style to the text of the ToDo.
// - A second to delete the ToDo.This could be used to delete completed ToDos from the list, or remove ToDos that we are no longer interested in doing.

// We also want to be able to add ToDos to the list using an input field and a button.When ToDos are created this way they should be added to the list with the 2 above buttons.
const input = document.querySelector("#todoInput");
console.log(input.value);
const addButton = document.querySelector("button");
console.log(addButton);
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
let list = document.getElementById("todo-list");
function addNewTodo(event) {
  event.preventDefault() /**stops browser from refreshing */
  if (input.value) {
    let object = {};
    object.task = input.value;
    object.completed = false;
    todos.push(object)
    list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">${input.value}
    <span class="badge bg-primary rounded-pill">
    <i id="change-btn" class="fa fa-check" aria-hidden="true"></i>
    <i id="delete-btn" class="fa fa-trash" aria-hidden="true"></i>
    </span></li>`
  }
  populateTodoList(todos);
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];
populateTodoList(todos);
// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
// }
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}