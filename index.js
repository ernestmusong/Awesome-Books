/* eslint no-unused-vars: 0 */
const booksDom = document.querySelector('.books-wrap');
const form = document.querySelector('.book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
// LOCAL STORAGE
let booksArr = [];
const book = {};

class Book {
    static removeBook = (id) => {
    const filteredBooks = booksArr.filter((item) => item.id.toString() !== id.toString());
    booksArr = filteredBooks
    let result = '';
    booksArr.map((item) => {
      result += `
      <article class="book">
            <h4 class="book-title">"${item.title}" <span class="lowercase">by</span> ${item.author}</h4>
            <button id=${item.id}  onClick = Book.removeBook(this.id) class="remove">remove</button>
      </article>
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
      <article class="book">
          <h4 class="book-title">"${item.title}" <span class="lowercase">by</span> ${item.author}</h4>
          <button id=${item.id}  onClick = Book.removeBook(this.id) class="remove">remove</button>
     </article>
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
