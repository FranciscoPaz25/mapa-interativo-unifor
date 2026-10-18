const nomeMarcador = document.getElementById("nome");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");
const btnAdicionar = document.getElementById("btn-adicionar");

btnAdicionar.addEventListener("click", function () {
    addMarker(
        parseFloat(latitude.value),
        parseFloat(longitude.value),
        nomeMarcador.value
    );
});

