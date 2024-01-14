const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary() {
    myLibrary[myLibrary.length] = new Book("test", "test", 5); //enter book fields
};  