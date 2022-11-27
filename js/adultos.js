let info_tarjetas_adultos = [
    { img: "../imagenes/remeraAdult.jpg", alt: "Remeras adultos", titulo: "REMERAS", texto: "No te quedes fuera de la nueva tendencia en remeras para adultos" },
    { img: "../imagenes/accesAdult.jpg", alt: "Accesorios", titulo: "ACCESORIOS", texto: "No te quedes sin los últimos detalles para resaltar tu outfit" },
    { img: "../imagenes/adultosPant.jpg", alt: "Pantalones adultos", titulo: "PANTALONES", texto: "Ingresá para descubrir la nueva colección" },
    { img: "../imagenes/abrigoAdultosS.jpg", alt: "Abrigos adultos", titulo: "ABRIGOS", texto: "Hacé clic acá para no perderte nada de todo lo que tenemos para ofrecerte" }
]

let card_adulto = document.getElementById("card_template_adultos");

info_tarjetas_adultos.map((x) => {

    card_adulto.innerHTML += `
    <article class="subdesAdultos">
                <div class="card" style="width: 18rem;">
                    <img src="${x.img}" class="card-img-top" alt="${x.alt}">
                    <div class="card-body">
                        <h5 class="card-title"><b>${x.titulo}</b></h5>
                        <p class="card-text">${x.texto}</p>
                        <a href="#" class="btn btn-success">Descubrí ahora</a>
                    </div>
                </div>
            </article>`;
})