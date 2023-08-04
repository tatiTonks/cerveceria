let credentials = { Username: "admin@admin.com", Password: "123" };
let Ipass = document.querySelector("#form2Example1");
let BtnPassword = document.querySelector("#BtnPass");
BtnPassword.addEventListener("click", function () {
  let IpassValue = Ipass.value;

  if (IpassValue == credentials.Username) {
    Swal.fire({
      title: "Perfecto",
      text: "El enlace para recuperar tu contraseña ha sido enviado!",
      imageUrl:
        "https://educacion30.b-cdn.net/wp-content/uploads/2019/06/homer.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  } else {
    Swal.fire({
      title: "WTF!",
      text: "Te falta llenar el correo!",
      imageUrl: "https://media.tenor.com/yDd3GsHfJVQAAAAM/what-is.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }
});
