let info_tarjetas_infantil = [
    {img: "../imagenes/infantil campera.jpg", alt: "Camperas Infantiles", titulo: "CAMPERAS", texto: "Los mejores abrigos para los más pequeños" },
    { img: "../imagenes/infantil gorros.jpg", alt: "Gorros Infantiles", titulo: "GORROS", texto: "Materiales ideales para los mas pequeños, sin incomodidades y súper resistentes"},
    { img: "../imagenes/pantalonInfantil.jpg", alt: "Pantalones Infantiles", titulo: "PANTALONES", texto: "Accedé y descubrí todo lo que tenemos para ofrecerte"},
    {img: "../imagenes/zapasInfantil.jpg", alt: "Zapatillas Infantiles", titulo: "ZAPATILLAS", texto: "Materiales más resistentes para los más traviesos del hogar" }
]

let card_infantil = document.getElementById("card_template_infantil");

info_tarjetas_infantil.map((x) => {

    card_infantil.innerHTML += `
    <article class="subdesInfa">
                <div class="card" style="width: 18rem;">
                    <img src="${x.img}" class="card-img-top" alt="${x.alt}">
                    <div class="card-body">
                        <h5 class="card-title"><b>${x.titulo}</b></h5>
                        <p class="card-text">${x.texto}</p>
                        <a href="#" class="btn btn-success">Descubrí ahora</a>
                    </div>
                </div>
            </article>`
});