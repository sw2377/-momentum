const API_KEY = "b4e2d76509030baefe61aa404d865edf"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const temp = document.querySelector("#weather span:nth-child(2)")
            const city = document.querySelector("#weather span:last-child");

            const icon = data.weather[0].icon;

            weather.innerHTML = "<img src='http://openweathermap.org/img/wn/" + icon + "@2x.png'>";
            temp.innerText = data.main.temp;
            // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name; 
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);