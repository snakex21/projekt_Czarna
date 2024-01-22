document.addEventListener('DOMContentLoaded', function() {
    var addParcelBtn = document.getElementById('addParcelButton');
    var hiddenPanel = document.getElementById('hiddenPanel');
    var backButton = document.getElementById('backButton');
    var mouseCoordinates = document.getElementById('mouse-coordinates'); // Make sure this ID matches your element

    // Function to toggle the side panel
    function togglePanel() {
        if (hiddenPanel.classList.contains('active')) {
            // Panel is open; close it
            hiddenPanel.classList.remove('active');
            hiddenPanel.style.right = '-600px';
            mouseCoordinates.style.transform = 'translateX(0)';
        } else {
            // Panel is closed; open it
            hiddenPanel.classList.add('active');
            hiddenPanel.style.right = '0px';
            mouseCoordinates.style.transform = 'translateX(-450px)'; // Adjust if your panel width is different
        }
    }

    // Attach the toggle function to button click events
    addParcelBtn.addEventListener('click', togglePanel);
    backButton.addEventListener('click', togglePanel);















    // Function to add new coordinate inputs
    document.getElementById('addCoordinate').addEventListener('click', function() {
        const coordinatesContainer = document.getElementById('coordinatesContainer');
        const newCoordinateDiv = document.createElement('div');
        newCoordinateDiv.className = 'coordinate';
        newCoordinateDiv.innerHTML = `
            <input type="text" name="latitude[]" required placeholder="Szerokość geograficzna">
            <input type="text" name="longitude[]" required placeholder="Długość geograficzna">
        `;
        coordinatesContainer.appendChild(newCoordinateDiv);
    });
    document.getElementById('removeCoordinate').addEventListener('click', function() {
        const coordinatesContainer = document.getElementById('coordinatesContainer');
        if (coordinatesContainer.getElementsByClassName('coordinate').length > 1) {
            coordinatesContainer.removeChild(coordinatesContainer.lastElementChild);
        } else {
            alert('Musi być przynajmniej jeden koordynat.');
        }
    });


    // Function to handle form submission
    document.getElementById('parcelForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const parcelNumber = document.getElementById('parcelNumber').value;
        const ownerName = document.getElementById('ownerName').value; // Assuming you have an input field for owner's name
        const latitudes = document.getElementsByName('latitude[]');
        const longitudes = document.getElementsByName('longitude[]');

        let coordinates = [];
        for (let i = 0; i < latitudes.length; i++) {
            coordinates.push(`[${parseFloat(latitudes[i].value)}, ${parseFloat(longitudes[i].value)}]`);
        }

        const normalizedParcelNumber = parcelNumber.replace('/', ''); // Normalize the parcel number
        const ownerId = ownerName.replace(/ /g, '_'); // Replace spaces with underscores for the ownerId

        // Construct the script for the polygon
        const polygonScript = `
    var polygon${normalizedParcelNumber} = L.polygon([
        ${coordinates.join(',\n')}
    ]).addTo(map).bindPopup('To jest działka numer ${parcelNumber}.');
    
    polygon${normalizedParcelNumber}.on('mouseover', function(event) {
        showParcelNumber(polygon${normalizedParcelNumber});
        highlightParcel(polygon${normalizedParcelNumber});
    });
    
    polygon${normalizedParcelNumber}.on('mouseout', function(event) {
        hideParcelNumber();
        unhighlightParcel();
    });
    
    polygon${normalizedParcelNumber}.on('click', function(event) {
        window.location.href = '../wlasciciele/szablonok.html?ownerId=${ownerId}';
    });
    
    polygon${normalizedParcelNumber}.plotId = '${parcelNumber}';`;

        // Generate a text file to download
        // Generate a text file to download
        const blob = new Blob([polygonScript], { type: 'text/plain' });
        const link = document.createElement('a');
        link.download = `parcel-${normalizedParcelNumber}.txt`; // Change the extension to .txt here
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);










    });
});