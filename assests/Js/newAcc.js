document.getElementById("crearBoton").addEventListener("click", function () {
  const nombre = document.getElementById("Inombre").value;
  const apellido = document.getElementById("IApellido").value;
  const correo = document.getElementById("ICorreo").value;
  const contraseña = document.getElementById("IContraseña").value;

  if (!nombre || !apellido || !correo || !contraseña) {
    let camposFaltantes = [];
    if (!nombre) camposFaltantes.push("Nombre");
    if (!apellido) camposFaltantes.push("Apellido");
    if (!correo) camposFaltantes.push("Correo Electrónico");
    if (!contraseña) camposFaltantes.push("Contraseña");

    // alert("Faltan los siguientes campos: " + camposFaltantes.join(", "));
    Swal.fire({
      icon: "error",
      title: `Faltan los siguientes campos: ${camposFaltantes.join(", ")};`,
    });
  } else {
    alert("Formulario enviado con éxito");
    document.querySelector("#formRegistro").reset();
  }
});
