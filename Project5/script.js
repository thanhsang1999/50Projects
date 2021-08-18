const loadingHTML = document.querySelector('.loading');
const loadingTextHTML = document.querySelector('.loading__text');
const containerHTML = document.querySelector('.container');
let perCent = 0;
let update =() => {
  perCent++;
  console.log(perCent);
  if(perCent>99){
    clearInterval(loading);
    loadingHTML.style.display='none';
  }
  loadingTextHTML.innerHTML=`${perCent}%`
  loadingTextHTML.style.opacity=`${scale(perCent,0,100,1,0)}`;
  containerHTML.style.filter=`blur(${scale(perCent,0,100,30,0)}px)`;
}
let loading = setInterval(update,30);
function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}