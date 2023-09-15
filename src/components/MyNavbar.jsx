import SearchBar from "./SearchBar";

const MyNavbar = () => {
  return (
    <div className="d-flex flex-column px-5 gap-1">
      <div className="d-flex align-items-center justify-content-between">
        <h1 style={{ fontSize: "4.5rem", fontWeight: "bold" }}>Toronto</h1>
        <SearchBar />
      </div>
      <p className="ms-1 p-style ">Data di oggi</p>
    </div>
  );
};

export default MyNavbar;
