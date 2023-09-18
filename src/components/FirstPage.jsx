import { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectLocation from "./SelectLocation";

const FirstPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrLocations = useSelector(
    (state) => state.userInteraction.arrLocations
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=20&appid=ed5e7a68fb01f97b272448336b7b666b`;
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const myArr = await response.json();
        if (myArr.length !== 0) {
          dispatch({ type: "ADD_ARR_LOCATIONS", payload: myArr });
        } else {
          navigate("/pageNotFound");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="fc first-page">
        <div className="fc">
          <h1>Welcome</h1>
          <p>Write the name of your locality to see the weather</p>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="Search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Form>
      </div>
      {arrLocations.length === 0 ? (
        <div className="d-flex justify-content-center p-5 gap-3">
          <span style={{ fontSize: "22px" }}>Waiting for your locality</span>
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <>
          <SelectLocation arrLocations={arrLocations[0]} boolean={true} />
        </>
      )}
    </>
  );
};

export default FirstPage;
