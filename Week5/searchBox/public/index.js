/* eslint-disable function-paren-newline */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
let names = [];

const removeChildElements = (element) => {
  const elem = element;
  elem.innerHTML = '';
};

const filterMatchText = (array, text) =>
  array.filter((elem) => elem.toLowerCase().includes(text));

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (!a || !b) return false;

  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

window.addEventListener('load', () => {
  fetch('/data')
    .then((body) => body.json())
    .then((data) => {
      names = data.names;
    })
    .catch((err) => {
      throw new Error(err);
    });
});

let lastNamesIncludesInputText = [];
document.querySelector('.searchBox').addEventListener('keyup', (event) => {
  const inputText = event.target.value.toLowerCase();
  const namesIncludesInputText = filterMatchText(names, inputText);
  const searchOptions = document.getElementById('searchOptions');

  if (!arraysEqual(lastNamesIncludesInputText, namesIncludesInputText)) {
    removeChildElements(searchOptions);
    namesIncludesInputText.forEach((name) => {
      const newOption = document.createElement('option');
      newOption.value = name;
      searchOptions.appendChild(newOption);
    });

    lastNamesIncludesInputText = [...namesIncludesInputText];
  }
});

const form = document.querySelector('form');
const output = document.querySelector('output');

form.addEventListener('submit', (event) => {
  // stop the form submitting and reloading the page
  event.preventDefault();

  const formData = new FormData(event.target);
  const name = formData.get('kidname');

  fetch(`https://gender-api.com/get?name=${name}&key=YeFJcGQluraWPyRCsP`)
    .then((response) => {
      if (!response.ok) throw new Error(response.status);
      return response.json();
    })
    // if we get a successful response
    .then((data) => {
      updateDom(data);
    })
    // if the request is unsuccessful
    .catch((error) => {
      if (error.message === '404') {
        output.textContent = `⚠️ Couldn't find "${name}"`;
      } else {
        output.textContent = '⚠️ Something went wrong';
      }
    });
});

const colors = {
  male: 'blue',
  female: 'red',
  unknown: 'white',
};

function updateDom(data) {
  output.innerHTML = '';
  const { gender } = data;
  const heading = document.createElement('h2');
  heading.textContent = data.name;
  heading.style.textTransform = 'capitalize';

  const headingtwo = document.createElement('h3');
  headingtwo.textContent = gender;
  headingtwo.style.textTransform = 'capitalize';

  const image = document.createElement('img');

  image.src = `/public/img/${gender}.jpg`;
  image.alt = '';
  heading.style.color = colors[gender];

  output.appendChild(heading);
  output.appendChild(headingtwo);
  output.appendChild(image);
}
