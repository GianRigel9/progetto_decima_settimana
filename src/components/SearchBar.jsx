import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const city = useSelector((state) => state.city);
  const isLoadingCity = useSelector((state) => state.isLoadingCity);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_QUERY", payload: query });
  };

  const fetchCity = async () => {
    //   const URL = "https://api.openweathermap.org/data/2.5/weather?lat=45.5797149&lon=9.234787&appid=ed5e7a68fb01f97b272448336b7b666b"
    const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=ed5e7a68fb01f97b272448336b7b666b`;

    try {
      const resp = await fetch(URL);
      if (resp.ok) {
        const parsebody = await resp.json();
        dispatch({ type: "ADD_PARSEBODY_CITY", payload: parsebody[0] });
        // console.log(parsebody);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingCity]);
  return (
    <Form
      className="d-flex"
      style={{ height: "fit-content" }}
      onSubmit={handleSubmit}
    >
      <Form.Control
        type="Search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </Form>
  );
};
export default SearchBar;
