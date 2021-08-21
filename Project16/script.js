const smallCups = document.querySelectorAll('.cup--small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => fillCup(idx));
});
function fillCup(index) {
  if (
    smallCups[index].classList.contains('fill') &&
    !smallCups[index].nextElementSibling.classList.contains('fill')
  ) {
    index--;
  }
  smallCups.forEach((cup, idx) => {
    if (idx <= index) {
      cup.classList.add('fill');
    } else {
      cup.classList.remove('fill');
    }
  });
  updateBigCup();
}
function updateBigCup(params) {
  const fullCups = document.querySelectorAll('.cup--small.fill').length;
  const totalCups = smallCups.length;
  let per = `${(fullCups / totalCups) * 100}%`;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.innerText = per;
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
