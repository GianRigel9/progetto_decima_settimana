import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "./MyCard";
import { useEffect } from "react";

const MyCardsList = (props) => {
  const isLoadingHTML = useSelector(
    (state) => state.userInteraction.isLoadingHTML
  );
  console.log("props", props);
  const dispatch = useDispatch();

  const myArr = [];
  for (let i = 0; i < props.forecast5days.length; i++) {
    const time = props.forecast5days[i].dt_txt.split(" ");
    const main = props.forecast5days[i].main;
    const weather = props.forecast5days[i].weather;
    if (time[1] === "12:00:00") {
      myArr.push({
        day: props.forecast5days[i].dt_txt,
        main: main,
        weather: weather,
      });
    }
  }
  console.log("myArr", myArr);

  useEffect(() => {
    myArr.length !== 0
      ? dispatch({ type: "ADD_FIVE_DAYS", payload: myArr })
      : console.log("No");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoadingHTML ? (
        <div className="d-flex justify-content-center p-5">
          <Spinner animation="border" variant="light" />
        </div>
      ) : (
        <div className="my-cards-list">
          <MyCard data={myArr[0]} />
          <MyCard data={myArr[1]} />
          <MyCard data={myArr[2]} />
          <MyCard data={myArr[3]} />
          <MyCard data={myArr[4]} />
        </div>
      )}
    </>
  );
};

export default MyCardsList;
