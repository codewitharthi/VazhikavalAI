// ==========================================
// VAZHIKAVALAI - FRONTEND JAVASCRIPT
// ==========================================


// Find Safe Route
function findRoute() {

    const source = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();

    // Check empty fields
    if (source === "" || destination === "") {

        alert("Please enter both source and destination.");

        return;
    }


    // Get result container
    const result = document.getElementById("routeResult");


    // Show loading message
    result.innerHTML = `
        <div class="route-card loading-card">
            <h3>🔍 Analyzing Route...</h3>
            <p>
                VazhikavalAI is checking route safety,
                traffic and travel conditions.
            </p>
        </div>
    `;


    // Simulate AI analysis
    setTimeout(() => {

        result.innerHTML = `

            <div class="route-card">

                <div class="route-header">

                    <div>

                        <h3>🛡️ Recommended Safe Route</h3>

                        <p>
                            ${source} → ${destination}
                        </p>

                    </div>


                    <div class="safety-score">

                        <strong>92%</strong>

                        <span>
                            Safety
                        </span>

                    </div>

                </div>


                <div class="route-info">

                    <div>

                        <span>
                            Distance
                        </span>

                        <strong>
                            12.4 km
                        </strong>

                    </div>


                    <div>

                        <span>
                            Travel Time
                        </span>

                        <strong>
                            25 min
                        </strong>

                    </div>


                    <div>

                        <span>
                            Risk Level
                        </span>

                        <strong class="safe">
                            Low
                        </strong>

                    </div>

                </div>


                <div class="route-analysis">

                    <h4>AI Safety Analysis</h4>

                    <p>
                        ✓ Low-risk route
                    </p>

                    <p>
                        ✓ Good road conditions
                    </p>

                    <p>
                        ✓ Moderate traffic
                    </p>

                    <p>
                        ✓ Well-connected route
                    </p>

                </div>


                <button
                    class="select-route"
                    onclick="selectRoute()"
                >
                    Select This Route
                </button>

            </div>

        `;

    }, 1500);

}



// Select Route
function selectRoute() {

    alert(
        "Route selected successfully! 🛡️\n\n" +
        "VazhikavalAI will guide you through the safer route."
    );

}



// Allow Enter key
document.addEventListener("DOMContentLoaded", function () {

    const destinationInput =
        document.getElementById("destination");

    destinationInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            findRoute();

        }

    });

});