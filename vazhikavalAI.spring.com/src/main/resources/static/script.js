// ======================================================
// VAZHIKAVALAI - MAP INITIALIZATION
// ======================================================

let map;
let sourceMarker = null;
let destinationMarker = null;
let routeLine = null;


// Default location: Chennai
const CHENNAI = [13.0827, 80.2707];


// Initialize map when page loads
document.addEventListener("DOMContentLoaded", function () {

    map = L.map("map").setView(CHENNAI, 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    console.log("✅ Leaflet map initialized");

    // Fix map rendering if inside a hidden/container element
    setTimeout(function () {
        map.invalidateSize();
    }, 300);
});


// ======================================================
// FIND ROUTE
// ======================================================

function findRoute() {

    const source =
        document.getElementById("source").value.trim();

    const destination =
        document.getElementById("destination").value.trim();

    const result =
        document.getElementById("routeResult");


    // Check input
    if (source === "" || destination === "") {

        result.innerHTML = `
            <div class="route-card">
                <h3>⚠️ Enter both locations</h3>
                <p>Please enter source and destination.</p>
            </div>
        `;

        return;
    }


    // Loading message
    result.innerHTML = `
        <div class="route-card">
            <h3>🔄 Calculating route...</h3>
            <p>Checking safety conditions...</p>
        </div>
    `;


    // ==================================================
    // SPRING BOOT API
    // ==================================================

    const apiUrl =
        "/api/route?source=" +
        encodeURIComponent(source) +
        "&destination=" +
        encodeURIComponent(destination);


    console.log("Calling API:", apiUrl);


    fetch(apiUrl)

        .then(response => {

            console.log("HTTP Status:", response.status);

            if (!response.ok) {

                throw new Error(
                    "HTTP Error: " + response.status
                );
            }

            return response.json();
        })


        .then(data => {

            console.log("Backend Response:", data);


            // ==========================================
            // SAFETY LEVEL
            // ==========================================

            let safetyClass = "safe";


            if (data.safetyLevel === "MODERATE") {
                safetyClass = "moderate";
            }


            if (data.safetyLevel === "RISKY") {
                safetyClass = "risky";
            }


            // ==========================================
            // DISPLAY RESULT
            // ==========================================

            result.innerHTML = `

                <div class="route-card">

                    <div class="route-header">

                        <div>

                            <h3>
                                🛡️ Safe Route
                            </h3>

                            <p>
                                ${data.source}
                                →
                                ${data.destination}
                            </p>

                        </div>


                        <div class="safety-score">

                            <strong>
                                ${data.safetyScore}%
                            </strong>

                            <span>
                                Safety
                            </span>

                        </div>

                    </div>


                    <div class="route-info">

                        <div>

                            <span>
                                Source
                            </span>

                            <strong>
                                ${data.source}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Destination
                            </span>

                            <strong>
                                ${data.destination}
                            </strong>

                        </div>


                        <div>

                            <span>
                                Safety Level
                            </span>

                            <strong class="${safetyClass}">
                                ${data.safetyLevel}
                            </strong>

                        </div>

                    </div>


                    <div class="route-success">

                        ✅ Route analyzed successfully

                    </div>


                    <button
                        class="select-route"
                        onclick="selectRoute()">

                        Select Route

                    </button>

                </div>

            `;


            // ==========================================
            // UPDATE MAP
            // ==========================================

            updateMap(source, destination);

        })


        .catch(error => {

            console.error("Route Error:", error);


            result.innerHTML = `

                <div class="route-card">

                    <h3>
                        ❌ Unable to calculate route
                    </h3>

                    <p>
                        Please make sure the Spring Boot
                        backend is running.
                    </p>

                    <small>
                        ${error.message}
                    </small>

                </div>

            `;

        });
}


// ======================================================
// UPDATE MAP
// ======================================================

function updateMap(source, destination) {

    if (!map) {

        console.error(
            "❌ Map has not been initialized"
        );

        return;
    }


    // Remove old markers
    if (sourceMarker) {

        map.removeLayer(sourceMarker);

    }


    if (destinationMarker) {

        map.removeLayer(destinationMarker);

    }


    // Remove old route line
    if (routeLine) {

        map.removeLayer(routeLine);

    }


    // ==================================================
    // DEMO COORDINATES
    // ==================================================
    //
    // For now, the map uses Chennai coordinates.
    // Later we can connect this to real geocoding.
    // ==================================================

    const sourceLocation = [
        13.0827,
        80.2707
    ];


    const destinationLocation = [
        13.0674,
        80.2376
    ];


    // ==================================================
    // SOURCE MARKER
    // ==================================================

    sourceMarker = L.marker(
        sourceLocation
    )
        .addTo(map)
        .bindPopup(
            `<b>📍 Source</b><br>${source}`
        );


    // ==================================================
    // DESTINATION MARKER
    // ==================================================

    destinationMarker = L.marker(
        destinationLocation
    )
        .addTo(map)
        .bindPopup(
            `<b>🎯 Destination</b><br>${destination}`
        );


    // ==================================================
    // ROUTE LINE
    // ==================================================

    routeLine = L.polyline(
        [
            sourceLocation,
            destinationLocation
        ],
        {
            weight: 6,
            opacity: 0.8
        }
    ).addTo(map);


    // ==================================================
    // FIT MAP TO ROUTE
    // ==================================================

    const bounds = L.latLngBounds([
        sourceLocation,
        destinationLocation
    ]);


    map.fitBounds(bounds, {
        padding: [50, 50]
    });


    // Open source popup
    sourceMarker.openPopup();


    console.log(
        "✅ Source marker added"
    );

    console.log(
        "✅ Destination marker added"
    );

    console.log(
        "✅ Route line added"
    );
}


// ======================================================
// SELECT ROUTE
// ======================================================

function selectRoute() {

    alert(
        "✅ Safe route selected!\n\n" +
        "VazhikavalAI will help you travel safely."
    );

}