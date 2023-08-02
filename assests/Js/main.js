// inputNumber($(".input-number"));

// Taitana modificaciones

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY || window.pageYOffset; // Scroll vertical (para navegadores antiguos y modernos)
  let elemento = document.querySelector("#navbarPola");
  let enlaces = document.querySelectorAll(".nav-link");

  if (scrollY <= 800) {
    elemento.classList.remove("bg-white");
    elemento.setAttribute("data-bs-theme", "dark");
    enlaces.forEach((enlaceNav) => {
      enlaceNav.classList.add("text-white");
    });
  } else {
    elemento.classList.add("bg-white");
    elemento.removeAttribute("data-bs-theme");
    enlaces.forEach((enlaceNav) => {
      enlaceNav.classList.remove("text-white");
    });
  }
});

/* ALejandra Updates */

const images = [
  {
    url: "2.webp",
    estilo: "background-position-y: 30%",
    alt: "foto 1",
  },
  {
    url: "2.webp",
    estilo: "background-position-y: 70%",
    alt: "foto 2",
  },
];
let previousIndex = -1; // Índice de la imagen anterior
function getRandomIndex() {
  let randomIndex = Math.floor(Math.random() * images.length);
  // Si el índice es igual al índice anterior, elige otro aleatoriamente
  while (randomIndex === previousIndex) {
    randomIndex = Math.floor(Math.random() * images.length);
  }
  return randomIndex;
}

function changeBackground() {
  const randomIndex = getRandomIndex();
  const selectedImage = images[randomIndex];

  let seccionFondos = document.querySelector("#sliderPolas");

  seccionFondos.setAttribute(
    "style",
    `background-image: url('assets/Img/${selectedImage.url}'); ${selectedImage.estilo}`
  );
  previousIndex = randomIndex; // Actualiza el índice anterior
}
setInterval(changeBackground, 3000);
changeBackground();
