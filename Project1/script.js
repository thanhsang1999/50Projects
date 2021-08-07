const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassActive();
    panel.classList.add("active");
  });
});
const removeClassActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
