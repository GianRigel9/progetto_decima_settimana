import MyCard from "./MyCard";

const MyCardsList = () => {
  return (
    <div
      className="d-flex p-5 rounded-5 gap-5"
      style={{ backgroundColor: "#32383d" }}
    >
      <MyCard day="Thursday" />
      <MyCard day="Friday" />
      <MyCard day="Saturday" />
    </div>
  );
};
export default MyCardsList;
