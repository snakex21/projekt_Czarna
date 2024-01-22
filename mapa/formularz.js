document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('addOwnerButton');
    var panel = document.getElementById('panel');

    btn.addEventListener('click', function () {
        // This checks if the panel is off-screen
        if (panel.style.left === '0px') {
            panel.style.left = '-600px'; // Hide the panel
        } else {
            panel.style.left = '0px'; // Show the panel
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var cancelButton = document.getElementById('cancelButton');
    var panel = document.getElementById('panel');

    cancelButton.addEventListener('click', function () {
        panel.style.left = '-600px'; // Adjust this value to the width of your side panel
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addOwnerForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Zbieranie danych z formularza i tworzenie identyfikatora właściciela
        var ownerName = document.getElementById('ownerNamenum').value.trim();
        var ownerID = ownerName.replace(/\s+/g, '_');

        // Zbieranie i przetwarzanie danych formularza
        var data = {
            orderNumber: document.getElementById('orderNumber').value.trim(),
            protocolDate: formatDate(document.getElementById('protocolDate').value),
            protocolLocation: document.getElementById('protocolLocation').value.trim(),
            ownerName: ownerName,
            genealogy: document.getElementById('genealogy').value.trim(),
            houseNumber: document.getElementById('houseNumber').value.trim(),
            buildingPlots: parsePlots(document.getElementById('buildingPlots').value),
            agriculturalPlots: parsePlots(document.getElementById('agriculturalPlots').value),
            ownershipHistory: document.getElementById('ownershipHistory').value.trim().replace(/\n/g, "\\n"),
            remarks: document.getElementById('remarks').value.trim().replace(/\n/g, "\\n")
        };

        // Formatowanie danych do odpowiedniego stringa
        var formattedData = formatDataForOutput(ownerID, data);

        // Przygotowanie danych do zapisu w pliku tekstowym
        var blob = new Blob([formattedData], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);

        // Tworzenie linku do pobrania i symulacja kliknięcia
        var downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = ownerName + '.txt';

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        // Funkcje pomocnicze
        function formatDate(dateString) {
            var date = new Date(dateString);
            var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
            return date.toLocaleDateString('pl-PL', options).replace(/ /g, ' ');
        }

        function parsePlots(plotsString) {
            return plotsString.split(',').map(function (plot) {
                plot = plot.trim();
                if (plot.includes('/')) {
                    var [numerator, denominator] = plot.split('/');
                    return { numerator: numerator, denominator: denominator };
                } else {
                    return plot;
                }
            });
        }

        function formatDataForOutput(id, data) {
            let output = `"${id}": {\n`;
            Object.keys(data).forEach(key => {
                output += `    ${key}: `;
                if (typeof data[key] === 'string') {
                    if (key === 'ownershipHistory' || key === 'remarks') {
                        // Zapisz jako wielolinijkowy string
                        output += "`" + data[key] + "`,\n";
                    } else {
                        output += `"${data[key]}",\n`;
                    }
                } else if (Array.isArray(data[key])) {
                    output += `[\n`;
                    data[key].forEach(item => {
                        if (typeof item === 'string') {
                            output += `        "${item}",\n`;
                        } else {
                            output += `        { numerator: ${item.numerator}, denominator: ${item.denominator} },\n`;
                        }
                    });
                    output += `    ],\n`;
                }
            });
            output += `},\n`;
            return output;
        }
    });
});
