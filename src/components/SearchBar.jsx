import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const city = useSelector((state) => state.city);
  const isLoadingCity = useSelector((state) => state.isLoadingCity);
  const search = useSelector((state) => state.search);
  const isLoadingNextDays = useSelector((state) => state.isLoadingNextDays);
  const isLoadingWeather = useSelector((state) => state.isLoadingWeather);

  const fetchNextDays = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${search[0].lat}&lon=${search[0].lon}&appid=ed5e7a68fb01f97b272448336b7b666b`;

    // const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=ed5e7a68fb01f97b272448336b7b666b`;

    try {
      const resp = await fetch(URL);
      if (resp.ok) {
        const parsebody = await resp.json();

        // parsebody.list.map(elem => elem.dt === 1694872800 || elem.dt === 1694959200  || elem.dt === 1695045600 || elem.dt === 1695132000 || elem.dt === 1695218400 )
        dispatch({ type: "ADD_PARSEBODY_NEXTDAYS", payload: parsebody });
        // console.log(parsebody);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${search[0].lat}&lon=${search[0].lon}&appid=ed5e7a68fb01f97b272448336b7b666b`;
    // const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=ed5e7a68fb01f97b272448336b7b666b`;

    try {
      const resp = await fetch(URL);
      if (resp.ok) {
        const parsebody = await resp.json();
        dispatch({ type: "ADD_PARSEBODY_WEATHER", payload: parsebody });
        // console.log(parsebody);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        if (await isLoadingWeather) {
          fetchWeather();
        }
        if (await isLoadingNextDays) {
          fetchNextDays();
        }
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
