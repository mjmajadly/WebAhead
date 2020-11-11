let names = [];
let lastNamesIncludesInputText = [];

const form = document.querySelector('form');
const output = document.querySelector('output');
const input = document.querySelector('input');

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
input.addEventListener('keyup', (event) => {
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
let nametest = '';
form.addEventListener('submit', (event) => {
  // stop the form submitting and reloading the page
  event.preventDefault();
  if (input.value === '') {
    alert('No input! Please enter a Name!');
    return;
  }
  const formData = new FormData(event.target);
  const name = formData.get('kidname');
  nametest = input.value;
  fetch(`/nameSearch?name=${nametest}`, {
    method: 'POST',
    body: input.value,
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      updateDom(response);
    })
    .catch((err) => {
      if (error.message === '404') {
        output.textContent = `⚠️ Couldn't find "${name}"`;
      } else {
        output.textContent = '⚠️ Something went wrong';
      }
    });
});

const colors = {
  male: 'blue',
  female: 'gold',
  unknown: 'white',
};

const bckgrd = {
  male:
    'radial-gradient(circle, rgba(63,251,239,0.9192051820728291) 0%, rgba(37,34,134,0.7602605926856566) 48%, rgba(30,112,119,1) 79%, rgba(25,2,7,1) 100%)',
  female:
    'radial-gradient(circle, rgba(251,63,243,0.9192051820728291) 0%, rgba(134,34,34,0.7602605926856566) 48%, rgba(119,30,112,1) 79%, rgba(25,2,7,1) 100%)',
  unknown:
    'radial-gradient(circle, rgba(251,235,63,0.9192051820728291) 0%, rgba(134,80,34,0.7602605926856566) 48%, rgba(30,119,34,1) 79%, rgba(25,2,7,1) 100%)',
};
function changeBackground(color) {
  document.body.style.background = color;
}
function updateDom(data) {
  output.innerHTML = '';
  const { gender } = data;
  changeBackground(bckgrd[gender]);

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
