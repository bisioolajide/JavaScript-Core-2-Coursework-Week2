// * You should use an`<ul>` for the list and`<li>` tags for the contents.
// * Each todo should have an event listener for when they are clicked.
// * The event listener should add the line - through style to the todo.
// * The event listener should also remove the line - through style conditionally by checking if the style is already applied.
// * All of your HTML should go inside the`<div>` with the id ** "content" **.
/* <div id="content">
    </h1> Book List < h1 >
      <ul>
        <li>
          <p> Title, Author</p>
          <img>
        </li>
      </ul> */

function todoList(todos) {
  const content = document.querySelector("#content");
  

  for (let list of todos) {
    // console.log(list);
    let ul = document.createElement("ul");
    content.appendChild(ul);
    let li = document.createElement("li");
    li.innerText = list.todo;
    ul.appendChild(li);
    li.addEventListener("click", lineThrough) 
  }
}

function lineThrough(event) {
  let striking = event.target;
  striking.classList.toggle("todos");
  // console.log(event.target);
  //  console.log("click me");
};

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);