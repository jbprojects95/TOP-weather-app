async function weatherData() {
  // URL: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[YYYY-MM-DD]/[YYY-MM-DD]?key=YOUR_API_KEY
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Leicestershire/today?key=X8RNAGCED7FPQSUGBUS53M9T4",
  );
  const searchData = await response.json();
  console.log(searchData);

  const weatherLocation = document.getElementById("weatherLocation");
  weatherLocation.textContent = searchData.address;
  const chanceOfRain = searchData.currentConditions.precipprob;
  const weatherMessage = searchData.description;

  const weatherDescription = document.getElementById("weatherMessage");
  weatherDescription.textContent = weatherMessage;
  createWeatherElement("li", "Temp:", searchData.currentConditions.temp);
  createWeatherElement(
    "li",
    "Feels like:",
    searchData.currentConditions.feelslike,
  );
  createWeatherElement(
    "li",
    "Humidity:",
    searchData.currentConditions.humidity,
  );
  createWeatherElement(
    "li",
    "Precipitation Chance:",
    searchData.currentConditions.precipprob,
  );

  if (chanceOfRain >= 10) {
    createWeatherElement(
      "li",
      "Precipitation:",
      searchData.currentConditions.precip,
    );
  }
}

function createWeatherElement(listItem, itemName, weatherContent) {
  const weatherDash = document.getElementById("weatherDash");
  const weatherListItem = document.createElement(listItem);
  weatherListItem.textContent = itemName + " " + weatherContent;
  weatherDash.append(weatherListItem);
}

weatherData();
