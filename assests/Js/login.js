let credentials = { Username: "admin@admin.com", Password: "123" };
let EmailInput = document.querySelector("#form2Example1");
let PassInput = document.querySelector("#form2Example2");
let LoginAccess = document.querySelector("#BtnIniciar");
LoginAccess.addEventListener("click", function () {
  let emailValue = EmailInput.value;
  let passValue = PassInput.value;

  if (
    emailValue === credentials.Username &&
    passValue === credentials.Password
  ) {
    Swal.fire({
      title: "<strong>Bienvenido!</strong>",
      icon: "error",
      html: "Acceso concedido",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: '<a href="index.html">Continuar</a>',
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"> Cancelar</i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  } else {
    Swal.fire({
      title: "<strong>ERROR</strong>",
      icon: "error",
      html: "Usuario o contraseña incorrectos. Por favor, inténtalo nuevamente. ",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Aceptar",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: '<i class="fa fa-thumbs-down"> Cancelar</i>',
      cancelButtonAriaLabel: "Thumbs down",
    });
  }
});
