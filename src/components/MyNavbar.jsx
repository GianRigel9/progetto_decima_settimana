import SearchBar from "./SearchBar";

const MyNavbar = (props) => {
  const oggi = new Date().toLocaleDateString("it-IT");
  // console.log("fhslfjbalsjbf", location);
  return (
    <>
      <div className="fc my-navbar">
        <div>
          <div>
            <h1>{props.location}</h1>
            <p className="p-style ">
              <span>Oggi è il:</span> {oggi}
            </p>
          </div>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
