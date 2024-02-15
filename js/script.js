const cardElements = document.querySelectorAll('.geometry-card');
const resultContainerElement = document.getElementById('result-container');
const calculateBtnElements = document.querySelectorAll('.calculate-btn');

const triangleBtnElement = document.getElementById('triangle-btn');
const rectangleBtnElement = document.getElementById('rectangle-btn');
const parallelogramBtnElement = document.getElementById('parallelogram-btn');
const rhombusBtnElement = document.getElementById('rhombus-btn');
const pentagonBtnElement = document.getElementById('pentagon-btn');
const ellipseBtnElement = document.getElementById('ellipse-btn');

const clearBtnElement = document.getElementById('clear-btn');

for (const cardElement of cardElements) {
  cardElement.addEventListener('mouseenter', function (event) {
    event.target.classList.add('bg-[#1090D81A]');
  });

  cardElement.addEventListener('mouseleave', function (event) {
    event.target.classList.remove('bg-[#1090D81A]');
  });
}

function getInputValueById(id) {
  const btnElement = document.getElementById(id);
  const inputElements = btnElement.parentNode
    .querySelector('div')
    .querySelectorAll('input');

  const value1 = parseFloat(inputElements[0].value);
  const value2 = parseFloat(inputElements[1].value);

  inputElements[0].value = '';
  inputElements[1].value = '';

  return [value1, value2];
}

function areaCalculation(values, type) {
  const [value1, value2] = values;

  if (type === 'triangle') {
    return Math.round(0.5 * value1 * value2);
  }
  if (type === 'rectangle') {
    return Math.round(value1 * value2);
  }
  if (type === 'parallelogram') {
    return Math.round(value1 * value2);
  }
  if (type === 'rhombus') {
    return Math.round(0.5 * value1 * value2);
  }
  if (type === 'pentagon') {
    return Math.round(0.5 * value1 * value2);
  }
  if (type === 'ellipse') {
    return Math.round(Math.PI * value1 * value2);
  }
}

function showAreaResultInUi(areaData, type) {
  const li = document.createElement('li');
  if (isNaN(areaData)) {
    li.innerText = `${type}: Enter valid data.`;
  } else {
    li.innerHTML = `${type}: ${areaData} cm<sup>2</sup>`;
  }
  resultContainerElement.appendChild(li);
}

for (const calculateBtnElement of calculateBtnElements) {
  calculateBtnElement.addEventListener('click', function (event) {
    const type = event.target.id.split('-')[0];
    const [value1, value2] = getInputValueById(event.target.id);
    const area = areaCalculation([value1, value2], type);
    showAreaResultInUi(area, type.slice(0, 1).toUpperCase() + type.slice(1));
  });
}

clearBtnElement.addEventListener('click', function (event) {
  event.target.parentNode.querySelector('#result-container').innerHTML = '';
});

// triangleBtnElement.addEventListener('click', function (event) {
//   const [value1, value2] = getInputValueById(event.target.id);
//   const area = Math.round(0.5 * value1 * value2);
//   showAreaResultInUi(area, 'Triangle');
// });

// rectangleBtnElement.addEventListener('click', function (event) {
//   const [value1, value2] = getInputValueById(event.target.id);
//   const area = Math.round(value1 * value2);
//   showAreaResultInUi(area, 'Rectangle');
// });

// parallelogramBtnElement.addEventListener('click', function (event) {
//   const [value1, value2] = getInputValueById(event.target.id);
//   const area = Math.round(value1 * value2);
//   showAreaResultInUi(area, 'Parallelogram');
// });

// rhombusBtnElement.addEventListener('click', function (event) {
//   const [value1, value2] = getInputValueById(event.target.id);
//   const area = Math.round(0.5 * value1 * value2);
//   showAreaResultInUi(area, 'Rhombus');
// });

// pentagonBtnElement.addEventListener('click', function (event) {
//   const [value1, value2] = getInputValueById(event.target.id);
//   const area = Math.round(0.5 * value1 * value2);
//   showAreaResultInUi(area, 'Pentagon');
// });

// ellipseBtnElement.addEventListener('click', function (event) {
//   const [value1, value2] = getInputValueById(event.target.id);
//   const area = Math.round(Math.PI * value1 * value2);
//   showAreaResultInUi(area, 'Ellipse');
// });
