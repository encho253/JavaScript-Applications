let locationTag = $("#enter");
let mapHolder = $("#mapholder");

function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            resolve(position);
        }, function(error) {
            reject(error);
        });
    });
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
        latlon + "&zoom=14&size=400x300&sensor=false&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    mapHolder.html("<img src='" + img_url + "'>");
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            mapHolder.html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            mapHolder.html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            mapHolder.html("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            mapHolder.html("An unknown error occurred.");
            break;
    }
}

locationTag.on("click", () => {
    getLocation()
        .then(showPosition)
        .catch(showError);
});