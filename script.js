function getWeather() {
    const apiKey = 'dc5b26da4340e20f3e09962ad679c836'; // Replace with your OpenWeatherMap API key
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;

    const weatherInfoElement = document.getElementById('weather-info');

    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;

            const weatherInfo = `Current weather in ${city}: ${weatherDescription}, ${temperature}°C`;

            weatherInfoElement.textContent = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfoElement.textContent = 'Error fetching weather data';
        });
}
