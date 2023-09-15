import { Container } from "react-bootstrap";
import MyJumbotron from "./MyJumbotron";
import MyCardsList from "./MyCardsList";

const MyMain = () => {
  return (
    <Container fluid>
      <MyJumbotron />
      <MyCardsList />
    </Container>
  );
};
export default MyMain;
