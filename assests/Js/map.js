let map = L.map('map').setView([4.667790, -74.053640], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let locations = [
    { name: "Zona T", lat: 4.667790, lng: -74.053640, direccion: "Cra. 12a #83-48, Bogotá.", },
    { name: "Usaquén", lat: 4.694760, lng: -74.031580, direccion: "Cra. 6a #117-45, Bogotá", },
    { name: "Pepe Sierra", lat: 4.698150, lng: -74.047610, direccion: 'Cl. 116 # 18-12, Bogotá', },
    { name: "Quinta Camacho", lat: 4.654990, lng: -74.059290, direccion: 'Cra. 10a # 70 - 48, Bogotá', },
    { name: "San Felipe", lat: 4.667900, lng: -74.063750, direccion: 'Cl. 78 #23-55, Bogotá',  },
    { name: "Parque de la 93", lat: 4.675700, lng: -74.048850,  direccion: "Cra. 12 #93-43, Localidad de Chapinero, Bogotá, Cundinamarca" }
  ];
  
  locations.forEach(function(locations) {
    let marker = L.marker([locations.lat, locations.lng]).addTo(map);
    marker.bindPopup(`<b>${locations.name}</b><br>${locations.direccion}.`).openPopup();
  });
  
  
  
  
  