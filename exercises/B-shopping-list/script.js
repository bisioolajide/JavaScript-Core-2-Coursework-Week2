// * You should use an unordered list: `<ul>`.
// * Each item from the array should be in a`<li>` tag.
// * All of your HTML should go inside the`<div>` with the id ** "content" **.

function shoppingList(shoppingList) {
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  content.appendChild(ul);

  for (let item of shoppingList) {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  }
   
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
