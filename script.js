// URL: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[YYYY-MM-DD]/[YYY-MM-DD]?key=YOUR_API_KEY

async function fetchWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/today?key=X8RNAGCED7FPQSUGBUS53M9T4`,
  );
  const searchData = await response.json();

  return searchData;
}

function processData(searchData) {
  const location = searchData.address;
  const temp = searchData.currentConditions.temp;
  const tempFeelsLike = searchData.currentConditions.feelslike;
  const humidity = searchData.currentConditions.humidity;
  const precipitation = searchData.currentConditions.precip;

  return {
    location,
    temp,
    tempFeelsLike,
    humidity,
    precipitation,
  };
}

async function displayData(location) {
  const searchData = await fetchWeatherData(location);
  const processedData = processData(searchData);

  const weatherLocation = document.getElementById("weatherLocation");
  weatherLocation.textContent = processData.location;
  document.getElementById("temp").textContent = Math.round(processedData.temp);
  document.getElementById("feelsLike").textContent = Math.round(
    processedData.tempFeelsLike,
  );
  document.getElementById("humidity").textContent = Math.round(
    processedData.humidity,
  );
  document.getElementById("precipitation").textContent = Math.round(
    processedData.precipitation,
  );

  tempToggle.addEventListener("change", () => {
    updateTempDisplay(processedData.temp, "temp");
    updateTempDisplay(processedData.tempFeelsLike, "feelsLike");
  });
  return processedData;
}

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

const tempToggle = document.getElementById("tempToggle");
function updateTempDisplay(weatherData, spanId) {
  const spanToChange = document.getElementById(spanId);

  if (tempToggle.checked) {
    spanToChange.textContent = fahrenheitToCelsius(weatherData);
  } else {
    spanToChange.textContent = Math.round(weatherData);
  }
}

const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  const location = searchWeatherLocation();
  displayData(location);
});

function searchWeatherLocation() {
  const searchBar = document.getElementById("locationSearch");
  return searchBar.value;
}

displayData("Leicestershire");

// temp, feels like, humidity, precipitation
