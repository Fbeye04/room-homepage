const menuBtn = document.getElementById("menu-btn");
const titleMenu = document.getElementById("title-menu");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");

function showMenu() {
  titleMenu.classList.add("hidden");
  titleMenu.classList.remove("flex");
  navbar.classList.remove("hidden");
  navbar.classList.add("flex");
}

function hideMenu() {
  titleMenu.classList.remove("hidden");
  titleMenu.classList.add("flex");
  navbar.classList.remove("flex");
  navbar.classList.add("hidden");
}

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);
