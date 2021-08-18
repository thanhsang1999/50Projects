const content = document.getElementById('content');
const btnJoke = document.getElementById('button-joke');
btnJoke.addEventListener('click',()=>{
  generatorJoke();
})
generatorJoke();
async function  generatorJoke() {
  const config = {
    headers:{
      Accept:'application/json',
    },
  }
  const res = await fetch('https://icanhazdadjoke.com/',config);
  const data = await res.json();
  content.innerHTML = data.joke;

}
