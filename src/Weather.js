export default function Weather() {
  let weatherData = {
    city: "Kyiv",
    weekDay: "Monday",
    time: "22:11",
    description: "Cloudy",
    imgUrl: "",
    temperature: "1",
    temperatureMax: "14",
    temperatureMin: "10",
    precipitation: "3",
    wind: "2",
    humidity: "13",
    forecastDay: "Mon",
    forecastMin: "10",
    forecastMax: "14",
  };
  return (
    <div className="App">
      <div className="container content">
        <div className="input-form">
          <input
            className="search-field"
            type="search"
            placeholder="Enter a city"
          />

          <i
            className="fa-solid fa-location-crosshairs"
            id="location-pointer"
          ></i>
        </div>
        <div className="row main-info row align-items-center">
          <div className="col-md-3">
            <div className="city-time">
              <div className="city">{weatherData.city}</div>
              <div className="weekday">{weatherData.weekDay}</div>
              <div className="time">{weatherData.time}</div>
            </div>
          </div>
          <div className="col-md-3 icon">
            <div className="weather-icon">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/weather/cloudy-icon.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="current-weather">
              <div className="temperature inline">
                <span className="value">{weatherData.temperature}</span>
                <span className="unit">C</span>
              </div>
              <div className="weather-text">{weatherData.description}</div>
              <div className="min-temperature inline">
                {weatherData.temperatureMin}
              </div>
              <div className="celsius inline">° /</div>
              <div className="max-temperature inline">
                {weatherData.temperatureMax}
              </div>
              <div className="celsius inline">°</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="weather-detail">
              <div className="precipitation">
                <i className="fa-solid fa-cloud-rain weather-detail-icon"></i>
                <span className="detail">{weatherData.precipitation}</span>
                <span className="detail"> mm</span>
              </div>
              <div className="wind">
                <i className="fa-solid fa-wind weather-detail-icon"></i>
                <span className="detail">{weatherData.wind}</span>
                <span className="detail"> km/h</span>
              </div>
              <div className="humidity">
                <i className="fa-solid fa-droplet weather-detail-icon"></i>
                <span className="detail">{weatherData.humidity}</span>
                <span className="detail"> %</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row forecast-week" id="forecast-week">
          <div className="col-md-2">
            <div className="forecast-day">{weatherData.forecastDay}</div>
            <div className="forecast-icon">
              <i className="fa-solid fa-cloud-rain"></i>
            </div>
            <div className="forecast-temperature">
              <div className="min-temperature inline">
                {weatherData.forecastMin}
              </div>
              <div className="celsius inline">° / </div>
              <div className="max-temperature inline">
                {weatherData.forecastMax}
              </div>
              <div className="celsius inline">°</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <a
            className="footer-link"
            href="https://github.com/LenaUshakova/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Olena Ushakova
        </div>
        <script src="src/index.js"></script>
      </div>
    </div>
  );
}
