
// * Create a`<select>` element.
// * Create a`<p>` element.
// * Iterate through the array of colours.
// * Each element in the array should add a`<option>` to the`<select>`, where the`<option>` is the element in the array.
// * Each`<option>` should have a 'click' event listener to update the contents and colour of the`<p>` with the selected colour.

const content = document.querySelector("#content");
// { <label for="cars">Choose a car:</label> }

// {<select id="cars">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="opel">Opel</option>
//   <option value="audi">Audi</option>
// </select>}
   
function listOfColours(colours) {
  const select = document.createElement("SELECT");
  const p = document.createElement("p");
  // for (let list of colours) {
  
  colours.forEach(list => {
  // console.log(list);
  let option = document.createElement("option");
  select.appendChild(option)
  option.innerText = list;
  select.addEventListener("change", (event) => { 
      // console.log(`you have clicked ${list}`)
      // console.log(event.target.value)
      let pText = event.target.value
      console.log(pText);
      p.innerText = pText
      p.style.backgroundColor = pText;
    });
   })
  content.appendChild(select);
  content.appendChild(p);
}
// $('select option').click(function () {
//   $(this).css('background', 'colour');
// });



const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
