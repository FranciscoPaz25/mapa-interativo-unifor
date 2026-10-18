const nomeMarcador = document.getElementById("nome")
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const mapView = document.getElementById("main-maps");

let map;
let center = { lat: -3.7691928156109906, lng: -38.479618025973174 };

function initMap() {
    map = new google.maps.Map(mapView, {
        center,
        zoom: 19,
        mapId: "DEMO_MAP_ID"
    });

    addMarker(
        parseFloat(center.lat),
        parseFloat(center.lng),
        "Centro de Convivência"
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