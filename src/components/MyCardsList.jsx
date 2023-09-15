import { useSelector } from "react-redux";
import MyCard from "./MyCard";
import { Spinner } from "react-bootstrap";

const MyCardsList = () => {
  //   const city = useSelector((state) => state.city);
  const isLoadingHTML2 = useSelector((state) => state.isLoadingHTML2);
  const nextdays = useSelector((state) => state.nextdays);

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
          <MyCard day="Saturday" />
          <MyCard day="Sunday" />
          <MyCard day="Monday" />
          <MyCard day="Tuesday" />
          <MyCard day="Wednesday" />
        </div>
      )}
    </>
  );
};
export default MyCardsList;
