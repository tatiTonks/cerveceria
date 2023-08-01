(function () {
  window.inputNumber = function (el) {
    var min = el.attr("min") || false;
    var max = el.attr("max") || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function () {
      init($(this));
    });

    function init(el) {
      els.dec.on("click", decrement);
      els.inc.on("click", increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if (!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if (!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  };
})();

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
  { url: '1.webp', estilo:'background-position-y: 30%', alt: 'foto 1' },
  { url: '2.webp', estilo: 'background-position-y: 70%',alt: 'foto 2' },
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


  let seccionFondos = document.querySelector("#sliderPolas")

  seccionFondos.setAttribute("style", `background-image: url('assets/img/${selectedImage.url}'); ${selectedImage.estilo}`)
  previousIndex = randomIndex; // Actualiza el índice anterior
}
setInterval(changeBackground, 3000);
changeBackground()