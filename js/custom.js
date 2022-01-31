const header = document.querySelector('.header_section');

document.addEventListener('DOMContentLoaded', function() {
    getYear();

    window.onscroll = function() { scrollFunction() };
});

// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 120) {
        header.classList.replace("p-absolute", "p-fixed");
    } else {
        header.classList.replace("p-fixed", "p-absolute");
    }
}