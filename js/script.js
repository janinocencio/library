const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary() {
    myLibrary[myLibrary.length] = new Book("test", "test", 5); //enter book fields
};  

const addBookBtn = document.querySelector('#addBook');
const popupForm = document.querySelector('.popup');
const disableHTML = document.querySelector('#disable');
addBookBtn.addEventListener('click', () => {
    popupForm.style.transition = '0.3s ease';
    popupForm.style.visibility = 'visible';
    popupForm.style.scale = '1';
    disableHTML.style.visibility = 'visible';
    
});

disableHTML.addEventListener('click', () => {
    popupForm.style.visibility = 'hidden';
    popupForm.style.transition = '0.3s ease';
    popupForm.style.scale = '0.1';
    disableHTML.style.visibility = 'hidden';
    disableHTML.style.transition = '0.3s ease';
});