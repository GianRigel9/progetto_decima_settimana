import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import MyMain from "./components/MyMain";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyFirstPage from "./components/MyFirstPage";

function App() {
  return (
    <BrowserRouter>
      <Container
        fluid
        className="pt-5 text-bg-dark "
        style={{ height: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<MyFirstPage />} />
          <Route path="/main" element={<MyMain />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
