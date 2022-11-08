function validar_usuario() {

    let nombre_usuario = document.getElementById("usuario");
    let pass = document.getElementById("password");

    let recup_arreglo = localStorage.getItem("usuarios");
    recup_arreglo = JSON.parse(recup_arreglo)

    for (let usuario of recup_arreglo) {

        if (nombre_usuario.value == usuario.nombre && pass.value == usuario.pass) {

           let redireccion_index = document.getElementById("redireccion_index");
           redireccion_index.innerHTML = "<button><a href='../index.html'>INICIAR SESION</a></button>"

            
        }
        else{
            console.log("usuario incorrecto")
        }
    }
}

btn_ingreso = document.getElementById("btn_ingreso");
btn_ingreso.addEventListener("click", validar_usuario);