const nomeMarcador = document.getElementById("nome")
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const btnAdicionar = document.getElementById("btn-adicionar");
const mapView = document.getElementById("main-maps");

let map;
let center = { lat: -3.7687837789857697, lng: -38.47807455502943 };

function initMap() {
    map = new google.maps.Map(mapView, {
        center,
        zoom: 19,
        mapId: "DEMO_MAP_ID"
    });

    addMarker(
        parseFloat(center.lat),
        parseFloat(center.lng),
        "UNIFOR"
    );
}

function addMarker (lat, lng, titulo) {
    const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: {lat: lat, lng: lng},
        title: titulo
    });

    if (titulo.trim()) {
        const infoWindow = new google.maps.InfoWindow({
            content: titulo
        });
    
        infoWindow.open({
            anchor: marker,
            map: map
        });
    }

}

btnAdicionar.addEventListener("click", function () {
    addMarker(
        parseFloat(latitude.value),
        parseFloat(longitude.value),
        nomeMarcador.value
    );
});

