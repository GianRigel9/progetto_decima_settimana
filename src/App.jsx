import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import MyMain from "./components/MyMain";

function App() {
  return (
    <Container
      fluid
      className="pt-5 text-bg-dark "
      style={{ minHeight: "100vh" }}
    >
      <MyNavbar />
      <MyMain />
    </Container>
  );
}

export default App;
