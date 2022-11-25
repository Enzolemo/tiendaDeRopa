
let info_tarjetas = [
    {img: "./imagenes/50Off.jpg", alt: "50% OFF", titulo:"TODO A MITAD DE PRECIO" , texto:"Toda nuestra colección para adultos y niños en rebajas de hasta 50% OFF"} ,
    {img: "./imagenes/vendido2.jpg", alt: "Reviví la temporada pasada", titulo:"REVIVI LA TEMPORADA PASADA" , texto:"Aún estas a tiempo de conseguir aquello que olvidaste"},
    {img: "./imagenes/loMasVendido2.jpg", alt: "Lo mas vendido", titulo:"LO MAS VENDIDO" , texto:"No te quedes fuera de las tendencias, accedé para conocer todo lo que tenemos para ofrecerte"}
]

let card = document.getElementById("card-template");

info_tarjetas.map((x)=>{
    card.innerHTML += `
    <article class="subdesIndex">
        <div class="card" style="width: 18rem;">
          <img src="${x.img}" class="card-img-top" alt="${x.alt}">
          <div class="card-body">
            <h5 class="card-title"><b>${x.titulo}</b></h5>
            <p class="card-text">${x.texto}</p>
            <a href="#" class="btn btn-success">Descubrí ahora</a>
          </div>
        </div>
      </article>
    `;
})