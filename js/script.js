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

function popForm() {
    popupForm.style.transition = '0.3s ease';
    popupForm.style.visibility = 'visible';
    popupForm.style.scale = '1';
    disableHTML.style.visibility = 'visible';
};

function exitForm() {
    popupForm.style.visibility = 'hidden';
    popupForm.style.transition = '0.3s ease';
    popupForm.style.scale = '0.1';
    disableHTML.style.visibility = 'hidden';
    disableHTML.style.transition = '0.3s ease';
};

function toggleRead(pTitle, pAuthor, pPages, readBtn) {
    const index = myLibrary.findIndex(function(Book) {
        if (Book.title === pTitle.textContent && 
            Book.author === pAuthor.textContent &&
            Book.pages === pPages.textContent) {
            return true;
        }        
    });
    
    if (readBtn.textContent === "Done read") {
        readBtn.textContent = "Not read";
        myLibrary[index].alreadyRead = false;
    }   else if (readBtn.textContent === "Not read") {
        readBtn.textContent = "Done read";
        myLibrary[index].alreadyRead = true;
    }
};

function removeBook(pTitle, pAuthor, pPages, div) {
    const index = myLibrary.findIndex(function(Book) {
        if (Book.title === pTitle.textContent && 
            Book.author === pAuthor.textContent &&
            Book.pages === pPages.textContent) {
            return true;
        }        
    });
    myLibrary.splice(index,1);
    div.remove();
}

function createDivBook() {
    const parentDiv = document.querySelector('.books-container');
    const div = document.createElement('div');
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p')
    const pPages = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    
    div.classList.add('book');   
    readBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('type', 'button');

    pTitle.textContent = myLibrary[myLibrary.length - 1].title;
    pAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    pPages.textContent = myLibrary[myLibrary.length - 1].pages;
    removeBtn.textContent = "Remove";
    if (myLibrary[myLibrary.length - 1].alreadyRead === true) readBtn.textContent = "Done read";
    if (myLibrary[myLibrary.length - 1].alreadyRead === false) readBtn.textContent = "Not read";
    
    div.appendChild(pTitle);
    div.appendChild(pAuthor);
    div.appendChild(pPages);
    div.appendChild(readBtn);
    div.appendChild(removeBtn);
    parentDiv.appendChild(div);

    readBtn.addEventListener('click', () => {
        toggleRead(pTitle, pAuthor, pPages, readBtn);
    });

    removeBtn.addEventListener('click', () => {
        removeBook(pTitle, pAuthor, pPages, div);
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


/*** Future Release: Add no-duplicate functionality ***/