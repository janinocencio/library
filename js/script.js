const myLibrary = [];

function Book(title, author, pages, alreadyRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.alreadyRead = alreadyRead;
};

function addBookToLibrary(title, author, pages, alreadyRead) {
    myLibrary[myLibrary.length] = new Book(title, author, pages, alreadyRead); 
};  

function exitForm() {
    popupForm.style.visibility = 'hidden';
    popupForm.style.transition = '0.3s ease';
    popupForm.style.scale = '0.1';
    disableHTML.style.visibility = 'hidden';
    disableHTML.style.transition = '0.3s ease';
};

function popForm() {
    popupForm.style.transition = '0.3s ease';
    popupForm.style.visibility = 'visible';
    popupForm.style.scale = '1';
    disableHTML.style.visibility = 'visible';
};

function createDivBook() {
    const parentDiv = document.querySelector('.books-container');
    const div = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p')
    const pPages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    div.classList.add('book');
    readBtn.setAttribute('id', 'readBtn');
    removeBtn.setAttribute('id', 'removeBtn');
    
    readBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('type', 'button');
    removeBtn.textContent = "Remove";

    pTitle.textContent = myLibrary[myLibrary.length - 1].title;
    pAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    pPages.textContent = myLibrary[myLibrary.length - 1].pages;
    if (myLibrary[myLibrary.length - 1].alreadyRead === true) readBtn.textContent = "Done read";
    if (myLibrary[myLibrary.length - 1].alreadyRead === false) readBtn.textContent = "Not read";
    
    div.appendChild(pTitle);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(readBtn);
    div.appendChild(removeBtn);
    parentDiv.appendChild(div);

    removeBtn.addEventListener('click', () => {
        div.remove();
    });
};

const popupForm = document.querySelector('.popup');
const addBookBtn = document.querySelector('#addBook');
const disableHTML = document.querySelector('#disable');
const submitBtn = document.querySelector('#submitBtn');

addBookBtn.addEventListener('click', popForm);
disableHTML.addEventListener('click', exitForm);
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const formBook = document.querySelector('form');
    const titleInput = document.querySelector('#title').value;
    const authorInput = document.querySelector('#author').value;
    const pagesInput = document.querySelector('#pages').value;
    const readInput = document.querySelector('#read').checked;
    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
    createDivBook();
    exitForm();
    formBook.reset();
});
