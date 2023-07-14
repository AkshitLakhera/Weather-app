// Common Places table
const commonPlacesTable = document.querySelector("table tbody");

// Function to add a row to the table
function addTableRow(place, feelsLike, humidity, minTemp, maxTemp, sunrise, sunset, temp, windDegrees, windSpeed) {
  const newRow = document.createElement("tr");
  
  newRow.innerHTML = `
    <th scope="row" class="text-start">${place}</th>
    <td>${feelsLike}</td>
    <td>${humidity}</td>
    <td>${minTemp}</td>
    <td>${maxTemp}</td>
    <td>${sunrise}</td>
    <td>${sunset}</td>
    <td>${temp}</td>
    <td>${windDegrees}</td>
    <td>${windSpeed}</td>
  `;
  
  commonPlacesTable.appendChild(newRow);
}

// // Example usage
// fetchWeatherData('Shanghai');
// fetchWeatherData('Boston');
// fetchWeatherData('Lucknow');
// fetchWeatherData('Bangalore');
// fetchWeatherData('Delhi');
//  Defining the condition
// Temperature
const temp = document.getElementById("temp");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
const temp2 = document.getElementById("temp2")
// Humidity info
const windDegree = document.getElementById("windDegree");
const humidity = document.getElementById("humidity");
const feelsLike = document.getElementById("feelsLike");
const humidity2 = document.getElementById("humidity2");
//  Wind info 
const windSpeed = document.getElementById("windSpeed");
const windSpeed2 = document.getElementById("windSpeed2");
const sunriseTime = document.getElementById("sunriseTime");
const sunsetTime = document.getElementById("sunsetTime");
 
 
 
 //  Search box selecting
   const searchBox = document.getElementById('searchBox');
   const searchButton = document.getElementById('searchButton');
   searchButton.addEventListener("click" , (event) => {
       const city = searchBox.value;
       console.log(city);
       event.preventDefault();
      if (city) {
        fetchWeatherData(city);
      }
   })
   async function fetchWeatherData(city) {
    const apiKey = '315e6295656e232692f94b5b539fec6b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  
    const options = {
      method: 'GET',
      url: apiUrl,
      params: {
        q: city,
        APPID: apiKey
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log(response.data.main.temp);
      console.log(response.data.name);
      temp.innerHTML = response.data.main.temp;
      temp2.innerHTML= response.data.main.temp;
      minTemp.innerHTML = response.data.main.temp_min;
      maxTemp.innerHTML = response.data.main.temp_max;
      humidity2.innerHTML= response.data.main.humidity;
      windSpeed.innerHTML = response.data.wind.speed;
      windSpeed2.innerHTML = response.data.wind.speed;
      windDegree.innerHTML = response.data.wind.deg;
      sunriseTime.innerHTML = response.data.sys.sunrise;
      sunsetTime.innerHTML=response.data.sys.sunset;
      city2.innerHTML= city;
      
      addTableRow(
        city,
        response.data.main.feels_like,
        response.data.main.humidity,
        response.data.main.temp_min,
        response.data.main.temp_max,
        response.data.sys.sunrise,
        response.data.sys.sunset,
        response.data.main.temp,
        response.data.wind.deg,
        response.data.wind.speed
      );
      


    } catch (error) {
      console.error(error);
    }
  }
  
  fetchWeatherData('London');
  // Example usage
fetchWeatherData('Shanghai');
fetchWeatherData('Boston');
fetchWeatherData('Lucknow');
fetchWeatherData('Bangalore');
fetchWeatherData('Delhi');
