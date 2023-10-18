const apiKey = "dcedfe62622d5c413f7b6e36dd2edda1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatheIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if (data.weather[0].main == "Clouds") {
      weatheIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatheIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatheIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatheIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatheIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
