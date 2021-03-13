// Render the list of books on the page.Each book should have a title, author and image and a background colour that is set dependent on whether we have read the book or not.

// ## Exercise

//   - Iterate through the list of books.
// - For each book, create a`<p>` element with the book title and author and append it to the page.
// - Use a`<ul>` and`<li>` to display the books.
// - Add an`<img>` to each book that links to a URL of the book cover.
// - Change the style of the book depending on whether you have read it(green) or not(red).
// - All of your HTML should go inside the`<div>` with the id ** "content" **.

// The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
{/* <div id="content">
      </h1> Book List < h1 >
  <ul>
    <li>
      <p> Title, Author</p>
      <img>
        </li>
      </ul> */}

function readingList(books) {
  const content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  content.appendChild(h1);
  h1.innerText = "Book List";
  let ul = document.createElement("ul");
  ul.style.display = "flex"; 
  ul.style.justifyContent = "space-around";
  content.appendChild(ul);

  
  for (let book of books) {
    let li = document.createElement("li")
    li.style.listStyleType = "none";
    let p = document.createElement("p");
    let img = document.createElement("img")
    li.append(p, img);
    p.innerText =  `${book.title} by ${book.author}`
    img.src = book.image
    img.setAttribute("width", "150")
    console.log(book);
    // console.log(books[book]);
    ul.appendChild(li)
    if (book.alreadyRead === false ) {
       li.style.backgroundColor = "red";
    } else {
       li.style.backgroundColor = "green";

    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    image: "https://assets.wired.com/photos/w_1001/wp-content/uploads/2015/09/design-of-everyday-things.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    image: "http://www.kurzweilai.net/images/The-Most-Human-Human-Paperback-Front-Cover.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    image: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_pragmatic_programmer.jpg",
  }
];

readingList(books);