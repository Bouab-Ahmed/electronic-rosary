const plus = document.querySelectorAll('#plus');
const reset = document.querySelectorAll('#reset');

window.addEventListener('load', () => {
  plus.forEach((button, i) => {
    if (i in localStorage) {
      button.parentElement.previousElementSibling.textContent =
        localStorage.getItem(i);
    } else {
      button.parentElement.previousElementSibling.textContent = 0;
    }
  });
});

plus.forEach((button, i) => {
  button.addEventListener('click', () => {
    console.log(i);
    button.parentElement.previousElementSibling.textContent++;
    localStorage.setItem(
      i,
      button.parentElement.previousElementSibling.textContent
    );
  });
});
reset.forEach((button, i) => {
  button.addEventListener('click', () => {
    button.parentElement.previousElementSibling.textContent = 0;
    localStorage.setItem(
      i,
      button.parentElement.previousElementSibling.textContent
    );
  });
});
