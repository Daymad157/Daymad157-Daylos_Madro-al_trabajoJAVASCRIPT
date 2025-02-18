// Inicialización del mapa con coordenadas de "Av. del Comercio, 11, El Viso del Alcor"
var map = L.map('map').setView([37.3866, -5.7187], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([37.3866, -5.7187]).addTo(map)
    .bindPopup("<b>Mi Empresa</b><br>Av. del Comercio, 11, El Viso del Alcor")
    .openPopup();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        var userLatLng = [position.coords.latitude, position.coords.longitude];

        L.Routing.control({
            waypoints: [
                L.latLng(userLatLng[0], userLatLng[1]),
                L.latLng(37.3866, -5.7187)
            ],
            routeWhileDragging: true
        }).addTo(map);
    }, () => {
        alert("No se pudo obtener tu ubicación. Mostrando solo la ubicación de la empresa.");
    });
} else {
    alert("Tu navegador no soporta geolocalización. Mostrando solo la ubicación de la empresa.");
}
