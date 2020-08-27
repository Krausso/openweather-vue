/* eslint-disable */

function fToC(temperature) { // fahrenheit to celsius
  return Math.round(temperature - 273.15);
}

export function correctData(data) {
  const [weatherMain, weatherDescr] = [data.weather[0].main, data.weather[0].description];
  const windSpeed = `${data.wind.speed}m/sec`;

  const neededData = {
    [data.name]: '',
    [weatherMain]: weatherDescr,
    'Wind speed': windSpeed,
    Temperature: `${fToC(data.main.temp)}°C`,
    'Feels like': fToC(data.main.feels_like),
  };
  data = []
  for (const [key, value] of Object.entries(neededData)) {
    data.push([key, value]);
  }
  return data;
}

export function processError(e) {
  if (e.response) {
    console.log(e.response.data);
  } else if (e.request) {
    console.log(e.request);
  } else {
    console.log(e.message);
  }
};
