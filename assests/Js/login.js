let credentials = { Username: "Admin", Password: "123" };
let EmailInput = document.querySelector("#form2Example1");
let PassInput = document.querySelector("#form2Example2");
let LoginAccess = document.querySelector("#BtnIniciar");
console.log(LoginAccess);
LoginAccess.addEventListener("click", function () {
  let emailValue = EmailInput.value;
  let passValue = PassInput.value;

  if (
    emailValue === credentials.Username &&
    passValue === credentials.Password
  ) {
    window.location.href = "index.html";
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
