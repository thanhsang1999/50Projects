const btns = document.querySelectorAll('.faq__btn');
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active');
  });
});
