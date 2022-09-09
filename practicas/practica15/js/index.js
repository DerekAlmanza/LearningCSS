const menu = document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});
