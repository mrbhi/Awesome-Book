const form = document.querySelector('#form');
const data = document.querySelector('#data');

function addNewBookData() {
  const bookTitle = form.title.value;
  const bookAuthor = form.author.value;

  const book = {
    title: bookTitle,
    author: bookAuthor,
  };

  return book;
}

function saveBooks(book) {
  let books = [];

  if (localStorage.getItem('Books')) {
    books = JSON.parse(localStorage.getItem('Books'));
  }

  books.push(book);
  localStorage.setItem('Books', JSON.stringify(books));
}

function addBook(element) {
  element.preventDefault();
  saveBooks(addNewBookData());
  form.submit();
}

function showBooks() {
  if (localStorage.getItem('Books')) {
    const books = JSON.parse(localStorage.getItem('Books'));
    books.forEach((book) => {
      const booksHtml = `
        <div id="info" class="info">
          <span class="title">${book.title}</span> <br>
          <span class="author">${book.author}</span> <br>
          <span><button class="remove-btn">Remove</button></span> <br><br>
        </div>
      `;
      data.innerHTML += booksHtml;
    });
  }
}

showBooks();
form.addEventListener('submit', addBook);
function removeBook(index) {
  if (localStorage.getItem('Books')) {
    const books = JSON.parse(localStorage.getItem('Books'));
    books.splice(index, 1);
    localStorage.clear();
    localStorage.setItem('Books', JSON.stringify(books));
  }
}

data.querySelectorAll('.remove-btn').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    removeBook(index);
    btn.parentElement.parentElement.remove();
  });
});