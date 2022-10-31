class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Storage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(title) {
    const books = Storage.getBooks();

    books.forEach((book, index) => {
      if (book.title === title) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}
const defaultBooks = Storage.getBooks();
class Show {
  static removeBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.remove();
    }
  }

  static clearFields() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    title.value = '';
    author.value = '';
  }

  static showBooks() {
    defaultBooks.forEach((data) => Show.addBookToList(data));
  }

  static addBookToList(data) {
    const bookSection = document.querySelector('#data');
    const render = document.createElement('div');
    render.innerHTML = `
    <span>${data.title}</span> <br>
    <span>${data.author}</span> <br>
    <button id="delete" class="delete">remove</button>
    <hr color="black" size="1px" />`;
    bookSection.appendChild(render);
  }
}

Show.showBooks();

function removeData(e) {
  Show.removeBook(e.target);
}

function addABook(e) {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  // Add book to Display
  Show.addBookToList(book);

  // Add book to list

  Storage.addBook(book);

  // Clear input box after entering new book
  Show.clearFields();
}

const form = document.querySelector('#form');
form.addEventListener('submit', addABook);
const bookData = document.getElementById('data');
bookData.addEventListener('click', removeData);
