const MyCard = (props) => {
  return (
    <div className="d-flex flex-column gap-3 align-items-center">
      {console.log("le mie props mycard", props)}
      <h5>{props.day}</h5>
      <div
        style={{
          width: "150px",
          height: "100px",
          backgroundColor: "blue",
          textAlign: "center",
        }}
      >
        {/* <img src="" alt="" /> */}
        immagine
      </div>
      <p>23°C-30°C</p>
      <p>Overcast Clouds</p>
    </div>
  );
};
export default MyCard;
