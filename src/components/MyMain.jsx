import MyNavbar from "./MyNavbar";
import MyJumbotron from "./MyJumbotron";
import MyCardsList from "./MyCardsList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
// import SelectLocation from "./SelectLocation";

const MyMain = () => {
  const params = useParams();
  //  console.log("params", params);
  const forecast5days = useSelector(
    (state) => state.userInteraction.forecast5days
  );
  const arrLocations = useSelector(
    (state) => state.userInteraction.arrLocations
  );
  console.log("arrLocations", arrLocations);
  return (
    <>
      <MyNavbar location={params.location} />
      <MyJumbotron
        location={params.location}
        lat={params.lat}
        lon={params.lon}
      />
      <p className="info">
        Le temperature max e min sono del giorno indicato alle 14:00
      </p>
      {forecast5days.length === 0 ? (
        <div className="d-flex justify-content-center p-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <MyCardsList forecast5days={forecast5days} />
        </>
      )}
    </>
  );
};

export default MyMain;
