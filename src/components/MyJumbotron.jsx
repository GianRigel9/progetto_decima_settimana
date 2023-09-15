const MyJumbotron = () => {
  // const fetchWeather = async () => {
  //     const URL = "https://api.openweathermap.org/data/2.5/weather?lat=45.5797149&lon=9.234787&appid=ed5e7a68fb01f97b272448336b7b666b"
  // }

  return (
    <div className="p-5 mb-3">
      <div className="container-fluid d-flex justify-content-between py-4">
        <div className="d-flex gap-2">
          <h2
            style={{
              fontSize: "7rem",
            }}
          >
            16
          </h2>
          <div
            className="d-flex flex-column justify-content-end"
            style={{ marginBottom: "30px" }}
          >
            <p className="p-style">°C</p>
            <p className="p-style">Particular cloudy</p>
          </div>
        </div>
        <div className="d-flex gap-4">
          <div
            style={{ width: "150px", height: "150px", backgroundColor: "red" }}
          >
            {/* <img src="" alt="" /> */}
            immagine
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center gap-2">
            <div className="d-flex">
              <i class="bi bi-thermometer-half"></i>
              <p>Feels like: 31°C</p>
            </div>
            <div className="d-flex">
              <i class="bi bi-droplet"></i>
              <p>Humidity: 15°C</p>
            </div>
            <div className="d-flex">
              <i class="bi bi-wind"></i>
              <p>Wind: 31km/h</p>
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
  );
};
export default MyJumbotron;
