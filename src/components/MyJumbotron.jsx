import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const MyJumbotron = ({ lat, lon }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.userInteraction.weather);
  const isLoadingHTML = useSelector(
    (state) => state.userInteraction.isLoadingHTML
  );
  const isLoading = useSelector((state) => state.userInteraction.isLoading);

  const fetchWeather = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ed5e7a68fb01f97b272448336b7b666b`;

    try {
      const response = await fetch(URL);
      if (response.ok) {
        const weather = await response.json();
        console.log(
          "%c Mi ha funzionato fetchWeather",
          "color: green; font-weight: bold"
        );
        console.log(weather);

        dispatch({ type: "ADD_PARSEBODY_WEATHER", payload: weather });
        // console.log(parsebody);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchForecast = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=ed5e7a68fb01f97b272448336b7b666b`;

    try {
      const response = await fetch(URL);
      if (response.ok) {
        const forecast = await response.json();
        console.log(
          "%c Mi ha funzionato fetchForecast",
          "color: green; font-weight: bold"
        );
        console.log(forecast);
        dispatch({ type: "ADD_PARSEBODY_FORECAST", payload: forecast });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeather(lat, lon);
    fetchForecast(lat, lon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <>
      {isLoadingHTML ? (
        <div className="d-flex justify-content-center p-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <div className="my-jumbo">
          <div>
            <div className="first-div">
              <div>
                <h2>{(weather.main.temp - 273.15).toFixed()}</h2>
                <div className="fc">
                  <p className="p-style">°C</p>
                  <p className="p-style description-jumb">
                    {weather.weather[0].description}
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={`img-${weather.weather[0].icon}`}
                />
              </div>
            </div>
            <div className="sec-div">
              <div className="fc">
                <div>
                  <i className="bi bi-thermometer-half"></i>
                  <p>
                    Feels like: {(weather.main.feels_like - 273.15).toFixed()}°C
                  </p>
                </div>
                <div>
                  <i className="bi bi-droplet"></i>
                  <p>Humidity: {weather.main.humidity}%</p>
                </div>
                <div>
                  <i className="bi bi-wind"></i>
                  <p>Wind: {(weather.wind.speed * 3.6).toFixed(1)} km/h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MyJumbotron;
