const menuBtn = document.getElementById("menu-btn");
const titleMenu = document.getElementById("title-menu");
const navbar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");
const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const slides = carousel.querySelectorAll("li");

let currentSlide = 0;
const heroHeading = document.querySelector("main h1");
const heroParagraph = document.querySelector("main p");

const heroDescriptions = [
  {
    heading: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function inbringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    heading: "We are available all across the globe",
    paragraph:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don'thesitate to contact us today.",
  },
  {
    heading: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office",
  },
];

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

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentSlide * 100}%)`;

  heroHeading.textContent = heroDescriptions[currentSlide].heading;
  heroParagraph.textContent = heroDescriptions[currentSlide].paragraph;
}

menuBtn.addEventListener("click", showMenu);
closeBtn.addEventListener("click", hideMenu);

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

updateCarousel(); // Initialize carousel on page load
