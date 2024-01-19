// Upewnienie się, że kod wykonuje się po załadowaniu strony i zainicjowaniu mapy
document.addEventListener('DOMContentLoaded', function() {
    if (typeof map === 'undefined') {
      console.error('Map not initialized');
      return;
    }
  
    // Funkcja do aktualizacji współrzędnych myszy
    function updateMouseCoordinates(event) {
      var coordsDiv = document.getElementById('mouse-coordinates');
      coordsDiv.innerHTML = 'Coordinates: ' + event.latlng.lat.toFixed(5) + ', ' + event.latlng.lng.toFixed(5);
    }
  
    // Dodanie nasłuchiwacza zdarzeń do mapy
    map.on('mousemove', updateMouseCoordinates);
  });
  // w mapzoom.js
function initializeMapZoom(map) {
    map.on('mousemove', function(event) {
      var coordsDiv = document.getElementById('mouse-coordinates');
      coordsDiv.innerHTML = 'Coordinates: ' + event.latlng.lat.toFixed(5) + ', ' + event.latlng.lng.toFixed(5);
    });
  }
  
  