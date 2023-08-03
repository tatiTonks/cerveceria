// inputNumber($(".input-number"));

/* Creacion del Log In

User_id: Admin
Password: Admin123

Botno debera tener algo asi 
<button onclick="window.location.href='/page2'">Continue</button>
*/

// let credentials = { Username: "Admin", Password: "123" };
// let EmailInput = document.querySelector("#form2Example1");
// let PassInput = document.querySelector("#form2Example2");
// let LoginAccess = document.querySelector("#BtnIniciar");

// LoginAccess.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// if (EmailInput.value = credentials.Username && PassInput.value =)

// console.log(credentials.Username);

// Taitana modificaciones

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

window.addEventListener("scroll", () => {
  let elementoSlider = document.querySelector("#carouselPola");
  let altoElemento = elementoSlider.offsetHeight;
  let scrollY = window.scrollY || window.pageYOffset; // Scroll vertical (para navegadores antiguos y modernos)
  let elemento = document.querySelector("#navbarPola");
  let enlaces = document.querySelectorAll(".nav-link");
  // console.log(scrollY);

  if (altoElemento >= 500) {
    if (scrollY <= 558) {
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
  } else {
    if (scrollY <= 200) {
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
  }
});

/* Alejandra Updates */

if (sessionStorage.getItem("confirma_edad") == null) {
  Swal.fire({
    title: "Bienvenido a Pola del Pub",
    text: "El exceso de alcohol es perjudicial para la salud. Prohíbase el expendio de bebidas embriagantes a menores de edad.",
    showCancelButton: true,
    confirmButtonColor: "#1c1d1d",
    cancelButtonColor: "#1c1d1d",
    confirmButtonText: "Tengo +18 años",
    cancelButtonText: "Soy menor de edad",
  }).then((result) => {
    if (result.isConfirmed) {
      sessionStorage.setItem("confirma_edad", 1);
    } else {
      // Si hace clic en el botón "Soy menor de edad", redirigirlo a otra página.
      window.location.href =
        "https://i.pinimg.com/564x/55/e8/42/55e8422f53f322c307443aa6e8e670ab.jpg";
    }
  });
}

/* slider */

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
    `background-image: url('assests/Img/section/${selectedImage.url}'); ${selectedImage.estilo}`
  );
  previousIndex = randomIndex; // Actualiza el índice anterior
}
setInterval(changeBackground, 3000);
changeBackground();
