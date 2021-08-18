const search = document.querySelector('.search__input');
const btn_search = document.querySelector('.search__btn');
btn_search.addEventListener('click',()=>{
  search.classList.toggle('search__input--open');
  search.focus();
})
