
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

var navToggleState = false;

navToggle.addEventListener("click", () => {
  if (!navToggleState) {
    navToggleState = true;
    navToggle.classList.add("toggle__active");
    navMenu.classList.remove("nav__menu");
    navMenu.classList.add("show-menu");
  } else {
    navToggleState = false;
    navToggle.classList.remove("toggle__active");
    navMenu.classList.remove("show-menu");
    navMenu.classList.add("nav__menu");
  }
});
