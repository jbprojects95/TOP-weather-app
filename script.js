// URL: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[YYYY-MM-DD]/[YYY-MM-DD]?key=YOUR_API_KEY

async function fetchWeatherData() {
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Leicestershire/today?key=X8RNAGCED7FPQSUGBUS53M9T4",
  );
  const searchData = await response.json();
  console.log(searchData);
  return searchData;
}

function processData(searchData) {
  const location = searchData.address;
  const temp = searchData.currentConditions.temp;
  const tempFeelsLike = searchData.currentConditions.feelslike;
  const humidity = searchData.currentConditions.humidity;
  const precipitationChance = searchData.currentConditions.precipprob;
  const precipitation = searchData.currentConditions.precip;

  return {
    location,
    temp,
    tempFeelsLike,
    humidity,
    precipitationChance,
    precipitation,
  };
}

async function displayData() {
  const searchData = await fetchWeatherData();
  const processedData = processData(searchData);

  const weatherLocation = document.getElementById("weatherLocation");
  weatherLocation.textContent = searchData.address;
  const chanceOfRain = searchData.currentConditions.precipprob;
  // const weatherMessage = searchData.description;

  // const weatherDescription = document.getElementById("weatherMessage");
  // weatherDescription.textContent = weatherMessage;
  document.getElementById("temp").textContent = processedData.temp;
  document.getElementById("feelsLike").textContent =
    processedData.tempFeelsLike;
  document.getElementById("humidity").textContent = processedData.humidity;
  document.getElementById("precipitation").textContent =
    processedData.precipitation;
}

// function createWeatherElement(listItem, weatherContent, id) {
//   const weatherDash = document.getElementById("weatherDash");
//   const weatherListItem = document.createElement(listItem);
//   weatherListItem.textContent = weatherContent;
//   weatherListItem.id = id;
//   weatherDash.append(weatherListItem);
// }

displayData();

// temp, feels like, humidity, precipitation
