const btnAdicionar = document.getElementById("btn-adicionar");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const nomeMarcador = document.getElementById("nome-marcador");
const mapView = document.getElementById("maps-view");

let map;

function initMap() {
    map = new google.maps.Map(mapView, {
        center: { lat: -3.7698813554732262, lng: -38.47914681822398 },
        zoom: 17
    });
}

function adicionarMarcador(lat, lng, titulo) {
    const marcador = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: titulo
    });
}

btnAdicionar.addEventListener("click", function () {
    adicionarMarcador(
        parseFloat(latitude.value),
        parseFloat(longitude.value),
        nomeMarcador.value
    )
});