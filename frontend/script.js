function findRoute() {

    // Get the values entered by the user
    const start = document.getElementById("start").value.trim();
    const destination = document.getElementById("destination").value.trim();

    // Check whether both locations are entered
    if (start === "" || destination === "") {
        alert("Please enter both starting location and destination.");
        return;
    }

    // Temporary message
    alert(
        "Finding a safer route from " +
        start +
        " to " +
        destination +
        "..."
    );

    console.log("Starting Location:", start);
    console.log("Destination:", destination);
}