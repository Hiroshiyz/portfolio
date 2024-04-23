const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
let menu = document.querySelector("#menu");
let nav = document.querySelector(".nav");
menu.onclick = () => {
  menu.classList.toggle("menu");
  nav.classList.toggle("open");
};
window.onscroll = () => {
  menu.classList.remove("menu");
  nav.classList.remove("open");
};
