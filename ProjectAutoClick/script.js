const cat = document.querySelector('.cat');
const catImage = document.querySelector('.cat__image');
const couter = document.getElementById('couter');
let tmpCouter = 0;
let check = false;
window.addEventListener('keydown', () => {
  if (!check) {
    couter.innerText = `${tmpCouter++}`;
    catImage.classList.add('cat__image--open');
    check = true;
  }
});
window.addEventListener('keyup', () => {
  if (check) {
    catImage.classList.remove('cat__image--open');
    check = false;
  }
});
window.addEventListener('mousedown', () => {
  if (!check) {
    couter.innerText = `${tmpCouter++}`;
    catImage.classList.add('cat__image--open');
    check = true;
  }
});

window.addEventListener('mouseup', () => {
  if (check) {
    catImage.classList.remove('cat__image--open');
    check = false;
  }
});
