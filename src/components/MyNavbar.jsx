import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";

const MyNavbar = () => {
  const city = useSelector((state) => state.city);
  const oggi = new Date().toLocaleDateString("it-IT");
  return (
    <div className="d-flex flex-column px-5 gap-1">
      <div className="d-flex align-items-center justify-content-between">
        <h1 style={{ fontSize: "4.5rem", fontWeight: "bold" }}>{city}</h1>
        <SearchBar />
      </div>
      <p className="ms-2 p-style ">{oggi}</p>
    </div>
  );
};

export default MyNavbar;
