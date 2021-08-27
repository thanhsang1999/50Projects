const body = document.body;
const slides = document.querySelectorAll('.slider__slide');
const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');
let slideActive = 0;
setBgToBody();
function setBgToBody() {
  body.style.backgroundImage = slides[slideActive].style.backgroundImage;
}
btnLeft.addEventListener('click', () => {
  slideActive--;
  if (slideActive <= 0) {
    slideActive = slides.length - 1;
  }
  removeClassActive();
  setBgToBody();
});
btnRight.addEventListener('click', () => {
  slideActive++;
  if (slideActive >= slides.length) {
    slideActive = 0;
  }
  removeClassActive();
  setBgToBody();
});
function removeClassActive() {
  Array.from(slides).map((slide) => {
    slide.classList.remove('slider__slide--active');
  });
  slides[slideActive].classList.add('slider__slide--active');
}
window.addEventListener('keydown', (e) => {
  // 39->
  // 37<-
  if (e.keyCode === 39) {
    btnRight.click();
  }
  if (e.keyCode === 37) {
    btnLeft.click();
  }
});
