# My Weather App

This is a simple weather application built using HTML, CSS, and JavaScript with Bootstrap. The app fetches weather data from the OpenWeatherMap API using `async/await` and the `fetch` API. It also utilizes the Axios library for making HTTP requests.

## Demo

You can see a live demo of the weather app (https://akshitlakhera.github.io/Weather-app/).

## Features

- Get real-time weather information for a given location.
- Display the current temperature, weather condition, and a corresponding icon.
- Show additional details such as humidity, wind speed, and visibility.
- User-friendly and responsive design using Bootstrap.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap
- OpenWeatherMap API
- Axios

## Prerequisites

Before running the project on your local machine, ensure that you have the following:

- A modern web browser (Chrome, Firefox, Safari, etc.).
- An internet connection to fetch data from the OpenWeatherMap API.

## Getting Started

To run the project on your local machine, follow these steps:

1. Clone the repository to your local machine using the following command:
   git clone https://github.com/your-username/my-weather-app.git
   
2. Navigate to the project directory:
cd my-weather-app

3. Open the `index.html` file in your preferred web browser.

## Configuration

To make API requests and fetch weather data, you'll need an API key from OpenWeatherMap. Follow these steps to obtain an API key:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/) and sign up for a free account.

2. After signing up, go to your account dashboard and locate your API key.

3. Copy the API key and replace the `API_KEY` variable in the `script.js` file with your actual API key.

```javascript
const API_KEY = 'YOUR_API_KEY';
    Save the changes to the script.js file.

Usage

Once you have the project set up and the API key configured, you can use the weather app as follows:

    Enter the name of a city or location in the input field.

    Click the "Get Weather" button or press Enter.

    The app will fetch the weather data from the OpenWeatherMap API and display it on the screen.

    Explore the weather details and enjoy using the app!

Contributing

Contributions to the project are welcome. If you find any issues or have suggestions for improvement, please feel free to submit a pull request.
License

This project is licensed under the MIT License.
