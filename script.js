async function weatherData() {
  // URL: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[YYYY-MM-DD]/[YYY-MM-DD]?key=YOUR_API_KEY
  const response = await fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Leicestershire/today?key=X8RNAGCED7FPQSUGBUS53M9T4",
  );
  const searchData = await response.json();

  console.log(searchData);
}

weatherData();
