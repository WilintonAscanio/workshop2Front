const btnfeatures = document.getElementById("btnfeatures");
const btncompany = document.getElementById("btncompany");
const nav__itemFeature = document.querySelector(".nav__itemFeatures");
const nav__itemCompany = document.querySelector(".nav__itemCompany");
const nav__iconMenu = document.querySelector(".nav__iconMenu");
const btnCloseMenu = document.getElementById("btnCloseMenu");
const nav__navigation = document.querySelector(".nav__navigation");
let menu = false;

btnCloseMenu.addEventListener("click", () => {
  nav__navigation.style.display = "none";
  menu = false;
});

nav__iconMenu.addEventListener("click", () => {
  nav__navigation.style.display = "flex";
  menu = true;
});

btnfeatures.addEventListener("click", () => {
  nav__itemFeature.classList.toggle("hidden");
});

btncompany.addEventListener("click", () => {
  nav__itemCompany.classList.toggle("hidden");
});
