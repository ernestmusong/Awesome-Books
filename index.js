/* eslint no-unused-vars: 0 */
const newBookSection = document.querySelector('.new-book-section');
const contactSection = document.getElementById('contact-section');
const booksSection = document.getElementById('books-section');
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const newContact = document.getElementById('contact');
const booksDom = document.querySelector('#container');
const bookStore = document.querySelector('.book-store')
const form = document.querySelector('#form');
const title = document.querySelector('#book');
const author = document.querySelector('#author');

let booksArr = [];
const book = {};
if (booksArr.length === 0) {
  bookStore.style.visibility = 'hiden';
}
class Book {
    static removeBook = (id) => {
      const filteredBooks = booksArr.filter((item) => item.id.toString() !== id.toString());
      booksArr = filteredBooks;
      let result = '';
      booksArr.map((item) => {
        result += `
      <li class="container-list">
      <div class="description">
      <h2>${item.title}</h2>
      by
      <h3>${item.author}</h3>
      </div>
      <button id=${item.id} onClick = Book.removeBook(this.id) class='remove'>Remove</button>
      </li>
      `;
        return result;
      });
      booksDom.innerHTML = result;
      return result;
    }

static displayBooks = (books) => {
  books = JSON.parse(localStorage.getItem('books'));
  if (books) {
    booksArr = books;
  }
  let result = '';
  booksArr.map((item) => {
    result += `
    <li class="container-list">
    <div class="description">
    <h2>${item.title}</h2>
    by
    <h3>${item.author}</h3>
    </div>
    <button id=${item.id} onClick = Book.removeBook(this.id) class='remove'>Remove</button>
    </li>
      `;
    return result;
  });
  booksDom.innerHTML = result;
  return result;
}

  static addBook = () => {
    if (title.value.length !== 0 && author.value.length !== 0) {
      book.title = title.value;
      book.author = author.value;
      book.id = Math.floor(Math.random() * 10000);
      booksArr.push(book);
      localStorage.setItem('books', JSON.stringify(booksArr));
    }
  };

  static clearForm = () => {
    if (title.value.length !== 0 && author.value.length !== 0) {
      title.value = '';
      author.value = '';
    }
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  Book.addBook();
  Book.displayBooks(booksArr);
  Book.clearForm();
});

window.addEventListener('load', () => {
  Book.displayBooks(booksArr);
});

window.addEventListener('DOMContentLoaded', () => {
  contactSection.classList.add('display');
  newBookSection.classList.add('display');
  booksSection.classList.remove('display')
});

list.addEventListener('click', () => {
  booksSection.classList.remove('display')
  contactSection.classList.add('display')
  newBookSection.classList.add('display')
});

addNew.addEventListener('click', () => {
  newBookSection.classList.remove('display')
  booksSection.classList.add('display')
  contactSection.classList.add('display')
});

newContact.addEventListener('click', () => {
  contactSection.classList.remove('display')
  newBookSection.classList.add('display')
  booksSection.classList.add('display')
});


