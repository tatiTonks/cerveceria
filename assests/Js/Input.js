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
