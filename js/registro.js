/* registro sin validación
let btn_registro = document.getElementById("btn_registro");

let arreglo_usuarios = [];

function nuevo_usuario() {

    let nombre_usuario = document.getElementById("usuario");
    let pass = document.getElementById("password");

    let usuario = { nombre: nombre_usuario.value, pass: pass.value };

    arreglo_usuarios.push(usuario);

    let arreglo_JSON = JSON.stringify(arreglo_usuarios);
    localStorage.setItem("usuarios", arreglo_JSON);

}

btn_registro.addEventListener("click" , nuevo_usuario);
*/

//Registro con validacion 
let btn_registro = document.getElementById("btn_registro");

let arreglo_usuarios = [];

function nuevo_usuario() {

    let nombre_usuario = document.getElementById("usuario");
    let pass = document.getElementById("password");

    let usuario = { nombre: nombre_usuario.value, pass: pass.value };

    arreglo_usuarios.push(usuario);

    function validar_usuario(usuario) {

        return usuario.nombre == usuario.nombre
    }

    if (localStorage.getItem('usuarios') != null ) {

        let recuperando_arreglo = localStorage.getItem("usuarios");
        recuperando_arreglo = JSON.parse(recuperando_arreglo);
        console.log(recuperando_arreglo);

        

        let resultadoFind = recuperando_arreglo.find(validar_usuario);
        

        if (resultadoFind = arreglo_usuarios) {
          
            Swal.fire({
                icon: "error",
                title: "Usuario ya registrado",
                text: "Intente nuevamente"

            })
        }
        else {

            let arreglo_JSON = JSON.stringify(arreglo_usuarios);
            localStorage.setItem("usuarios", arreglo_JSON);
        }
    }
    else{

        let arreglo_JSON = JSON.stringify(arreglo_usuarios);
            localStorage.setItem("usuarios", arreglo_JSON);
    }


}

btn_registro.addEventListener("click", nuevo_usuario);







