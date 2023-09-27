document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");

    if (name) {
        document.getElementById("nameReceived").textContent = "Welcome " + name + "!";
    }  
});