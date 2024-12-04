const myLibrary = [];

function Book() {
  // the constructor...
  this.title= "";
  this.author= "";
}

Book.prototype.createBook = function(title,author){
    this.titile = title;
    this.author = author;
}

function addBookToLibrary(book) {
  // do stuff here
    myLibrary.push(book);
}