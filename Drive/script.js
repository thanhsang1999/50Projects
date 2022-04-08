document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('input');
  const resultEL = document.getElementById('result');

  inputEl.addEventListener('paste', (e) => {
    setTimeout(() => {
      // https://drive.google.com/uc?id=1kkpxeZt-MLuDuQOeyxj30aC8AyVceAfv&export=download
      let valueInput = inputEl.value;

      if (valueInput.startsWith('https://drive.google.com/')) {
        valueInput = valueInput.replace('uc?id=', 'file/d/');
        valueInput = valueInput.replace('&export=download', '/view');
        resultEL.innerText = valueInput;
      }
    }, 100);
  });
  resultEL.addEventListener('click', (e) => {
    console.log(resultEL.innerText);
    navigator.clipboard.writeText(copyText.value);
  });
});
