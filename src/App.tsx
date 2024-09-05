import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SpaceNav from "./components/SpaceNav";
import Article from "./components/Article";
import { Container } from "react-bootstrap";
import SpaceFooter from "./components/SpaceFooter";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <SpaceNav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Container>
      <SpaceFooter />
    </BrowserRouter>
  );
}

export default App;
