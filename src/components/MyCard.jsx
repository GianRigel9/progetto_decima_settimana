import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyCard = (props) => {
  const isLoadingHTML2 = useSelector(
    (state) => state.userInteraction.isLoadingHTML2
  );
  return (
    <>
      {isLoadingHTML2 ? (
        <div className="d-flex justify-content-center p-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <div className="fc my-card">
          <h5>
            {new Date(props.data.day).toLocaleString("it-IT", {
              weekday: "long",
            })}
          </h5>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
              alt={`img-${props.data.weather[0].icon}`}
            />
          </div>
          <p>
            {(props.data.main.temp_max - 273.15).toFixed(1)}°C -{" "}
            {(props.data.main.temp_min - 273.15).toFixed(1)}°C
          </p>
          <p className="description">{props.data.weather[0].description}</p>
        </div>
      )}
    </>
  );
};
export default MyCard;
