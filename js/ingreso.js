function validar_usuario() {

    let nombre_usuario = document.getElementById("usuario");
    let pass = document.getElementById("password");

    let recup_arreglo = localStorage.getItem("usuarios");
    recup_arreglo = JSON.parse(recup_arreglo)

    for (let usuario of recup_arreglo) {

        if (nombre_usuario.value == usuario.nombre && pass.value == usuario.pass) {

           let redireccion_index = document.getElementById("redireccion_index");
           redireccion_index.innerHTML = Swal.fire({
            icon: "success",
            title: "Bienvenido/a" ,
            text: "No hay internet",
            confirmButtonText: "<a href='../index.html'>Iniciar sesión</a>",
           });

            
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Usuario no registrado",
                text: "Revise que su usuario y contraseña esten bien escritos, o cree un usuario y contraseña si no tiene uno para poder ingresar"

            })
        }
    }
}

btn_ingreso = document.getElementById("btn_ingreso");
btn_ingreso.addEventListener("click", validar_usuario);