import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyFirstPage = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_QUERY", payload: query });
    navigate("/main");
  };
  return (
    <div
      className="d-flex flex-column justify-content-center"
      style={{ width: "100%", height: "100%", padding: "50px" }}
    >
      <div className="d-flex flex-column align-items-center mb-4">
        <h1 style={{ fontSize: "10rem", fontWeight: "300" }}>Welcome</h1>
        <p style={{ fontSize: "3rem", fontWeight: "300" }}>
          Write the name of your locality
        </p>
      </div>
      <Form
        className="d-flex pb-5"
        style={{ height: "fit-content" }}
        onSubmit={handleSubmit}
      >
        <Form.Control
          type="Search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{ paddingBlock: "10px", fontSize: "1.3rem" }}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Form>
    </div>
  );
};

export default MyFirstPage;
