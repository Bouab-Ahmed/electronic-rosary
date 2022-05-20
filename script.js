const plus = document.querySelectorAll('#plus');
const reset = document.querySelectorAll('#reset');

plus.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.previousElementSibling.textContent++;
  });
});
reset.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.previousElementSibling.textContent = 0;
  });
});
