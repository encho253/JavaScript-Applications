let popupDiv = $("#popup");

let promise = function() {
    return new Promise((resolve) => {
        alert("After 2 sec you will be redirects to another site");
        resolve("Complete popup");
    });
}

let promise2 = function() {
    return new Promise((resolve) => {
        setTimeout(() => {
            window.location.assign("https://telerikacademy.com");
        }, 3000);
        resolve('redirect');
    });
}

popupDiv.on('click', (() => {
    promise()
        .then(promise2());
}));