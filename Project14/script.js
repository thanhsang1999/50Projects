const nav = document.getElementById('nav');
const btn = document.getElementById('btn-toggle');
btn.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
});
