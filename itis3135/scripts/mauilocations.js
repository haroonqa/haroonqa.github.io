
function initMap() {
    // Define map's initial center
    const center = { lat: 36.1699, lng: -115.1398 }; // Las Vegas center
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11, // Zoom level adjusted for city view
        center: center
    });

    // Store locations
    const locations = [
        {
            lat: 36.1263, // Latitude for the first store
            lng: -115.1686, // Longitude for the first store
            name: "Maui Jewelers - Fashion Show Mall",
            address: "3200 S Las Vegas Blvd UNIT 1820, Las Vegas, NV 89109"
        },
        {
            lat: 36.1720, // Latitude for the second store
            lng: -115.1940, // Longitude for the second store
            name: "Maui Jewelers - Meadows Mall",
            address: "4300 Meadows Ln Suite 1230, Las Vegas, NV 89107"
        }
    ];

    // Create markers for each location
    locations.forEach(function(location) {
        const marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.name
        });

        // Info windows with store details
        const infoWindow = new google.maps.InfoWindow({
            content: `<h3>${location.name}</h3><p>${location.address}</p>`
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    });
}




