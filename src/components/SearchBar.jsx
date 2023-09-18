import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectLocation from "./SelectLocation";

const SearchBar = () => {
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
    <div className="fc my-searchbar">
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="Search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Form>
      {arrLocations.length !== 0 ? (
        <>
          <SelectLocation arrLocations={arrLocations[0]} boolean={false} />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default SearchBar;
