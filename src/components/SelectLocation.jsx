import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SelectLocation = ({ arrLocations, boolean }) => {
  //  console.log("props.arrLocations[0][0].name", props.arrLocations[0][0].name);
  console.log("arrLocations", arrLocations);
  const dispatch = useDispatch();

  return (
    <ListGroup className={boolean ? "my-list-group" : "my-list-group-abs"}>
      {arrLocations.map((elem, index) => (
        <ListGroup.Item className="list-group-style" key={`listItem-${index}`}>
          <Link
            className={boolean ? "cust-link" : "cust-link-small"}
            onClick={() => {
              dispatch({ type: "EMPTY_ARR_LOCATION" });
            }}
            to={`/${elem.name}/${elem.lat}/${elem.lon}`}
          >
            Locality: {elem.name}, {elem.state}, {elem.country}
          </Link>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default SelectLocation;
