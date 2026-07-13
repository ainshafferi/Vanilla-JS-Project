const apiKey = "77d40b4313fd423c5521dbcbfee3cb37";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherBg = document.querySelector(".card");

async function fetchWeather(url) {
    const response = await fetch(url);

    if (!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    const data = await response.json();
    displayWeather(data);
}

async function displayWeather(data) {

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    weatherIcon.src = `images/${data.weather[0].main}.png`;

    if (data.weather[0].main == "Clouds") {
        weatherBg.style.background = "linear-gradient(135deg, #757F9A, #D7DDE8)";
    }
    else if (data.weather[0].main == "Clear") {
        weatherBg.style.background = "linear-gradient(135deg, #56CCF2, #2F80ED)";
    }
    else if (data.weather[0].main == "Rain") {
        weatherBg.style.background = "linear-gradient(135deg, #232526, #414345)";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherBg.style.background = "linear-gradient(135deg, #4B79A1, #283E51)";
    }
    else if (data.weather[0].main == "Mist") {
        weatherBg.style.background = "linear-gradient(135deg, #BDC3C7, #2C3E50)";
    }
    else if (data.weather[0].main == "Snow") {
        weatherBg.style.background = "linear-gradient(135deg, #E6DADA, #274046)";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

// Search by city name
function checkWeather(city) {
    fetchWeather(`${apiUrl}&q=${city}&appid=${apiKey}`);
}

function getCurrentLocationWeather() {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetchWeather(
                `${apiUrl}&lat=${latitude}&lon=${longitude}&appid=${apiKey}`
            );
        },
        (error) => {
            console.log(error);

            checkWeather("Kuala Lumpur");  //default
        }
    );
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();

    if (city !== "") {
        checkWeather(city);
    }
});

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});

// Automatically load user's weather
getCurrentLocationWeather();
