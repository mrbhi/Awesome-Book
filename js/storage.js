const formData = {
  title: '',
  author: '',
};

const title = document.querySelector('#title');
const author = document.querySelector('#author');

title.addEventListener('input', () => {
  formData.title = title.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

author.addEventListener('input', () => {
  formData.author = author.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

if (localStorage.getItem('formData')) {
  const formValue = localStorage.getItem('formData');
  const formValueObj = JSON.parse(formValue);
  title.value = formValueObj.title;
  author.value = formValueObj.author;
}