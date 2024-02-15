const cardElements = document.querySelectorAll('.geometry-card');
const triangleBtnElement = document.getElementById('triangle-btn');

for (const cardElement of cardElements) {
  cardElement.addEventListener('mouseenter', function (event) {
    event.target.classList.toggle('bg-[#1090D81A]');
  });

  cardElement.addEventListener('mouseleave', function (event) {
    event.target.classList.toggle('bg-[#1090D81A]');
  });
}

// triangleBtnElement.addEventListener('click', function () {
//   const inputElements = triangleBtnElement.parentNode
//     .querySelector('div')
//     .querySelectorAll('input');

//   const value1 = parseFloat(inputElements[0].value);
//   const value2 = parseFloat(inputElements[1].value);
//   return [value1, value2];
// });

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

triangleBtnElement.addEventListener('click', function () {
  const [value1, value2] = getInputValueById('triangle-btn');
  const area = 0.5 * value1 * value2;
});
