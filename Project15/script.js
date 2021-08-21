const counters = document.querySelectorAll('.card__counter');
counters.forEach((counter) => {
  counter.innerText = '0';
  const updateCouter = () => {
    const target = +counter.getAttribute('data-target');
    // console.log(typeof target, target);
    const currentCounter = +counter.innerText;
    const increment = target / 200;
    if (currentCounter < target) {
      counter.innerText = Math.ceil(currentCounter + increment);
      setTimeout(updateCouter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCouter();
});
