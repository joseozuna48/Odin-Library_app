const myLibrary = [];

function Book() {
  // the constructor...
  this.title= "";
  this.author= "";
}

function addBookToLibrary(title,author) {
  // do stuff here
    let book = new Book();
    book.title = title;
    book.author = author
    myLibrary.push(book);
}


function openModal(){
  let modal = document.querySelector('dialog');

  modal.showModal();
}

function displayLibrary(){
  let container = document.querySelector('.books_container');

  addBookToLibrary('quivole1',"author1");
  addBookToLibrary('quivole2','author2');

  for(let i=0; i<myLibrary.length; i++){
    let content = document.createElement("div")
    content.classList.add("book");

    let info  = document.createElement("div")
    info.classList.add('book-info');

    let title = document.createElement("div")
    title.classList.add('title');
    title.innerText =`${myLibrary[i].title}`;

    let author = document.createElement("div")
    author.classList.add('author');
    author.innerText = `${myLibrary[i].author}`;

    info.appendChild(title);
    info.appendChild(author);
    content.appendChild(info);

    container.appendChild(content)
  }
}
document.addEventListener("DOMContentLoaded", (event) => {
  displayLibrary();
});


