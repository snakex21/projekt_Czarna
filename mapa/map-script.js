var map;

var polygon1153, anotherPolygon, scan3Area;

function initializeMap() {
    var southWest = L.latLng(-60, 0),
        northEast = L.latLng(0, 50),
        bounds = L.latLngBounds(southWest, northEast);

    map = L.map('map', {
        maxBounds: bounds, // Sets the maximum bounds
        minZoom: 4.45, // Sets the minimum zoom level (maximum zoom-out)
        maxZoom: 13.2 // Sets the maximum zoom level (maximum zoom-in)
    }).setView([51.505, -0.09], 13);


    loadDefaultMap();

    // do obszarów
    polygon1153 = L.polygon([
        [-14.18, 10],
        [-14.18, 10.659],
        [-14.54, 10.62],
        [-14.54, 10]
    ]).addTo(map).bindPopup('To jest przykładowy znacznik na mapie.');

    polygon1153.on('mouseover', function(event) {
        showParcelNumber(polygon1153);
        highlightParcel(polygon1153);
    });

    polygon1153.on('mouseout', function(event) {
        hideParcelNumber();
        unhighlightParcel();
    });

    polygon1153.on('click', function(event) {
        window.location.href = '../wlasciciele/szablonok.html?ownerId=Adam_Sak';
    });

    polygon1153.plotId = '1153';
    //




    polygon1154 = L.polygon([
        [-11.45, 10.019],
        [-11.5, 10.87],
        [-14.18, 10.659],
        [-14.18, 10]
    ]).addTo(map).bindPopup('To jest przykładowy znacznik na mapie.');

    polygon1154.on('mouseover', function(event) {
        showParcelNumber(polygon1154);
        highlightParcel(polygon1154);
    });

    polygon1154.on('mouseout', function(event) {
        hideParcelNumber();
        unhighlightParcel();
    });

    polygon1154.on('click', function(event) {
        window.location.href = '../wlasciciele/szablonok.html?ownerId=Michal_Ziaja';
    });
    polygon1154.plotId = '1154';




    polygon8017 = L.polygon([
        [-27.03, 13.293],
        [-27.19598, 13.25],
        [-27.306, 13.5]


    ]).addTo(map).bindPopup('To jest przykładowy znacznik na mapie.');

    polygon8017.on('mouseover', function(event) {
        showParcelNumber(polygon8017);
        highlightParcel(polygon8017);
    });

    polygon8017.on('mouseout', function(event) {
        hideParcelNumber();
        unhighlightParcel();
    });

    polygon8017.on('click', function(event) {
        window.location.href = '../wlasciciele/szablonok.html?ownerId=Anna_Micek';
    });

    polygon8017.plotId = '801/7';

    

    // w map-script.js, wewnątrz funkcji initializeMap
    var script = document.createElement('script');
    script.src = 'mapzoom.js';
    document.head.appendChild(script);
    // w map-script.js, wewnątrz funkcji initializeMap
    initializeMapZoom(map); // po zainicjowaniu mapy

}

//
function loadDefaultMap() {
    var scanPositions = [
        ['empty', 'scan3', 'scan4', 'scan5', 'empty'],
        ['scan7', 'scan8', 'scan12', 'scan13', 'scan17'],
        ['scan9', 'scan10', 'scan14', 'scan15', 'scan18'],
        ['scan21', 'scan22', 'scan25', 'scan26', 'scan19'],
        ['empty', 'scan23', 'scan27', 'scan28', 'empty'],
        ['empty', 'empty', 'empty', 'scan29', 'empty']
    ];

    for (var i = 0; i < scanPositions.length; i++) {
        for (var j = 0; j < scanPositions[i].length; j++) {
            var scan = scanPositions[i][j];
            if (scan) {
                var imageUrl = getScanImageUrl(scan);
                var bounds = getScanBounds(i, j);
                L.imageOverlay(imageUrl, bounds).addTo(map);
            }
        }
    }

    function getScanBounds(i, j) {
        var latLngs = [
            [i, j],
            [i + 1, j],
            [i + 1, j + 1],
            [i, j + 1]
        ];

        var bounds = latLngs.map(function(latLng) {
            return [latLng[0] * -10, latLng[1] * 10]; // Adjust the scale as needed
        });

        return bounds;
    }

    var bounds14Scan = getScanBounds(2, 2); // Przykład dla skanu 14
    map.fitBounds(bounds14Scan, { padding: [50, 50], maxZoom: 12 });


    L.marker(map.getBounds().getCenter()).addTo(map)
        .bindPopup('Domyślna mapa z lat 1796-1800 autorstwa Johna Cary\'ego.');
}


function getScanImageUrl(scan) {
    // Assuming 'mapy' is the root folder, and 'skany' is a subfolder containing scan images.
    // Assuming filenames follow the pattern 'scan' + number + '.jpg' (without a space after 'scan').
    return scan ? '../skany/' + scan + '.jpg' : '../skany/empty.jpg';
}

function getParcelNumber(polygon) {
    if (polygon === polygon1153) {
        return '1153';
    } else if (polygon === '1154') {
        // Dodaj numer dla anotherPolygon
        return '1154';
    }
    // Dodaj warunki dla innych polygonów, jeśli są
    // np. else if (polygon === innyPolygon) { return 'numer_inny'; }

    // Domyślnie zwróć pusty string lub inny odpowiedni numer
    return '';
}



function navigateToOwnerPage(parcelNumber) {
    // Tworzymy ścieżkę do folderu dzialki i nazwę pliku dla strony właściciela na podstawie numeru działki
    var ownerPageUrl = '../wlasciciele/szablonok.html' + parcelNumber + '.html';
    // Przechodzimy do nowej strony
    window.location.href = ownerPageUrl;
}


window.addEventListener('DOMContentLoaded', function() {
    initializeMap();



});

document.addEventListener('DOMContentLoaded', function() {
    // Pobieranie elementów DOM
    const searchInputOwners = document.getElementById('ownerSearch');
    const ownersList = document.getElementById('ownersList');
    const searchInputParcels = document.getElementById('parcelSearch');
    const parcelsList = document.getElementById('parcelsPanel'); // Zakładam, że używasz tego ID dla kontenera działek


    // Funkcja do filtrowania właścicieli
    function filterOwners(event) {
        const searchTerm = event.target.value.toLowerCase();
        const owners = ownersList.getElementsByClassName('ownerIcon');

        for (const owner of owners) {
            const ownerName = owner.textContent.toLowerCase();
            if (ownerName.startsWith(searchTerm)) {
                owner.style.display = ''; // Pokaż właściciela
            } else {
                owner.style.display = 'none'; // Ukryj właściciela
            }
        }
    }

    // Funkcja do filtrowania działek
    function filterParcels(event) {
        const searchTerm = event.target.value.toLowerCase();
        const parcels = parcelsList.getElementsByClassName('parcelIcon'); // Zakładam, że używasz tej klasy dla działek

        for (const parcel of parcels) {
            const parcelName = parcel.textContent.toLowerCase();
            if (parcelName.startsWith(searchTerm)) {
                parcel.style.display = ''; // Pokaż działkę
            } else {
                parcel.style.display = 'none'; // Ukryj działkę
            }
        }
    }

    // Dodawanie nasłuchiwania na zdarzenie wpisywania
    searchInputOwners.addEventListener('input', filterOwners);
    searchInputParcels.addEventListener('input', filterParcels); // Nasłuchiwanie na pasku wyszukiwania działek
});

var coordsDiv = document.getElementById('mouse-coordinates');
coordsDiv.style.left = 'auto'; // Usuwa ustawienie left, jeśli było zdefiniowane
coordsDiv.style.right = '178px'; // Ustawia pasek po prawej stronie

//skrypt na skalowanie się paska włąścicieli z ekranem
function setOwnerIconWidth() {
    var icons = document.querySelectorAll('.ownerIcon'); // Select all owner icons
    var maxWidth = 0;

    // First pass to determine the maximum width needed
    icons.forEach(function(icon) {
        var textLength = icon.textContent.trim().length;
        var width = Math.max(textLength * 6, 110); // Estimate width based on text length
        maxWidth = Math.max(maxWidth, width);
    });

    // Second pass to set all icons to the determined maximum width
    icons.forEach(function(icon) {
        icon.style.width = maxWidth + 'px'; // Set the width to the maximum width
        icon.style.height = '110px'; // Set a fixed height for all icons
    });
}

// Call the function on document load or when the list of owners is updated
document.addEventListener('DOMContentLoaded', setOwnerIconWidth);

function searchPlots() {
    var searchTerm = document.getElementById('parcelSearch').value.trim(); // Usunięcie białych znaków z początku i końca

    map.eachLayer(function(layer) {
        if (layer instanceof L.Polygon) {
            // Sprawdź, czy pole wyszukiwania nie jest puste i czy pasuje do ID działki
            if (searchTerm && layer.plotId && layer.plotId.startsWith(searchTerm)) {
                // Podświetl pasującą działkę na intensywny czerwony kolor
                layer.setStyle({ color: '#FF0000', weight: 3 }); // Intensywny czerwony
            } else {
                // Jeśli pole wyszukiwania jest puste, wszystkie działki są niebieskie, w przeciwnym razie są brązowe
                layer.setStyle({ color: searchTerm ? '#8B4513' : '#3388ff', weight: 1 }); // Brązowy dla niepasujących, niebieski jako domyślny
            }
        }
    });
}

// Dodaj funkcję 'searchPlots' jako listenera zdarzeń do pola wyszukiwania
document.getElementById('parcelSearch').addEventListener('input', searchPlots);


var ownerToPlotsMap = {
    'Michal_Ziaja': ['1154'],
    'Adam_Sak': ['1153'],
    'Anna_Micek':['801/7']
    // Dodaj inne właścicieli i ich działki według potrzeb
};

// Ta funkcja będzie wywoływana, gdy mysz wchodzi lub opuszcza ikonę właściciela.
function highlightOwnerPlots(ownerId, highlight) {
    map.eachLayer(function (layer) {
        if (layer instanceof L.Polygon) {
            if (ownerToPlotsMap[ownerId] && ownerToPlotsMap[ownerId].includes(layer.plotId)) {
                // Jeśli podświetlamy, ustaw jasny kolor, w przeciwnym razie przywróć domyślny.
                var style = highlight ? { color: '#FF0000', weight: 3 } : { color: '#3388ff', weight: 1 };
                layer.setStyle(style);
            }
        }
    });
}

// Teraz, dla każdej ikony właściciela, musimy dodać nasłuchiwacze zdarzeń dla zdarzeń wejścia myszy i opuszczenia.
document.querySelectorAll('.ownerIcon').forEach(function (icon) {
    var ownerId = icon.id; // Pobierz identyfikator właściciela z atrybutu id

    icon.addEventListener('mouseenter', function () {
        highlightOwnerPlots(ownerId, true); // Podświetl działki po najechaniu myszą
    });

    icon.addEventListener('mouseleave', function () {
        highlightOwnerPlots(ownerId, false); // Przywróć działki po opuszczeniu myszy
    });
});
