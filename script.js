let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let value = document.querySelector("#city").value;
    let apikey = "e88543b6ac3a48a2ec7d1f42a0f7321e";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=${apikey}`;
    
    fetch(apiurl)
        .then(res => res.json())
        .then(data => {
            if (data.cod === 200) {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification("Weather Notification", {
                            body: `Description: ${data.weather[0].description},\nTemp: ${data.main.temp} °C,\nHumidity: ${data.main.humidity}%,\nPressure: ${data.main.pressure} hPa,\nWind Speed: ${data.wind.speed} m/s,\nMax Temp: ${data.main.temp_max} °C,\nMin Temp: ${data.main.temp_min} °C`
                        });
                    } else {
                        alert("Permission not granted");
                    }
                });
            } else {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification("Weather Notification", {
                            body: "City does not exist"
                        });
                    } else {
                        alert("City does not exist");
                    }
                });
            }
        })
        .catch(err => {
            console.error("Error fetching weather data:", err);
            alert("Failed to retrieve data. Please try again later.");
        });
});
