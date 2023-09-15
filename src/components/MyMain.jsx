import { Container } from "react-bootstrap";
import MyJumbotron from "./MyJumbotron";
import MyCardsList from "./MyCardsList";
import MyNavbar from "./MyNavbar";

const MyMain = () => {
  return (
    <Container fluid>
      <MyNavbar />
      <MyJumbotron />
      <MyCardsList />
    </Container>
  );
};
export default MyMain;
