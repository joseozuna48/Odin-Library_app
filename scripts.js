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


function deleteBook(event){
  let index = event.target.dataset.index;

  let books = document.querySelector(".library");
  books.innerHTML = "";
  
  myLibrary.splice(index,1);

  displayLibrary();
}

function setRead(event){
  let index = event.target.dataset.index;
  let books = document.querySelectorAll(".book-container .book");

  if(books[index].classList.contains("read") ){
   books[index] .classList.remove("read");
   event.target.innerText = "Mark\n as read"
  }else{
    books[index].classList.add("read");
    event.target.innerText = "Remove  read"
  }
}

function displayLibrary(){
  let library = document.querySelector('.library');

  for(let i=0; i<myLibrary.length; i++){

    let bookContainer = document.createElement("div")
    bookContainer.classList.add("book-container");

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

    let btnContainer = document.createElement("div");
    btnContainer.classList.add("btns-container");

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button"
    deleteBtn.textContent = "Delete\n Book";
    deleteBtn.dataset.index = i;
    deleteBtn.addEventListener("click", deleteBook);

    let readBtn = document.createElement("button");
    readBtn.type = "button"
    readBtn.textContent = "Mark\n as read";
    readBtn.dataset.index = i;
    readBtn.addEventListener("click", setRead);
    
    let readTag = document.createElement("div");
    readTag.classList.add("read-tag");
    readTag.textContent = "READ";


    btnContainer.appendChild(deleteBtn);
    btnContainer.appendChild(readBtn);

    info.appendChild(title);
    info.appendChild(author);
    content.appendChild(info);
    content.appendChild(readTag);
    bookContainer.appendChild(content);
    bookContainer.appendChild(btnContainer);

    library.appendChild(bookContainer);
  }
}
document.addEventListener("DOMContentLoaded", (event) => {

  addBookToLibrary('quivole1',"author1");
  addBookToLibrary('quivole2','author2');
  addBookToLibrary(' Farewell to arms',"By: Watson");
  addBookToLibrary('Anthroposcene Reviewed','By: John Green');
  displayLibrary();
});


