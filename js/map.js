// Inicialización del mapa con coordenadas de "Av. del Comercio, 11, El Viso del Alcor"
var map = L.map('mapid').setView([37.387391, -5.722501], 13); // Reemplaza LATITUD y LONGITUD por las coordenadas exactas

// Agregar una capa de mapa (en este caso OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Agregar un marcador en la dirección de la empresa
var marker = L.marker([LATITUD, LONGITUD]).addTo(map); // Reemplaza LATITUD y LONGITUD por las coordenadas exactas

// Agregar un popup con la información de la empresa
marker.bindPopup("<b>Mi Empresa</b><br>Dirección: Av. del Comercio, 11, El Viso del Alcor").openPopup();
