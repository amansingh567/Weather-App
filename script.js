let btn = document.querySelector("#btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let value = document.querySelector("#city").value;
    let apikey = "e88543b6ac3a48a2ec7d1f42a0f7321e";
    let apiurl = https://api.openweathermap.org/data/2.5/weather?units=metric&q=${value}&appid=${apikey};
    fetch(apiurl)
    .then(res => res.json())
    .then(data => {
        if(data.cod===200){
            Notification.requestPermission().then(per =>{
                if (per === "granted") {
                    let noti = new Notification("weather notification", {
                        body:description : ${data.weather[0].description},\ntemp :${data.main.temp} celcius,\nhumidity : ${data.main.humidity} g/m3,\npressure : ${data.main.pressure} mbar,\nspeed : ${data.wind.speed} m/s ,\nmax temperature : ${data.main.temp_max} celcius,\nmin temperature : ${data.main.temp_min} celcius
                    })
                }else{
                    alert("permission not granted");
                }
            })
        }else{
            Notification.requestPermission().then(per =>{
                if (per === "granted") {
                    let noti = new Notification("weather notification", {
                        body:city not exist
                    })
                }else{
                    alert("city not exist")
                }
            })
        }
        
    })
    
})
