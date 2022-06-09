    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        var x = "";
        let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=4fbee6f796d9742c10ccc097c5c76006&units=metric",
            jsonpCallback: "callback",
            dataType: "jsonp",
            success: function (location) {
                var cel = Math.floor(location.main.temp);
                $('#demo').html(cel + "°");
                $('#demo2').html((location.name));
               document.getElementById("icon2").href="https://github.com/yuvraaaj/openweathermap-api-icons/raw/master/icons/" + location.weather[0].icon + ".png";
                document.getElementById("icon").src = "https://github.com/yuvraaaj/openweathermap-api-icons/raw/master/icons/" + location.weather[0].icon + ".png"
                $('#demo3').html((location.weather[0].description));
                $('#demo4').html(regionNames.of(location.sys.country));
            }
        })
    }
