// For each object in the array:

// - Add a`<h1>` tag to the html containing the name of the person.
// - Add a`<h2>` tag to the html containing the job of the person.
// - All of your HTML should go inside the`<div>` with the id ** "content" **:

// ```html
// <div id="content">
//   <h1>{Name Here}</h1>
//   <h2>{Job Here}</h2>
//   .....
// </div>



function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

//   for (let person of arrayOfPeople) {
//     let h1 = document.createElement("h1");
//     let h2 = document.createElement("h2");
//     content.appendChild(h1);
//     content.appendChild(h2);
//     h1.innerText = person.name;
//     h2.innerText = person.job;
//     // console.log(h1, h2)
//   }
// }
  for (let person of arrayOfPeople) {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    content.append(h1, h2);
    h1.innerText = person.name;
    h2.innerText = person.job;
    console.log(h1, h2)
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
