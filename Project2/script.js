const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentAcctive = 1;
next.addEventListener("click", () => {
  currentAcctive++;
  if (currentAcctive > circles.length) {
    currentAcctive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentAcctive--;
  if (currentAcctive < 1) {
    currentAcctive = 1;
  }
  update();
});
const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < currentAcctive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentAcctive === 1) {
    prev.disabled = true;
  } else if (currentAcctive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
