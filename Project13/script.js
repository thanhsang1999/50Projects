const tags = document.querySelector('.choice__tags');
const textarea = document.getElementById('textarea');
textarea.focus();
textarea.addEventListener('keyup', (e) => {
  createResult(e.target.value);
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});
function createResult(input) {
  let arr = input
    .split(',')
    .filter((item) => item.trim() !== '')
    .map((item) => item.trim());
  tags.innerHTML = '';
  arr.forEach((item) => {
    const tag = document.createElement('span');
    tag.classList.add('choice__tag');
    tag.innerText = item;
    tags.appendChild(tag);
  });
}
function randomSelect() {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    hightlightTag(randomTag);
    setTimeout(() => {
      unHightlightTag(randomTag);
    }, 100);
  }, 100);
  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      hightlightTag(pickRandomTag());
    }, 100);
  }, 100 * times);
}
function pickRandomTag() {
  const tags = document.querySelectorAll('.choice__tag');
  return tags[Math.floor(Math.random() * tags.length)];
}
function hightlightTag(tag) {
  tag.classList.add('highlight');
}
function unHightlightTag(tag) {
  tag.classList.remove('highlight');
}
