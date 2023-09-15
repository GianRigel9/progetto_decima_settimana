import { useDispatch, useSelector } from "react-redux";
import MyCard from "./MyCard";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

const MyCardsList = () => {
  const dispatch = useDispatch();
  //   const city = useSelector((state) => state.city);
  const isLoadingHTML2 = useSelector((state) => state.isLoadingHTML2);
  const isLoadingNextDays = useSelector((state) => state.isLoadingNextDays);
  const search = useSelector((state) => state.search);
  const nextdays = useSelector((state) => state.nextdays);

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${search[0].lat}&lon=${search[0].lon}&appid=ed5e7a68fb01f97b272448336b7b666b`;

    // const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=20&appid=ed5e7a68fb01f97b272448336b7b666b`;

    if (isLoadingNextDays) {
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
    }
  };

  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingNextDays]);
  return (
    <>
      {isLoadingHTML2 ? (
        <div className="d-flex justify-content-center p-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <div
          className="d-flex p-5 rounded-5 justify-content-between"
          style={{ backgroundColor: "#32383d" }}
        >
          {console.log("next days", nextdays)}
          <MyCard
            day="Saturday"
            data={nextdays.list.find((elem) => elem === 1694872800)}
          />
          <MyCard
            day="Sunday"
            data={nextdays.list.find((elem) => elem === 1694959200)}
          />
          <MyCard
            day="Monday"
            data={nextdays.list.find((elem) => elem === 1695045600)}
          />
          <MyCard
            day="Tuesday"
            data={nextdays.list.find((elem) => elem === 1695132000)}
          />
          <MyCard
            day="Wednesday"
            data={nextdays.list.find((elem) => elem === 1695218400)}
          />
        </div>
      )}
    </>
  );
};
export default MyCardsList;
