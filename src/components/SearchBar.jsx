import { Button, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Form className="d-flex" style={{ height: "fit-content" }}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};
export default SearchBar;
