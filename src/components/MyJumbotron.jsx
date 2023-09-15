// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyJumbotron = () => {
  //   const city = useSelector((state) => state.city);
  const isLoadingHTML = useSelector((state) => state.isLoadingHTML);
  const search = useSelector((state) => state.search);
  const weather = useSelector((state) => state.weather);

  return (
    <>
      {isLoadingHTML ? (
        <div className="d-flex justify-content-center p-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <div className="p-5 mb-3">
          {search &&
            weather &&
            console.log("il mio  search", search, "il mio  weather", weather)}
          {/* {console.log("il mio  search", search)}
        {console.log("il mio  weather", weather)} */}
          <div className="container-fluid d-flex justify-content-between py-4">
            <div className="d-flex gap-4">
              <h2
                style={{
                  fontSize: "7rem",
                }}
              >
                {(weather.main.temp - 273.15).toFixed()}
              </h2>
              <div
                className="d-flex flex-column justify-content-end"
                style={{ marginBottom: "30px" }}
              >
                <p className="p-style">°C</p>
                <p className="p-style">{weather.weather[0].description}</p>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div
                style={{
                  width: "150px",
                  height: "150px",
                  backgroundColor: "red",
                }}
              >
                {/* <img src="" alt="" /> */}
                immagine
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                <div className="d-flex gap-2">
                  <i className="bi bi-thermometer-half"></i>
                  <p>
                    Feels like: {(weather.main.feels_like - 273.15).toFixed()}°C
                  </p>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-droplet"></i>
                  <p>Humidity: {weather.main.humidity}%</p>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-wind"></i>
                  <p>Wind: {(weather.wind.speed * 3.6).toFixed(1)} km/h</p>
                </div>
              </div>
            </div>
            {/* <p className="col-md-8 fs-4 mb-3">
            Using a series of utilities, you can create this jumbotron, just like
            the one in previous versions of Bootstrap. Check out the examples
            below for how you can remix and restyle it to your liking.
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button> */}
          </div>
        </div>
      )}
    </>
  );
};
export default MyJumbotron;
