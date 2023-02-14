/* eslint no-unused-vars: 0 */
const booksDom = document.querySelector('.books-wrap');
const form = document.querySelector('.book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
// LOCAL STORAGE
let booksArr = [];
const book = {};
function displayBooks() {
  const books = JSON.parse(localStorage.getItem('books'));
  if (books) {
    booksArr = books;
  }
  let result = '';
  books.map((item) => {
    result += `
    <article class="book">
    <h4 class="book-title">${item.title}</h4>
    <h4 class="book-author">${item.author}</h4>
    <button id=${item.id}  onClick = removeBook(this.id) class="remove">remove</button>
    <hr>
 </article>
    `;
    return result;
  });
  booksDom.innerHTML = result;
  return result;
}
const addBook = () => {
  if (title.value.length !== 0 && author.value.length !== 0) {
    book.title = title.value;
    book.author = author.value;
    book.id = Math.floor(Math.random() * 10000);
    booksArr.push(book);
    localStorage.setItem('books', JSON.stringify(booksArr));
  }
};
const clearForm = () => {
  if (title.value.length !== 0 && author.value.length !== 0) {
    title.value = '';
    author.value = '';
  }
};
function removeBook(id) {
  const filteredBooks = booksArr.filter((item) => item.id.toString() !== id.toString());
  booksArr = filteredBooks;
  let result = '';
  booksArr.map((item) => {
    result += `
    <article class="book">
    <h4 class="book-title">${item.title}</h4>
    <h4 class="book-author">${item.author}</h4>
    <button id=${item.id}  onClick = removeBook(this.id) class="remove">remove</button>
    <hr>
 </article>
    `;
    return result;
  });
  booksDom.innerHTML = result;
  return result;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook();
  displayBooks();
  clearForm();
});
