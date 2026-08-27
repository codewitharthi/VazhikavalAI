function findRoute() {

    const source = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const result = document.getElementById("routeResult");

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

    // Spring Boot API
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

            // Safety class
            let safetyClass = "safe";

            if (data.safetyLevel === "MODERATE") {
                safetyClass = "moderate";
            }

            if (data.safetyLevel === "RISKY") {
                safetyClass = "risky";
            }

            // Display result
            result.innerHTML = `
                <div class="route-card">

                    <div class="route-header">

                        <div>
                            <h3>🛡️ Safe Route</h3>

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
                            <span>Source</span>

                            <strong>
                                ${data.source}
                            </strong>
                        </div>


                        <div>
                            <span>Destination</span>

                            <strong>
                                ${data.destination}
                            </strong>
                        </div>


                        <div>
                            <span>Safety Level</span>

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
        })

        .catch(error => {

            console.error("Route Error:", error);

            result.innerHTML = `
                <div class="route-card">

                    <h3>❌ Unable to calculate route</h3>

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


// Select route
function selectRoute() {

    alert(
        "✅ Safe route selected!\n\n" +
        "VazhikavalAI will help you travel safely."
    );

}