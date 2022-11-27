
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

let api_key = "f6500d9f957da26645433da7818c1105";

navigator.geolocation.getCurrentPosition(showPosition)

function showPosition(position){


    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    fetch ("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&lang=es&units=metric&appid="+api_key)
    .then(response=>response.json())
    .then(data=>{
        let padre = document.getElementById("contenedor_clima");
        let clima = document.createElement("div");
        clima.innerHTML = `<p><b>Ciudad: ${data.name}</b></p>
                            <p><b>Estado del clima: ${data.weather[0].description}</b></p>
                            <p><b>Temperatura actual: ${data.main.temp}°</b></p>
                            <p><b>Temperatura maxima: ${data.main.temp_max}°</b></p>
                            <p><b>Temperatura minima: ${data.main.temp_min}°</b></p>`

        padre.append(clima);
    })
    
}
