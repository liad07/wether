    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=4fbee6f796d9742c10ccc097c5c76006&units=metric",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function( location ) {
                $('#demo').html(location.main.temp);
            }
        });
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }
