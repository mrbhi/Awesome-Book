class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const defaultBooks = [
  {
    title: 'Lorem, ipsum',
    author: 'Testeroo Testyy',
  },
  {
    title: 'Lorem, ipsum',
    author: 'Testeroo Testyy',
  },
];

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
    defaultBooks.forEach((data) => Show.addBook(data));
  }

  static addBook(data) {
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
  Show.addBook(book);
  Show.clearFields();
}

const form = document.querySelector('#form');
form.addEventListener('submit', addABook);
const bookData = document.getElementById('data');
bookData.addEventListener('click', removeData);
