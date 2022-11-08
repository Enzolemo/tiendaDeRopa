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








