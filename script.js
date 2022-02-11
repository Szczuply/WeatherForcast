let apiFetchAddress;
document
  .querySelector("#buttonLocation")
  .addEventListener("click", () => {
    const ipApi = `https://api.ip2loc.com/r6HFO0fYVPl1D8zPRBCCPLpfYvhZcCT6/detect`;
    fetch(ipApi)
      .then((respone) => respone.json())
      .then((result) => fetchLocation(result));
  });

document.querySelector(".arrow").addEventListener("click", () => {
  document.querySelector(".main-block").classList.remove("active");
});

document.querySelector("#buttonCity").addEventListener("click", () => {
  cityName = document.querySelector("#inputCity").value;
  apiFetchAddress = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=d693762ef95de62b9b5ba8261be85463&lang=pl`;
  fetchData();
});

function fetchLocation(result) {
  longitude = result.location.longitude;
  latitude = result.location.latitude;
  apiFetchAddress = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=d693762ef95de62b9b5ba8261be85463&lang=pl`;
  fetchData();
}
function fetchData() {
  document.querySelector(".main-block").classList.add("active");
  fetch(apiFetchAddress)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  const weatherIcon = document.querySelector("#icon");
  const city = info.name;
  const { description, id } = info.weather[0];
  const { humidity, temp, feels_like, pressure } = info.main;

  if (id == 800) {
    weatherIcon.src = "icons/clear.svg";
  } else if (id >= 200 && id <= 232) {
    weatherIcon.src = "icons/storm.svg";
  } else if (id >= 600 && id <= 622) {
    weatherIcon.src = "icons/snow.svg";
  } else if (id >= 701 && id <= 781) {
    weatherIcon.src = "icons/haze.svg";
  } else if (id >= 801 && id <= 804) {
    weatherIcon.src = "icons/cloud.svg";
  } else if ((id >= 300 && id <= 321) || (id >= 500 && id <= 531)) {
    weatherIcon.src = "icons/rain.svg";
  }

  document.querySelector("#cityName").innerHTML = `🏠  ${city}`;
  document.querySelector("#weatherDescription").innerHTML = `💩${description}`;
  document.querySelector("#humidity").innerHTML = `Wilgodność: ${humidity}%`;
  document.querySelector("#temperature").innerHTML = `🌡${parseInt(temp)} ℃`;
  document.querySelector("#feelsLike").innerHTML = `Odczuwalna: <br /> ${feels_like}℃`;
  document.querySelector("#pressure").innerHTML = ` Ciśnienie: <br /> ${pressure} hPa`;
}
console.log("I need to put these codes here because I want GitHub to assign repositories to it that it is in line with JavaScript. I don't know what you have to do with your life to read further, I made this book for predicting the transition between e-books, please do not recommend remarks on what is written here. As I have not finished reading this, have a nice day and best regards. Do you next reading my scribble. Patrick")`